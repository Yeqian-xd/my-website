import { useEffect, useRef, useState } from 'react';
import { MessageCircle, Phone, MapPin, Mail } from 'lucide-react';

const quickLinks = [
  { label: '首页', href: '#hero' },
  { label: '产品系列', href: '#products' },
  { label: '精品礼盒', href: '#gift' },
  { label: '修复阶段', href: '#stages' },
  { label: '关于我们', href: '#about' },
  { label: '联系我们', href: '#contact' },
];

const productLinks = [
  { label: '零压合胯裤', href: '#products' },
  { label: '轻压收腹裤', href: '#products' },
  { label: '功能塑形裤', href: '#products' },
  { label: '无痕收腹安全裤', href: '#products' },
  { label: '精品礼盒', href: '#gift' },
];

const contactInfo = [
  { icon: Phone, label: '客服热线', value: '13380240176' },
  { icon: MessageCircle, label: '在线咨询', value: '9:00-21:00' },
  { icon: MapPin, label: '门店地址', value: '佛山市南海区大沥镇美思 · 汇B座923' },
  { icon: Mail, label: '合作咨询', value: 'partner@gongxi.com' },
];

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
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

    if (footerRef.current) {
      observer.observe(footerRef.current);
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
    <footer
      ref={footerRef}
      className="relative w-full bg-palace-red text-white overflow-hidden"
    >
      {/* Decorative Top Border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-palace-gold to-transparent" />

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-palace-gold"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${5 + Math.random() * 5}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="section-container relative z-10">
        <div className="section-inner">
          {/* Main Footer Content */}
          <div className="py-16 lg:py-20">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
              {/* Brand Column */}
              <div
                className={`lg:col-span-1 transition-all duration-700 ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
              >
                <h3 className="text-2xl font-serif font-bold mb-4">
                  宫喜宫囍
                </h3>
                <p className="text-sm text-white/70 leading-relaxed mb-6">
                  医疗级产后功能性修复服饰品牌，专注产后0-12个月科学修复，让产后恢复成为被祝福的旅程。
                </p>
                {/* Social Icons */}
                <div className="flex gap-3">
                  {['微信', '微博', '小红书', '抖音'].map((platform) => (
                    <button
                      key={platform}
                      className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-xs text-white/70 hover:bg-palace-gold hover:text-palace-red transition-all duration-300 hover:scale-110"
                      title={platform}
                    >
                      {platform[0]}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quick Links */}
              <div
                className={`transition-all duration-700 delay-100 ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
              >
                <h4 className="text-sm font-semibold uppercase tracking-wider mb-6">
                  快速链接
                </h4>
                <ul className="space-y-3">
                  {quickLinks.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        onClick={(e) => {
                          e.preventDefault();
                          scrollToSection(link.href);
                        }}
                        className="text-sm text-white/70 hover:text-palace-gold transition-colors duration-300 inline-flex items-center gap-2 group"
                      >
                        <span className="w-0 h-px bg-palace-gold transition-all duration-300 group-hover:w-3" />
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Products */}
              <div
                className={`transition-all duration-700 delay-200 ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
              >
                <h4 className="text-sm font-semibold uppercase tracking-wider mb-6">
                  产品系列
                </h4>
                <ul className="space-y-3">
                  {productLinks.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        onClick={(e) => {
                          e.preventDefault();
                          scrollToSection(link.href);
                        }}
                        className="text-sm text-white/70 hover:text-palace-gold transition-colors duration-300 inline-flex items-center gap-2 group"
                      >
                        <span className="w-0 h-px bg-palace-gold transition-all duration-300 group-hover:w-3" />
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact */}
              <div
                className={`transition-all duration-700 delay-300 ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
              >
                <h4 className="text-sm font-semibold uppercase tracking-wider mb-6">
                  联系我们
                </h4>
                <ul className="space-y-4">
                  {contactInfo.map((item) => (
                    <li key={item.label} className="flex items-start gap-3">
                      <item.icon className="w-4 h-4 text-palace-gold mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-xs text-white/50">{item.label}</p>
                        <p className="text-sm text-white/90">{item.value}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div
            className={`py-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 transition-all duration-700 delay-400 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
          >
            <p className="text-xs text-white/50">
              © 2024 宫喜宫囍 保留所有权利
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-xs text-white/50 hover:text-palace-gold transition-colors"
              >
                隐私政策
              </a>
              <a
                href="#"
                className="text-xs text-white/50 hover:text-palace-gold transition-colors"
              >
                使用条款
              </a>
              <a
                href="#"
                className="text-xs text-white/50 hover:text-palace-gold transition-colors"
              >
                网站地图
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
