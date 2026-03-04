import { motion } from 'framer-motion';
import { testimonials } from '../../data/content';
import { Card, CardContent } from '@/components/ui/card';

export default function Testimonials() {
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
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-cream-50">
            Voices from Our Community
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
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
