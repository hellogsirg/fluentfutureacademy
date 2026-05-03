import { useState, useEffect } from 'react';
import { Briefcase, Building2, Users, Award, CheckCircle, TrendingUp, Globe, Shield, MessageCircle } from 'lucide-react';
import { setSEO } from '../utils/seo';

export default function Corporate() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    companyName: '',
    teamSize: '',
    trainingInterest: '',
    needs: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    setSEO({
      title: 'Corporate Training',
      description: 'Customized corporate language training for healthcare systems and global organizations. Build communication excellence and cultural intelligence across your team.',
      canonicalPath: '/corporate',
    });
  }, []);
  const corporatePrograms = [
    {
      title: 'Healthcare Communication & Language Access',
      description: 'Train your healthcare team to work effectively with interpreters and ensure patient safety through clear communication.',
      icon: Shield,
      duration: '20-40 hours',
      audience: 'Healthcare Systems, Hospitals, Clinics'
    },
    {
      title: 'Global Business Communication',
      description: 'Equip your team with professional email writing, presentation skills, and international etiquette for global success.',
      icon: Globe,
      duration: 'Customizable',
      audience: 'Corporate Teams, International Businesses'
    },
    {
      title: 'Cross-Cultural Intelligence Training',
      description: 'Reduce misunderstandings and build stronger relationships across diverse teams and international partnerships.',
      icon: Users,
      duration: '20 hours',
      audience: 'Leadership Teams, Global Organizations'
    },
    {
      title: 'Professional Interpreter Training',
      description: 'Build an in-house interpreter team with 40-60 hour certification programs in Medical and Community Interpreting.',
      icon: Award,
      duration: '40-60 hours',
      audience: 'Healthcare, Legal, Education, Social Services'
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Improved Patient Outcomes',
      description: 'Reduce medical errors and improve patient satisfaction through effective language access training.'
    },
    {
      icon: Users,
      title: 'Enhanced Team Performance',
      description: 'Build communication excellence across diverse teams and reduce cultural misunderstandings.'
    },
    {
      icon: Award,
      title: 'Compliance & Certification',
      description: 'Meet legal requirements for language access in healthcare and ensure staff are properly trained and certified.'
    },
    {
      icon: Building2,
      title: 'Customized Solutions',
      description: 'Programs tailored to your organization\'s specific needs, industry, and goals.'
    }
  ];

  const clients = [
    { name: 'Healthcare Systems', count: '15+' },
    { name: 'Educational Institutions', count: '10+' },
    { name: 'Legal & Social Services', count: '8+' },
    { name: 'Global Corporations', count: '7+' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Corporate Proposal Form Data:', {
      ...formData,
      timestamp: new Date().toISOString()
    });
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white">
      <section className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-blue-800 text-white overflow-hidden pt-24">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoODB2ODBIMHoiLz48cGF0aCBkPSJNMjAgMjBoNDB2NDBIMjB6IiBzdHJva2U9IiNmZmYiIHN0cm9rZS1vcGFjaXR5PSIuMDMiLz48L2c+PC9zdmc+')] opacity-30"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 relative">
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-2 bg-emerald-600/20 backdrop-blur-sm rounded-full border border-emerald-400/30 mb-6">
              <span className="text-emerald-300 text-sm font-semibold">B2B Training Solutions</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Train Your Team for Global Success
            </h1>

            <p className="text-xl sm:text-2xl text-blue-100 mb-10 leading-relaxed">
              Equipping healthcare systems and global corporations with cultural intelligence and professional communication skills.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <a href="#proposal" className="inline-flex items-center justify-center px-8 py-4 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-all duration-200 font-semibold text-lg shadow-2xl hover:shadow-emerald-600/50 hover:-translate-y-1 w-full sm:w-auto">
                Request Corporate Proposal
              </a>
              <a href="#consultation" className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg hover:bg-white/20 transition-all duration-200 font-semibold text-lg border border-white/30 w-full sm:w-auto">
                Book a Discovery Call
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                <div className="text-4xl font-bold text-emerald-400 mb-2">40+</div>
                <p className="text-blue-200">Corporate Clients</p>
              </div>
              <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                <div className="text-4xl font-bold text-emerald-400 mb-2">500+</div>
                <p className="text-blue-200">Trained Professionals</p>
              </div>
              <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                <div className="text-4xl font-bold text-emerald-400 mb-2">98%</div>
                <p className="text-blue-200">Satisfaction Rate</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Corporate Training Programs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Customized language and communication training designed for organizational excellence</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {corporatePrograms.map((program, index) => {
              const Icon = program.icon;
              return (
                <div key={index} className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-600 to-emerald-600 flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{program.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{program.description}</p>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-emerald-600 mr-2" />
                      <span><span className="font-semibold">Duration:</span> {program.duration}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-emerald-600 mr-2" />
                      <span><span className="font-semibold">Ideal For:</span> {program.audience}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Why Organizations Choose Us</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Proven results that drive organizational excellence and compliance</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-600 to-emerald-600 flex items-center justify-center">
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Trusted by Leading Organizations</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">We serve organizations across multiple sectors</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {clients.map((client, index) => (
              <div key={index} className="text-center p-6 bg-gradient-to-br from-blue-50 to-emerald-50 rounded-xl">
                <div className="text-3xl font-bold text-blue-900 mb-2">{client.count}</div>
                <p className="text-gray-700 font-medium">{client.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="proposal" className="py-20 bg-gradient-to-br from-blue-900 via-emerald-900 to-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Briefcase className="w-16 h-16 mx-auto mb-6 text-emerald-400" />
            <h2 className="text-4xl font-bold mb-4">Request a Corporate Proposal</h2>
            <p className="text-xl text-blue-100">Let us design a customized training solution for your organization</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Your Name</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/30 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      placeholder="John Smith"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Email Address</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/30 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      placeholder="john@company.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Company Name</label>
                    <input
                      type="text"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/30 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      placeholder="Your Organization"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Team Size</label>
                    <select
                      value={formData.teamSize}
                      onChange={(e) => setFormData({ ...formData, teamSize: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      required
                    >
                      <option value="" className="bg-gray-900">Select team size</option>
                      <option value="5-20" className="bg-gray-900">5-20 people</option>
                      <option value="21-50" className="bg-gray-900">21-50 people</option>
                      <option value="51-100" className="bg-gray-900">51-100 people</option>
                      <option value="100+" className="bg-gray-900">100+ people</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Training Interest</label>
                  <select
                    value={formData.trainingInterest}
                    onChange={(e) => setFormData({ ...formData, trainingInterest: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    required
                  >
                    <option value="" className="bg-gray-900">Select training program</option>
                    <option value="healthcare" className="bg-gray-900">Healthcare Communication & Language Access</option>
                    <option value="business" className="bg-gray-900">Global Business Communication</option>
                    <option value="cultural" className="bg-gray-900">Cross-Cultural Intelligence</option>
                    <option value="interpreter" className="bg-gray-900">Professional Interpreter Training</option>
                    <option value="custom" className="bg-gray-900">Custom Training Solution</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Tell Us About Your Needs</label>
                  <textarea
                    value={formData.needs}
                    onChange={(e) => setFormData({ ...formData, needs: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/30 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 h-32"
                    placeholder="Describe your training goals and any specific requirements..."
                    required
                  ></textarea>
                </div>

                <button type="submit" className="w-full px-8 py-4 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-all duration-200 font-bold text-lg shadow-2xl hover:shadow-emerald-600/50 hover:-translate-y-1 min-h-[44px]">
                  Request Proposal
                </button>
              </form>
            ) : (
              <div className="text-center py-12">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-emerald-500/20 flex items-center justify-center">
                  <CheckCircle className="w-12 h-12 text-emerald-300" />
                </div>
                <h3 className="text-3xl font-bold mb-4">Proposal Request Received</h3>
                <p className="text-xl text-blue-100 mb-2">Thank you, {formData.name}!</p>
                <p className="text-blue-200 mb-8">
                  Our corporate training team will review your request and send a customized proposal to <span className="font-semibold text-white">{formData.email}</span> within 48 hours.
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({ name: '', email: '', companyName: '', teamSize: '', trainingInterest: '', needs: '' });
                  }}
                  className="px-8 py-3 bg-white/20 text-white rounded-lg hover:bg-white/30 transition-colors font-semibold border border-white/30"
                >
                  Submit Another Request
                </button>
              </div>
            )}
          </div>

          <div className="mt-12 text-center">
            <p className="text-blue-100 mb-4">Prefer to speak directly? We're here to help.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
              <a href="tel:7819854558" className="flex items-center justify-center space-x-2 text-white hover:text-emerald-300 transition-colors">
                <span className="font-semibold">Call:</span>
                <span>781-985-4558</span>
              </a>
              <a href="mailto:hben@fluentfutureacademy.org" className="flex items-center justify-center space-x-2 text-white hover:text-emerald-300 transition-colors">
                <span className="font-semibold">Email:</span>
                <span>hben@fluentfutureacademy.org</span>
              </a>
            </div>
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
