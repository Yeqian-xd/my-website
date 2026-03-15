import { useEffect, useRef, useState } from 'react';
import { Check, Clock, Heart, Shield, Star, Zap } from 'lucide-react';

const stages = [
  {
    id: 1,
    title: '零压合胯裤',
    subtitle: '黄金修复期',
    period: '产后0-6周',
    description: '产后初期，身体需要最温柔的呵护。医用级低压力设计，辅助骨盆闭合，缓解伤口疼痛。',
    features: [
      { icon: Heart, text: '低压力设计，不压迫伤口' },
      { icon: Shield, text: '辅助骨盆闭合' },
      { icon: Star, text: '透气抗菌材质' },
      { icon: Zap, text: '侧开设计，穿脱方便' },
    ],
    color: 'from-palace-red/20 to-palace-red/5',
    image: '/images/product-1.jpg',
  },
  {
    id: 2,
    title: '轻压收腹裤',
    subtitle: '功能重塑期',
    period: '产后6周-3个月',
    description: '腹直肌分离修复的关键期，分区加压设计针对性支撑，帮助核心肌群恢复。',
    features: [
      { icon: Zap, text: '分区加压，针对腹直肌' },
      { icon: Star, text: '3D立体剪裁' },
      { icon: Shield, text: '记忆合金软支撑' },
      { icon: Check, text: '可调节压力片' },
    ],
    color: 'from-palace-gold/20 to-palace-gold/5',
    image: '/images/product-2.jpg',
  },
  {
    id: 3,
    title: '功能塑形裤',
    subtitle: '体态优化期',
    period: '产后3-12个月',
    description: '巩固修复成果，优化体态曲线。加强型设计，帮助恢复孕前状态。',
    features: [
      { icon: Star, text: '加强型压力' },
      { icon: Shield, text: '骨盆外扩矫正' },
      { icon: Zap, text: '运动辅助功能' },
      { icon: Heart, text: '无痕隐形设计' },
    ],
    color: 'from-palace-red/20 to-palace-red/5',
    image: '/images/product-3.jpg',
  },
];

export default function Stages() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeStage, setActiveStage] = useState(0);

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
      id="stages"
      ref={sectionRef}
      className="relative w-full py-20 lg:py-32 bg-moon-white overflow-hidden"
    >
      <div className="section-container">
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
              <Clock className="w-4 h-4 text-palace-red" />
              <span className="text-sm font-medium text-palace-red tracking-wider uppercase">
                修复指南
              </span>
            </div>
            <h2
              className={`text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-ink-black mb-4 transition-all duration-700 delay-100 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
            >
              产后修复<span className="text-palace-red">三阶段</span>
            </h2>
            <p
              className={`text-base lg:text-lg text-warm-gray max-w-2xl mx-auto transition-all duration-700 delay-200 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
            >
              科学规划，循序渐进，让恢复更安心
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-palace-red/20 transform -translate-x-1/2" />

            {/* Stages */}
            <div className="space-y-12 lg:space-y-0">
              {stages.map((stage, index) => (
                <div
                  key={stage.id}
                  className={`relative lg:grid lg:grid-cols-2 lg:gap-16 transition-all duration-700 ${
                    isVisible
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-12'
                  }`}
                  style={{
                    transitionDelay: `${300 + index * 200}ms`,
                    transitionTimingFunction: 'var(--ease-porcelain)',
                  }}
                >
                  {/* Timeline Node */}
                  <div className="hidden lg:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                    <button
                      onClick={() => setActiveStage(index)}
                      className={`relative w-6 h-6 rounded-full transition-all duration-300 ${
                        activeStage === index
                          ? 'bg-palace-red scale-125'
                          : 'bg-white border-2 border-palace-red hover:scale-110'
                      }`}
                    >
                      {activeStage === index && (
                        <span className="absolute inset-0 rounded-full bg-palace-red animate-pulse-ring" />
                      )}
                    </button>
                  </div>

                  {/* Content - Alternating sides */}
                  <div
                    className={`${
                      index % 2 === 0
                        ? 'lg:pr-16 lg:text-right'
                        : 'lg:col-start-2 lg:pl-16'
                    }`}
                  >
                    <div
                      className={`bg-gradient-to-br ${stage.color} rounded-2xl p-6 lg:p-8 transition-all duration-500 hover:shadow-card-hover ${
                        activeStage === index ? 'shadow-card-hover' : ''
                      }`}
                      onMouseEnter={() => setActiveStage(index)}
                    >
                      {/* Period Badge */}
                      <div
                        className={`inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full mb-4 ${
                          index % 2 === 0 ? 'lg:ml-auto' : ''
                        }`}
                      >
                        <Clock className="w-4 h-4 text-palace-red" />
                        <span className="text-sm font-medium text-palace-red">
                          {stage.period}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl lg:text-2xl font-serif font-bold text-ink-black mb-2">
                        {stage.title}
                      </h3>
                      <p className="text-sm font-medium text-palace-red mb-4">
                        {stage.subtitle}
                      </p>

                      {/* Description */}
                      <p className="text-sm lg:text-base text-warm-gray mb-6 leading-relaxed">
                        {stage.description}
                      </p>

                      {/* Features */}
                      <div
                        className={`grid grid-cols-2 gap-3 ${
                          index % 2 === 0 ? 'lg:text-left' : ''
                        }`}
                      >
                        {stage.features.map((feature, fIndex) => (
                          <div
                            key={fIndex}
                            className="flex items-center gap-2 text-sm text-ink-black"
                          >
                            <feature.icon className="w-4 h-4 text-palace-red flex-shrink-0" />
                            <span>{feature.text}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Image - Alternating sides */}
                  <div
                    className={`hidden lg:block ${
                      index % 2 === 0
                        ? 'lg:col-start-2 lg:pl-16'
                        : 'lg:col-start-1 lg:row-start-1 lg:pr-16'
                    }`}
                  >
                    <div className="relative h-full min-h-[300px] rounded-2xl overflow-hidden">
                      <img
                        src={stage.image}
                        alt={stage.title}
                        className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
                          activeStage === index
                            ? 'scale-105 opacity-100'
                            : 'scale-100 opacity-70'
                        }`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-palace-red/20 to-transparent" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
