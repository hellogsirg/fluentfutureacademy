import { Award, GraduationCap, Briefcase, School, Clock } from 'lucide-react';

export default function FounderProfile() {
  const credentials = [
    { icon: GraduationCap, text: "Master's in Healthcare Management" },
    { icon: GraduationCap, text: "Master's in International Business — University of Toulouse" },
    { icon: Briefcase, text: 'Retail and Marketing Experience' },
    { icon: School, text: 'Elementary School Founder since 2017' }
  ];

  return (
    <section id="founder" className="py-28 bg-gradient-to-br from-gray-900 via-blue-900 to-emerald-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-emerald-600/20 backdrop-blur-sm rounded-full border border-emerald-400/30 mb-4">
            <span className="text-emerald-300 text-sm font-bold">EXECUTIVE LEADERSHIP</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Meet Our Founder</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 mb-8">
              <div className="w-40 h-40 flex-shrink-0 rounded-2xl overflow-hidden ring-4 ring-emerald-400/30 ring-offset-4 ring-offset-transparent shadow-2xl">
                <img
                  src="/hanane_benalia_image_copy.jpeg"
                  alt="Hanane Benalia — Founder & Lead Instructor"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: '50% 20%' }}
                />
              </div>
              <div className="text-center lg:text-left">
                <h3 className="text-3xl font-bold mb-1">Hanane Benalia</h3>
                <p className="text-emerald-300 text-xl mb-3">Founder & Lead Instructor</p>
                <div className="h-1 w-20 bg-gradient-to-r from-emerald-500 to-blue-600 mx-auto lg:mx-0"></div>
              </div>
            </div>

            <div className="mb-8">
              <h4 className="text-sm font-bold uppercase tracking-wider text-emerald-400/80 mb-4">Credentials</h4>
              <div className="space-y-3">
                {credentials.map((cred, index) => {
                  const Icon = cred.icon;
                  return (
                    <div key={index} className="flex items-center gap-3 bg-white/5 rounded-lg px-4 py-3 border border-white/5">
                      <Icon className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                      <span className="text-blue-100 text-base leading-snug">{cred.text}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="border-t border-white/10 pt-6">
              <p className="text-blue-100 text-lg leading-relaxed">
                Founded by a healthcare language professional with 16 years of experience, Fluent Future Academy bridges the gap between learning and real-world professional access.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h4 className="text-2xl font-bold mb-8">Impact & Achievements</h4>
              <div className="flex flex-col items-center justify-center py-4">
                <div className="relative mb-6">
                  <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-emerald-500 to-blue-600 flex items-center justify-center shadow-lg shadow-emerald-500/20">
                    <Clock className="w-12 h-12 text-white" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-emerald-400 rounded-full flex items-center justify-center">
                    <Award className="w-3.5 h-3.5 text-gray-900" />
                  </div>
                </div>
                <div className="text-5xl font-bold text-emerald-300 mb-2">16</div>
                <p className="text-blue-200 text-base font-medium tracking-wide uppercase">Years Experience</p>
                <div className="mt-6 w-16 h-1 bg-gradient-to-r from-emerald-500 to-blue-600 rounded-full"></div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-emerald-600/20 to-blue-600/20 backdrop-blur-sm rounded-2xl p-6 border border-emerald-400/20">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                  <Award className="w-5 h-5 text-emerald-400" />
                </div>
                <p className="text-blue-100 text-sm leading-relaxed">
                  Dedicated to bridging the gap between learning and real-world professional access through expert-led training.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
