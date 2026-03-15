import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: '首页', href: '#hero' },
  { label: '产品', href: '#products' },
  { label: '修复阶段', href: '#stages' },
  { label: '关于我们', href: '#about' },
  { label: '联系我们', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'h-16 glass-effect border-b border-palace-red/10 shadow-sm'
          : 'h-20 bg-transparent'
      }`}
      style={{
        transitionTimingFunction: 'var(--ease-ink-flow)',
      }}
    >
      <div className="section-container h-full">
        <div className="section-inner h-full flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#hero');
            }}
            className={`flex items-center gap-2 transition-transform duration-500 ${
              isScrolled ? 'scale-90' : 'scale-100'
            }`}
          >
            <span className="text-2xl font-serif font-bold text-palace-red">
              宫喜宫囍
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className="relative text-sm font-medium text-ink-black/80 hover:text-palace-red transition-colors duration-300 link-underline py-1"
                style={{
                  animationDelay: `${index * 80}ms`,
                }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <button
              onClick={() => scrollToSection('#contact')}
              className="btn-primary text-sm"
            >
              立即咨询
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-ink-black hover:text-palace-red transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 glass-effect border-b border-palace-red/10 transition-all duration-500 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
        style={{
          transitionTimingFunction: 'var(--ease-porcelain)',
        }}
      >
        <div className="section-container py-4">
          <div className="section-inner flex flex-col gap-4">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className="text-base font-medium text-ink-black/80 hover:text-palace-red transition-colors duration-300 py-2"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => scrollToSection('#contact')}
              className="btn-primary text-sm mt-2"
            >
              立即咨询
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
