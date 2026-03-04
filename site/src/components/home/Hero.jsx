import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { siteInfo, services } from '../../data/content';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden">
      {/* Background with image + gradient overlay */}
      <div className="absolute inset-0 bg-forest-900">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/hero-bg-1920x1080.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-forest-900/60 via-forest-800/50 to-forest-700/40" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cream-50 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl w-full px-6 py-32">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-[520px]"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <Badge className="bg-terra-500/20 text-terra-400 border-transparent font-heading text-xs font-semibold tracking-widest uppercase hover:bg-terra-500/20">
              NZ Charitable Trust
            </Badge>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-5xl font-heading font-bold text-cream-50 leading-[1.1] tracking-tight"
          >
            {siteInfo.tagline}
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-6 text-lg text-cream-300/80 max-w-lg leading-relaxed"
          >
            Bringing the performing arts to aged care communities across Auckland
            through interactive poetry, training and speaking.
          </motion.p>

          <motion.div variants={itemVariants} className="mt-8 flex flex-wrap gap-3">
            {services.map((service) => (
              <Badge
                key={service.label}
                variant="outline"
                className="px-5 py-2.5 border-cream-300/20 text-cream-100 font-heading text-sm font-medium hover:bg-cream-100/10 hover:border-cream-300/40 transition-all duration-300 cursor-pointer"
                asChild
              >
                <a href="#what-we-do" className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-terra-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {service.label}
                </a>
              </Badge>
            ))}
          </motion.div>

          <motion.div variants={itemVariants} className="mt-8">
            <Button
              asChild
              size="lg"
              className="bg-terra-500 text-white font-heading text-sm font-semibold tracking-wide hover:bg-terra-600 shadow-lg shadow-terra-500/25 hover:shadow-xl hover:shadow-terra-600/30 transition-all duration-300 hover:-translate-y-0.5 rounded-xl px-7 py-3.5 h-auto"
            >
              <a href="#contact">
                Get in Touch
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
