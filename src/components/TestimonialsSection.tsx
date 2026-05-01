import { Carousel, TestimonialCard } from './ui/retro-testimonial';
import { testimonialData } from '../data/testimonials';

export default function TestimonialsSection() {
  const cards = testimonialData.ids.map((cardId: string, index: number) => {
    const testimonial = testimonialData.details[cardId];
    return (
      <TestimonialCard
        key={cardId}
        testimonial={testimonial}
        index={index}
        backgroundImage="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2940&auto=format&fit=crop"
      />
    );
  });

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <div className="inline-block px-4 py-2 bg-emerald-600/10 rounded-full border border-emerald-600/20 mb-4">
            <span className="text-emerald-700 text-sm font-bold">STUDENT SUCCESS STORIES</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Hear From Our Graduates
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Real stories from professionals who transformed their careers through our programs
          </p>
        </div>

        <Carousel items={cards} />
      </div>
    </section>
  );
}
