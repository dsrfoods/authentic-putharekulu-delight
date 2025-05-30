
import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, Award, Clock, ShieldCheck } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-amber-100 via-yellow-50 to-orange-100">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-yellow-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-orange-400 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-60 h-60 bg-amber-300 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <Badge className="bg-amber-600 text-white hover:bg-amber-700 text-sm px-4 py-2">
                <Award className="w-4 h-4 mr-2" />
                100% Authentic Traditional Recipe
              </Badge>
              
              <h1 className="text-5xl lg:text-7xl font-bold text-amber-900 leading-tight">
                DSR
                <span className="block text-6xl lg:text-8xl bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
                  AUTHENTIC
                </span>
                <span className="block text-4xl lg:text-6xl text-amber-800">
                  FOODS
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-amber-700 max-w-2xl">
                Experience the <span className="font-semibold text-amber-900">authentic taste of Andhra Pradesh</span> with our traditional Sweet Putharekulu, crafted using age-old recipes passed down through generations.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 border border-amber-200">
                <Star className="w-5 h-5 text-yellow-500 fill-current" />
                <span className="text-amber-900 font-medium">4.9/5 Rating</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 border border-amber-200">
                <ShieldCheck className="w-5 h-5 text-green-600" />
                <span className="text-amber-900 font-medium">100% Pure</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 border border-amber-200">
                <Clock className="w-5 h-5 text-blue-600" />
                <span className="text-amber-900 font-medium">Fresh Daily</span>
              </div>
            </div>

            <div className="space-y-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white text-xl px-8 py-6 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                Order Now - Limited Stock! 🔥
              </Button>
              
              <p className="text-sm text-amber-600 font-medium">
                ⏰ Only 47 boxes left today! | 🚚 Free delivery above ₹500
              </p>
            </div>
          </div>

          {/* Right Content - Product Image */}
          <div className="relative">
            <div className="relative mx-auto w-96 h-96 lg:w-[500px] lg:h-[500px]">
              {/* Decorative circles */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-200 to-orange-200 rounded-full blur-2xl opacity-60 animate-pulse"></div>
              <div className="absolute inset-4 bg-gradient-to-br from-amber-300 to-yellow-300 rounded-full blur-xl opacity-80"></div>
              
              {/* Product placeholder - using a warm golden background */}
              <div className="relative z-10 w-full h-full bg-gradient-to-br from-amber-200 via-yellow-200 to-orange-200 rounded-full flex items-center justify-center border-4 border-white shadow-2xl">
                <div className="text-center">
                  <div className="text-6xl mb-4">🥮</div>
                  <div className="text-2xl font-bold text-amber-900">Sweet</div>
                  <div className="text-xl text-amber-700">Putharekulu</div>
                </div>
              </div>
              
              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-bounce">
                LIMITED TIME!
              </div>
              <div className="absolute -bottom-4 -left-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                Fresh Today
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
