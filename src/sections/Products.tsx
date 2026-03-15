import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import ProductModal from '@/components/ProductModal';

const products = [
  {
    id: 1,
    name: '零压合胯裤',
    subtitle: '产后0-6周',
    price: 298,
    originalPrice: 358,
    tag: '黄金修复期',
    image: '/images/product-1.jpg',
    description: '产后初期，身体需要最温柔的呵护。医用级低压力设计，辅助骨盆闭合，缓解伤口疼痛。特别适合剖腹产妈妈产后恢复期使用。',
    features: [
      '医用级低压力设计，不压迫伤口',
      '辅助骨盆闭合，缓解耻骨联合分离',
      '透气抗菌材质，A类母婴标准',
      '侧开设计，穿脱方便不弯腰',
      '无痕剪裁，舒适贴身',
    ],
    specs: [
      { label: '材质', value: '莫代尔+氨纶' },
      { label: '压力等级', value: '低压力' },
      { label: '适用阶段', value: '产后0-6周' },
      { label: '洗涤方式', value: '手洗/机洗（轻柔模式）' },
      { label: '产地', value: '中国' },
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: '肤色', value: '#E8D4C4' },
      { name: '黑色', value: '#2C2C2C' },
    ],
    reviews: 2847,
    rating: 5,
  },
  {
    id: 2,
    name: '轻压收腹裤',
    subtitle: '产后6周-3个月',
    price: 328,
    originalPrice: 398,
    tag: '功能重塑期',
    image: '/images/product-2.jpg',
    description: '腹直肌分离修复的关键期，分区加压设计针对性支撑，帮助核心肌群恢复。3D立体剪裁，记忆合金软支撑，让修复更科学有效。',
    features: [
      '分区加压，针对腹直肌精准支撑',
      '3D立体剪裁，贴合身形',
      '记忆合金软支撑条',
      '可调节压力片，三档调节',
      '透气网眼设计，不闷热',
    ],
    specs: [
      { label: '材质', value: '莫代尔+氨纶+记忆合金' },
      { label: '压力等级', value: '中压力' },
      { label: '适用阶段', value: '产后6周-3个月' },
      { label: '洗涤方式', value: '手洗/机洗（轻柔模式）' },
      { label: '产地', value: '中国' },
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: '肤色', value: '#E8D4C4' },
      { name: '黑色', value: '#2C2C2C' },
    ],
    reviews: 3156,
    rating: 5,
  },
  {
    id: 3,
    name: '功能塑形裤',
    subtitle: '产后3-12个月',
    price: 368,
    originalPrice: 438,
    tag: '体态优化期',
    image: '/images/product-3.jpg',
    description: '巩固修复成果，优化体态曲线。加强型设计，帮助恢复孕前状态。运动辅助功能，让产后恢复更科学更高效。',
    features: [
      '加强型压力，塑形效果更明显',
      '骨盆外扩矫正功能',
      '运动辅助设计，可轻度运动',
      '无痕隐形，可外穿搭配',
      '高腰设计，全方位包裹',
    ],
    specs: [
      { label: '材质', value: '高弹莫代尔+氨纶' },
      { label: '压力等级', value: '高压力' },
      { label: '适用阶段', value: '产后3-12个月' },
      { label: '洗涤方式', value: '手洗/机洗（轻柔模式）' },
      { label: '产地', value: '中国' },
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: '肤色', value: '#E8D4C4' },
      { name: '黑色', value: '#2C2C2C' },
    ],
    reviews: 1923,
    rating: 5,
  },
  {
    id: 4,
    name: '无痕收腹安全裤',
    subtitle: '日常穿搭',
    price: 258,
    originalPrice: 298,
    tag: '外出隐形',
    image: '/images/product-4.jpg',
    description: '无痕设计，可外穿搭配裙装。轻薄透气，日常穿着无负担。既是修复裤，也是安全裤，一物两用更实惠。',
    features: [
      '无痕设计，外穿不尴尬',
      '轻薄透气，夏日首选',
      '防走光安全裤功能',
      '可搭配裙装、短裤',
      '日常穿着无负担',
    ],
    specs: [
      { label: '材质', value: '冰丝面料' },
      { label: '压力等级', value: '轻度' },
      { label: '适用场景', value: '日常/外出' },
      { label: '洗涤方式', value: '手洗/机洗' },
      { label: '产地', value: '中国' },
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: '肤色', value: '#E8D4C4' },
      { name: '黑色', value: '#2C2C2C' },
    ],
    reviews: 3421,
    rating: 5,
  },
];

