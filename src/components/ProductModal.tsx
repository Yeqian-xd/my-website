import { useEffect, useState } from 'react';
import { Check, ShoppingBag, Heart, Share2, Minus, Plus, Star } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

interface Product {
  id: number;
  name: string;
  subtitle: string;
  price: number;
  originalPrice?: number;
  tag: string;
  image: string;
  description: string;
  features: string[];
  specs: { label: string; value: string }[];
  sizes: string[];
  colors: { name: string; value: string }[];
  reviews: number;
  rating: number;
}

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProductModal({ product, isOpen, onClose }: ProductModalProps) {
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [isGiftWrap, setIsGiftWrap] = useState(false);
  const [activeTab, setActiveTab] = useState<'details' | 'specs' | 'shipping'>('details');

  useEffect(() => {
    if (product) {
      setSelectedSize(product.sizes[0] || '');
      setSelectedColor(product.colors[0]?.name || '');
      setQuantity(1);
      setIsGiftWrap(false);
      setActiveTab('details');
    }
  }, [product]);

  if (!product) return null;

  const finalPrice = isGiftWrap ? product.price + 38 : product.price;

  const handleAddToCart = () => {
    alert(`已将 ${product.name} (${selectedSize}, ${selectedColor}) x${quantity}${isGiftWrap ? ' + 礼盒包装' : ''} 加入购物车`);
    onClose();
  };

  const handleBuyNow = () => {
    alert(`正在跳转到结算页面...\n${product.name} (${selectedSize}, ${selectedColor}) x${quantity}${isGiftWrap ? ' + 礼盒包装' : ''}`);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0">
        <DialogHeader className="p-6 pb-0">
          <DialogTitle className="text-2xl font-serif font-bold text-ink-black">
            {product.name}
          </DialogTitle>
        </DialogHeader>

        <div className="p-6">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Product Image */}
            <div className="relative">
              <div className="aspect-[3/4] rounded-xl overflow-hidden bg-gradient-to-b from-palace-red/5 to-transparent">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="absolute top-4 left-4 px-3 py-1 bg-palace-red text-white text-xs font-medium rounded-full">
                {product.tag}
              </span>
              
              {/* Action Buttons */}
              <div className="absolute top-4 right-4 flex gap-2">
                <button className="w-10 h-10 rounded-full bg-white/90 backdrop-blur flex items-center justify-center shadow-sm hover:bg-palace-red-pale transition-colors">
                  <Heart className="w-5 h-5 text-palace-red" />
                </button>
                <button className="w-10 h-10 rounded-full bg-white/90 backdrop-blur flex items-center justify-center shadow-sm hover:bg-palace-red-pale transition-colors">
                  <Share2 className="w-5 h-5 text-palace-red" />
                </button>
              </div>
            </div>

            {/* Product Info */}
            <div className="flex flex-col gap-6">
              {/* Price & Rating */}
              <div>
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="text-3xl font-bold text-palace-red">
                    ¥{finalPrice}
                  </span>
                  {product.originalPrice && (
                    <span className="text-lg text-warm-gray line-through">
                      ¥{product.originalPrice}
                  </span>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < product.rating
                            ? 'fill-palace-gold text-palace-gold'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-warm-gray">
                    {product.reviews} 条评价
                  </span>
                </div>
              </div>

              <p className="text-sm text-warm-gray leading-relaxed">
                {product.description}
              </p>

              {/* Color Selection */}
              <div>
                <label className="text-sm font-medium text-ink-black mb-2 block">
                  颜色
                </label>
                <div className="flex gap-2">
                  {product.colors.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color.name)}
                      className={`w-10 h-10 rounded-full border-2 transition-all ${
                        selectedColor === color.name
                          ? 'border-palace-red scale-110'
                          : 'border-transparent hover:border-palace-red/50'
                      }`}
                      style={{ backgroundColor: color.value }}
                      title={color.name}
                    />
                  ))}
                </div>
                <span className="text-xs text-warm-gray mt-1">
                  已选：{selectedColor}
                </span>
              </div>

              {/* Size Selection */}
              <div>
                <label className="text-sm font-medium text-ink-black mb-2 block">
                  尺码
                </label>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 rounded-lg border text-sm font-medium transition-all ${
                        selectedSize === size
                          ? 'border-palace-red bg-palace-red text-white'
                          : 'border-palace-red/20 text-ink-black hover:border-palace-red'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div>
                <label className="text-sm font-medium text-ink-black mb-2 block">
                  数量
                </label>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 rounded-lg border border-palace-red/20 flex items-center justify-center hover:border-palace-red transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-12 text-center font-medium">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 rounded-lg border border-palace-red/20 flex items-center justify-center hover:border-palace-red transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Gift Wrap Option */}
              <div className="p-4 bg-palace-red-pale rounded-xl">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={isGiftWrap}
                    onChange={(e) => setIsGiftWrap(e.target.checked)}
                    className="w-5 h-5 rounded border-palace-red text-palace-red focus:ring-palace-red"
                  />
                  <div className="flex-1">
                    <p className="font-medium text-ink-black flex items-center gap-2">
                      <ShoppingBag className="w-4 h-4 text-palace-red" />
                      添加精品礼盒包装
                    </p>
                    <p className="text-xs text-warm-gray">
                      精美礼盒 + 祝福卡片 + 顺丰包邮 (+¥38)
                    </p>
                  </div>
                </label>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <Button
                  onClick={handleAddToCart}
                  className="flex-1 bg-palace-red hover:bg-palace-red-dark text-white"
                >
                  <ShoppingBag className="w-4 h-4 mr-2" />
                  加入购物车
                </Button>
                <Button
                  onClick={handleBuyNow}
                  className="flex-1 bg-palace-gold hover:bg-palace-gold-dark text-ink-black"
                >
                  立即购买
                </Button>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="mt-8 border-t border-palace-red/10 pt-6">
            <div className="flex gap-6 mb-6">
              {[
                { key: 'details', label: '产品详情' },
                { key: 'specs', label: '规格参数' },
                { key: 'shipping', label: '配送说明' },
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key as typeof activeTab)}
                  className={`text-sm font-medium pb-2 border-b-2 transition-colors ${
                    activeTab === tab.key
                      ? 'border-palace-red text-palace-red'
                      : 'border-transparent text-warm-gray hover:text-ink-black'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="text-sm text-warm-gray leading-relaxed">
              {activeTab === 'details' && (
                <div className="space-y-3">
                  <p className="font-medium text-ink-black mb-2">产品特点：</p>
                  <ul className="space-y-2">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-palace-red mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {activeTab === 'specs' && (
                <div className="grid grid-cols-2 gap-4">
                  {product.specs.map((spec, i) => (
                    <div key={i} className="flex justify-between py-2 border-b border-palace-red/10">
                      <span className="text-warm-gray">{spec.label}</span>
                      <span className="text-ink-black">{spec.value}</span>
                    </div>
                  ))}
                </div>
              )}
              {activeTab === 'shipping' && (
                <div className="space-y-3">
                  <p>• 普通快递：3-5个工作日，满199元包邮</p>
                  <p>• 顺丰速运：1-2个工作日，礼盒装默认顺丰</p>
                  <p>• 支持7天无理由退换（未拆封）</p>
                  <p>• 质量问题30天内免费换新</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
