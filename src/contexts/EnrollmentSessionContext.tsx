import { createContext, useContext, useEffect, useRef, useState, ReactNode, useCallback } from 'react';

const SESSION_DURATION = 600; // 10 minutes in seconds
const STORAGE_KEY = 'enrollment_session_v1';

interface SessionState {
  isActive: boolean;
  secondsLeft: number;
  programId: string | null;
  programPath: string | null;
  modalShouldOpen: boolean;
  startedAt: number | null;
}

interface EnrollmentSessionContextValue extends SessionState {
  startSession: (programId: string, programPath: string) => void;
  cancelSession: () => void;
  completeSession: () => void;
  setModalShouldOpen: (open: boolean) => void;
}

const defaultState: SessionState = {
  isActive: false,
  secondsLeft: SESSION_DURATION,
  programId: null,
  programPath: null,
  modalShouldOpen: false,
  startedAt: null,
};

const EnrollmentSessionContext = createContext<EnrollmentSessionContextValue | null>(null);

function loadFromStorage(): SessionState {
  if (typeof window === 'undefined') return defaultState;
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultState;
    const parsed = JSON.parse(raw) as SessionState;
    if (!parsed.isActive || !parsed.startedAt) return defaultState;
    const elapsed = Math.floor((Date.now() - parsed.startedAt) / 1000);
    const secondsLeft = Math.max(0, SESSION_DURATION - elapsed);
    return { ...parsed, secondsLeft };
  } catch {
    return defaultState;
  }
}

export function EnrollmentSessionProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<SessionState>(() => loadFromStorage());
  const intervalRef = useRef<number | null>(null);

  const persist = useCallback((next: SessionState) => {
    try {
      if (next.isActive) sessionStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      else sessionStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
  }, []);

  // Tick countdown
  useEffect(() => {
    if (!state.isActive || !state.startedAt) {
      if (intervalRef.current) {
        window.clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      return;
    }
    intervalRef.current = window.setInterval(() => {
      setState((prev) => {
        if (!prev.isActive || !prev.startedAt) return prev;
        const elapsed = Math.floor((Date.now() - prev.startedAt) / 1000);
        const secondsLeft = Math.max(0, SESSION_DURATION - elapsed);
        if (secondsLeft === prev.secondsLeft) return prev;
        return { ...prev, secondsLeft };
      });
    }, 1000);
    return () => {
      if (intervalRef.current) {
        window.clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [state.isActive, state.startedAt]);

  const startSession = useCallback(
    (programId: string, programPath: string) => {
      setState((prev) => {
        // If already active for same program, just keep it; ensure modalShouldOpen
        if (prev.isActive && prev.programId === programId) {
          const next = { ...prev, modalShouldOpen: true };
          persist(next);
          return next;
        }
        const next: SessionState = {
          isActive: true,
          secondsLeft: SESSION_DURATION,
          programId,
          programPath,
          modalShouldOpen: true,
          startedAt: Date.now(),
        };
        persist(next);
        return next;
      });
    },
    [persist]
  );

  const cancelSession = useCallback(() => {
    setState(() => {
      persist(defaultState);
      return defaultState;
    });
  }, [persist]);

  const completeSession = useCallback(() => {
    setState(() => {
      persist(defaultState);
      return defaultState;
    });
  }, [persist]);

  const setModalShouldOpen = useCallback(
    (open: boolean) => {
      setState((prev) => {
        if (!prev.isActive) return prev;
        const next = { ...prev, modalShouldOpen: open };
        persist(next);
        return next;
      });
    },
    [persist]
  );

  return (
    <EnrollmentSessionContext.Provider
      value={{ ...state, startSession, cancelSession, completeSession, setModalShouldOpen }}
    >
      {children}
    </EnrollmentSessionContext.Provider>
  );
}

export function useEnrollmentSession() {
  const ctx = useContext(EnrollmentSessionContext);
  if (!ctx) throw new Error('useEnrollmentSession must be used within EnrollmentSessionProvider');
  return ctx;
}
