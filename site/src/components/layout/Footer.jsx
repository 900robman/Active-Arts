import { Link } from 'react-router-dom';
import { siteInfo } from '../../data/content';

export default function Footer() {
  return (
    <footer className="bg-forest-900 text-cream-300/70">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img
              src={siteInfo.logo}
              alt={siteInfo.name}
              className="h-8 w-auto brightness-200"
            />
          </div>
          <nav className="flex items-center gap-6 font-heading text-sm">
            <Link to="/" className="hover:text-cream-100 transition-colors">
              Home
            </Link>
            <Link to="/news" className="hover:text-cream-100 transition-colors">
              News
            </Link>
            <a
              href={`mailto:${siteInfo.email}`}
              className="hover:text-cream-100 transition-colors"
            >
              Contact
            </a>
          </nav>
        </div>
        <div className="mt-8 pt-6 border-t border-cream-400/10 text-center text-xs text-cream-400/40">
          &copy; {new Date().getFullYear()} {siteInfo.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
