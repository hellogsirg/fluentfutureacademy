import { Award, Shield, CheckCircle } from 'lucide-react';

export default function CertificationShowcase() {
  const certifications = [
    {
      title: 'Certificate in Medical Interpreter Fundamentals',
      hours: '40 hours',
      icon: Shield,
      color: 'from-blue-600 to-blue-700',
      description: 'Healthcare communication certification meeting industry standards from our <strong>40-hour Medical Interpreter Fundamentals</strong> program'
    }
  ];

  const industryStandards = [
    'Recognized by healthcare systems nationwide',
    'Aligned with IMIA and NCIHC standards',
    'Meets legal requirements for language access',
    'Professional development credits available'
  ];

  return (
    <section className="py-28 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-emerald-600/10 rounded-full border border-emerald-600/20 mb-4">
            <span className="text-emerald-700 text-sm font-bold">OFFICIAL CERTIFICATION</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Industry-Recognized Certificates</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Upon successful completion of training hours and final assessments, students receive a signed Professional Certificate
          </p>
        </div>

        <div className="grid grid-cols-1 max-w-2xl mx-auto gap-8 mb-16">
          {certifications.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <div className={`h-2 bg-gradient-to-r ${cert.color}`}></div>
                <div className="p-8">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${cert.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <div className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-bold mb-2">
                        {cert.hours}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">{cert.title}</h3>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: cert.description }}></p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12 border-2 border-emerald-600/20">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-8">
              <Award className="w-12 h-12 text-emerald-600 mr-4" />
              <h3 className="text-3xl font-bold text-gray-900">Our Certification Model</h3>
            </div>
            <p className="text-lg text-gray-700 text-center mb-8 leading-relaxed">
              Our certifications are designed to meet industry standards for healthcare, legal, and professional environments.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {industryStandards.map((standard, index) => (
                <div key={index} className="flex items-start space-x-3 p-4 bg-emerald-50 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 font-medium">{standard}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
