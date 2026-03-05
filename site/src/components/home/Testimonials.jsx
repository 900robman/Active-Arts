import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { testimonials } from '../../data/content';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Testimonials() {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
  };

  useEffect(() => {
    checkScroll();
    const el = scrollRef.current;
    if (el) el.addEventListener('scroll', checkScroll, { passive: true });
    window.addEventListener('resize', checkScroll);
    return () => {
      if (el) el.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkScroll);
    };
  }, []);

  const scroll = (direction) => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.querySelector(':scope > div')?.offsetWidth || 340;
    const pageScroll = (cardWidth + 32) * 3;
    el.scrollBy({ left: direction === 'left' ? -pageScroll : pageScroll, behavior: 'smooth' });
  };

  return (
    <section className="py-24 bg-forest-900 relative overflow-hidden">
      {/* Subtle background texture */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-end justify-between mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-cream-50">
            Voices from Our Community
          </h2>

          <div className="hidden sm:flex gap-2">
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className="p-2 rounded-full border border-cream-300/20 text-cream-300 hover:bg-cream-300/10 transition-colors disabled:opacity-30 disabled:cursor-default"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className="p-2 rounded-full border border-cream-300/20 text-cream-300 hover:bg-cream-300/10 transition-colors disabled:opacity-30 disabled:cursor-default"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>

        <div
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 -mb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="snap-start shrink-0 w-[85vw] sm:w-[calc((100%-4rem)/3)]"
            >
              <Card className="relative h-full bg-forest-800 backdrop-blur-sm border-cream-300/10 shadow-none">
                <CardContent className="pt-8">
                  {/* Quote mark */}
                  <svg
                    className="absolute top-6 left-6 w-8 h-8 text-terra-500/30"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151C7.563 6.068 6 8.789 6 11h4v10H0z" />
                  </svg>

                  <p className="relative z-10 text-cream-200/90 text-[15px] leading-relaxed italic mt-6 mb-6">
                    &ldquo;{t.quote}&rdquo;
                  </p>

                  <footer className="flex items-center gap-3">
                    <div className="w-8 h-0.5 bg-terra-500/40 rounded" />
                    <cite className="not-italic font-heading text-sm text-cream-400/70 font-medium">
                      {t.author}
                    </cite>
                  </footer>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
