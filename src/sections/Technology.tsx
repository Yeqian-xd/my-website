import { useEffect, useRef, useState } from 'react';
import { Cpu, Bone, Layers, Wind, Sparkles } from 'lucide-react';

const technologies = [
  {
    id: 1,
    icon: Layers,
    title: '分区动态加压系统',
    description: '针对腹直肌分离2-4指的不同程度，设计可替换压力片，实现精准修复。',
    stat: '3档',
    statLabel: '压力调节',
    color: 'bg-palace-red/10',
    iconColor: 'text-palace-red',
  },
  {
    id: 2,
    icon: Bone,
    title: '骨盆闭合力学结构',
    description: '3D立体剪裁配合记忆合金软支撑条，针对耻骨联合分离提供定向牵引。',
    stat: '95%',
    statLabel: '闭合率',
    color: 'bg-palace-gold/10',
    iconColor: 'text-palace-gold-dark',
  },
  {
    id: 3,
    icon: Cpu,
    title: '智能穿戴升级',
    description: '预留传感器接口，未来可监测腹直肌收缩力度，实现智能康复。',
    stat: '120万',
    statLabel: '创新机会',
    color: 'bg-palace-red/10',
    iconColor: 'text-palace-red',
  },
  {
    id: 4,
    icon: Wind,
    title: '医用级材质科技',
    description: '莫代尔+氨纶混纺，透气率≥300mm/s，符合A类母婴标准。',
    stat: '300',
    statLabel: 'mm/s透气率',
    color: 'bg-palace-gold/10',
    iconColor: 'text-palace-gold-dark',
  },
];

export default function Technology() {
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

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-20 lg:py-32 bg-moon-white overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #9D3D3D 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
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
              <Sparkles className="w-4 h-4 text-palace-gold" />
              <span className="text-sm font-medium text-palace-red tracking-wider uppercase">
                科技匠心
              </span>
              <Sparkles className="w-4 h-4 text-palace-gold" />
            </div>
            <h2
              className={`text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-ink-black mb-4 transition-all duration-700 delay-100 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
            >
              核心<span className="text-palace-red">技术优势</span>
            </h2>
            <p
              className={`text-base lg:text-lg text-warm-gray max-w-2xl mx-auto transition-all duration-700 delay-200 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
            >
              医用标准，创新科技，为产后修复提供专业保障
            </p>
          </div>

          {/* Tech Cards Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <div
                key={tech.id}
                className={`group relative bg-white rounded-2xl p-6 shadow-card transition-all duration-500 hover:-translate-y-3 hover:shadow-card-hover ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-12'
                }`}
                style={{
                  transitionDelay: `${300 + index * 100}ms`,
                  transitionTimingFunction: 'var(--ease-emphasis)',
                }}
              >
                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-xl ${tech.color} flex items-center justify-center mb-5 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`}
                >
                  <tech.icon className={`w-7 h-7 ${tech.iconColor}`} />
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-ink-black mb-3">
                  {tech.title}
                </h3>
                <p className="text-sm text-warm-gray leading-relaxed mb-5">
                  {tech.description}
                </p>

                {/* Stat */}
                <div className="pt-4 border-t border-palace-red/10">
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-bold text-palace-red">
                      {tech.stat}
                    </span>
                    <span className="text-xs text-warm-gray">
                      {tech.statLabel}
                    </span>
                  </div>
                </div>

                {/* Hover Decoration */}
                <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-gradient-to-br from-palace-red/10 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
              </div>
            ))}
          </div>


        </div>
      </div>
    </section>
  );
}
