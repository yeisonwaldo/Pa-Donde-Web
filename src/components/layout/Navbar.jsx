import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../../constants/content';
import { useTheme } from '../../hooks/useTheme';
import Button from '../ui/Button';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 dark:bg-navy/80 backdrop-blur-xl border-b border-gray-200 dark:border-white/5 shadow-lg shadow-black/5 dark:shadow-navy/50'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <span className="text-2xl">📍</span>
            <span className="text-xl font-heading font-extrabold text-navy dark:text-white group-hover:text-primary transition-colors">
              Pa' Donde
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-gray-500 dark:text-white/70 hover:text-navy dark:hover:text-white transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Desktop Right Side */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:border-primary transition-all duration-300 text-sm font-semibold"
              aria-label="Toggle theme"
            >
              <motion.span
                key={isDark ? 'sun' : 'moon'}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {isDark ? '☀️' : '🌙'}
              </motion.span>
              {isDark ? 'Claro' : 'Oscuro'}
            </button>

            <Button variant="primary" size="sm" href="#descargar">
              Descargar app
            </Button>
          </div>

          {/* Mobile Right Side */}
          <div className="flex lg:hidden items-center gap-2">
            {/* Mobile Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 text-sm font-semibold transition-all duration-300"
              aria-label="Toggle theme"
            >
              {isDark ? '☀️' : '🌙'}
            </button>

            {/* Mobile Menu Button */}
            <button
              className="text-navy dark:text-white p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white/95 dark:bg-navy/95 backdrop-blur-xl border-b border-gray-200 dark:border-white/5 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-base font-semibold text-gray-600 dark:text-white/80 hover:text-navy dark:hover:text-white py-2"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button
                variant="primary"
                size="sm"
                href="#descargar"
                className="w-full mt-4"
              >
                Descargar app
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
