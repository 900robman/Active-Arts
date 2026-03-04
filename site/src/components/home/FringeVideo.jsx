import { motion } from 'framer-motion';
import { videos } from '../../data/content';

export default function FringeVideo() {
  return (
    <section className="py-24 bg-cream-200">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-forest-900 mb-4">
              Auckland Fringe Festival
            </h2>
            <p className="text-charcoal-600 text-[15px] leading-relaxed">
              Active Arts was proud to take part in the 2020 Auckland Fringe Festival, one of the city's most vibrant celebrations of independent and community-driven performance. Our senior poetry group performed at the Selwyn Theatre, delivering a captivating evening of verse that spanned centuries — from the timeless words of WH Auden and Shakespeare to heartfelt original works written by our own members. Audiences were treated to tales of childhood memories, reflections on love and loss, and moments of warmth and humour that had the whole theatre smiling. Our performers brought the house down with the talent and passion that makes every Active Arts show unforgettable.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-terra-500/10 to-forest-700/10 -z-10" />
            <div className="aspect-video rounded-xl overflow-hidden shadow-elevated">
              <iframe
                src={videos.vimeo.embedUrl}
                width="100%"
                height="100%"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title={videos.vimeo.title}
                className="w-full h-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
