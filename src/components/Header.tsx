import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X, ChevronDown } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';



export default function Header() {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 shadow-sm ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-white/95 backdrop-blur-sm py-4'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center flex-shrink-0">
            <img
              src="/fluent_future_academy_logo.jpeg"
              alt="Fluent Future Academy Logo"
              className="h-[64px] w-auto object-contain"
              fetchPriority="high"
              decoding="async"
            />
          </Link>

          <nav className="hidden lg:flex items-center space-x-8 ml-16">
            <Link to="/" className="text-blue-900 hover:text-emerald-600 transition-colors font-medium relative group">
              {t('nav.home')}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-600 transition-all duration-200 group-hover:w-full"></span>
            </Link>

            <div className="relative group">
              <button className="flex items-center space-x-1 text-blue-900 hover:text-emerald-600 transition-colors font-medium relative">
                <span>{t('nav.programs')}</span>
                <ChevronDown className="w-4 h-4" />
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-600 transition-all duration-200 group-hover:w-full"></span>
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-gray-100">
                <div className="p-4 space-y-3">
                  <Link to="/programs#interpreter" className="block px-3 py-2 rounded-md hover:bg-gray-50 text-gray-700 hover:text-emerald-600 transition-colors">{t('nav.interpreterTraining')}</Link>
                  <Link to="/programs#esl" className="block px-3 py-2 rounded-md hover:bg-gray-50 text-gray-700 hover:text-emerald-600 transition-colors">{t('nav.eslSupport')}</Link>
                  <Link to="/programs#communication" className="block px-3 py-2 rounded-md hover:bg-gray-50 text-gray-700 hover:text-emerald-600 transition-colors">{t('nav.professionalCommunication')}</Link>
                  <Link to="/programs#languages" className="block px-3 py-2 rounded-md hover:bg-gray-50 text-gray-700 hover:text-emerald-600 transition-colors">{t('nav.foreignLanguages')}</Link>
                  <Link to="/programs" className="block px-3 py-2 rounded-md bg-emerald-50 text-emerald-700 hover:bg-emerald-100 transition-colors font-semibold">{t('nav.viewAllPrograms')}</Link>
                </div>
              </div>
            </div>

            <div className="relative group">
              <button className="flex items-center space-x-1 text-blue-900 hover:text-emerald-600 transition-colors font-medium relative">
                <span>{t('nav.services')}</span>
                <ChevronDown className="w-4 h-4" />
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-600 transition-all duration-200 group-hover:w-full"></span>
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-gray-100">
                <div className="p-4 space-y-3">
                  <Link to="/corporate" className="block px-3 py-2 rounded-md hover:bg-gray-50 text-gray-700 hover:text-emerald-600 transition-colors">{t('nav.corporateTraining')}</Link>
                  <a href="/#workshops" className="block px-3 py-2 rounded-md hover:bg-gray-50 text-gray-700 hover:text-emerald-600 transition-colors">{t('nav.workshopsEvents')}</a>
                </div>
              </div>
            </div>

            <Link to="/articles" className="text-blue-900 hover:text-emerald-600 transition-colors font-medium relative group">
              {t('nav.articles')}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-600 transition-all duration-200 group-hover:w-full"></span>
            </Link>
            <Link to="/about" className="text-blue-900 hover:text-emerald-600 transition-colors font-medium relative group">
              {t('nav.about')}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-600 transition-all duration-200 group-hover:w-full"></span>
            </Link>
            <Link to="/teacher-application" className="text-blue-900 hover:text-emerald-600 transition-colors font-medium relative group">
              Careers
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-600 transition-all duration-200 group-hover:w-full"></span>
            </Link>
          </nav>

          <div className="flex items-center space-x-3">
            <LanguageSwitcher />
            <a href="/#enroll" className="hidden sm:inline-flex items-center px-6 py-2.5 bg-emerald-600 text-white rounded-[2px] hover:bg-emerald-700 transition-all duration-200 font-semibold shadow-md hover:shadow-lg hover:-translate-y-0.5">
              {t('nav.enrollNow')}
            </a>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-emerald-600 hover:text-emerald-700 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 mt-4">
          <div className="px-4 py-4 space-y-4">
            <Link to="/" className="block text-gray-700 font-medium py-2 min-h-[44px] flex items-center">{t('nav.home')}</Link>

            <div>
              <button onClick={() => setActiveDropdown(activeDropdown === 'programs' ? null : 'programs')} className="flex items-center justify-between w-full text-gray-700 font-medium">
                <span>{t('nav.programs')}</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'programs' ? 'rotate-180' : ''}`} />
              </button>
              {activeDropdown === 'programs' && (
                <div className="mt-2 ml-4 space-y-2">
                  <Link to="/programs#interpreter" className="block py-2 text-gray-600 hover:text-emerald-600">{t('nav.interpreterTraining')}</Link>
                  <Link to="/programs#esl" className="block py-2 text-gray-600 hover:text-emerald-600">{t('nav.eslSupport')}</Link>
                  <Link to="/programs#communication" className="block py-2 text-gray-600 hover:text-emerald-600">{t('nav.professionalCommunication')}</Link>
                  <Link to="/programs#languages" className="block py-2 text-gray-600 hover:text-emerald-600">{t('nav.foreignLanguages')}</Link>
                  <Link to="/programs" className="block py-2 text-emerald-600 hover:text-emerald-700 font-semibold">{t('nav.viewAllPrograms')}</Link>
                </div>
              )}
            </div>

            <div>
              <button onClick={() => setActiveDropdown(activeDropdown === 'services' ? null : 'services')} className="flex items-center justify-between w-full text-gray-700 font-medium">
                <span>{t('nav.services')}</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'services' ? 'rotate-180' : ''}`} />
              </button>
              {activeDropdown === 'services' && (
                <div className="mt-2 ml-4 space-y-2">
                  <Link to="/corporate" className="block py-2 text-gray-600 hover:text-emerald-600">{t('nav.corporateTraining')}</Link>
                  <a href="/#workshops" className="block py-2 text-gray-600 hover:text-emerald-600">{t('nav.workshopsEvents')}</a>
                </div>
              )}
            </div>

            <Link to="/articles" className="block text-gray-700 font-medium py-2 min-h-[44px] flex items-center">{t('nav.articles')}</Link>
            <Link to="/about" className="block text-gray-700 font-medium py-2 min-h-[44px] flex items-center">{t('nav.about')}</Link>
            <Link to="/teacher-application" className="block text-gray-700 font-medium py-2 min-h-[44px] flex items-center">Careers</Link>
            <a href="/#enroll" className="block w-full text-center px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors font-semibold min-h-[44px] flex items-center justify-center">
              {t('nav.enrollNow')}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
