import { Instagram, Facebook } from 'lucide-react';
import { FOOTER } from '../../constants/content';

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.71a8.23 8.23 0 004.76 1.5v-3.4a4.85 4.85 0 01-1-.12z" />
  </svg>
);

const Footer = () => {
  const socialIcons = {
    Instagram: <Instagram size={20} />,
    TikTok: <TikTokIcon />,
    Facebook: <Facebook size={20} />,
  };

  return (
    <footer className="bg-navy2 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20">
          {/* Left */}
          <div>
            <a href="#" className="flex items-center gap-2 mb-4">
              <img src="/Logo-01.svg" alt="Pa' Donde" className="h-20" />
            </a>
            <p className="text-muted text-sm mb-2">{FOOTER.tagline}</p>
            <a
              href={`mailto:${FOOTER.email}`}
              className="text-sm text-primary hover:text-primary/80 transition-colors"
            >
              {FOOTER.email}
            </a>
          </div>

          {/* Right */}
          <div className="flex flex-col sm:flex-row gap-8 lg:justify-end">
            <div>
              <h4 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">
                Legal
              </h4>
              <ul className="space-y-3">
                {FOOTER.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">
                Síguenos
              </h4>
              <div className="flex gap-3">
                {FOOTER.socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-muted hover:text-primary hover:border-primary/30 hover:bg-primary/10 transition-all duration-300"
                    aria-label={social.name}
                  >
                    {socialIcons[social.name]}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/5 text-center">
          <p className="text-xs text-muted">{FOOTER.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
