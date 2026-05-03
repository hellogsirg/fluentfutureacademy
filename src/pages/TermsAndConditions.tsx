import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  FileText,
  MonitorPlay,
  CreditCard,
  CalendarCheck,
  UserCheck,
  ShieldAlert,
  Wifi,
  Scale,
  Globe,
  RefreshCw,
  ChevronRight,
  Info,
  Shield,
} from 'lucide-react';
import { setSEO } from '../utils/seo';

export default function TermsAndConditions() {
  useEffect(() => {
    setSEO({
      title: 'Terms & Conditions',
      description: 'Fluent Future Academy terms and conditions — enrollment agreement, program delivery, payment, attendance, code of conduct, and liability policies.',
      canonicalPath: '/terms-and-conditions',
    });
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      id: 'introduction',
      icon: FileText,
      title: 'Introduction',
      color: 'from-blue-600 to-blue-700',
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            Welcome to Fluent Future Academy. These Terms and Conditions govern your enrollment in and access to all programs, courses, and services offered by Fluent Future Academy LLC (the "Academy," "we," "us," or "our").
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 flex items-start space-x-3">
            <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <p className="text-blue-800 text-sm leading-relaxed">
              By enrolling in any Academy program or accessing any Academy service, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions in their entirety. If you do not agree with any part of these terms, you must not enroll in or access our programs or services.
            </p>
          </div>
          <p className="text-gray-700 leading-relaxed">
            These terms apply to all students, prospective students, corporate clients, and any other individuals who interact with the Academy's educational offerings, platforms, or personnel.
          </p>
        </div>
      ),
    },
    {
      id: 'program-delivery',
      icon: MonitorPlay,
      title: 'Program Delivery',
      color: 'from-emerald-500 to-emerald-600',
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            Fluent Future Academy delivers its programs through a blended learning model designed to maximize flexibility and effectiveness for all students.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                label: 'AI-Powered Learning',
                desc: 'Interactive, self-paced modules powered by adaptive learning technology to personalize your educational experience.',
              },
              {
                label: 'Live Virtual Sessions',
                desc: 'Scheduled instructor-led sessions conducted via secure online conferencing platforms for real-time instruction and feedback.',
              },
              {
                label: 'In-Person Components',
                desc: 'Where applicable, select programs include in-person sessions at designated locations. Availability varies by program.',
              },
            ].map((item) => (
              <div key={item.label} className="bg-emerald-50 rounded-xl p-5 border border-emerald-100">
                <h4 className="font-bold text-emerald-900 mb-2 text-sm uppercase tracking-wide">{item.label}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="space-y-3 mt-2">
            <p className="text-gray-700 font-semibold">The Academy reserves the right to:</p>
            {[
              'Modify program content, materials, and schedules at any time to maintain quality and relevance.',
              'Replace scheduled in-person sessions with virtual alternatives when circumstances require, including but not limited to inclement weather, facility issues, or public health considerations.',
              'Update or migrate to new learning platforms with reasonable advance notice to enrolled students.',
              'Adjust session timing or sequence to accommodate instructor availability or program improvements.',
            ].map((item, i) => (
              <div key={i} className="flex items-start space-x-3 p-3 bg-white rounded-lg border border-gray-100">
                <div className="w-6 h-6 rounded-full bg-emerald-600 flex items-center justify-center flex-shrink-0 text-white font-bold text-xs mt-0.5">
                  {i + 1}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      id: 'enrollment-payment',
      icon: CreditCard,
      title: 'Enrollment & Payment',
      color: 'from-blue-700 to-blue-800',
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            Enrollment in any Academy program is confirmed only upon receipt of the required payment. To secure your place in a program, full tuition or an approved initial payment must be received before the program's start date.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
              <h4 className="font-bold text-blue-900 mb-3">Payment Plans</h4>
              <p className="text-gray-700 text-sm leading-relaxed mb-3">
                Where a payment plan has been agreed upon, all installments must be paid on or before their scheduled due dates. Students are responsible for ensuring payments are made on time, regardless of personal circumstances.
              </p>
              <p className="text-gray-700 text-sm leading-relaxed">
                Failure to adhere to an approved payment plan constitutes a breach of this agreement.
              </p>
            </div>
            <div className="bg-red-50 rounded-xl p-6 border border-red-100">
              <h4 className="font-bold text-red-900 mb-3">Consequences of Non-Payment</h4>
              <ul className="space-y-2">
                {[
                  'Immediate suspension of access to all program materials and platforms',
                  'Removal from the program without eligibility for a refund',
                  'Non-issuance or withholding of completion certificates',
                  'Referral to collections for outstanding balances',
                ].map((item, i) => (
                  <li key={i} className="flex items-start space-x-2 text-sm text-gray-700">
                    <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-1.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex items-start space-x-3">
            <Info className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <p className="text-amber-800 text-sm leading-relaxed">
              For information about refunds upon withdrawal, please refer to our{' '}
              <Link to="/refund-policy" className="font-semibold underline hover:text-amber-900 transition-colors">
                Refund Policy
              </Link>
              .
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 'attendance-participation',
      icon: CalendarCheck,
      title: 'Attendance & Participation',
      color: 'from-teal-600 to-teal-700',
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            Active attendance and participation are essential to the academic integrity of our programs and are required of all enrolled students.
          </p>
          <div className="space-y-3">
            {[
              {
                title: 'Attendance Requirements',
                desc: 'Students are required to attend all scheduled live sessions, workshops, and any mandatory program components. Minimum attendance thresholds may apply and will be communicated at enrollment.',
              },
              {
                title: 'Missed Sessions',
                desc: 'The Academy does not guarantee that missed sessions will be rescheduled or made available for individual make-up. Students who miss sessions are responsible for obtaining any covered material through available resources.',
              },
              {
                title: 'Session Recordings',
                desc: 'Where session recordings are provided by the Academy, they are made available exclusively for the personal, non-commercial review of enrolled students. Recordings may not be downloaded, copied, shared, distributed, or published in any form.',
              },
              {
                title: 'Impact on Certification',
                desc: 'Failure to meet attendance requirements may result in ineligibility for program completion certificates, regardless of payment status.',
              },
            ].map((item, i) => (
              <div key={i} className="flex items-start space-x-4 p-5 bg-white rounded-xl border-2 border-gray-100 hover:border-teal-200 transition-colors shadow-sm">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">
                  {i + 1}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      id: 'instructor-model',
      icon: UserCheck,
      title: 'Instructor Model',
      color: 'from-blue-600 to-blue-700',
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            Fluent Future Academy is committed to delivering high-quality instruction through experienced, qualified educators. The following policies govern our instructor model.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                label: 'Independent Instructors',
                desc: 'Some programs are delivered in whole or in part by independent contractor instructors who are not employees of the Academy.',
                color: 'bg-blue-50 border-blue-100',
                textColor: 'text-blue-900',
              },
              {
                label: 'Quality Assurance',
                desc: 'The Academy vets and oversees all instructors to ensure consistent delivery of curriculum and adherence to our academic standards.',
                color: 'bg-emerald-50 border-emerald-100',
                textColor: 'text-emerald-900',
              },
              {
                label: 'Instructor Changes',
                desc: 'The Academy does not guarantee assignment to a specific instructor. Changes to assigned instructors due to availability, staffing, or other factors are not grounds for a refund or program withdrawal.',
                color: 'bg-teal-50 border-teal-100',
                textColor: 'text-teal-900',
              },
            ].map((item) => (
              <div key={item.label} className={`rounded-xl p-5 border ${item.color}`}>
                <h4 className={`font-bold mb-2 text-sm uppercase tracking-wide ${item.textColor}`}>{item.label}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      id: 'code-of-conduct',
      icon: ShieldAlert,
      title: 'Code of Conduct',
      color: 'from-emerald-600 to-teal-600',
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            Fluent Future Academy is committed to maintaining a professional, inclusive, and respectful learning environment for all students and staff. All enrolled students are expected to uphold the following standards of conduct.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-emerald-50 rounded-xl p-6 border border-emerald-100">
              <h4 className="font-bold text-emerald-900 mb-3">Expected Conduct</h4>
              <ul className="space-y-2">
                {[
                  'Communicate respectfully with instructors, staff, and fellow students at all times',
                  'Participate in sessions and activities in a professional and constructive manner',
                  'Refrain from any behavior that disrupts the learning environment',
                  'Treat all program materials and intellectual property with integrity',
                  'Comply with all Academy policies, platform rules, and instructor directives',
                ].map((item, i) => (
                  <li key={i} className="flex items-start space-x-2 text-sm text-gray-700">
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-1.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-red-50 rounded-xl p-6 border border-red-100">
              <h4 className="font-bold text-red-900 mb-3">Consequences of Violations</h4>
              <ul className="space-y-2">
                {[
                  'Immediate removal from the program without eligibility for a refund',
                  'Denial of re-enrollment in any future Academy program',
                  'Formal written notice of termination of the student agreement',
                  'Legal action where conduct constitutes harassment, defamation, or other actionable behavior',
                ].map((item, i) => (
                  <li key={i} className="flex items-start space-x-2 text-sm text-gray-700">
                    <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-1.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 flex items-start space-x-3">
            <Info className="w-5 h-5 text-gray-500 flex-shrink-0 mt-0.5" />
            <p className="text-gray-600 text-sm leading-relaxed">
              The Academy reserves sole discretion in determining what constitutes a violation of this Code of Conduct and in determining the appropriate consequence. Decisions regarding conduct violations are final.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 'technology-access',
      icon: Wifi,
      title: 'Technology & Access',
      color: 'from-blue-500 to-blue-600',
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            Participation in Academy programs requires access to appropriate technology and a stable internet connection. Students are solely responsible for ensuring they meet all technical requirements prior to and throughout their enrollment.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
              <h4 className="font-bold text-blue-900 mb-3">Student Responsibilities</h4>
              <ul className="space-y-2">
                {[
                  'Maintain a stable, reliable internet connection sufficient for video conferencing',
                  'Ensure access to a compatible device (laptop, desktop, or tablet) with required software installed',
                  'Install and maintain any platform applications or browser extensions specified by the Academy',
                  'Resolve personal technical issues promptly to avoid disruption to your learning progress',
                ].map((item, i) => (
                  <li key={i} className="flex items-start space-x-2 text-sm text-gray-700">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <h4 className="font-bold text-gray-900 mb-3">Academy Limitations</h4>
              <ul className="space-y-2">
                {[
                  'The Academy is not responsible for technical failures occurring on the student\'s end, including connectivity issues, device malfunctions, or software incompatibilities',
                  'Platform outages or service interruptions caused by third-party providers are outside the Academy\'s control and do not constitute grounds for refund',
                  'The Academy will make reasonable efforts to communicate platform changes and provide technical guidance where possible',
                ].map((item, i) => (
                  <li key={i} className="flex items-start space-x-2 text-sm text-gray-700">
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-1.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'limitation-of-liability',
      icon: Scale,
      title: 'Limitation of Liability',
      color: 'from-blue-700 to-blue-800',
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            To the fullest extent permitted by applicable law, Fluent Future Academy expressly disclaims liability for the following:
          </p>
          <div className="space-y-3">
            {[
              {
                title: 'Learning Outcomes',
                desc: 'The Academy does not guarantee any specific learning outcomes, language proficiency levels, or academic results for any individual student. Outcomes depend on numerous factors, including individual effort, prior knowledge, and consistent participation.',
              },
              {
                title: 'Career & Certification Results',
                desc: 'Completion of an Academy program does not guarantee employment, career advancement, salary increases, or eligibility for any external professional certification or licensing examination. The Academy\'s certificates are issued based on program completion and do not constitute licensure.',
              },
              {
                title: 'Indirect & Consequential Damages',
                desc: 'The Academy shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your enrollment or use of Academy services, including but not limited to lost income, lost opportunities, or reputational harm.',
              },
              {
                title: '"As Is" Provision',
                desc: 'All Academy programs, materials, platforms, and services are provided on an "as is" and "as available" basis, without warranties of any kind, either express or implied, including but not limited to implied warranties of merchantability or fitness for a particular purpose.',
              },
            ].map((item, i) => (
              <div key={i} className="flex items-start space-x-4 p-5 bg-white rounded-xl border-2 border-gray-100 hover:border-blue-200 transition-colors shadow-sm">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">
                  {i + 1}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-gray-900 rounded-xl p-5 text-white">
            <p className="text-sm leading-relaxed text-gray-300">
              <span className="font-bold text-white">Maximum Liability:</span> In no event shall the Academy's total aggregate liability to any student exceed the total amount of tuition actually paid by that student for the specific program giving rise to the claim.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 'governing-law',
      icon: Globe,
      title: 'Governing Law',
      color: 'from-teal-600 to-emerald-600',
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            These Terms and Conditions and any disputes arising out of or related to your enrollment with Fluent Future Academy shall be governed by and construed in accordance with the laws of the <strong className="text-gray-900">Commonwealth of Massachusetts, United States of America</strong>, without regard to its conflict of law provisions.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-teal-50 rounded-xl p-6 border border-teal-100">
              <h4 className="font-bold text-teal-900 mb-3">Jurisdiction</h4>
              <p className="text-gray-700 text-sm leading-relaxed">
                Any legal action or proceeding arising under these Terms shall be brought exclusively in the state or federal courts located in Massachusetts. By enrolling, you consent to the personal jurisdiction and venue of such courts.
              </p>
            </div>
            <div className="bg-emerald-50 rounded-xl p-6 border border-emerald-100">
              <h4 className="font-bold text-emerald-900 mb-3">Dispute Resolution</h4>
              <p className="text-gray-700 text-sm leading-relaxed">
                Before initiating any legal proceeding, we encourage students to contact us directly to attempt to resolve any dispute informally. Many concerns can be resolved quickly through open communication with our administrative team.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'updates-to-terms',
      icon: RefreshCw,
      title: 'Updates to These Terms',
      color: 'from-blue-600 to-emerald-600',
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            Fluent Future Academy reserves the right to modify, update, or replace these Terms and Conditions at any time. Updates may be made to reflect changes in our programs, applicable laws, or operational practices.
          </p>
          <div className="space-y-3">
            {[
              {
                title: 'Notice of Changes',
                desc: 'Where practicable, the Academy will provide enrolled students with reasonable notice of material changes to these Terms via email or a notice posted to the student platform.',
              },
              {
                title: 'Continued Use Equals Acceptance',
                desc: 'Your continued enrollment in or use of any Academy program or service following the posting of updated Terms constitutes your acceptance of the revised Terms in full.',
              },
              {
                title: 'Reviewing Updates',
                desc: 'Students are encouraged to review these Terms periodically. The most current version will always be available on this page and will supersede all prior versions.',
              },
            ].map((item, i) => (
              <div key={i} className="flex items-start space-x-4 p-5 bg-white rounded-xl border-2 border-gray-100 hover:border-emerald-200 transition-colors shadow-sm">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-600 to-emerald-500 flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">
                  {i + 1}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 flex items-start space-x-3">
            <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <p className="text-blue-800 text-sm leading-relaxed">
              These Terms and Conditions are effective as of April 2026 and supersede all prior versions. If you have any questions about these terms, please contact us at{' '}
              <a href="mailto:hben@fluentfutureacademy.org" className="font-semibold underline hover:text-blue-900 transition-colors">
                hben@fluentfutureacademy.org
              </a>
              .
            </p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-emerald-900 text-white overflow-hidden pt-24 pb-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoODB2ODBIMHoiLz48cGF0aCBkPSJNMjAgMjBoNDB2NDBIMjB6IiBzdHJva2U9IiNmZmYiIHN0cm9rZS1vcGFjaXR5PSIuMDMiLz48L2c+PC9zdmc+')] opacity-30" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <nav className="flex items-center space-x-2 text-sm mb-8">
            <Link to="/" className="text-blue-200 hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4 text-blue-300" />
            <span className="text-white font-medium">Terms &amp; Conditions</span>
          </nav>
          <div className="flex items-start space-x-6 mb-6">
            <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center flex-shrink-0">
              <FileText className="w-8 h-8 text-emerald-300" />
            </div>
            <div>
              <div className="inline-block px-4 py-1.5 bg-emerald-600/20 backdrop-blur-sm rounded-full border border-emerald-400/30 mb-3">
                <span className="text-emerald-300 text-sm font-semibold">LEGAL</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold leading-tight">Terms &amp; Conditions</h1>
            </div>
          </div>
          <p className="text-xl text-blue-100 leading-relaxed max-w-3xl ml-22">
            These Terms and Conditions govern your enrollment in and access to all Fluent Future Academy programs, courses, and services. Please read them carefully before enrolling.
          </p>
          <div className="mt-6 ml-22">
            <div className="inline-flex items-center space-x-2 bg-amber-500/20 border border-amber-400/30 rounded-xl px-4 py-3">
              <Info className="w-5 h-5 text-amber-300 flex-shrink-0" />
              <p className="text-amber-100 text-sm">
                By enrolling in any Academy program, you agree to be bound by these Terms and Conditions in full.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="bg-gray-50 border-b border-gray-200 py-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-4">On this page</p>
          <div className="flex flex-wrap gap-3">
            {sections.map((s, index) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="inline-flex items-center space-x-2 px-4 py-2 bg-white rounded-lg border border-gray-200 hover:border-emerald-400 hover:text-emerald-700 text-gray-700 text-sm font-medium transition-all duration-200 shadow-sm hover:shadow"
              >
                <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold flex items-center justify-center flex-shrink-0">
                  {index + 1}
                </span>
                <s.icon className="w-4 h-4" />
                <span>{s.title}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-28 space-y-16">
        {sections.map((section, index) => (
          <section key={section.id} id={section.id} className="scroll-mt-24">
            <div className="flex items-center space-x-4 mb-8">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${section.color} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                <section.icon className="w-6 h-6 text-white" />
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">
                  Section {index + 1}
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">{section.title}</h2>
              </div>
            </div>
            <div className="ml-16">{section.content}</div>
          </section>
        ))}

        {/* Cross-link footer row */}
        <section className="bg-gradient-to-br from-gray-900 via-blue-900 to-emerald-900 rounded-2xl p-10 text-white">
          <div className="flex items-start space-x-4 mb-8">
            <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center flex-shrink-0">
              <FileText className="w-6 h-6 text-emerald-300" />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-2">Questions or Concerns?</h2>
              <p className="text-blue-100 leading-relaxed max-w-2xl">
                If you have questions about these Terms and Conditions or wish to discuss your enrollment agreement, our team is ready to help.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ml-16 mb-10">
            <a
              href="mailto:hben@fluentfutureacademy.org"
              className="flex items-center space-x-3 p-4 bg-white/10 rounded-xl border border-white/20 hover:bg-white/20 transition-colors"
            >
              <FileText className="w-5 h-5 text-emerald-300 flex-shrink-0" />
              <div>
                <p className="text-xs text-blue-200 font-medium">Email</p>
                <p className="text-white font-semibold">hben@fluentfutureacademy.org</p>
              </div>
            </a>
            <a
              href="tel:7819854558"
              className="flex items-center space-x-3 p-4 bg-white/10 rounded-xl border border-white/20 hover:bg-white/20 transition-colors"
            >
              <Globe className="w-5 h-5 text-emerald-300 flex-shrink-0" />
              <div>
                <p className="text-xs text-blue-200 font-medium">Phone</p>
                <p className="text-white font-semibold">781-985-4558</p>
              </div>
            </a>
          </div>

          {/* Related policies */}
          <div className="border-t border-white/10 pt-8 ml-16">
            <p className="text-blue-200 text-sm font-semibold uppercase tracking-wide mb-4">Related Policies</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/privacy-policy"
                className="inline-flex items-center space-x-3 px-5 py-3 bg-white/10 rounded-xl border border-white/20 hover:bg-white/20 transition-colors group"
              >
                <Shield className="w-5 h-5 text-emerald-300 flex-shrink-0" />
                <div>
                  <p className="text-white font-semibold group-hover:text-emerald-300 transition-colors">Privacy Policy</p>
                  <p className="text-blue-200 text-xs">How we collect and protect your data</p>
                </div>
                <ChevronRight className="w-4 h-4 text-blue-300 group-hover:text-white transition-colors ml-auto" />
              </Link>
              <Link
                to="/refund-policy"
                className="inline-flex items-center space-x-3 px-5 py-3 bg-white/10 rounded-xl border border-white/20 hover:bg-white/20 transition-colors group"
              >
                <Scale className="w-5 h-5 text-emerald-300 flex-shrink-0" />
                <div>
                  <p className="text-white font-semibold group-hover:text-emerald-300 transition-colors">Refund Policy</p>
                  <p className="text-blue-200 text-xs">Tuition refund schedule and procedures</p>
                </div>
                <ChevronRight className="w-4 h-4 text-blue-300 group-hover:text-white transition-colors ml-auto" />
              </Link>
            </div>
          </div>
          <p className="mt-6 ml-16 text-blue-200 text-sm">
            These Terms and Conditions are effective as of April 2026. The most current version will always be available on this page.
          </p>
        </section>
      </div>
    </div>
  );
}

