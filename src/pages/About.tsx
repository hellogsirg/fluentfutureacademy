import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Globe, Award, Users, TrendingUp, HeartPulse, GraduationCap, Building2, Briefcase, Target, MessageCircle, Clock, School, CheckCircle2, Stethoscope, Handshake, Zap } from 'lucide-react';
import { updatePageTitle, updateMetaDescription } from '../utils/seo';

export default function About() {
  useEffect(() => {
    updatePageTitle('About Us');
    updateMetaDescription('Professional training led by Hanane Benalia. Empowering individuals with language and communication skills for healthcare, education, business, and international environments.');
  }, []);

  const impactAreas = [
    {
      icon: HeartPulse,
      title: 'Patient Safety',
      description: 'Bridging language gaps in healthcare to ensure accurate communication and better health outcomes'
    },
    {
      icon: Globe,
      title: 'Cultural Connection',
      description: 'Breaking down cultural barriers to foster understanding and collaboration across diverse communities'
    },
    {
      icon: TrendingUp,
      title: 'Workforce Integration',
      description: 'Supporting U.S. workforce integration by equipping professionals with essential language and communication skills'
    },
    {
      icon: Users,
      title: 'Community Empowerment',
      description: 'Empowering individuals to access services, advocate for themselves, and participate fully in society'
    }
  ];

  const graduateWorkplaces = [
    {
      icon: HeartPulse,
      name: 'Hospitals & Healthcare Systems',
      examples: ['Medical Interpreters', 'Patient Services', 'Language Access Coordinators']
    },
    {
      icon: GraduationCap,
      name: 'Schools & Universities',
      examples: ['Educational Interpreters', 'ESL Coordinators', 'Community Liaisons']
    },
    {
      icon: Building2,
      name: 'International Organizations',
      examples: ['Global Communication Specialists', 'Cross-Cultural Consultants', 'NGO Program Coordinators']
    },
    {
      icon: Briefcase,
      name: 'Corporate & Business',
      examples: ['International Business Development', 'Global Operations', 'Corporate Training Specialists']
    }
  ];

  const coreValues = [
    {
      title: 'Excellence',
      description: 'We maintain the highest standards in language education and professional certification'
    },
    {
      title: 'Accessibility',
      description: 'Quality education should be accessible to all who seek to advance their language skills'
    },
    {
      title: 'Cultural Respect',
      description: 'We honor diverse perspectives and foster inclusive learning environments'
    },
    {
      title: 'Real-World Impact',
      description: 'Our programs are designed to create immediate, practical value in professional settings'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-emerald-900 text-white overflow-hidden pt-24 pb-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4wNSIvPjwvZz48L3N2Zz4=')] opacity-40"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block px-4 py-2 bg-emerald-600/20 backdrop-blur-sm rounded-full border border-emerald-400/30 mb-6">
              <span className="text-emerald-300 text-sm font-semibold">WHO WE ARE</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-8">
              We Are More Than a Language School
            </h1>

            <p className="text-xl sm:text-2xl text-blue-100 leading-relaxed mb-12">
              We are a professional integration center that helps individuals thrive in real-world environments.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-8 h-8 text-emerald-300" />
                </div>
                <h3 className="text-emerald-100 font-bold text-lg mb-2">Navigate the US Workplace</h3>
                <p className="text-blue-100 text-sm leading-relaxed">Build the skills to succeed in American professional culture</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-8 h-8 text-emerald-300" />
                </div>
                <h3 className="text-emerald-100 font-bold text-lg mb-2">Communicate Effectively</h3>
                <p className="text-blue-100 text-sm leading-relaxed">In healthcare, corporate, and international settings</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-8 h-8 text-emerald-300" />
                </div>
                <h3 className="text-emerald-100 font-bold text-lg mb-2">Build Real-World Confidence</h3>
                <p className="text-blue-100 text-sm leading-relaxed">Perform with confidence in professional environments</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-8">
            <Target className="w-12 h-12 text-emerald-600 mr-4" />
            <h2 className="text-4xl font-bold text-gray-900">Our Mission</h2>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-emerald-50 rounded-2xl p-8 lg:p-12 border-l-4 border-emerald-600">
            <p className="text-xl text-gray-700 leading-relaxed text-center">
              Our mission is to empower individuals with the language and communication skills needed to succeed in healthcare, education, business, and international environments.
            </p>
          </div>
        </div>
      </section>

      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-emerald-600/10 backdrop-blur-sm rounded-full border border-emerald-400/30 mb-6">
              <span className="text-emerald-600 text-sm font-semibold">REAL-WORLD IMPACT</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Where Our Work Makes a Difference</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Transforming lives and communities through professional language and communication skills</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-1 border border-gray-100">
              <div className="h-2 bg-gradient-to-r from-emerald-500 to-emerald-600"></div>
              <div className="p-8">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Stethoscope className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Healthcare Communication</h3>
                <p className="text-gray-600 leading-relaxed">Improving communication in healthcare settings to ensure patient safety</p>
              </div>
            </div>

            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-1 border border-gray-100">
              <div className="h-2 bg-gradient-to-r from-blue-600 to-blue-700"></div>
              <div className="p-8">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Handshake className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Workplace Integration</h3>
                <p className="text-gray-600 leading-relaxed">Helping multilingual individuals thrive in US workplaces</p>
              </div>
            </div>

            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-1 border border-gray-100">
              <div className="h-2 bg-gradient-to-r from-teal-600 to-teal-700"></div>
              <div className="p-8">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-teal-600 to-teal-700 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">High-Stakes Confidence</h3>
                <p className="text-gray-600 leading-relaxed">Building confidence in high-stakes professional environments</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-emerald-600/10 rounded-full border border-emerald-600/20 mb-4">
              <span className="text-emerald-700 text-sm font-bold">LEADERSHIP</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Meet the Founder</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="order-2 lg:order-1">
              <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-10 border-2 border-gray-100">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-8">
                  <div className="w-44 h-44 flex-shrink-0 rounded-2xl overflow-hidden shadow-xl ring-4 ring-emerald-500/20 ring-offset-2">
                    <img
                      src="/hanane_benalia_image_copy.jpeg"
                      alt="Hanane Benalia — Founder & Lead Instructor"
                      className="w-full h-full object-cover"
                      style={{ objectPosition: '50% 20%' }}
                    />
                  </div>
                  <div className="text-center sm:text-left">
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">Hanane Benalia</h3>
                    <p className="text-emerald-600 text-xl font-semibold mb-4">Founder & Lead Instructor</p>
                    <div className="h-1 w-20 bg-gradient-to-r from-emerald-500 to-blue-600 mx-auto sm:mx-0"></div>
                  </div>
                </div>

                <div className="mb-8">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-emerald-600/70 mb-4">Credentials</h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 bg-gray-50 rounded-lg px-4 py-3 border border-gray-100">
                      <GraduationCap className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                      <span className="text-gray-700 text-base leading-snug">Master's in Healthcare Management</span>
                    </div>
                    <div className="flex items-center gap-3 bg-gray-50 rounded-lg px-4 py-3 border border-gray-100">
                      <GraduationCap className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                      <span className="text-gray-700 text-base leading-snug">Master's in International Business — University of Toulouse</span>
                    </div>
                    <div className="flex items-center gap-3 bg-gray-50 rounded-lg px-4 py-3 border border-gray-100">
                      <Briefcase className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                      <span className="text-gray-700 text-base leading-snug">Retail and Marketing Experience</span>
                    </div>
                    <div className="flex items-center gap-3 bg-gray-50 rounded-lg px-4 py-3 border border-gray-100">
                      <School className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                      <span className="text-gray-700 text-base leading-snug">Elementary School Founder since 2017</span>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-100 pt-6">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Founded by a healthcare language professional with 16 years of experience, Fluent Future Academy bridges the gap between learning and real-world professional access.
                  </p>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 space-y-6">
              <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-gray-100">
                <h4 className="text-2xl font-bold text-gray-900 mb-8">Leadership Impact</h4>
                <div className="flex flex-col items-center justify-center py-4">
                  <div className="relative mb-6">
                    <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-emerald-500 to-blue-600 flex items-center justify-center shadow-lg shadow-emerald-500/20">
                      <Clock className="w-12 h-12 text-white" />
                    </div>
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-emerald-400 rounded-full flex items-center justify-center">
                      <Award className="w-3.5 h-3.5 text-white" />
                    </div>
                  </div>
                  <div className="text-5xl font-bold text-emerald-600 mb-2">16</div>
                  <p className="text-gray-600 text-base font-medium tracking-wide uppercase">Years Experience</p>
                  <div className="mt-6 w-16 h-1 bg-gradient-to-r from-emerald-500 to-blue-600 rounded-full"></div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-2xl p-6 border border-emerald-200">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center flex-shrink-0">
                    <Award className="w-5 h-5 text-emerald-600" />
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Dedicated to bridging the gap between learning and real-world professional access through expert-led training.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center">
            <div className="mb-8 flex justify-center">
              <img
                src="/education_image_.jpeg"
                alt="Education 2.0 Conference Excellence In Education Award"
                className="max-w-full h-auto rounded-lg shadow-xl"
                style={{ maxWidth: '500px', width: '100%' }}
              />
            </div>

            <div className="w-20 h-1 bg-gradient-to-r from-amber-300 to-amber-500 rounded-full mb-6"></div>

            <p className="text-center italic text-gray-600 text-base leading-relaxed max-w-lg">
              Recognized at the Education 2.0 Conference (2026) for entrepreneurial leadership and innovation in education, reflecting a founder journey that began in 2017.
            </p>
          </div>
        </div>
      </section>

      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Our Impact & Outcomes</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Making a meaningful difference in communities, healthcare systems, and organizations worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {impactAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-xl bg-gradient-to-br from-blue-600 to-emerald-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{area.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{area.description}</p>
                </div>
              );
            })}
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-emerald-50 rounded-2xl p-8 lg:p-12 border-2 border-emerald-600/20">
            <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">Where Our Graduates Work</h3>
            <p className="text-lg text-gray-700 text-center mb-12 max-w-3xl mx-auto leading-relaxed">
              Our graduates are currently working in hospitals, schools, and international organizations.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {graduateWorkplaces.map((workplace, index) => {
                const Icon = workplace.icon;
                return (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                    <div className="w-14 h-14 mx-auto mb-4 rounded-lg bg-gradient-to-br from-emerald-500 to-blue-600 flex items-center justify-center">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-3 text-center">{workplace.name}</h4>
                    <ul className="space-y-2">
                      {workplace.examples.map((example, exIndex) => (
                        <li key={exIndex} className="text-sm text-gray-600 text-center">{example}</li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-emerald-600/10 backdrop-blur-sm rounded-full border border-emerald-400/30 mb-6">
              <span className="text-emerald-600 text-sm font-semibold">PROFESSIONAL AFFILIATIONS</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Proudly Associated With</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Committed to professional standards and excellence</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="rounded-2xl p-8 border-2 border-yellow-500 bg-gradient-to-br from-blue-900 to-blue-800 flex flex-col items-center justify-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-32 h-32 mb-6 flex items-center justify-center bg-white rounded-xl p-4">
                <img
                  src="https://www.atanet.org/wp-content/uploads/2019/11/ata_logo@1x.png"
                  alt="ATA Logo"
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <h3 className="text-white text-xl font-bold text-center mb-2">ATA Member</h3>
              <p className="text-blue-200 text-center text-sm">American Translators Association</p>
            </div>

            <div className="rounded-2xl p-8 border-2 border-white bg-gradient-to-br from-blue-900 to-blue-800 flex flex-col items-center justify-center hover:shadow-xl transition-shadow duration-300">
              <div className="w-32 h-32 mb-6 flex items-center justify-center bg-white rounded-xl p-4">
                <img
                  src="https://cdn.wildapricot.com/171859/Resources/Pictures/neta-logo-859x672.png?version=1405702567000"
                  alt="NETA Logo"
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <h3 className="text-white text-xl font-bold text-center mb-2">NETA Member</h3>
              <p className="text-blue-200 text-center text-sm">New England Translators Association</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coreValues.map((value, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-emerald-600">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-700 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-gray-900 via-blue-900 to-emerald-900 text-white py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Future?</h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Join hundreds of professionals who have advanced their careers through our comprehensive language and communication training programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/programs"
              className="inline-flex items-center justify-center px-8 py-4 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-all duration-200 font-semibold text-lg shadow-2xl hover:shadow-emerald-600/50 hover:-translate-y-1 w-full sm:w-auto"
            >
              Explore Programs
            </Link>
            <Link
              to="/"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg hover:bg-white/20 transition-all duration-200 font-semibold text-lg border border-white/30 w-full sm:w-auto"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <a
        href="https://wa.me/17819854558"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 bg-emerald-600 rounded-full shadow-2xl flex items-center justify-center hover:bg-emerald-700 transition-all duration-200 hover:scale-110 z-50 group"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 text-white" />
        <span className="absolute right-full mr-3 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap">
          Chat with us
        </span>
      </a>
    </div>
  );
}
