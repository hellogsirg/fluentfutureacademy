import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Phone, Mail, MapPin, Linkedin, Facebook, Instagram, Twitter } from 'lucide-react';
import { TextHoverEffect, FooterBackgroundGradient } from './ui/hover-footer';
import ataLogo from '../assets/ata-logo.webp';

export default function Footer() {
  const { t } = useTranslation();

  const footerLinks = [
    {
      title: t('footer.navigation'),
      links: [
        { label: t('nav.home'), href: '/' },
        { label: t('nav.about'), href: '/about' },
        { label: t('nav.programs'), href: '/programs' },
        { label: t('nav.articles'), href: '/articles' },
      ],
    },
    {
      title: t('footer.offerings'),
      links: [
        { label: t('nav.interpreterTraining'), href: '/programs#interpreter' },
        { label: t('nav.eslSupport'), href: '/programs#esl' },
        { label: t('nav.professionalCommunication'), href: '/programs#communication' },
        { label: t('nav.foreignLanguages'), href: '/programs#languages' },
      ],
    },
  ];

  const contactInfo = [
    {
      icon: <Mail size={18} className="text-emerald-400" />,
      text: 'hben@fluentfutureacademy.org',
      href: 'mailto:hben@fluentfutureacademy.org',
    },
    {
      icon: <Phone size={18} className="text-emerald-400" />,
      text: '781-985-4558',
      href: 'tel:7819854558',
    },
    {
      icon: <MapPin size={18} className="text-emerald-400" />,
      text: 'Professional Education Center',
    },
  ];

  const businessEmails = [
    { label: 'Inquiries', email: 'inquiries@fluentfutureacademy.org' },
    { label: 'Admissions', email: 'admissions@fluentfutureacademy.org' },
    { label: 'Partnerships', email: 'partnerships@fluentfutureacademy.org' },
  ];

  const socialLinks = [
    { icon: <Facebook size={20} />, label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61588744832806&mibextid=wwXIfr&rdid=UopEZ84N3hxG2LeB&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1HhChiCZWH%2F%3Fmibextid%3DwwXIfr' },
    { icon: <Instagram size={20} />, label: 'Instagram', href: 'https://www.instagram.com/fluent_future_aca?igsh=MTZsc2tmdzN2OGRrcQ%3D%3D&utm_source=qr' },
    { icon: <Twitter size={20} />, label: 'Twitter', href: 'https://twitter.com' },
    { icon: <Linkedin size={20} />, label: 'LinkedIn', href: 'https://linkedin.com' },
  ];

  return (
    <footer className="bg-[#0F0F11] relative rounded-t-3xl overflow-hidden mt-8 text-gray-400">
      <div className="max-w-7xl mx-auto p-14 z-40 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 lg:gap-16 pb-12">
          <div className="flex flex-col space-y-4">
            <Link to="/" className="flex items-center">
              <img
                src="/fluent_future_academy_logo.jpeg"
                alt="Fluent Future Academy Logo"
                className="h-[72px] w-auto object-contain rounded-lg"
                style={{ mixBlendMode: 'screen' }}
                loading="lazy"
                decoding="async"
              />
            </Link>
            <p className="text-sm leading-relaxed">
              {t('footer.tagline')}
            </p>
          </div>

          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-white text-lg font-bold mb-6">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="hover:text-emerald-400 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="text-white text-lg font-semibold mb-6">
              {t('footer.contact')}
            </h4>
            <ul className="space-y-4">
              {contactInfo.map((item, i) => (
                <li key={i} className="flex items-center space-x-3">
                  {item.icon}
                  {item.href ? (
                    <a
                      href={item.href}
                      className="hover:text-emerald-400 transition-colors"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span className="hover:text-emerald-400 transition-colors">
                      {item.text}
                    </span>
                  )}
                </li>
              ))}
              <li className="border-t border-gray-600 pt-4 mt-4">
                <div className="space-y-3">
                  {businessEmails.map((item, i) => (
                    <div key={i} className="flex flex-col">
                      <span className="text-xs text-gray-500 mb-1 font-medium">{item.label}</span>
                      <a
                        href={`mailto:${item.email}`}
                        className="hover:text-emerald-400 transition-colors text-sm"
                      >
                        {item.email}
                      </a>
                    </div>
                  ))}
                </div>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-t border-gray-700 my-8" />

        <div className="py-8 mb-8">
          <h4 className="text-white text-lg font-bold mb-6 text-center">Professional Affiliations</h4>
          <div className="flex items-center justify-center">
            <div className="flex flex-col items-center">
              <div
                className="rounded-xl p-[3px] bg-gradient-to-br from-amber-300 via-yellow-500 to-amber-600 mb-3"
                style={{ boxShadow: '0 0 25px rgba(212, 175, 55, 0.45), 0 8px 20px -8px rgba(212, 175, 55, 0.35)' }}
              >
                <div className="rounded-lg p-[2px] bg-amber-50/80">
                  <div className="w-32 h-32 rounded-md p-3 flex items-center justify-center" style={{ backgroundColor: '#0f3460' }}>
                    <img
                      src={ataLogo}
                      alt="ATA - American Translators Association Logo"
                      className="max-w-full max-h-full object-contain"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </div>
              </div>
              <p className="text-gray-300 text-sm text-center font-semibold">ATA Member</p>
              <p className="text-gray-500 text-xs text-center">American Translators Association</p>
            </div>
          </div>
        </div>

        <hr className="border-t border-gray-700 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center text-sm space-y-4 md:space-y-0">
          <div className="flex space-x-6 text-gray-400">
            {socialLinks.map(({ icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="hover:text-emerald-400 transition-colors"
              >
                {icon}
              </a>
            ))}
          </div>

          <div className="flex flex-col md:flex-row items-center gap-3 md:gap-6 text-center">
            <div className="flex flex-wrap items-center gap-3">
              <Link to="/privacy-policy" className="hover:text-emerald-400 transition-colors text-gray-500 text-xs">
                Privacy Policy
              </Link>
              <span className="text-gray-700 text-xs">|</span>
              <Link to="/refund-policy" className="hover:text-emerald-400 transition-colors text-gray-500 text-xs">
                Refund Policy
              </Link>
              <span className="text-gray-700 text-xs">|</span>
              <Link to="/terms-and-conditions" className="hover:text-emerald-400 transition-colors text-gray-500 text-xs">
                Terms &amp; Conditions
              </Link>
            </div>
            <p className="text-gray-500 text-xs">
              {t('footer.copyright')}
            </p>
          </div>
        </div>
      </div>

      <div className="lg:flex hidden h-[30rem] -mt-52 -mb-36 pointer-events-none">
        <TextHoverEffect text="FLUENT" className="z-50" />
      </div>

      <FooterBackgroundGradient />
    </footer>
  );
}
