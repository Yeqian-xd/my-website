import { useState } from 'react';
import { ArrowLeft, Filter, Grid3X3, List, ShoppingBag, Heart, Star } from 'lucide-react';
import ProductModal from '@/components/ProductModal';

const allProducts = [
  {
    id: 1,
    name: '零压合胯裤',
    subtitle: '产后0-6周',
    price: 298,
    originalPrice: 358,
    tag: '黄金修复期',
    image: '/images/product-1.jpg',
    description: '产后初期，身体需要最温柔的呵护。医用级低压力设计，辅助骨盆闭合，缓解伤口疼痛。',
    features: ['医用级低压力设计', '辅助骨盆闭合', '透气抗菌材质', '侧开设计'],
    specs: [
      { label: '材质', value: '莫代尔+氨纶' },
      { label: '压力等级', value: '低压力' },
      { label: '适用阶段', value: '产后0-6周' },
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: '肤色', value: '#E8D4C4' },
      { name: '黑色', value: '#2C2C2C' },
    ],
    reviews: 2847,
    rating: 5,
    category: '修复期',
  },
  {
    id: 2,
    name: '轻压收腹裤',
    subtitle: '产后6周-3个月',
    price: 328,
    originalPrice: 398,
    tag: '功能重塑期',
    image: '/images/product-2.jpg',
    description: '腹直肌分离修复的关键期，分区加压设计针对性支撑，帮助核心肌群恢复。',
    features: ['分区加压', '3D立体剪裁', '记忆合金软支撑', '可调节压力片'],
    specs: [
      { label: '材质', value: '莫代尔+氨纶+记忆合金' },
      { label: '压力等级', value: '中压力' },
      { label: '适用阶段', value: '产后6周-3个月' },
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: '肤色', value: '#E8D4C4' },
      { name: '黑色', value: '#2C2C2C' },
    ],
    reviews: 3156,
    rating: 5,
    category: '重塑期',
  },
  {
    id: 3,
    name: '功能塑形裤',
    subtitle: '产后3-12个月',
    price: 368,
    originalPrice: 438,
    tag: '体态优化期',
    image: '/images/product-3.jpg',
    description: '巩固修复成果，优化体态曲线。加强型设计，帮助恢复孕前状态。',
    features: ['加强型压力', '骨盆外扩矫正', '运动辅助功能', '无痕隐形设计'],
    specs: [
      { label: '材质', value: '高弹莫代尔+氨纶' },
      { label: '压力等级', value: '高压力' },
      { label: '适用阶段', value: '产后3-12个月' },
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: '肤色', value: '#E8D4C4' },
      { name: '黑色', value: '#2C2C2C' },
    ],
    reviews: 1923,
    rating: 5,
    category: '优化期',
  },
  {
    id: 4,
    name: '无痕收腹安全裤',
    subtitle: '日常穿搭',
    price: 258,
    originalPrice: 298,
    tag: '外出隐形',
    image: '/images/product-4.jpg',
    description: '无痕设计，可外穿搭配裙装。轻薄透气，日常穿着无负担。',
    features: ['无痕设计', '轻薄透气', '防走光功能', '可外穿搭配'],
    specs: [
      { label: '材质', value: '冰丝面料' },
      { label: '压力等级', value: '轻度' },
      { label: '适用场景', value: '日常/外出' },
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: '肤色', value: '#E8D4C4' },
      { name: '黑色', value: '#2C2C2C' },
    ],
    reviews: 3421,
    rating: 5,
    category: '日常款',
  },
  {
    id: 5,
    name: '黄金修复套装',
    subtitle: '三阶段组合',
    price: 598,
    originalPrice: 994,
    tag: '超值套装',
    image: '/images/product-1.jpg',
    description: '包含零压合胯裤+轻压收腹裤+功能塑形裤，完整修复周期一站式解决。',
    features: ['三阶段完整修复', '比单买省¥396', '赠送修复手册', '专属顾问服务'],
    specs: [
      { label: '包含产品', value: '3件' },
      { label: '适用周期', value: '产后0-12个月' },
      { label: '优惠力度', value: '6折' },
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: '肤色', value: '#E8D4C4' },
    ],
    reviews: 892,
    rating: 5,
    category: '套装',
  },
  {
    id: 6,
    name: '夏季冰丝款',
    subtitle: '清凉透气',
    price: 278,
    originalPrice: 328,
    tag: '夏季新品',
    image: '/images/product-4.jpg',
    description: '专为夏季设计，冰丝面料轻薄透气，修复不闷热。',
    features: ['冰丝面料', '超薄透气', '速干排汗', '清凉舒适'],
    specs: [
      { label: '材质', value: '冰丝+莫代尔' },
      { label: '厚度', value: '超薄' },
      { label: '适用季节', value: '夏季' },
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: '肤色', value: '#E8D4C4' },
      { name: '黑色', value: '#2C2C2C' },
    ],
    reviews: 567,
    rating: 5,
    category: '季节款',
  },
];

interface ProductsPageProps {
  onBack: () => void;
}

