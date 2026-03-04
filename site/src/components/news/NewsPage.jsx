import { motion } from 'framer-motion';
import { newsArticles, newsHighlights } from '../../data/content';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function NewsPage() {
  return (
    <>
      {/* Hero banner */}
      <section className="pt-32 pb-16 bg-forest-900">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl font-heading font-bold text-cream-50">
              News
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Articles */}
      <section className="py-20 bg-cream-50">
        <div className="mx-auto max-w-3xl px-6 space-y-12">
          {newsArticles.map((article, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card className="border-cream-200/50 shadow-soft">
                <CardHeader>
                  <CardTitle className="font-heading text-2xl font-bold text-forest-900">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-charcoal-600 leading-relaxed">
                    {article.content}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}

          {/* Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="bg-forest-800/5 border-forest-700/10 shadow-none">
              <CardHeader>
                <CardTitle className="font-heading text-lg font-bold text-forest-900">
                  Other Highlights
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {newsHighlights.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-charcoal-600">
                      <svg
                        className="w-5 h-5 text-terra-500 flex-shrink-0 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </>
  );
}
