import { useNavigate } from 'react-router-dom';
import { useEnrollmentSession } from '../contexts/EnrollmentSessionContext';

function formatTime(seconds: number) {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${s.toString().padStart(2, '0')}`;
}

export default function EnrollmentTimerBar() {
  const navigate = useNavigate();
  const { isActive, secondsLeft, programPath, setModalShouldOpen } = useEnrollmentSession();

  if (!isActive) return null;

  const expired = secondsLeft <= 0;

  const handleReturn = () => {
    setModalShouldOpen(true);
    if (programPath) navigate(programPath);
  };

  return (
    <div
      role="region"
      aria-label="Enrollment session timer"
      className={`fixed top-0 left-0 right-0 z-[60] bg-blue-950 text-white shadow-md ${
        expired ? 'animate-pulse' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex items-center justify-between gap-3 flex-wrap">
        <div className="flex items-center gap-2 text-sm sm:text-base font-medium min-w-0">
          <span className="hidden sm:inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="truncate">
            {expired ? 'Return to complete your enrollment' : 'Your enrollment session is active'}
          </span>
        </div>

        <div className="flex items-center gap-2 text-sm sm:text-base">
          <span className="text-blue-200 hidden sm:inline">Time left:</span>
          <span
            className={`font-bold tabular-nums text-lg sm:text-xl ${
              expired ? 'text-red-400' : 'text-emerald-400'
            }`}
            aria-live="polite"
          >
            {formatTime(secondsLeft)}
          </span>
        </div>

        <button
          onClick={handleReturn}
          className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-md text-sm sm:text-base transition-colors shadow"
        >
          Return to Enrollment
        </button>
      </div>
    </div>
  );
}
