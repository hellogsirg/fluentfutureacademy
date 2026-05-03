import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { BookOpen, Globe, Users, Award, TrendingUp, Briefcase, MessageCircle, ChevronDown, Zap, Heart, Rocket, Target } from 'lucide-react';
import { lazy, Suspense } from 'react';
import RegistrationModal from '../components/RegistrationModal';
import LazySection from '../components/LazySection';
import { BackgroundPaths } from '../components/ui/background-paths';
import TypewriterEffect from '../components/ui/typewriter-effect';
import VaporizeTextCycle, { Tag } from '../components/ui/vapour-text-effect';
const CertificationShowcase = lazy(() => import('../components/CertificationShowcase'));
const FounderProfile = lazy(() => import('../components/FounderProfile'));
import { setSEO } from '../utils/seo';

export default function Home() {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setSEO({
      fullTitle: 'Fluent Future Academy | Professional Language & Interpreter Training',
      description: 'Empowering professionals through language, communication, and career integration. Expert ESL, interpreter training, and global communication programs in Massachusetts.',
      canonicalPath: '/',
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'EducationalOrganization',
        name: 'Fluent Future Academy LLC',
        url: window.location.origin,
        logo: `${window.location.origin}/fluent_future_academy_logo.jpeg`,
        email: 'hben@fluentfutureacademy.org',
        telephone: '+1-781-985-4558',
        address: {
          '@type': 'PostalAddress',
          addressRegion: 'Massachusetts',
          addressCountry: 'US',
        },
        contactPoint: [{
          '@type': 'ContactPoint',
          telephone: '+1-781-985-4558',
          email: 'hben@fluentfutureacademy.org',
          contactType: 'customer service',
          areaServed: 'US',
          availableLanguage: ['English', 'Spanish', 'French', 'Arabic', 'Mandarin', 'Portuguese'],
        }],
      },
    });
  }, []);
  const programs = [
    {
      titleKey: 'interpreterTitle',
      descKey: 'interpreterDesc',
      icon: BookOpen,
      color: 'from-emerald-500 to-emerald-600',
      link: '/programs#interpreter'
    },
    {
      titleKey: 'eslTitle',
      descKey: 'eslDesc',
      icon: Globe,
      color: 'from-blue-600 to-blue-700',
      link: '/programs#esl'
    },
    {
      titleKey: 'communicationTitle',
      descKey: 'communicationDesc',
      icon: Users,
      color: 'from-teal-600 to-teal-700',
      link: '/programs#professional-development'
    },
    {
      titleKey: 'languagesTitle',
      descKey: 'languagesDesc',
      icon: Award,
      color: 'from-blue-500 to-emerald-500',
      link: '/programs#foreign-languages'
    }
  ];

  return (
    <main className="pt-20">
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-emerald-900 text-white overflow-hidden">
        <BackgroundPaths />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 relative">
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-2 bg-emerald-600/20 backdrop-blur-sm rounded-full border border-emerald-400/30 mb-6">
              <span className="text-emerald-300 text-sm font-semibold">{t('hero.badge')}</span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 min-h-[110px] sm:min-h-[140px] lg:min-h-[170px]">
              <TypewriterEffect
                text={t('hero.title')}
                speed={30}
                className="text-white"
              />
            </h2>

            <div className="mb-10 h-[40px] sm:h-[50px] lg:h-[60px]">
              <VaporizeTextCycle
                texts={[t('hero.subtitle')]}
                font={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "20px",
                  fontWeight: 400
                }}
                color="rgb(191, 219, 254)"
                spread={5}
                density={5}
                animation={{
                  vaporizeDuration: 2.5,
                  fadeInDuration: 1.2,
                  waitDuration: 2.5
                }}
                direction="left-to-right"
                alignment="left"
                tag={Tag.P}
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg hover:bg-white/20 transition-all duration-200 font-semibold text-lg border border-white/30 w-full sm:w-auto"
              >
                {t('hero.bookConsultation')}
              </button>
              <Link to="/programs" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-900 transition-all duration-200 font-semibold text-lg w-full sm:w-auto">
                {t('hero.explorePrograms')}
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex items-start space-x-3">
                <div className="w-12 h-12 rounded-lg bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-emerald-300" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">{t('hero.careerGrowth')}</h3>
                  <p className="text-blue-200 text-sm">{t('hero.careerGrowthDesc')}</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-12 h-12 rounded-lg bg-teal-500/20 flex items-center justify-center flex-shrink-0">
                  <Globe className="w-6 h-6 text-teal-300" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">{t('hero.travelConfidence')}</h3>
                  <p className="text-blue-200 text-sm">{t('hero.travelConfidenceDesc')}</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-blue-300" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">{t('hero.crossCultural')}</h3>
                  <p className="text-blue-200 text-sm">{t('hero.crossCulturalDesc')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="programs" className="py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">{t('programs.title')}</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">{t('programs.subtitle')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <div key={index} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-1">
                <div className={`h-2 bg-gradient-to-r ${program.color}`}></div>
                <div className="p-8">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${program.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <program.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{t(`programs.${program.titleKey}`)}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed" dangerouslySetInnerHTML={{ __html: t(`programs.${program.descKey}`) }}></p>
                  <Link to={program.link} className="inline-flex items-center text-emerald-600 font-semibold hover:text-emerald-700 transition-colors">
                    {t('programs.learnMore')}
                    <ChevronDown className="w-4 h-4 ml-1 rotate-[-90deg]" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/programs" className="inline-flex items-center justify-center px-8 py-4 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-all duration-200 font-semibold text-lg shadow-lg shadow-emerald-600/30 hover:shadow-xl hover:shadow-emerald-600/40 hover:-translate-y-0.5 w-full sm:w-auto max-w-xs mx-auto sm:max-w-none">
              {t('programs.viewAll')}
            </Link>
          </div>
        </div>
      </section>

      <section id="who-it-is-for" className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-emerald-600/10 backdrop-blur-sm rounded-full border border-emerald-400/30 mb-6">
              <span className="text-emerald-600 text-sm font-semibold">WHO IT IS FOR</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Career Solutions for Professionals</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Tailored programs designed for diverse professionals seeking to advance their careers through language and communication skills</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-1 border border-gray-100">
              <div className="h-2 bg-gradient-to-r from-emerald-500 to-emerald-600"></div>
              <div className="p-8">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Bilingual Individuals</h3>
                <p className="text-gray-600 leading-relaxed">Seeking professional certification to validate their language skills</p>
              </div>
            </div>

            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-1 border border-gray-100">
              <div className="h-2 bg-gradient-to-r from-blue-600 to-blue-700"></div>
              <div className="p-8">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Briefcase className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Corporate Employees</h3>
                <p className="text-gray-600 leading-relaxed">Working in global environments who need advanced communication skills</p>
              </div>
            </div>

            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-1 border border-gray-100">
              <div className="h-2 bg-gradient-to-r from-teal-600 to-teal-700"></div>
              <div className="p-8">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-teal-600 to-teal-700 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Healthcare Workers</h3>
                <p className="text-gray-600 leading-relaxed">Who need to communicate effectively across language barriers</p>
              </div>
            </div>

            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-1 border border-gray-100">
              <div className="h-2 bg-gradient-to-r from-blue-500 to-emerald-500"></div>
              <div className="p-8">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-emerald-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Rocket className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Career Seekers</h3>
                <p className="text-gray-600 leading-relaxed">Looking to integrate language skills into professional growth</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="corporate" className="py-28 bg-gradient-to-br from-gray-900 via-blue-900 to-emerald-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoODB2ODBIMHoiLz48cGF0aCBkPSJNMjAgMjBoNDB2NDBIMjB6IiBzdHJva2U9IiNmZmYiIHN0cm9rZS1vcGFjaXR5PSIuMDMiLz48L2c+PC9zdmc+')] opacity-30"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center">
            <Briefcase className="w-16 h-16 text-emerald-400 mx-auto mb-6" />
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">{t('corporate.title')}</h2>
            <p className="text-xl text-blue-100 mb-10 leading-relaxed">
              {t('corporate.subtitle')}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-emerald-400 mb-2">40+</div>
                <p className="text-blue-200">{t('corporate.clients')}</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-emerald-400 mb-2">500+</div>
                <p className="text-blue-200">{t('corporate.professionals')}</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-emerald-400 mb-2">98%</div>
                <p className="text-blue-200">{t('corporate.satisfaction')}</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/corporate" className="inline-flex items-center justify-center px-8 py-4 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-all duration-200 font-semibold text-lg shadow-2xl hover:shadow-emerald-600/50 hover:-translate-y-1 w-full sm:w-auto">
                {t('corporate.exploreSolutions')}
              </Link>
              <a href="#corporate-proposal" className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg hover:bg-white/20 transition-all duration-200 font-semibold text-lg border border-white/30 w-full sm:w-auto">
                {t('corporate.requestProposal')}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Excellence in language education since founded by Hanane Benalia, MBA</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-emerald-50 hover:shadow-lg transition-shadow duration-300">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Expert Instruction</h3>
              <p className="text-gray-600 leading-relaxed">Learn from certified professionals with real-world experience in interpretation and global communication</p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-emerald-50 to-blue-50 hover:shadow-lg transition-shadow duration-300">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center">
                <Globe className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Flexible Learning</h3>
              <p className="text-gray-600 leading-relaxed">Choose from in-person, online, or hybrid formats that fit your schedule and learning style</p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-teal-50 to-blue-50 hover:shadow-lg transition-shadow duration-300">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-teal-600 to-teal-700 flex items-center justify-center">
                <TrendingUp className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Practical Focus</h3>
              <p className="text-gray-600 leading-relaxed">Apply skills immediately with hands-on training, real scenarios, and industry-relevant certification</p>
            </div>
          </div>
        </div>
      </section>

      <LazySection minHeight="600px">
        <Suspense fallback={null}>
          <CertificationShowcase />
        </Suspense>
      </LazySection>

      <LazySection minHeight="600px">
        <Suspense fallback={null}>
          <FounderProfile />
        </Suspense>
      </LazySection>

      <LazySection minHeight="500px">
        <section className="py-16 bg-white">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-block px-4 py-2 bg-emerald-600/20 backdrop-blur-sm rounded-full border border-emerald-400/30 mb-4">
                <span className="text-emerald-700 text-sm font-bold">AWARD & RECOGNITION</span>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center">
              <div className="mb-6 flex justify-center">
                <div
                  className="p-2 rounded-xl bg-gradient-to-br from-amber-300 via-yellow-500 to-amber-600 ring-1 ring-amber-200/70"
                  style={{
                    maxWidth: '400px',
                    width: '100%',
                    boxShadow: '0 0 30px rgba(212, 175, 55, 0.45), 0 10px 25px -5px rgba(180, 130, 20, 0.35)',
                  }}
                >
                  <div className="rounded-lg p-[2px] bg-amber-50/80">
                    <img
                      src="/education_image_.jpeg"
                      alt="Education 2.0 Conference Excellence In Education Award"
                      className="w-full h-auto rounded-md block"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </div>
              </div>

              <div className="w-16 h-1 bg-gradient-to-r from-amber-300 to-amber-500 rounded-full mb-6"></div>

              <p className="text-center italic text-gray-600 text-sm leading-relaxed max-w-lg">
                Recognized at the Education 2.0 Conference (2026) for entrepreneurial leadership and innovation in education, reflecting a founder journey that began in 2017.
              </p>
            </div>
          </div>
        </section>
      </LazySection>

      <a
        href="https://wa.me/17819854558"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 bg-emerald-600 rounded-full shadow-2xl flex items-center justify-center hover:bg-emerald-700 transition-all duration-200 hover:scale-110 z-50 group"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 text-white" />
        <span className="absolute right-full mr-3 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap">
          {t('whatsapp.chatWithUs')}
        </span>
      </a>

      <RegistrationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        programTitle="General Inquiry"
      />
    </main>
  );
}
