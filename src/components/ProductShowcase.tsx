
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

  const productImages = [
    "/lovable-uploads/329817c8-54d3-4316-a4b3-3b850eb93587.png",
    "/lovable-uploads/eed5e66b-aa6c-4bba-b8f5-f9c33f71d3da.png",
    "/lovable-uploads/1f42a721-cad4-4cdf-8d07-c6bf0f03e46e.png",
    "/lovable-uploads/7fa082ec-11af-41c3-9de2-f08fa802a926.png",
    "/lovable-uploads/4348a3fe-6405-4708-95bf-4ef9dbea1c2c.png",
    "/lovable-uploads/2bcd9256-a90e-4243-8c57-beaab45e3925.png"
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-800 to-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20 animate-fade-in">
          <Badge className="bg-yellow-400 text-black px-6 py-2 mb-6 rounded-full text-lg font-bold animate-bounce">
            Premium Traditional Sweet
          </Badge>
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6 animate-scale-in">
            Authentic Sweet Putharekulu
          </h2>
          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed animate-fade-in delay-300">
            Handcrafted with love in the traditional kitchens of Atreyapuram, Andhra Pradesh. Each delicate layer is carefully prepared using pure ghee, premium dry fruits, and time-honored techniques passed down through generations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-center max-w-7xl mx-auto">
          {/* Enhanced Product Gallery with Real Images */}
          <div className="space-y-6 animate-slide-in-right">
            {/* Main product image */}
            <div className="relative aspect-square bg-gradient-to-br from-amber-50 to-orange-100 rounded-3xl p-4 shadow-2xl border-4 border-yellow-400 overflow-hidden hover:scale-105 transition-transform duration-500">
              <img 
                src={productImages[0]} 
                alt="Authentic Sweet Putharekulu - layered traditional sweet"
                className="w-full h-full object-cover rounded-2xl"
              />
              
              {/* Image overlays */}
              <div className="absolute top-6 right-6 bg-red-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg border-2 border-white animate-pulse">
                25% OFF
              </div>
              <div className="absolute bottom-6 left-6 bg-green-600 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2 shadow-lg border-2 border-white animate-bounce">
                <Zap className="w-4 h-4" />
                Best Seller
              </div>
            </div>
            
            {/* Enhanced thumbnail gallery with real images */}
            <div className="grid grid-cols-3 gap-4">
              {productImages.slice(1, 4).map((image, index) => (
                <div key={index} className="aspect-square rounded-xl border-4 border-yellow-400 overflow-hidden hover:scale-110 transition-transform duration-300 animate-fade-in" style={{animationDelay: `${index * 200}ms`}}>
                  <img 
                    src={image} 
                    alt={`Putharekulu variety ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Additional product images row */}
            <div className="grid grid-cols-3 gap-4">
              {productImages.slice(4, 7).map((image, index) => (
                <div key={index} className="aspect-square rounded-xl border-4 border-yellow-400 overflow-hidden hover:scale-110 transition-transform duration-300 animate-fade-in" style={{animationDelay: `${(index + 3) * 200}ms`}}>
                  <img 
                    src={image} 
                    alt={`Putharekulu packaging ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-8 animate-slide-in-left">
            <div>
              <div className="flex items-center gap-3 mb-4 animate-fade-in">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current animate-bounce" style={{animationDelay: `${i * 100}ms`}} />
                  ))}
                </div>
                <span className="text-slate-300 font-bold text-lg">(2,847 verified reviews)</span>
                <Badge className="bg-green-600 text-white ml-2 animate-pulse">Verified Purchase</Badge>
              </div>
              
              <h3 className="text-4xl font-bold text-white mb-6 animate-scale-in">
                Traditional Sweet Putharekulu
              </h3>
              
              <div className="flex items-center gap-6 mb-8 animate-fade-in delay-300">
                <span className="text-5xl font-bold text-green-400">
                  ₹{currentProduct?.price}
                </span>
                <div>
                  <span className="text-2xl text-slate-400 line-through block">
                    ₹{currentProduct?.originalPrice}
                  </span>
                  <Badge className="bg-red-600 text-white text-lg px-3 py-1 animate-pulse">
                    Save ₹{currentProduct?.savings}
                  </Badge>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className={`text-center p-4 ${feature.bg} rounded-xl shadow-lg border-2 border-white hover:scale-110 transition-transform duration-300 animate-fade-in`} style={{animationDelay: `${index * 200}ms`}}>
                    <feature.icon className={`w-8 h-8 ${feature.color} mx-auto mb-2`} />
                    <div className={`text-sm font-bold ${feature.color}`}>{feature.text}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div className="animate-fade-in delay-500">
              <h4 className="text-xl font-bold text-white mb-4">Choose Your Pack Size:</h4>
              <div className="grid grid-cols-3 gap-4">
                {sizes.map((size, index) => (
                  <Card 
                    key={size.weight}
                    className={`cursor-pointer transition-all duration-300 hover:scale-105 animate-fade-in ${
                      selectedSize === size.weight 
                        ? 'border-4 border-yellow-400 bg-yellow-100 shadow-xl scale-105' 
                        : 'border-2 border-slate-600 bg-slate-800 hover:border-yellow-400 hover:shadow-lg'
                    } ${size.popular ? 'ring-4 ring-orange-400' : ''}`}
                    onClick={() => setSelectedSize(size.weight)}
                    style={{animationDelay: `${index * 150}ms`}}
                  >
                    <CardContent className="p-6 text-center relative">
                      {size.popular && (
                        <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white text-sm animate-bounce">
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
            <div className="space-y-6 animate-fade-in delay-700">
              <div>
                <h4 className="text-xl font-bold text-white mb-4">Quantity:</h4>
                <div className="flex items-center gap-4">
                  <Button 
                    variant="outline" 
                    size="lg"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-12 h-12 rounded-full border-4 border-yellow-400 bg-slate-800 text-white hover:bg-yellow-400 hover:text-black hover:scale-110 transition-all"
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
                    className="w-12 h-12 rounded-full border-4 border-yellow-400 bg-slate-800 text-white hover:bg-yellow-400 hover:text-black hover:scale-110 transition-all"
                  >
                    +
                  </Button>
                </div>
              </div>

              <div className="flex gap-4">
                <Button 
                  size="lg" 
                  className="flex-1 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 text-black text-xl py-8 rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-300 font-bold animate-pulse"
                >
                  <ShoppingCart className="w-6 h-6 mr-3" />
                  Add to Cart - ₹{(currentProduct?.price || 0) * quantity}
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="w-20 h-20 rounded-2xl border-4 border-red-400 bg-slate-800 hover:bg-red-400 hover:scale-110 transition-all"
                >
                  <Heart className="w-8 h-8 text-red-500" />
                </Button>
              </div>

              {/* Contact Information */}
              <div className="bg-gradient-to-r from-green-600 to-blue-600 border-4 border-white rounded-xl p-6 animate-bounce">
                <div className="flex items-center gap-3 text-white font-bold text-lg">
                  <Zap className="w-6 h-6" />
                  <span>📞 Call 7659089234 for immediate fresh delivery!</span>
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
