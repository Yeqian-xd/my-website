import { useEffect, useRef } from 'react';
import { Shield, Heart, ArrowRight } from 'lucide-react';

const trustBadges = [
  { icon: Shield, label: '医疗器械认证' },
  { icon: Heart, label: 'A类母婴标准' },
];

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current || !contentRef.current || !imageRef.current) return;
      
      const scrollY = window.scrollY;
      const heroHeight = heroRef.current.offsetHeight;
      const progress = Math.min(scrollY / heroHeight, 1);
      
      // Parallax effect for content
      contentRef.current.style.transform = `translateY(${-scrollY * 0.3}px)`;
      contentRef.current.style.opacity = `${1 - progress * 0.8}`;
      
      // 3D rotation for product image
      const rotateY = -8 - progress * 7;
      imageRef.current.style.transform = `perspective(1200px) rotateY(${rotateY}deg) rotateX(${3 - progress * 3}deg)`;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen w-full overflow-hidden bg-moon-white pt-20"
    >
      {/* Background Cloud Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg
          className="absolute top-20 right-0 w-96 h-96 text-palace-red animate-cloud-drift"
          viewBox="0 0 200 200"
          fill="currentColor"
        >
          <path d="M45,80 Q30,80 30,65 Q30,50 45,50 Q50,35 70,35 Q90,35 95,50 Q110,50 110,65 Q110,80 95,80 Z" />
        </svg>
        <svg
          className="absolute bottom-40 left-10 w-64 h-64 text-palace-red"
          style={{ animation: 'cloud-drift 30s linear infinite reverse' }}
          viewBox="0 0 200 200"
          fill="currentColor"
        >
          <path d="M60,100 Q45,100 45,85 Q45,70 60,70 Q65,55 85,55 Q105,55 110,70 Q125,70 125,85 Q125,100 110,100 Z" />
        </svg>
      </div>

      {/* Floating Gold Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-palace-gold/20"
            style={{
              left: `${15 + i * 10}%`,
              top: `${20 + (i % 3) * 25}%`,
              animation: `float ${6 + i}s ease-in-out infinite`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>

      <div className="section-container relative z-10">
        <div className="section-inner min-h-[calc(100vh-5rem)] flex items-center">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center py-12 lg:py-0">
            {/* Content */}
            <div
              ref={contentRef}
              className="flex flex-col gap-6 lg:gap-8 order-2 lg:order-1"
            >
              {/* Eyebrow */}
              <div
                className="section-eyebrow opacity-0 animate-fade-in-up"
                style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}
              >
                <span className="w-8 h-px bg-palace-red" />
                <span>医疗级产后修复工具</span>
              </div>

              {/* Title */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-ink-black leading-tight">
                <span
                  className="block opacity-0 animate-fade-in-up"
                  style={{ animationDelay: '500ms', animationFillMode: 'forwards' }}
                >
                  科学修复，
                </span>
                <span
                  className="block opacity-0 animate-fade-in-up"
                  style={{ animationDelay: '700ms', animationFillMode: 'forwards' }}
                >
                  温柔重塑
                </span>
              </h1>

              {/* Subtitle */}
              <p
                className="text-xl lg:text-2xl text-palace-red font-medium opacity-0 animate-fade-in-up"
                style={{ animationDelay: '900ms', animationFillMode: 'forwards' }}
              >
                让产后恢复成为被祝福的旅程
              </p>

              {/* Description */}
              <p
                className="text-base lg:text-lg text-warm-gray leading-relaxed max-w-lg opacity-0 animate-fade-in-up"
                style={{ animationDelay: '1100ms', animationFillMode: 'forwards' }}
              >
                宫喜宫囍专注于产后0-12个月功能性修复，以医用标准结合东方智慧，
                帮助每一位妈妈安全、舒适地重获身心健康。
              </p>

              {/* CTA Buttons */}
              <div
                className="flex flex-wrap gap-4 opacity-0 animate-fade-in-up"
                style={{ animationDelay: '1300ms', animationFillMode: 'forwards' }}
              >
                <button
                  onClick={() => scrollToSection('#products')}
                  className="btn-primary group"
                >
                  探索产品系列
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
                <button
                  onClick={() => scrollToSection('#contact')}
                  className="btn-secondary"
                >
                  咨询修复方案
                </button>
              </div>

              {/* Trust Badges */}
              <div
                className="flex flex-wrap gap-6 pt-4 opacity-0 animate-fade-in-up"
                style={{ animationDelay: '1500ms', animationFillMode: 'forwards' }}
              >
                {trustBadges.map((badge, index) => (
                  <div
                    key={badge.label}
                    className="flex items-center gap-2 text-sm text-warm-gray"
                    style={{ animationDelay: `${1500 + index * 100}ms` }}
                  >
                    <badge.icon className="w-4 h-4 text-palace-red" />
                    <span>{badge.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Product Image */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <div
                ref={imageRef}
                className="relative perspective-1200 transition-transform duration-600"
                style={{
                  transformStyle: 'preserve-3d',
                  transform: 'perspective(1200px) rotateY(-8deg) rotateX(3deg)',
                  transitionTimingFunction: 'var(--ease-silk)',
                }}
              >
                {/* Product Image */}
                <div className="relative w-full max-w-md lg:max-w-lg">
                  <img
                    src="/images/hero-product.jpg"
                    alt="宫喜宫囍产后修复裤"
                    className="w-full h-auto rounded-2xl shadow-2xl"
                  />

                  {/* Decorative Elements */}
                  <div
                    className="absolute -top-6 -right-6 w-24 h-24 rounded-full border-2 border-palace-gold/30"
                    style={{
                      animation: 'float 8s ease-in-out infinite reverse',
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-moon-white to-transparent pointer-events-none" />
    </section>
  );
}
