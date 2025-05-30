
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Heart, ShoppingCart, Zap } from 'lucide-react';

const ProductShowcase = () => {
  const [selectedSize, setSelectedSize] = useState('500g');
  const [quantity, setQuantity] = useState(1);

  const sizes = [
    { weight: '250g', price: 299, originalPrice: 399, savings: 100 },
    { weight: '500g', price: 549, originalPrice: 799, savings: 250, popular: true },
    { weight: '1kg', price: 999, originalPrice: 1499, savings: 500 }
  ];

  const currentProduct = sizes.find(s => s.weight === selectedSize);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-amber-900 mb-4">
            Authentic Sweet Putharekulu
          </h2>
          <p className="text-xl text-amber-700 max-w-3xl mx-auto">
            Handcrafted with love in the traditional kitchens of Andhra Pradesh, using pure ghee, premium dry fruits, and time-honored techniques.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Product Image */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-amber-100 to-yellow-100 rounded-3xl p-8 shadow-2xl">
              <div className="w-full h-full bg-gradient-to-br from-yellow-200 to-orange-200 rounded-2xl flex items-center justify-center border-4 border-white">
                <div className="text-center">
                  <div className="text-8xl mb-6">🥮</div>
                  <div className="text-3xl font-bold text-amber-900">Premium</div>
                  <div className="text-xl text-amber-700">Sweet Putharekulu</div>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
              25% OFF
            </div>
            <div className="absolute bottom-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1">
              <Zap className="w-4 h-4" />
              Best Seller
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-amber-700 font-medium">(2,847 reviews)</span>
              </div>
              
              <h3 className="text-3xl font-bold text-amber-900 mb-4">
                Traditional Sweet Putharekulu
              </h3>
              
              <div className="flex items-center gap-4 mb-6">
                <span className="text-4xl font-bold text-green-600">
                  ₹{currentProduct?.price}
                </span>
                <span className="text-2xl text-gray-500 line-through">
                  ₹{currentProduct?.originalPrice}
                </span>
                <Badge className="bg-red-500 text-white">
                  Save ₹{currentProduct?.savings}
                </Badge>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center p-3 bg-amber-50 rounded-lg border border-amber-200">
                  <div className="text-2xl mb-1">🌾</div>
                  <div className="text-sm font-medium text-amber-900">Pure Ingredients</div>
                </div>
                <div className="text-center p-3 bg-amber-50 rounded-lg border border-amber-200">
                  <div className="text-2xl mb-1">👨‍🍳</div>
                  <div className="text-sm font-medium text-amber-900">Handmade</div>
                </div>
                <div className="text-center p-3 bg-amber-50 rounded-lg border border-amber-200">
                  <div className="text-2xl mb-1">🏆</div>
                  <div className="text-sm font-medium text-amber-900">Award Winning</div>
                </div>
              </div>
            </div>

            {/* Size Selection */}
            <div>
              <h4 className="text-lg font-semibold text-amber-900 mb-3">Choose Size:</h4>
              <div className="grid grid-cols-3 gap-3">
                {sizes.map((size) => (
                  <Card 
                    key={size.weight}
                    className={`cursor-pointer transition-all duration-300 ${
                      selectedSize === size.weight 
                        ? 'border-amber-500 bg-amber-50 shadow-lg' 
                        : 'border-gray-200 hover:border-amber-300'
                    } ${size.popular ? 'ring-2 ring-orange-400' : ''}`}
                    onClick={() => setSelectedSize(size.weight)}
                  >
                    <CardContent className="p-4 text-center relative">
                      {size.popular && (
                        <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white text-xs">
                          Most Popular
                        </Badge>
                      )}
                      <div className="font-bold text-amber-900">{size.weight}</div>
                      <div className="text-green-600 font-semibold">₹{size.price}</div>
                      <div className="text-xs text-gray-500 line-through">₹{size.originalPrice}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-semibold text-amber-900 mb-3">Quantity:</h4>
                <div className="flex items-center gap-3">
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 rounded-full"
                  >
                    -
                  </Button>
                  <span className="text-xl font-semibold text-amber-900 w-12 text-center">
                    {quantity}
                  </span>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 rounded-full"
                  >
                    +
                  </Button>
                </div>
              </div>

              <div className="flex gap-4">
                <Button 
                  size="lg" 
                  className="flex-1 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white text-lg py-6 rounded-full shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Add to Cart - ₹{(currentProduct?.price || 0) * quantity}
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="w-16 h-16 rounded-full border-amber-300 hover:bg-amber-50"
                >
                  <Heart className="w-6 h-6 text-red-500" />
                </Button>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="flex items-center gap-2 text-green-700 font-medium">
                  <Zap className="w-5 h-5" />
                  <span>⚡ Limited Time Offer: Order in next 2 hours and get FREE delivery!</span>
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
