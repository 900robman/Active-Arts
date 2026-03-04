import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { siteInfo, navLinks } from '../../data/content';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  // After navigating to home, scroll to the hash target
  useEffect(() => {
    if (location.pathname === '/' && location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        // Small delay to let the page render first
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100);
      }
    }
  }, [location]);

  const handleNavClick = (e, href) => {
    if (href.startsWith('/#')) {
      e.preventDefault();
      const hash = href.replace('/', '');
      if (location.pathname === '/') {
        // Already on home — just scroll
        const el = document.querySelector(hash);
        el?.scrollIntoView({ behavior: 'smooth' });
      } else {
        // Navigate to home with hash
        navigate('/' + hash);
      }
    }
    setMobileOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-cream-50/95 backdrop-blur-md shadow-soft'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-6xl px-6 py-5 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src={siteInfo.logo}
            alt={siteInfo.name}
            className="h-16 w-auto transition-transform duration-300 group-hover:scale-105"
          />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <li key={link.label}>
              {link.href.startsWith('/news') ? (
                <Link
                  to={link.href}
                  className={`px-5 py-2.5 rounded-lg font-heading text-base font-medium tracking-wide transition-colors duration-200 ${
                    scrolled
                      ? 'text-charcoal-700 hover:text-forest-700 hover:bg-forest-700/5'
                      : 'text-cream-100 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-5 py-2.5 rounded-lg font-heading text-base font-medium tracking-wide transition-colors duration-200 ${
                    scrolled
                      ? 'text-charcoal-700 hover:text-forest-700 hover:bg-forest-700/5'
                      : 'text-cream-100 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.label}
                </a>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`md:hidden relative w-8 h-8 flex flex-col justify-center items-center gap-1.5 ${
            scrolled ? 'text-charcoal-700' : 'text-cream-100'
          }`}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
              mobileOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
              mobileOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
              mobileOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <motion.div
        initial={false}
        animate={mobileOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        className="md:hidden overflow-hidden bg-cream-50/98 backdrop-blur-md"
      >
        <ul className="px-6 pb-6 space-y-1">
          {navLinks.map((link) => (
            <li key={link.label}>
              {link.href.startsWith('/news') ? (
                <Link
                  to={link.href}
                  className="block px-4 py-3 rounded-lg font-heading text-base font-medium text-charcoal-700 hover:text-forest-700 hover:bg-forest-700/5 transition-colors"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="block px-4 py-3 rounded-lg font-heading text-base font-medium text-charcoal-700 hover:text-forest-700 hover:bg-forest-700/5 transition-colors"
                >
                  {link.label}
                </a>
              )}
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.nav>
  );
}
