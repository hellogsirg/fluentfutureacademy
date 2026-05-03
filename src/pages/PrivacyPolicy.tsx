import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Lock, Eye, Users, FileText, Mail, ChevronRight, AlertCircle } from 'lucide-react';
import { setSEO } from '../utils/seo';

export default function PrivacyPolicy() {
  useEffect(() => {
    setSEO({
      title: 'Privacy Policy',
      description: 'Fluent Future Academy privacy policy — how we collect, use, and protect your personal information in compliance with FERPA and applicable laws.',
      canonicalPath: '/privacy-policy',
    });
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      id: 'information-collected',
      icon: FileText,
      title: 'Information We Collect',
      color: 'from-blue-600 to-blue-700',
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            Fluent Future Academy collects personal information necessary to provide high-quality educational services. The categories of information we collect include:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            {[
              { label: 'Personal Identifiers', items: ['Full legal name', 'Date of birth', 'Government-issued ID numbers', 'Signature'] },
              { label: 'Contact Details', items: ['Email address', 'Phone number', 'Mailing address', 'Emergency contacts'] },
              { label: 'Academic Records', items: ['Enrollment history', 'Course registrations', 'Assessment results', 'Certificates earned'] },
            ].map((group) => (
              <div key={group.label} className="bg-blue-50 rounded-xl p-5 border border-blue-100">
                <h4 className="font-bold text-blue-900 mb-3 text-sm uppercase tracking-wide">{group.label}</h4>
                <ul className="space-y-2">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-start space-x-2 text-gray-700 text-sm">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      id: 'how-we-use',
      icon: Eye,
      title: 'How We Use Your Information',
      color: 'from-emerald-500 to-emerald-600',
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            All personal information collected is used exclusively for legitimate educational and administrative purposes. Specifically, we use your data to:
          </p>
          <div className="space-y-3">
            {[
              { title: 'Manage Student Records', desc: 'Maintain accurate and up-to-date academic and enrollment records throughout your time at the Academy.' },
              { title: 'Provide Academic & Administrative Services', desc: 'Process registrations, issue certificates, track academic progress, and administer program requirements.' },
              { title: 'Communicate With Students', desc: 'Send important updates about courses, schedules, policy changes, and opportunities relevant to your enrollment.' },
              { title: 'Ensure Program Quality', desc: 'Use aggregated, de-identified data to improve our curriculum and educational offerings.' },
            ].map((use) => (
              <div key={use.title} className="flex items-start space-x-4 p-4 bg-emerald-50 rounded-xl border border-emerald-100">
                <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <ChevronRight className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">{use.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{use.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      id: 'data-sharing',
      icon: Users,
      title: 'Data Sharing & Disclosure',
      color: 'from-teal-600 to-teal-700',
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            Fluent Future Academy does not sell, rent, or trade your personal information. We share data only under the following limited circumstances:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-teal-50 rounded-xl p-5 border border-teal-100">
              <h4 className="font-bold text-teal-900 mb-3 flex items-center space-x-2">
                <Users className="w-5 h-5 text-teal-600" />
                <span>Authorized Staff</span>
              </h4>
              <p className="text-gray-700 text-sm leading-relaxed">
                Faculty, administrative personnel, and support staff who require access to fulfill their institutional responsibilities and provide you with services. All staff are bound by confidentiality obligations.
              </p>
            </div>
            <div className="bg-teal-50 rounded-xl p-5 border border-teal-100">
              <h4 className="font-bold text-teal-900 mb-3 flex items-center space-x-2">
                <FileText className="w-5 h-5 text-teal-600" />
                <span>Legal Requirements</span>
              </h4>
              <p className="text-gray-700 text-sm leading-relaxed">
                When required to comply with applicable federal or state laws, valid court orders, subpoenas, or lawful requests from government authorities. We disclose only the minimum information required.
              </p>
            </div>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex items-start space-x-3">
            <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <p className="text-amber-800 text-sm leading-relaxed">
              We do not share your personal data with third-party marketing companies, advertisers, or any commercial entities outside of the above circumstances.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 'data-security',
      icon: Lock,
      title: 'Data Security',
      color: 'from-blue-700 to-blue-800',
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            Protecting your personal information is a priority. We implement administrative, technical, and physical safeguards designed to protect against unauthorized access, alteration, disclosure, or destruction of your data.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { label: 'Administrative', items: ['Staff training on data privacy', 'Access control policies', 'Regular policy reviews', 'Incident response procedures'] },
              { label: 'Technical', items: ['Encrypted data transmission', 'Secure storage systems', 'Access logging and monitoring', 'Regular security assessments'] },
              { label: 'Physical', items: ['Secured facility access', 'Locked file storage', 'Screen privacy protections', 'Secure document disposal'] },
            ].map((measure) => (
              <div key={measure.label} className="bg-gray-50 rounded-xl p-5 border border-gray-200">
                <h4 className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wide">{measure.label} Measures</h4>
                <ul className="space-y-2">
                  {measure.items.map((item) => (
                    <li key={item} className="flex items-start space-x-2 text-gray-700 text-sm">
                      <Shield className="w-3.5 h-3.5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      id: 'student-rights',
      icon: Shield,
      title: 'Your Rights Under FERPA',
      color: 'from-emerald-600 to-teal-600',
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            Under the <strong className="text-gray-900">Family Educational Rights and Privacy Act (FERPA)</strong>, you hold specific rights regarding your educational records. Fluent Future Academy is committed to upholding these rights in full.
          </p>
          <div className="space-y-3">
            {[
              { right: 'Right to Access', desc: 'You have the right to inspect and review your educational records maintained by the Academy within 45 days of making a written request.' },
              { right: 'Right to Correct', desc: 'You may request an amendment to records you believe are inaccurate, misleading, or in violation of your privacy rights.' },
              { right: 'Right to Consent', desc: 'You have the right to provide or withhold consent for disclosures of your personally identifiable information, except where FERPA authorizes disclosure without consent.' },
              { right: 'Right to File a Complaint', desc: 'You have the right to file a complaint with the U.S. Department of Education\'s Family Policy Compliance Office if you believe your FERPA rights have been violated.' },
            ].map((item, index) => (
              <div key={item.right} className="flex items-start space-x-4 p-5 bg-white rounded-xl border-2 border-gray-100 hover:border-emerald-200 transition-colors shadow-sm">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">
                  {index + 1}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">{item.right}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-emerald-900 text-white overflow-hidden pt-24 pb-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4wNSIvPjwvZz48L3N2Zz4=')] opacity-40" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <nav className="flex items-center space-x-2 text-sm mb-8">
            <Link to="/" className="text-blue-200 hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4 text-blue-300" />
            <span className="text-white font-medium">Privacy Policy</span>
          </nav>
          <div className="flex items-start space-x-6 mb-6">
            <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center flex-shrink-0">
              <Shield className="w-8 h-8 text-emerald-300" />
            </div>
            <div>
              <div className="inline-block px-4 py-1.5 bg-emerald-600/20 backdrop-blur-sm rounded-full border border-emerald-400/30 mb-3">
                <span className="text-emerald-300 text-sm font-semibold">LEGAL</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold leading-tight">Privacy Policy</h1>
            </div>
          </div>
          <p className="text-xl text-blue-100 leading-relaxed max-w-3xl ml-22">
            Fluent Future Academy is committed to protecting the privacy and security of your personal information. This policy explains how we collect, use, and safeguard your data.
          </p>
          <div className="mt-6 flex items-center space-x-2 text-blue-200 text-sm ml-22">
            <span>Last updated: April 2026</span>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="bg-gray-50 border-b border-gray-200 py-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-4">On this page</p>
          <div className="flex flex-wrap gap-3">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="inline-flex items-center space-x-2 px-4 py-2 bg-white rounded-lg border border-gray-200 hover:border-emerald-400 hover:text-emerald-700 text-gray-700 text-sm font-medium transition-all duration-200 shadow-sm hover:shadow"
              >
                <s.icon className="w-4 h-4" />
                <span>{s.title}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-28 space-y-16">
        {sections.map((section) => (
          <section key={section.id} id={section.id} className="scroll-mt-24">
            <div className="flex items-center space-x-4 mb-8">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${section.color} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                <section.icon className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">{section.title}</h2>
            </div>
            <div className="ml-16">{section.content}</div>
          </section>
        ))}

        {/* Contact */}
        <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-emerald-900 rounded-2xl p-10 text-white">
          <div className="flex items-start space-x-4 mb-6">
            <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center flex-shrink-0">
              <Mail className="w-6 h-6 text-emerald-300" />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-2">Privacy Questions or Requests</h2>
              <p className="text-blue-100 leading-relaxed max-w-2xl">
                If you have questions about this Privacy Policy, wish to exercise your rights under FERPA, or need to report a concern regarding your personal data, please contact us directly.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ml-16">
            <a href="mailto:hben@fluentfutureacademy.org" className="flex items-center space-x-3 p-4 bg-white/10 rounded-xl border border-white/20 hover:bg-white/20 transition-colors">
              <Mail className="w-5 h-5 text-emerald-300 flex-shrink-0" />
              <div>
                <p className="text-xs text-blue-200 font-medium">Email</p>
                <p className="text-white font-semibold">hben@fluentfutureacademy.org</p>
              </div>
            </a>
            <a href="tel:7819854558" className="flex items-center space-x-3 p-4 bg-white/10 rounded-xl border border-white/20 hover:bg-white/20 transition-colors">
              <FileText className="w-5 h-5 text-emerald-300 flex-shrink-0" />
              <div>
                <p className="text-xs text-blue-200 font-medium">Phone</p>
                <p className="text-white font-semibold">781-985-4558</p>
              </div>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