export default function ProductsPage({ onBack }: ProductsPageProps) {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedCategory, setSelectedCategory] = useState('全部');
  const [selectedProduct, setSelectedProduct] = useState<typeof allProducts[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [sortBy, setSortBy] = useState('default');

  const categories = ['全部', '修复期', '重塑期', '优化期', '日常款', '套装', '季节款'];

  const filteredProducts = selectedCategory === '全部'
    ? allProducts
    : allProducts.filter(p => p.category === selectedCategory);

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-asc':
        return a.price - b.price;
      case 'price-desc':
        return b.price - a.price;
      case 'popular':
        return b.reviews - a.reviews;
      default:
        return 0;
    }
  });

  const openProductModal = (product: typeof allProducts[0]) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProduct(null), 300);
  };

  return (
    <div className="min-h-screen bg-moon-white">
      {/* Header */}
      <header className="sticky top-0 z-50 glass-effect border-b border-palace-red/10">
        <div className="section-container">
          <div className="section-inner h-16 flex items-center justify-between">
            <button
              onClick={onBack}
              className="flex items-center gap-2 text-ink-black hover:text-palace-red transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">返回首页</span>
            </button>
            <h1 className="text-xl font-serif font-bold text-ink-black">
              全部产品
            </h1>
            <div className="w-20" />
          </div>
        </div>
      </header>

      {/* Filters */}
      <div className="section-container py-6">
        <div className="section-inner">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === cat
                    ? 'bg-palace-red text-white'
                    : 'bg-white text-ink-black hover:bg-palace-red-pale'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Sort & View */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Filter className="w-4 h-4 text-warm-gray" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="text-sm border border-palace-red/20 rounded-lg px-3 py-2 bg-white focus:outline-none focus:border-palace-red"
              >
                <option value="default">默认排序</option>
                <option value="price-asc">价格从低到高</option>
                <option value="price-desc">价格从高到低</option>
                <option value="popular">最受欢迎</option>
              </select>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'grid'
                    ? 'bg-palace-red text-white'
                    : 'bg-white text-ink-black hover:bg-palace-red-pale'
                }`}
              >
                <Grid3X3 className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'list'
                    ? 'bg-palace-red text-white'
                    : 'bg-white text-ink-black hover:bg-palace-red-pale'
                }`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Products */}
      <div className="section-container pb-12">
        <div className="section-inner">
          <p className="text-sm text-warm-gray mb-4">
            共 {sortedProducts.length} 件产品
          </p>

          {viewMode === 'grid' ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {sortedProducts.map((product) => (
                <div
                  key={product.id}
                  className="group bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
                >
                  <div
                    className="relative aspect-[3/4] overflow-hidden cursor-pointer"
                    onClick={() => openProductModal(product)}
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute top-4 left-4 px-3 py-1 bg-palace-red text-white text-xs font-medium rounded-full">
                      {product.tag}
                    </span>
                    <button className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Heart className="w-5 h-5 text-palace-red" />
                    </button>
                  </div>
                  <div className="p-5">
                    <p className="text-xs text-warm-gray mb-1">{product.subtitle}</p>
                    <h3
                      className="text-lg font-semibold text-ink-black mb-2 cursor-pointer hover:text-palace-red transition-colors"
                      onClick={() => openProductModal(product)}
                    >
                      {product.name}
                    </h3>
                    <div className="flex items-center gap-1 mb-3">
                      {[...Array(product.rating)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-palace-gold text-palace-gold" />
                      ))}
                      <span className="text-xs text-warm-gray">({product.reviews})</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-baseline gap-2">
                        <span className="text-xl font-bold text-palace-red">
                          ¥{product.price}
                        </span>
                        {product.originalPrice && (
                          <span className="text-sm text-warm-gray line-through">
                            ¥{product.originalPrice}
                          </span>
                        )}
                      </div>
                      <button
                        onClick={() => openProductModal(product)}
                        className="w-10 h-10 rounded-full bg-palace-red text-white flex items-center justify-center hover:bg-palace-red-dark transition-colors"
                      >
                        <ShoppingBag className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {sortedProducts.map((product) => (
                <div
                  key={product.id}
                  className="group flex gap-6 bg-white rounded-2xl p-4 shadow-card hover:shadow-card-hover transition-all"
                >
                  <div
                    className="w-48 h-48 rounded-xl overflow-hidden flex-shrink-0 cursor-pointer"
                    onClick={() => openProductModal(product)}
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-between py-2">
                    <div>
                      <div className="flex items-start justify-between">
                        <div>
                          <span className="inline-block px-2 py-1 bg-palace-red/10 text-palace-red text-xs rounded-full mb-2">
                            {product.tag}
                          </span>
                          <h3
                            className="text-xl font-semibold text-ink-black mb-1 cursor-pointer hover:text-palace-red transition-colors"
                            onClick={() => openProductModal(product)}
                          >
                            {product.name}
                          </h3>
                          <p className="text-sm text-warm-gray mb-2">{product.subtitle}</p>
                        </div>
                        <div className="flex items-center gap-1">
                          {[...Array(product.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-palace-gold text-palace-gold" />
                          ))}
                          <span className="text-sm text-warm-gray">({product.reviews})</span>
                        </div>
                      </div>
                      <p className="text-sm text-warm-gray line-clamp-2">
                        {product.description}
                      </p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-bold text-palace-red">
                          ¥{product.price}
                        </span>
                        {product.originalPrice && (
                          <span className="text-sm text-warm-gray line-through">
                            ¥{product.originalPrice}
                          </span>
                        )}
                      </div>
                      <div className="flex gap-2">
                        <button className="p-2 rounded-lg border border-palace-red/20 hover:border-palace-red transition-colors">
                          <Heart className="w-5 h-5 text-palace-red" />
                        </button>
                        <button
                          onClick={() => openProductModal(product)}
                          className="px-6 py-2 bg-palace-red text-white rounded-lg hover:bg-palace-red-dark transition-colors"
                        >
                          查看详情
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Product Modal */}
      <ProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </div>
  );
}
