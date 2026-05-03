import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, MessageCircle } from 'lucide-react';
import { articles } from '../data/articles';
import { setSEO } from '../utils/seo';

export default function Articles() {
  useEffect(() => {
    setSEO({
      title: 'Articles',
      description: 'Read expert articles on language learning, interpreter training, ESL education, and professional communication from Fluent Future Academy.',
      canonicalPath: '/articles',
    });
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-emerald-900 text-white pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-sm mb-6">
            <Link to="/" className="text-blue-200 hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4 text-blue-300" />
            <span className="text-white font-medium">Articles</span>
          </nav>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Insights & Resources
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Expert perspectives on language education, career development, and professional growth in healthcare and global communication.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {articles.map(article => {
            const Icon = article.icon;
            return (
              <Link
                key={article.id}
                to={`/articles/${article.id}`}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-1 border border-gray-100"
              >
                <div className={`h-2 bg-gradient-to-r ${article.color}`}></div>
                <div className="p-8">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${article.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">
                    {article.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-6">{article.excerpt}</p>

                  <div className="inline-flex items-center text-emerald-600 font-semibold group-hover:text-emerald-700 transition-colors">
                    Read Article
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      <section className="bg-gradient-to-br from-gray-900 via-blue-900 to-emerald-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Career?</h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Turn insights into action. Explore our professional training programs and take the next step in your language learning journey.
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
