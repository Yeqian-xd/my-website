import { useEffect, useRef, useState } from 'react';
import { Stethoscope, Baby } from 'lucide-react';

const features = [
  {
    icon: Stethoscope,
    title: '医疗器械级',
    description: '标准生产',
  },
  {
    icon: Baby,
    title: 'A类母婴',
    description: '安全材质',
  },
];

export default function About() {
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

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative w-full py-20 lg:py-32 bg-moon-white overflow-hidden"
    >
      <div className="section-container">
        <div className="section-inner">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Content */}
            <div className="flex flex-col gap-8">
              {/* Eyebrow */}
              <div
                className={`flex items-center gap-3 transition-all duration-700 ${
                  isVisible
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 -translate-x-8'
                }`}
                style={{ transitionTimingFunction: 'var(--ease-ink-flow)' }}
              >
                <div className="w-1 h-6 bg-palace-red rounded-full" />
                <span className="text-sm font-medium text-palace-red tracking-wider uppercase">
                  关于我们
                </span>
              </div>

              {/* Title */}
              <h2
                className={`text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-ink-black leading-tight transition-all duration-700 delay-200 ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionTimingFunction: 'var(--ease-emphasis)' }}
              >
                传承东方智慧
                <br />
                <span className="text-palace-red">科学修复理念</span>
              </h2>

              {/* Description */}
              <p
                className={`text-base lg:text-lg text-warm-gray leading-relaxed max-w-lg transition-all duration-700 delay-300 ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionTimingFunction: 'var(--ease-porcelain)' }}
              >
                宫喜宫囍诞生于对传统"坐月子"文化的深度理解与对现代产后医学的尊重。
                我们相信，产后恢复不仅是身体的修复，更是一场值得被祝福的生命旅程。
              </p>

              {/* Features Grid */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                {features.map((feature, index) => (
                  <div
                    key={feature.title}
                    className={`group p-4 rounded-xl bg-white border border-palace-red/10 transition-all duration-500 hover:bg-palace-red-pale hover:border-palace-red/20 hover:-translate-y-1 ${
                      isVisible
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-8'
                    }`}
                    style={{
                      transitionDelay: `${400 + index * 100}ms`,
                      transitionTimingFunction: 'var(--ease-emphasis)',
                    }}
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-palace-red/10 flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:bg-palace-red group-hover:scale-110">
                        <feature.icon className="w-5 h-5 text-palace-red transition-colors group-hover:text-white" />
                      </div>
                      <div>
                        <h4 className="font-medium text-ink-black">
                          {feature.title}
                        </h4>
                        <p className="text-sm text-warm-gray">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Image */}
            <div
              className={`relative transition-all duration-1000 delay-400 ${
                isVisible
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 translate-x-12'
              }`}
              style={{ transitionTimingFunction: 'var(--ease-ink-flow)' }}
            >
              <div className="relative">
                <img
                  src="/images/about-brand.jpg"
                  alt="宫喜宫囍品牌理念"
                  className="w-full h-auto rounded-2xl shadow-card transition-all duration-500 hover:shadow-card-hover hover:scale-[1.02]"
                />
                
                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-palace-gold/20 rounded-full blur-2xl" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-palace-red/10 rounded-full blur-2xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
