import { motion } from 'framer-motion';
import { videos } from '../../data/content';

export default function VideoFeature() {
  return (
    <section className="py-24 bg-cream-50">
      <div className="mx-auto max-w-6xl px-6">
        {/* TVNZ Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-forest-900 mb-4">
              {videos.tvnz.title}
            </h2>
            <p className="text-charcoal-600 text-lg leading-relaxed mb-6">
              {videos.tvnz.subtitle}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Decorative frame */}
            <div className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-forest-700/10 to-terra-500/10 -z-10" />
            <div className="aspect-video rounded-xl overflow-hidden shadow-elevated bg-charcoal-900">
              <iframe
                src={`https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(videos.tvnz.facebookUrl)}&show_text=0&width=560`}
                width="100%"
                height="100%"
                style={{ border: 'none' }}
                scrolling="no"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                allowFullScreen
                title="TVNZ Coverage"
                className="w-full h-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
