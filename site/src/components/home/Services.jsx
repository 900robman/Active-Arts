import { motion } from 'framer-motion';
import { whatWeDo } from '../../data/content';
import { Card, CardContent } from '@/components/ui/card';

const icons = {
  poetry: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.331 0 4.472.89 6.042 2.346m0-14.304A8.967 8.967 0 0118 3.75c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.388m0-14.346v14.304" />
    </svg>
  ),
  training: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
    </svg>
  ),
  speaking: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
    </svg>
  ),
};

const serviceEntries = [
  { key: 'poetry', ...whatWeDo.poetry, icon: icons.poetry },
  { key: 'training', ...whatWeDo.training, icon: icons.training },
  { key: 'speaking', ...whatWeDo.speaking, icon: icons.speaking },
];

export default function Services() {
  return (
    <section id="what-we-do" className="py-24 bg-cream-50">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-forest-900">
            What We Do
          </h2>
        </motion.div>

        {/* Service cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {serviceEntries.map((service, i) => (
            <motion.div
              key={service.key}
              initial={{ opacity: 0, x: i === 0 ? -30 : i === 2 ? 30 : 0, y: i === 1 ? 30 : 0 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <Card className="group h-full border-cream-200/50 shadow-soft hover:shadow-card transition-all duration-500 hover:-translate-y-1">
                <CardContent className="pt-8">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-forest-700/10 text-forest-700 flex items-center justify-center mb-6 transition-colors duration-300 group-hover:bg-forest-700 group-hover:text-white">
                    {service.icon}
                  </div>

                  <h3 className="font-heading text-xl font-bold text-forest-800 mb-4">
                    {service.title}
                  </h3>

                  <p className="text-charcoal-600 text-[15px] leading-relaxed">
                    {service.description}
                  </p>

                  {service.bullets && (
                    <ul className="mt-4 space-y-2">
                      {service.bullets.map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-2 text-charcoal-600 text-[15px]"
                        >
                          <svg className="w-4 h-4 text-terra-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
