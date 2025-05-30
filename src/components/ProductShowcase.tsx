
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
    { icon: Shield, text: "GI Certified Authentic", color: "text-green-600" },
    { icon: Award, text: "5 Generation Recipe", color: "text-amber-600" },
    { icon: Truck, text: "Fresh Delivery", color: "text-blue-600" }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <Badge className="bg-amber-100 text-amber-800 px-6 py-2 mb-6 rounded-full text-lg font-semibold">
            Premium Traditional Sweet
          </Badge>
          <h2 className="text-5xl lg:text-6xl font-bold text-slate-800 mb-6">
            Authentic Sweet Putharekulu
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Handcrafted with love in the traditional kitchens of Atreyapuram, Andhra Pradesh. Each delicate layer is carefully prepared using pure ghee, premium dry fruits, and time-honored techniques passed down through generations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-center max-w-7xl mx-auto">
          {/* Product Gallery */}
          <div className="space-y-6">
            {/* Main product image */}
            <div className="relative aspect-square bg-gradient-to-br from-amber-50 to-white rounded-3xl p-8 shadow-2xl border border-amber-100 overflow-hidden">
              <img 
                src="/placeholder.svg" 
                alt="Premium Sweet Putharekulu close-up view showing delicate layers"
                className="w-full h-full object-cover rounded-2xl"
              />
              
              {/* Image overlays */}
              <div className="absolute top-6 right-6 bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                25% OFF
              </div>
              <div className="absolute bottom-6 left-6 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2 shadow-lg">
                <Zap className="w-4 h-4" />
                Best Seller
              </div>
            </div>
            
            {/* Thumbnail gallery */}
            <div className="grid grid-cols-3 gap-4">
              <div className="aspect-square bg-amber-50 rounded-xl border-2 border-amber-200 overflow-hidden">
                <img src="/placeholder.svg" alt="Putharekulu packaging" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-square bg-amber-50 rounded-xl border-2 border-amber-200 overflow-hidden">
                <img src="/placeholder.svg" alt="Traditional preparation process" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-square bg-amber-50 rounded-xl border-2 border-amber-200 overflow-hidden">
                <img src="/placeholder.svg" alt="Gift box presentation" className="w-full h-full object-cover" />
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
                <span className="text-slate-600 font-semibold text-lg">(2,847 verified reviews)</span>
                <Badge className="bg-green-100 text-green-800 ml-2">Verified Purchase</Badge>
              </div>
              
              <h3 className="text-4xl font-bold text-slate-800 mb-6">
                Traditional Sweet Putharekulu
              </h3>
              
              <div className="flex items-center gap-6 mb-8">
                <span className="text-5xl font-bold text-green-600">
                  ₹{currentProduct?.price}
                </span>
                <div>
                  <span className="text-2xl text-slate-400 line-through block">
                    ₹{currentProduct?.originalPrice}
                  </span>
                  <Badge className="bg-red-500 text-white text-lg px-3 py-1">
                    Save ₹{currentProduct?.savings}
                  </Badge>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="text-center p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
                    <feature.icon className={`w-8 h-8 ${feature.color} mx-auto mb-2`} />
                    <div className="text-sm font-semibold text-slate-700">{feature.text}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div>
              <h4 className="text-xl font-bold text-slate-800 mb-4">Choose Your Pack Size:</h4>
              <div className="grid grid-cols-3 gap-4">
                {sizes.map((size) => (
                  <Card 
                    key={size.weight}
                    className={`cursor-pointer transition-all duration-300 ${
                      selectedSize === size.weight 
                        ? 'border-amber-500 bg-amber-50 shadow-xl scale-105' 
                        : 'border-slate-200 hover:border-amber-300 hover:shadow-lg'
                    } ${size.popular ? 'ring-2 ring-orange-400' : ''}`}
                    onClick={() => setSelectedSize(size.weight)}
                  >
                    <CardContent className="p-6 text-center relative">
                      {size.popular && (
                        <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white text-sm">
                          Most Popular
                        </Badge>
                      )}
                      <div className="font-bold text-slate-800 text-lg">{size.weight}</div>
                      <div className="text-green-600 font-bold text-xl">₹{size.price}</div>
                      <div className="text-xs text-slate-400 line-through">₹{size.originalPrice}</div>
                      <div className="text-xs text-slate-600 mt-1">{size.pieces}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-bold text-slate-800 mb-4">Quantity:</h4>
                <div className="flex items-center gap-4">
                  <Button 
                    variant="outline" 
                    size="lg"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-12 h-12 rounded-full border-2"
                  >
                    -
                  </Button>
                  <span className="text-2xl font-bold text-slate-800 w-16 text-center">
                    {quantity}
                  </span>
                  <Button 
                    variant="outline" 
                    size="lg"
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-12 h-12 rounded-full border-2"
                  >
                    +
                  </Button>
                </div>
              </div>

              <div className="flex gap-4">
                <Button 
                  size="lg" 
                  className="flex-1 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white text-xl py-8 rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  <ShoppingCart className="w-6 h-6 mr-3" />
                  Add to Cart - ₹{(currentProduct?.price || 0) * quantity}
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="w-20 h-20 rounded-2xl border-amber-300 hover:bg-amber-50"
                >
                  <Heart className="w-8 h-8 text-red-500" />
                </Button>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-xl p-6">
                <div className="flex items-center gap-3 text-green-700 font-semibold text-lg">
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