interface ProductsProps {
  onViewAll?: () => void;
}

export default function Products({ onViewAll }: ProductsProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const openProductModal = (product: typeof products[0]) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProduct(null), 300);
  };

  return (
    <>
      <section
        id="products"
        ref={sectionRef}
        className="relative w-full py-20 lg:py-32 bg-moon-white overflow-hidden"
      >
        {/* Background Decoration */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-palace-red/5 to-transparent pointer-events-none" />

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
                  产品系列
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
                分阶段<span className="text-palace-red">修复方案</span>
              </h2>
              <p
                className={`text-base lg:text-lg text-warm-gray max-w-2xl mx-auto transition-all duration-700 delay-200 ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
              >
                针对产后不同时期的科学修复产品，循序渐进，安全有效
              </p>
            </div>

            {/* Products Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {products.map((product, index) => (
                <div
                  key={product.id}
                  className={`group relative bg-white rounded-2xl overflow-hidden shadow-card transition-all duration-500 ${
                    isVisible
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-12'
                  } ${
                    hoveredId === product.id
                      ? '-translate-y-3 shadow-card-hover'
                      : ''
                  }`}
                  style={{
                    transitionDelay: `${300 + index * 150}ms`,
                    transitionTimingFunction: 'var(--ease-silk)',
                  }}
                  onMouseEnter={() => setHoveredId(product.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  {/* Image */}
                  <div 
                    className="relative aspect-[3/4] overflow-hidden bg-gradient-to-b from-palace-red/5 to-transparent cursor-pointer"
                    onClick={() => openProductModal(product)}
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    
                    {/* Tag */}
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center px-3 py-1 bg-palace-red text-white text-xs font-medium rounded-full">
                        {product.tag}
                      </span>
                    </div>

                    {/* Quick View Overlay */}
                    <div
                      className={`absolute inset-0 bg-palace-red/80 flex items-center justify-center transition-opacity duration-300 ${
                        hoveredId === product.id ? 'opacity-100' : 'opacity-0'
                      }`}
                    >
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          openProductModal(product);
                        }}
                        className="px-6 py-2 bg-white text-palace-red text-sm font-medium rounded-full transform transition-transform duration-300 hover:scale-105"
                      >
                        快速查看
                      </button>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <p className="text-xs text-warm-gray mb-1">{product.subtitle}</p>
                    <h3 
                      className="text-lg font-semibold text-ink-black mb-2 cursor-pointer hover:text-palace-red transition-colors"
                      onClick={() => openProductModal(product)}
                    >
                      {product.name}
                    </h3>
                    <p className="text-sm text-warm-gray mb-4 line-clamp-2">
                      {product.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-baseline gap-1">
                        <span className="text-xs text-warm-gray">¥</span>
                        <span className="text-xl font-bold text-palace-red">
                          {product.price}
                        </span>
                        {product.originalPrice && (
                          <span className="text-xs text-warm-gray line-through ml-1">
                            ¥{product.originalPrice}
                          </span>
                        )}
                      </div>
                      <button 
                        onClick={() => openProductModal(product)}
                        className="flex items-center gap-1 text-sm font-medium text-palace-red hover:text-palace-red-dark transition-colors"
                      >
                        了解详情
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div
              className={`text-center mt-12 transition-all duration-700 delay-700 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <button 
                onClick={onViewAll}
                className="btn-gold group"
              >
                查看全部产品
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Product Modal */}
      <ProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </>
  );
}
