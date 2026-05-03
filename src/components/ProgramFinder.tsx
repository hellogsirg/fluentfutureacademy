import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ChevronRight, MessageCircle } from 'lucide-react';
import { programs, categories } from '../data/programs';
import { setSEO } from '../utils/seo';

export default function ProgramFinder() {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState('all');

  useEffect(() => {
    setSEO({
      title: 'Programs',
      description: 'Explore 12 professional language programs including ESL, Medical Interpreter Training, and Global Communication. Hybrid format. Massachusetts-based.',
      canonicalPath: '/programs',
    });
  }, [t]);

  const filteredPrograms = activeCategory === 'all'
    ? programs
    : programs.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-emerald-900 text-white pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-sm mb-6">
            <Link to="/" className="text-blue-200 hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4 text-blue-300" />
            <span className="text-white font-medium">Programs</span>
          </nav>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Explore Our Programs
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Find the perfect program to advance your career, enhance your skills, and open new opportunities through language education.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
        <div className="mb-12">
          <div className="flex flex-wrap gap-3">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                  activeCategory === category.id
                    ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/30'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
          <p className="text-gray-600 mt-4">
            Showing {filteredPrograms.length} {filteredPrograms.length === 1 ? 'program' : 'programs'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPrograms.map(program => {
            const Icon = program.icon;
            return (
              <div
                key={program.id}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-1 border border-gray-100"
              >
                {program.image && (
                  <div className="h-48 overflow-hidden bg-gray-200">
                    <img src={program.image} alt={program.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" decoding="async" />
                  </div>
                )}
                <div className={`h-2 bg-gradient-to-r ${program.color}`}></div>
                <div className="p-6">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${program.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{program.title}</h3>
                  {program.subtitle && (
                    <p className="text-sm text-gray-600 mb-3">{program.subtitle}</p>
                  )}
                  <p className="text-gray-600 mb-4 leading-relaxed">{program.shortDescription}</p>

                  <div className="flex items-center justify-between mb-4 pt-4 border-t border-gray-100">
                    <div>
                      <p className="text-xs text-gray-500 font-medium">Duration</p>
                      <p className="text-sm text-gray-900 font-semibold">{program.duration}{program.weeks ? ` | ${program.weeks}` : ''}</p>
                    </div>
                    {program.price && (
                      <div>
                        <p className="text-xs text-gray-500 font-medium">Price</p>
                        <p className="text-sm text-emerald-600 font-bold">{program.price}</p>
                      </div>
                    )}
                  </div>

                  <Link
                    to={`/programs/${program.id}`}
                    className="inline-flex items-center text-emerald-600 font-semibold hover:text-emerald-700 transition-colors"
                  >
                    Learn More
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {filteredPrograms.length === 0 && (
          <div className="text-center py-16">
            <p className="text-xl text-gray-600 mb-4">No programs found in this category.</p>
            <button
              onClick={() => setActiveCategory('all')}
              className="inline-flex items-center justify-center px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors font-semibold w-full sm:w-auto max-w-xs mx-auto"
            >
              View All Programs
            </button>
          </div>
        )}
      </div>

      <section className="bg-gradient-to-br from-gray-900 via-blue-900 to-emerald-900 text-white py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Take the first step towards your language learning goals. Our team is here to help you choose the right program.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#enroll"
              className="inline-flex items-center justify-center px-8 py-4 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-all duration-200 font-semibold text-lg shadow-2xl hover:shadow-emerald-600/50 hover:-translate-y-1 w-full sm:w-auto"
            >
              Enroll Now
            </a>
            <a
              href="#consultation"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg hover:bg-white/20 transition-all duration-200 font-semibold text-lg border border-white/30 w-full sm:w-auto"
            >
              Book a Consultation
            </a>
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
