import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Shield, Heart } from 'lucide-react';

const trustBadges = [
  { icon: Shield, label: '医疗器械认证' },
  { icon: Heart, label: 'A类母婴标准' },
];

export default function CTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative w-full py-20 lg:py-32 bg-moon-white overflow-hidden"
    >
      {/* Radial Gradient Background */}
      <div
        className={`absolute inset-0 transition-all duration-1000 ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
        }`}
        style={{
          background: 'radial-gradient(circle at center, rgba(157, 61, 61, 0.08) 0%, transparent 70%)',
          transitionTimingFunction: 'var(--ease-ink-flow)',
        }}
      />

      {/* Floating Decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-10 left-10 w-32 h-32 border border-palace-red/10 rounded-full"
          style={{ animation: 'float 10s ease-in-out infinite' }}
        />
        <div
          className="absolute bottom-10 right-10 w-24 h-24 border border-palace-gold/20 rounded-full"
          style={{ animation: 'float 8s ease-in-out infinite reverse' }}
        />
      </div>

      <div className="section-container relative z-10">
        <div className="section-inner">
          <div className="max-w-3xl mx-auto text-center">
            {/* Title */}
            <h2
              className={`text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-ink-black mb-6 transition-all duration-700 delay-300 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionTimingFunction: 'var(--ease-emphasis)' }}
            >
              开启您的<span className="text-palace-red">修复之旅</span>
            </h2>

            {/* Subtitle */}
            <p
              className={`text-base lg:text-lg text-warm-gray mb-10 transition-all duration-700 delay-500 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionTimingFunction: 'var(--ease-porcelain)' }}
            >
              专业顾问1对1服务，为您定制专属修复方案
            </p>

            {/* CTA Buttons */}
            <div
              className={`flex flex-wrap justify-center gap-4 mb-10 transition-all duration-700 delay-700 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <button
                onClick={() => scrollToSection('#products')}
                className="btn-primary group text-base px-8 py-4"
              >
                免费咨询
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
              <button
                onClick={() => scrollToSection('#products')}
                className="btn-secondary text-base px-8 py-4"
              >
                探索产品
              </button>
            </div>

            {/* Trust Badges */}
            <div
              className={`flex flex-wrap justify-center gap-6 transition-all duration-700 delay-900 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
            >
              {trustBadges.map((badge, index) => (
                <div
                  key={badge.label}
                  className="flex items-center gap-2 text-sm text-warm-gray"
                  style={{ animationDelay: `${900 + index * 100}ms` }}
                >
                  <badge.icon className="w-4 h-4 text-palace-red" />
                  <span>{badge.label}</span>
                </div>
              ))}
            </div>

            {/* Contact Info */}
            <div
              className={`mt-12 pt-8 border-t border-palace-red/10 transition-all duration-700 delay-1000 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="grid sm:grid-cols-3 gap-6">
                <div>
                  <p className="text-xs text-warm-gray mb-1">客服热线</p>
                  <p className="text-lg font-semibold text-ink-black">
                    13380240176
                  </p>
                </div>
                <div>
                  <p className="text-xs text-warm-gray mb-1">在线咨询</p>
                  <p className="text-lg font-semibold text-ink-black">
                    9:00-21:00
                  </p>
                </div>
                <div>
                  <p className="text-xs text-warm-gray mb-1">服务范围</p>
                  <p className="text-lg font-semibold text-ink-black">
                    全国配送
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
