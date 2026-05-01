import { useState } from 'react';
import { Briefcase } from 'lucide-react';
import TeacherApplicationForm from '../components/TeacherApplicationForm';
import OtherPositionsForm from '../components/OtherPositionsForm';

export default function TeacherApplication() {
  const [activeTab, setActiveTab] = useState<'teaching' | 'other'>('teaching');

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-4">
            <Briefcase size={40} className="text-emerald-400" />
            <h1 className="text-4xl md:text-5xl font-bold">Careers</h1>
          </div>
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
            <p className="text-white text-lg leading-relaxed">
              Join our team and help shape the future of language education. Whether you are a passionate instructor
              or a skilled professional in another area, we would love to hear from you.
            </p>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white border-b border-gray-200 sticky top-20 z-10">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex gap-0">
            <button
              onClick={() => setActiveTab('teaching')}
              className={`px-8 py-4 text-base font-semibold transition-all duration-200 border-b-2 -mb-px ${
                activeTab === 'teaching'
                  ? 'border-emerald-600 text-emerald-700'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Teaching Positions
            </button>
            <button
              onClick={() => setActiveTab('other')}
              className={`px-8 py-4 text-base font-semibold transition-all duration-200 border-b-2 -mb-px ${
                activeTab === 'other'
                  ? 'border-emerald-600 text-emerald-700'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Other Positions
            </button>
          </div>
        </div>
      </div>

      {/* Tab Content */}
      <div className="py-28">
        {activeTab === 'teaching' ? (
          <TeacherApplicationForm />
        ) : (
          <OtherPositionsForm />
        )}
      </div>

      {/* Footer Info */}
      <div className="bg-gray-100 border-t border-gray-200 py-28">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Quick Review</h3>
              <p className="text-gray-600">We typically review applications within 5-7 business days.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Interview Process</h3>
              <p className="text-gray-600">Selected candidates will be invited for a preselection interview.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Questions?</h3>
              <p className="text-gray-600">Contact us at <a href="mailto:fluentfutureacademy.org" className="text-emerald-600 hover:text-emerald-700 font-semibold">fluentfutureacademy.org</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
