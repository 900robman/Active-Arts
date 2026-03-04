import { motion } from 'framer-motion';

export default function TeamCard({ member, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
      className="group [perspective:1000px]"
    >
      <div className="relative w-full h-[420px] transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        {/* Front — photo + name + role */}
        <div className="absolute inset-0 [backface-visibility:hidden] rounded-2xl overflow-hidden shadow-soft bg-white border border-cream-200/50">
          <div className="h-[320px] overflow-hidden">
            <img
              src={member.photo}
              alt={member.name}
              className="w-full h-full object-cover"
              style={{ objectPosition: member.photoPosition || 'top' }}
              loading="lazy"
            />
          </div>
          <div className="px-5 py-4">
            <h3 className="font-heading text-lg font-bold text-forest-800">
              {member.name}
            </h3>
            <p className="text-charcoal-500 text-sm">{member.role}</p>
          </div>
        </div>

        {/* Back — full bio */}
        <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-2xl overflow-hidden shadow-soft bg-forest-800 border border-forest-700 flex flex-col">
          <div className="flex-1 overflow-y-auto px-6 py-6">
            <h3 className="font-heading text-lg font-bold text-cream-100 mb-1">
              {member.name}
            </h3>
            <p className="text-terra-400 text-sm font-medium mb-4">{member.role}</p>
            {member.bio.map((paragraph, i) => (
              <p
                key={i}
                className="text-cream-200/90 text-[14px] leading-relaxed mb-3 last:mb-0"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
