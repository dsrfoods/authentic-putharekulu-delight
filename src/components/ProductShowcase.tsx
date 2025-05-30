import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Heart, ShoppingCart, Zap, Award, Shield, Truck } from 'lucide-react';

const ProductShowcase = () => {
  const [selectedSize, setSelectedSize] = useState('500g');
  const [quantity, setQuantity] = useState(1);

  const sizes = [
    { weight: '250g', price: 299, originalPrice: 399, savings: 100, pieces: '8-10 pieces' },
    { weight: '500g', price: 549, originalPrice: 799, savings: 250, pieces: '16-20 pieces', popular: true },
    { weight: '1kg', price: 999, originalPrice: 1499, savings: 500, pieces: '32-40 pieces' }
  ];

  const currentProduct = sizes.find(s => s.weight === selectedSize);

  const features = [
    { icon: Shield, text: "GI Certified Authentic", color: "text-white", bg: "bg-green-600" },
    { icon: Award, text: "5 Generation Recipe", color: "text-black", bg: "bg-yellow-400" },
    { icon: Truck, text: "Fresh Delivery", color: "text-white", bg: "bg-blue-600" }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-800 to-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <Badge className="bg-yellow-400 text-black px-6 py-2 mb-6 rounded-full text-lg font-bold">
            Premium Traditional Sweet
          </Badge>
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            Authentic Sweet Putharekulu
          </h2>
          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Handcrafted with love in the traditional kitchens of Atreyapuram, Andhra Pradesh. Each delicate layer is carefully prepared using pure ghee, premium dry fruits, and time-honored techniques passed down through generations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-center max-w-7xl mx-auto">
          {/* Enhanced Product Gallery */}
          <div className="space-y-6">
            {/* Main product image with putharekulu styling */}
            <div className="relative aspect-square bg-gradient-to-br from-amber-50 to-orange-100 rounded-3xl p-8 shadow-2xl border-4 border-yellow-400 overflow-hidden">
              {/* Enhanced putharekulu visual representation */}
              <div className="w-full h-full bg-gradient-to-br from-white to-yellow-50 rounded-2xl flex items-center justify-center relative overflow-hidden">
                {/* Layered effect to simulate putharekulu texture */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-100/80 to-orange-100/80 rounded-2xl">
                  <div className="absolute inset-4 bg-gradient-to-br from-white/90 to-yellow-50/90 rounded-xl">
                    <div className="absolute inset-8 bg-gradient-to-br from-amber-50 to-yellow-100 rounded-lg flex items-center justify-center">
                      <div className="text-center text-amber-900">
                        <div className="text-8xl mb-6">🥞</div>
                        <div className="text-2xl font-bold mb-2">Sweet Putharekulu</div>
                        <div className="text-lg">Paper Thin Delicacy</div>
                        <div className="text-sm opacity-80 mt-2">Multiple delicate layers</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Subtle pattern overlay */}
                <div className="absolute inset-0 opacity-10">
                  <div className="w-full h-full" style={{
                    backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,.1) 10px, rgba(0,0,0,.1) 20px)',
                  }}></div>
                </div>
              </div>
              
              {/* Image overlays */}
              <div className="absolute top-6 right-6 bg-red-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg border-2 border-white">
                25% OFF
              </div>
              <div className="absolute bottom-6 left-6 bg-green-600 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2 shadow-lg border-2 border-white">
                <Zap className="w-4 h-4" />
                Best Seller
              </div>
            </div>
            
            {/* Enhanced thumbnail gallery */}
            <div className="grid grid-cols-3 gap-4">
              <div className="aspect-square bg-gradient-to-br from-yellow-100 to-orange-100 rounded-xl border-4 border-yellow-400 overflow-hidden flex items-center justify-center">
                <div className="text-center text-amber-800">
                  <div className="text-4xl mb-2">📦</div>
                  <div className="text-xs font-bold">Premium<br/>Packaging</div>
                </div>
              </div>
              <div className="aspect-square bg-gradient-to-br from-yellow-100 to-orange-100 rounded-xl border-4 border-yellow-400 overflow-hidden flex items-center justify-center">
                <div className="text-center text-amber-800">
                  <div className="text-4xl mb-2">👨‍🍳</div>
                  <div className="text-xs font-bold">Traditional<br/>Process</div>
                </div>
              </div>
              <div className="aspect-square bg-gradient-to-br from-yellow-100 to-orange-100 rounded-xl border-4 border-yellow-400 overflow-hidden flex items-center justify-center">
                <div className="text-center text-amber-800">
                  <div className="text-4xl mb-2">🎁</div>
                  <div className="text-xs font-bold">Gift Box<br/>Ready</div>
                </div>
              </div>
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-slate-300 font-bold text-lg">(2,847 verified reviews)</span>
                <Badge className="bg-green-600 text-white ml-2">Verified Purchase</Badge>
              </div>
              
              <h3 className="text-4xl font-bold text-white mb-6">
                Traditional Sweet Putharekulu
              </h3>
              
              <div className="flex items-center gap-6 mb-8">
                <span className="text-5xl font-bold text-green-400">
                  ₹{currentProduct?.price}
                </span>
                <div>
                  <span className="text-2xl text-slate-400 line-through block">
                    ₹{currentProduct?.originalPrice}
                  </span>
                  <Badge className="bg-red-600 text-white text-lg px-3 py-1">
                    Save ₹{currentProduct?.savings}
                  </Badge>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className={`text-center p-4 ${feature.bg} rounded-xl shadow-lg border-2 border-white`}>
                    <feature.icon className={`w-8 h-8 ${feature.color} mx-auto mb-2`} />
                    <div className={`text-sm font-bold ${feature.color}`}>{feature.text}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div>
              <h4 className="text-xl font-bold text-white mb-4">Choose Your Pack Size:</h4>
              <div className="grid grid-cols-3 gap-4">
                {sizes.map((size) => (
                  <Card 
                    key={size.weight}
                    className={`cursor-pointer transition-all duration-300 ${
                      selectedSize === size.weight 
                        ? 'border-4 border-yellow-400 bg-yellow-100 shadow-xl scale-105' 
                        : 'border-2 border-slate-600 bg-slate-800 hover:border-yellow-400 hover:shadow-lg'
                    } ${size.popular ? 'ring-4 ring-orange-400' : ''}`}
                    onClick={() => setSelectedSize(size.weight)}
                  >
                    <CardContent className="p-6 text-center relative">
                      {size.popular && (
                        <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white text-sm">
                          Most Popular
                        </Badge>
                      )}
                      <div className={`font-bold text-lg ${selectedSize === size.weight ? 'text-black' : 'text-white'}`}>{size.weight}</div>
                      <div className={`font-bold text-xl ${selectedSize === size.weight ? 'text-green-600' : 'text-green-400'}`}>₹{size.price}</div>
                      <div className={`text-xs line-through ${selectedSize === size.weight ? 'text-slate-600' : 'text-slate-400'}`}>₹{size.originalPrice}</div>
                      <div className={`text-xs mt-1 ${selectedSize === size.weight ? 'text-slate-700' : 'text-slate-300'}`}>{size.pieces}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-bold text-white mb-4">Quantity:</h4>
                <div className="flex items-center gap-4">
                  <Button 
                    variant="outline" 
                    size="lg"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-12 h-12 rounded-full border-4 border-yellow-400 bg-slate-800 text-white hover:bg-yellow-400 hover:text-black"
                  >
                    -
                  </Button>
                  <span className="text-2xl font-bold text-white w-16 text-center">
                    {quantity}
                  </span>
                  <Button 
                    variant="outline" 
                    size="lg"
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-12 h-12 rounded-full border-4 border-yellow-400 bg-slate-800 text-white hover:bg-yellow-400 hover:text-black"
                  >
                    +
                  </Button>
                </div>
              </div>

              <div className="flex gap-4">
                <Button 
                  size="lg" 
                  className="flex-1 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 text-black text-xl py-8 rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-300 font-bold"
                >
                  <ShoppingCart className="w-6 h-6 mr-3" />
                  Add to Cart - ₹{(currentProduct?.price || 0) * quantity}
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="w-20 h-20 rounded-2xl border-4 border-red-400 bg-slate-800 hover:bg-red-400"
                >
                  <Heart className="w-8 h-8 text-red-500" />
                </Button>
              </div>

              <div className="bg-gradient-to-r from-green-600 to-blue-600 border-4 border-white rounded-xl p-6">
                <div className="flex items-center gap-3 text-white font-bold text-lg">
                  <Zap className="w-6 h-6" />
                  <span>⚡ Limited Time: Order in next 2 hours and get FREE express delivery!</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
