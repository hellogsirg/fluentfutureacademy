import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronRight, MessageCircle } from 'lucide-react';
import { articles } from '../data/articles';
import { setSEO } from '../utils/seo';

export default function ArticleDetail() {
  const { id } = useParams<{ id: string }>();
  const article = articles.find(a => a.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (article) {
      setSEO({
        title: article.title,
        description: article.excerpt,
        canonicalPath: `/articles/${article.id}`,
        ogType: 'article',
      });
    } else {
      setSEO({ title: 'Article Not Found', noindex: true });
    }
  }, [id, article]);

  if (!article) {
    return (
      <div className="min-h-screen bg-white pt-24 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Article Not Found</h1>
          <p className="text-gray-600 mb-8">The article you're looking for doesn't exist.</p>
          <Link to="/articles" className="inline-flex items-center justify-center px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors font-semibold w-full sm:w-auto max-w-xs mx-auto sm:max-w-none">
            Browse All Articles
          </Link>
        </div>
      </div>
    );
  }

  const Icon = article.icon;

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-emerald-900 text-white pt-24 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-sm mb-6">
            <Link to="/" className="text-blue-200 hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4 text-blue-300" />
            <Link to="/articles" className="text-blue-200 hover:text-white transition-colors">Articles</Link>
            <ChevronRight className="w-4 h-4 text-blue-300" />
            <span className="text-white font-medium">Article</span>
          </nav>

          <div className="flex items-start space-x-4 mb-6">
            <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${article.color} flex items-center justify-center flex-shrink-0`}>
              <Icon className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight">{article.title}</h1>
          </div>

          <p className="text-xl text-blue-100">{article.excerpt}</p>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            {article.content.introduction}
          </p>

          {article.content.sections.map((section, index) => (
            <div key={index} className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{section.heading}</h2>
              <p className="text-lg text-gray-700 leading-relaxed">{section.content}</p>
            </div>
          ))}

          <div className="mt-12 p-8 bg-gradient-to-br from-blue-50 to-emerald-50 rounded-2xl border-l-4 border-emerald-600">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Conclusion</h2>
            <p className="text-lg text-gray-700 leading-relaxed">{article.content.conclusion}</p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <Link
            to="/articles"
            className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-semibold transition-colors"
          >
            <ChevronRight className="w-4 h-4 mr-1 rotate-180" />
            Back to Articles
          </Link>
        </div>
      </article>

      <section className="bg-gradient-to-br from-gray-900 via-blue-900 to-emerald-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Interested in Professional Training?</h2>
          <p className="text-lg text-blue-100 mb-8">
            Discover how our programs can help you achieve your language learning and career goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/programs"
              className="inline-flex items-center justify-center px-8 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-all duration-200 font-semibold shadow-lg w-full sm:w-auto"
            >
              View Programs
            </Link>
            <Link
              to="/"
              className="inline-flex items-center justify-center px-8 py-3 bg-white/10 backdrop-blur-sm text-white rounded-lg hover:bg-white/20 transition-all duration-200 font-semibold border border-white/30 w-full sm:w-auto"
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
