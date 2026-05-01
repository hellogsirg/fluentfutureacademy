import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { DollarSign, Calendar, AlertCircle, ChevronRight, Clock, FileText, TrendingDown, Info } from 'lucide-react';
import { updatePageTitle, updateMetaDescription } from '../utils/seo';

export default function RefundPolicy() {
  useEffect(() => {
    updatePageTitle('Refund Policy');
    updateMetaDescription('Fluent Future Academy tuition refund policy — understand refund eligibility, withdrawal timelines, non-refundable fees, and financial aid adjustments.');
    window.scrollTo(0, 0);
  }, []);

  const refundSchedule = [
    { period: 'Before program start', refund: '100%', label: 'Full Refund', color: 'bg-emerald-100 text-emerald-800 border-emerald-200', barColor: 'bg-emerald-500', barWidth: 'w-full' },
    { period: 'Within first week', refund: '80%', label: 'High Refund', color: 'bg-blue-100 text-blue-800 border-blue-200', barColor: 'bg-blue-500', barWidth: 'w-4/5' },
    { period: 'Within second week', refund: '60%', label: 'Partial Refund', color: 'bg-teal-100 text-teal-800 border-teal-200', barColor: 'bg-teal-500', barWidth: 'w-3/5' },
    { period: 'Week 3 – 25% of term', refund: '40%', label: 'Reduced Refund', color: 'bg-amber-100 text-amber-800 border-amber-200', barColor: 'bg-amber-500', barWidth: 'w-2/5' },
    { period: 'Week 4 – 50% of term', refund: '20%', label: 'Minimal Refund', color: 'bg-orange-100 text-orange-800 border-orange-200', barColor: 'bg-orange-500', barWidth: 'w-1/5' },
    { period: 'After 50% of term', refund: '0%', label: 'No Refund', color: 'bg-red-100 text-red-800 border-red-200', barColor: 'bg-red-400', barWidth: 'w-0' },
  ];

  const nonRefundableFees = [
    { fee: 'Application Fee', desc: 'Paid at time of application to cover processing and administrative review.' },
    { fee: 'Registration Fee', desc: 'Covers course setup, materials preparation, and administrative enrollment costs.' },
    { fee: 'Technology & Platform Fee', desc: 'Covers access to online learning platforms and digital resources.' },
    { fee: 'Certificate Processing Fee', desc: 'Administrative cost for issuing official certificates upon completion.' },
    { fee: 'Late Enrollment Fee', desc: 'Applicable when registering after the standard enrollment period.' },
  ];

  const sections = [
    {
      id: 'tuition-refunds',
      icon: DollarSign,
      title: 'Tuition Refund Structure',
      color: 'from-emerald-500 to-emerald-600',
    },
    {
      id: 'non-refundable',
      icon: AlertCircle,
      title: 'Non-Refundable Fees',
      color: 'from-blue-600 to-blue-700',
    },
    {
      id: 'calculation',
      icon: Calendar,
      title: 'How Refunds Are Calculated',
      color: 'from-teal-600 to-teal-700',
    },
    {
      id: 'financial-aid',
      icon: FileText,
      title: 'Financial Aid Adjustments',
      color: 'from-blue-700 to-blue-800',
    },
    {
      id: 'withdrawal-process',
      icon: Clock,
      title: 'Withdrawal Process',
      color: 'from-emerald-600 to-teal-600',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-emerald-900 text-white overflow-hidden pt-24 pb-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoODB2ODBIMHoiLz48cGF0aCBkPSJNMjAgMjBoNDB2NDBIMjB6IiBzdHJva2U9IiNmZmYiIHN0cm9rZS1vcGFjaXR5PSIuMDMiLz48L2c+PC9zdmc+')] opacity-30" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <nav className="flex items-center space-x-2 text-sm mb-8">
            <Link to="/" className="text-blue-200 hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4 text-blue-300" />
            <span className="text-white font-medium">Refund Policy</span>
          </nav>
          <div className="flex items-start space-x-6 mb-6">
            <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center flex-shrink-0">
              <DollarSign className="w-8 h-8 text-emerald-300" />
            </div>
            <div>
              <div className="inline-block px-4 py-1.5 bg-emerald-600/20 backdrop-blur-sm rounded-full border border-emerald-400/30 mb-3">
                <span className="text-emerald-300 text-sm font-semibold">LEGAL</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold leading-tight">Refund Policy</h1>
            </div>
          </div>
          <p className="text-xl text-blue-100 leading-relaxed max-w-3xl ml-22">
            We understand that circumstances can change. This policy outlines how tuition refunds are calculated based on your withdrawal date and program timeline.
          </p>
          <div className="mt-6 ml-22">
            <div className="inline-flex items-center space-x-2 bg-amber-500/20 border border-amber-400/30 rounded-xl px-4 py-3">
              <Info className="w-5 h-5 text-amber-300 flex-shrink-0" />
              <p className="text-amber-100 text-sm">
                The earlier you withdraw, the higher the refund percentage. Official withdrawal date determines eligibility.
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

        {/* Tuition Refund Structure */}
        <section id="tuition-refunds" className="scroll-mt-24">
          <div className="flex items-center space-x-4 mb-8">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center flex-shrink-0 shadow-lg">
              <DollarSign className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Tuition Refund Structure</h2>
          </div>
          <div className="ml-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Tuition refunds are determined by when a student officially withdraws from a program relative to the academic term. Earlier withdrawals receive higher refund amounts.
            </p>
            <div className="bg-white rounded-2xl border-2 border-gray-100 overflow-hidden shadow-sm">
              {/* Table header */}
              <div className="grid grid-cols-3 bg-gradient-to-r from-blue-900 to-emerald-900 text-white px-6 py-4 text-sm font-bold uppercase tracking-wide">
                <span>Withdrawal Period</span>
                <span className="text-center">Refund Rate</span>
                <span className="text-right">Status</span>
              </div>
              {refundSchedule.map((row, index) => (
                <div key={index} className={`grid grid-cols-3 px-6 py-5 items-center border-b border-gray-100 last:border-0 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-blue-50/40 transition-colors`}>
                  <div className="flex items-center space-x-3">
                    <TrendingDown className={`w-4 h-4 ${index < 2 ? 'text-emerald-500' : index < 4 ? 'text-amber-500' : 'text-red-400'}`} />
                    <span className="text-gray-800 font-medium text-sm">{row.period}</span>
                  </div>
                  <div className="flex flex-col items-center space-y-2">
                    <span className="text-2xl font-bold text-gray-900">{row.refund}</span>
                    <div className="w-full max-w-24 bg-gray-200 rounded-full h-2">
                      <div className={`${row.barColor} h-2 rounded-full transition-all ${row.barWidth}`} />
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <span className={`inline-block px-3 py-1.5 rounded-lg text-xs font-bold border ${row.color}`}>
                      {row.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 flex items-start space-x-3">
              <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <p className="text-blue-800 text-sm leading-relaxed">
                The above schedule applies to tuition charges only. All applicable fees are calculated separately and may not be refundable. See the section below for details.
              </p>
            </div>
          </div>
        </section>

        {/* Non-Refundable Fees */}
        <section id="non-refundable" className="scroll-mt-24">
          <div className="flex items-center space-x-4 mb-8">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center flex-shrink-0 shadow-lg">
              <AlertCircle className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Non-Refundable Fees</h2>
          </div>
          <div className="ml-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Certain fees cover administrative costs that are incurred at the time of enrollment or application and are therefore non-refundable regardless of withdrawal date.
            </p>
            <div className="grid grid-cols-1 gap-4">
              {nonRefundableFees.map((item, index) => (
                <div key={index} className="flex items-start space-x-4 p-5 bg-white rounded-xl border-2 border-gray-100 hover:border-red-200 transition-colors shadow-sm">
                  <div className="w-9 h-9 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-red-600 font-bold text-sm">$</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1 flex items-center space-x-2">
                      <span>{item.fee}</span>
                      <span className="text-xs font-normal bg-red-100 text-red-700 px-2 py-0.5 rounded-full border border-red-200">Non-Refundable</span>
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How Refunds Are Calculated */}
        <section id="calculation" className="scroll-mt-24">
          <div className="flex items-center space-x-4 mb-8">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-600 to-teal-700 flex items-center justify-center flex-shrink-0 shadow-lg">
              <Calendar className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">How Refunds Are Calculated</h2>
          </div>
          <div className="ml-16 space-y-6">
            <p className="text-gray-700 leading-relaxed">
              Refund amounts are not estimated — they are precisely calculated using two key factors to ensure fairness and transparency.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-2xl p-8 border-2 border-teal-100">
                <div className="w-12 h-12 rounded-xl bg-teal-600 flex items-center justify-center mb-4">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Official Withdrawal Date</h3>
                <p className="text-gray-700 leading-relaxed text-sm">
                  The refund calculation is based on the <strong>official date</strong> you formally submit your withdrawal request — not the last date of attendance. Informal notifications (verbal, email to an instructor) do not establish this date.
                </p>
                <div className="mt-4 p-3 bg-teal-600/10 rounded-lg border border-teal-200">
                  <p className="text-teal-800 text-sm font-semibold">Always submit withdrawal requests in writing through official channels.</p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl p-8 border-2 border-blue-100">
                <div className="w-12 h-12 rounded-xl bg-blue-700 flex items-center justify-center mb-4">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Academic Term Structure</h3>
                <p className="text-gray-700 leading-relaxed text-sm">
                  The percentage of the term completed at the time of withdrawal determines the applicable refund tier. Each program has a defined academic term calendar that serves as the basis for this calculation.
                </p>
                <div className="mt-4 p-3 bg-blue-600/10 rounded-lg border border-blue-200">
                  <p className="text-blue-900 text-sm font-semibold">Term calendars are provided at enrollment and available upon request.</p>
                </div>
              </div>
            </div>

            {/* Example Calculation */}
            <div className="bg-gray-900 rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-2 text-emerald-300">Example Calculation</h3>
              <p className="text-gray-300 text-sm mb-6">Illustrative example — actual amounts vary by program.</p>
              <div className="space-y-3">
                {[
                  { label: 'Total Tuition', value: '$2,400', note: '' },
                  { label: 'Registration Fee (non-refundable)', value: '− $150', note: '' },
                  { label: 'Tuition subject to refund', value: '$2,250', note: '' },
                  { label: 'Withdrawal in Week 2 (60% refund)', value: '× 60%', note: '' },
                  { label: 'Refund Amount', value: '$1,350', note: 'Final refund', highlight: true },
                ].map((row, i) => (
                  <div key={i} className={`flex items-center justify-between py-3 ${i < 4 ? 'border-b border-gray-700' : ''} ${row.highlight ? 'mt-2 pt-4' : ''}`}>
                    <span className={`text-sm ${row.highlight ? 'text-emerald-300 font-bold text-base' : 'text-gray-300'}`}>{row.label}</span>
                    <span className={`font-bold ${row.highlight ? 'text-emerald-300 text-xl' : 'text-white'}`}>{row.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Financial Aid Adjustments */}
        <section id="financial-aid" className="scroll-mt-24">
          <div className="flex items-center space-x-4 mb-8">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-700 to-blue-800 flex items-center justify-center flex-shrink-0 shadow-lg">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Financial Aid Adjustments</h2>
          </div>
          <div className="ml-16 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              If you received financial aid, scholarships, or institutional grants, your refund may be subject to adjustments in accordance with applicable regulations and aid agreements.
            </p>
            <div className="space-y-4">
              {[
                {
                  title: 'Return of Title IV Funds',
                  desc: 'Students who receive federal financial aid and withdraw may be required to return a portion of those funds to the federal government per federal regulations. This is a separate calculation from the institutional refund and may result in a balance owed to the Academy.',
                  color: 'border-blue-300 bg-blue-50',
                  textColor: 'text-blue-900',
                },
                {
                  title: 'Scholarship & Institutional Aid',
                  desc: 'Scholarships and institutional grants are proportionally adjusted based on the percentage of the program completed. Remaining aid balances may be required to be returned to the funding source.',
                  color: 'border-teal-300 bg-teal-50',
                  textColor: 'text-teal-900',
                },
                {
                  title: 'Outstanding Balance After Withdrawal',
                  desc: 'In some cases, after all adjustments are made, a student may owe a balance to the Academy. Students are responsible for any outstanding charges not covered by refunded aid or tuition credits.',
                  color: 'border-amber-300 bg-amber-50',
                  textColor: 'text-amber-900',
                },
              ].map((item) => (
                <div key={item.title} className={`rounded-xl p-6 border-2 ${item.color}`}>
                  <h4 className={`font-bold mb-2 ${item.textColor}`}>{item.title}</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="flex items-start space-x-3 bg-gray-50 border border-gray-200 rounded-xl p-4">
              <AlertCircle className="w-5 h-5 text-gray-500 flex-shrink-0 mt-0.5" />
              <p className="text-gray-600 text-sm leading-relaxed">
                We strongly recommend contacting our administrative office before withdrawing if you have received any form of financial assistance. Our team will provide a personalized calculation of your expected refund and any obligations.
              </p>
            </div>
          </div>
        </section>

        {/* Withdrawal Process */}
        <section id="withdrawal-process" className="scroll-mt-24">
          <div className="flex items-center space-x-4 mb-8">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-600 to-teal-600 flex items-center justify-center flex-shrink-0 shadow-lg">
              <Clock className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Withdrawal Process</h2>
          </div>
          <div className="ml-16 space-y-6">
            <p className="text-gray-700 leading-relaxed">
              To initiate a withdrawal and begin the refund process, please follow these steps. Your refund eligibility is tied to the date we receive your official written withdrawal.
            </p>
            <div className="space-y-4">
              {[
                { step: 1, title: 'Submit Written Notice', desc: 'Send a formal withdrawal request via email to hben@fluentfutureacademy.org or deliver a written notice to our administrative office. Include your full name, program name, and intended last date of attendance.' },
                { step: 2, title: 'Receive Confirmation', desc: 'We will confirm receipt of your withdrawal request within 2 business days and provide your official withdrawal date, which will be used for refund calculation.' },
                { step: 3, title: 'Refund Calculation', desc: 'Our administrative team will calculate your refund based on the official withdrawal date, academic term structure, and any financial aid adjustments required.' },
                { step: 4, title: 'Refund Processing', desc: 'Approved refunds are processed within 30 days of the official withdrawal date. Refunds are issued via the original payment method where possible.' },
              ].map((item) => (
                <div key={item.step} className="flex items-start space-x-5 p-6 bg-white rounded-xl border-2 border-gray-100 hover:border-emerald-200 transition-colors shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center flex-shrink-0 text-white font-bold shadow">
                    {item.step}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">{item.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="bg-gradient-to-br from-gray-900 via-blue-900 to-emerald-900 rounded-2xl p-10 text-white">
          <div className="flex items-start space-x-4 mb-6">
            <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center flex-shrink-0">
              <DollarSign className="w-6 h-6 text-emerald-300" />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-2">Questions About Your Refund?</h2>
              <p className="text-blue-100 leading-relaxed max-w-2xl">
                Our administrative team is available to walk you through your specific situation, calculate your estimated refund, and guide you through the withdrawal process.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ml-16">
            <a href="mailto:hben@fluentfutureacademy.org" className="flex items-center space-x-3 p-4 bg-white/10 rounded-xl border border-white/20 hover:bg-white/20 transition-colors">
              <FileText className="w-5 h-5 text-emerald-300 flex-shrink-0" />
              <div>
                <p className="text-xs text-blue-200 font-medium">Email</p>
                <p className="text-white font-semibold">hben@fluentfutureacademy.org</p>
              </div>
            </a>
            <a href="tel:7819854558" className="flex items-center space-x-3 p-4 bg-white/10 rounded-xl border border-white/20 hover:bg-white/20 transition-colors">
              <Clock className="w-5 h-5 text-emerald-300 flex-shrink-0" />
              <div>
                <p className="text-xs text-blue-200 font-medium">Phone</p>
                <p className="text-white font-semibold">781-985-4558</p>
              </div>
            </a>
          </div>
          <p className="mt-6 ml-16 text-blue-200 text-sm">
            This policy is effective as of April 2026 and is subject to change. The most current version will always be available on this page.
          </p>
        </section>
      </div>
    </div>
  );
}
