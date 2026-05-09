import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, ShieldCheck } from 'lucide-react';
import { useEnrollmentSession } from '../contexts/EnrollmentSessionContext';

interface ConsentModalProps {
  isOpen: boolean;
  onClose: () => void;
  programTitle: string;
  programId: string;
  programPath: string;
  checkoutUrl: string;
}

export default function ConsentModal({
  isOpen,
  onClose,
  programTitle,
  programId,
  programPath,
  checkoutUrl,
}: ConsentModalProps) {
  const { startSession, cancelSession, completeSession, isActive, programId: activeProgramId } =
    useEnrollmentSession();

  const [agreedTerms, setAgreedTerms] = useState(false);
  const [agreedPrivacy, setAgreedPrivacy] = useState(false);
  const [agreedRefund, setAgreedRefund] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setAgreedTerms(false);
      setAgreedPrivacy(false);
      setAgreedRefund(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const allAgreed = agreedTerms && agreedPrivacy && agreedRefund;

  const ensureSession = () => {
    if (!isActive || activeProgramId !== programId) {
      startSession(programId, programPath);
    }
  };

  const handlePolicyClick = () => {
    // Start the persistent timer/session when navigating to a policy page
    ensureSession();
  };

  const handleCancel = () => {
    cancelSession();
    onClose();
  };

  const handleProceed = () => {
    if (!allAgreed) return;
    completeSession();
    onClose();
    window.open(checkoutUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-[55] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-gradient-to-r from-blue-900 to-emerald-900 text-white p-6 rounded-t-2xl flex items-start justify-between gap-4">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-lg bg-white/15 flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Confirm & Enroll</h2>
              <p className="text-blue-100 text-sm mt-1">{programTitle}</p>
            </div>
          </div>
          <button
            onClick={handleCancel}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors flex-shrink-0"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-5">
          <p className="text-gray-700">
            Before you proceed to checkout, please review and accept our policies.
          </p>

          <div className="space-y-4">
            <label className="flex items-start gap-3 p-4 border-2 border-gray-200 rounded-lg hover:border-emerald-400 transition-colors cursor-pointer">
              <input
                type="checkbox"
                checked={agreedTerms}
                onChange={(e) => setAgreedTerms(e.target.checked)}
                className="mt-1 w-5 h-5 accent-emerald-600 flex-shrink-0"
              />
              <span className="text-gray-700 text-sm">
                I have read and agree to the{' '}
                <Link
                  to="/terms-and-conditions"
                  onClick={handlePolicyClick}
                  className="text-emerald-700 font-semibold underline hover:text-emerald-800"
                >
                  Terms & Conditions
                </Link>
                .
              </span>
            </label>

            <label className="flex items-start gap-3 p-4 border-2 border-gray-200 rounded-lg hover:border-emerald-400 transition-colors cursor-pointer">
              <input
                type="checkbox"
                checked={agreedPrivacy}
                onChange={(e) => setAgreedPrivacy(e.target.checked)}
                className="mt-1 w-5 h-5 accent-emerald-600 flex-shrink-0"
              />
              <span className="text-gray-700 text-sm">
                I have read and agree to the{' '}
                <Link
                  to="/privacy-policy"
                  onClick={handlePolicyClick}
                  className="text-emerald-700 font-semibold underline hover:text-emerald-800"
                >
                  Privacy Policy
                </Link>
                .
              </span>
            </label>

            <label className="flex items-start gap-3 p-4 border-2 border-gray-200 rounded-lg hover:border-emerald-400 transition-colors cursor-pointer">
              <input
                type="checkbox"
                checked={agreedRefund}
                onChange={(e) => setAgreedRefund(e.target.checked)}
                className="mt-1 w-5 h-5 accent-emerald-600 flex-shrink-0"
              />
              <span className="text-gray-700 text-sm">
                I have read and agree to the{' '}
                <Link
                  to="/refund-policy"
                  onClick={handlePolicyClick}
                  className="text-emerald-700 font-semibold underline hover:text-emerald-800"
                >
                  Refund Policy
                </Link>
                .
              </span>
            </label>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <button
              onClick={handleCancel}
              className="flex-1 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-semibold"
            >
              Cancel
            </button>
            <button
              onClick={handleProceed}
              disabled={!allAgreed}
              className="flex-1 px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors font-bold shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-emerald-600"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
