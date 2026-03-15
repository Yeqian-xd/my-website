import { useEffect, useRef, useState } from 'react';
import { Gift, Heart, Sparkles, ArrowRight, Check } from 'lucide-react';

const giftFeatures = [
  '精美礼盒包装',
  '附赠祝福卡片',
  '顺丰包邮配送',
  '代写祝福语',
];

const giftScenarios = [
  { title: '送闺蜜', desc: '产后探望，心意满满' },
  { title: '送妻子', desc: '温柔呵护，爱意表达' },
  { title: '送女儿', desc: '妈妈关怀，温暖陪伴' },
  { title: '送自己', desc: '宠爱自己，值得最好' },
];

export default function GiftBox() {
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
      { threshold: 0.1 }
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
      id="gift"
      ref={sectionRef}
      className="relative w-full py-20 lg:py-32 bg-gradient-to-b from-palace-red-pale to-moon-white overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-palace-red/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-palace-gold/10 rounded-full blur-3xl" />
      </div>

      {/* Floating Hearts */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <Heart
            key={i}
            className="absolute w-4 h-4 text-palace-red/10"
            style={{
              left: `${10 + i * 15}%`,
              top: `${15 + (i % 3) * 30}%`,
              animation: `float ${5 + i}s ease-in-out infinite`,
              animationDelay: `${i * 0.8}s`,
            }}
          />
        ))}
      </div>

      <div className="section-container relative z-10">
        <div className="section-inner">
          {/* Header */}
          <div className="text-center mb-12 lg:mb-16">
            <div
              className={`flex items-center justify-center gap-2 mb-4 transition-all duration-700 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <Gift className="w-4 h-4 text-palace-red" />
              <span className="text-sm font-medium text-palace-red tracking-wider uppercase">
                精品礼盒
              </span>
              <Gift className="w-4 h-4 text-palace-red" />
            </div>
            <h2
              className={`text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-ink-black mb-4 transition-all duration-700 delay-100 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
            >
              一份<span className="text-palace-red">恭喜</span>，一份心意
            </h2>
            <p
              className={`text-base lg:text-lg text-warm-gray max-w-2xl mx-auto transition-all duration-700 delay-200 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
            >
              "宫喜宫囍"谐音"恭喜"，将产后修复产品化作一份温暖的祝福，
              <br className="hidden sm:block" />
              送给新手妈妈最贴心的关怀
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Gift Box Image */}
            <div
              className={`relative transition-all duration-1000 delay-300 ${
                isVisible
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 -translate-x-12'
              }`}
            >
              <div className="relative">
                <img
                  src="/images/gift-box.jpg"
                  alt="宫喜宫囍精品礼盒"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
                
                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-palace-gold/30 rounded-full blur-2xl" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-palace-red/20 rounded-full blur-2xl" />
              </div>
            </div>

            {/* Gift Info */}
            <div className="flex flex-col gap-8">
              {/* Features */}
              <div
                className={`transition-all duration-700 delay-400 ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
              >
                <h3 className="text-xl font-semibold text-ink-black mb-4 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-palace-gold" />
                  礼盒包含
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {giftFeatures.map((feature, index) => (
                    <div
                      key={feature}
                      className="flex items-center gap-2 p-3 bg-white rounded-lg shadow-sm"
                      style={{ animationDelay: `${500 + index * 100}ms` }}
                    >
                      <Check className="w-4 h-4 text-palace-red flex-shrink-0" />
                      <span className="text-sm text-ink-black">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Scenarios */}
              <div
                className={`transition-all duration-700 delay-500 ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
              >
                <h3 className="text-xl font-semibold text-ink-black mb-4 flex items-center gap-2">
                  <Heart className="w-5 h-5 text-palace-red" />
                  适合送给
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {giftScenarios.map((scenario, index) => (
                    <div
                      key={scenario.title}
                      className="p-4 bg-white rounded-xl shadow-sm border border-palace-red/10 hover:border-palace-red/30 hover:shadow-card transition-all duration-300"
                      style={{ animationDelay: `${600 + index * 100}ms` }}
                    >
                      <p className="font-medium text-ink-black">{scenario.title}</p>
                      <p className="text-xs text-warm-gray">{scenario.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div
                className={`flex flex-wrap gap-4 transition-all duration-700 delay-600 ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
              >
                <button
                  onClick={() => scrollToSection('#products')}
                  className="btn-primary group flex-1 sm:flex-none"
                >
                  选购礼盒装
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
                <button
                  onClick={() => scrollToSection('#contact')}
                  className="btn-secondary flex-1 sm:flex-none"
                >
                  咨询定制
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
