import { Menu, X } from 'lucide-react';
import { useState } from 'react';

interface NavigationProps {
  scrolled: boolean;
}

const Navigation = ({ scrolled }: NavigationProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#cv', label: 'CV' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a
            href="#home"
            className="text-xl md:text-2xl font-bold text-neutral-900 hover:text-neutral-700 transition-colors"
          >
            MA
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="px-5 py-2.5 bg-neutral-900 text-white text-sm font-medium rounded-lg hover:bg-neutral-800 transition-all hover:scale-105"
            >
              Book a Call
            </a>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-neutral-900"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-neutral-200">
          <div className="px-6 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full px-5 py-2.5 bg-neutral-900 text-white text-sm font-medium rounded-lg text-center hover:bg-neutral-800 transition-colors"
            >
              Book a Call
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
