import { motion } from 'framer-motion';
import { team, teamIntro } from '../../data/content';
import TeamCard from './TeamCard';

export default function TeamSection() {
  return (
    <section id="who-we-are" className="py-24 bg-cream-50">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-forest-900 mb-6">
            Who We Are
          </h2>
          <p className="text-charcoal-600 text-lg leading-relaxed">
            {teamIntro}
          </p>
        </motion.div>

        {/* Top row — 2 founders, same width as bottom row cards */}
        <div className="flex flex-wrap justify-center gap-8 mb-8">
          {team.slice(0, 2).map((member, i) => (
            <div key={member.name} className="w-full sm:w-[calc(33.333%-1.34rem)]">
              <TeamCard member={member} index={i} />
            </div>
          ))}
        </div>

        {/* Bottom row — 3 team members */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.slice(2).map((member, i) => (
            <TeamCard key={member.name} member={member} index={i + 2} />
          ))}
        </div>
      </div>
    </section>
  );
}
