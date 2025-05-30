
import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, Award, Clock, ShieldCheck, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-amber-900">
      {/* Professional Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-amber-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-orange-400 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-6">
              <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black hover:from-yellow-400 hover:to-orange-400 text-sm px-6 py-3 rounded-full shadow-lg font-bold">
                <Award className="w-4 h-4 mr-2" />
                Authentic • Traditional • Premium Quality
              </Badge>
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="text-white">DSR</span>
                <span className="block text-6xl lg:text-8xl bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-300 bg-clip-text text-transparent font-extrabold">
                  AUTHENTIC
                </span>
                <span className="block text-4xl lg:text-6xl text-yellow-400 font-semibold">
                  FOODS
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-slate-200 max-w-2xl leading-relaxed">
                Experience the <span className="font-bold text-yellow-300">authentic taste of Andhra Pradesh</span> with our traditional Sweet Putharekulu, handcrafted using 200-year-old family recipes.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <div className="flex items-center gap-2 bg-white rounded-full px-6 py-3 border-2 border-yellow-400 shadow-lg">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                  ))}
                </div>
                <span className="text-slate-900 font-bold">4.9/5 (2,847 reviews)</span>
              </div>
              <div className="flex items-center gap-2 bg-green-500 text-white rounded-full px-6 py-3 shadow-lg">
                <ShieldCheck className="w-5 h-5" />
                <span className="font-bold">GI Certified</span>
              </div>
              <div className="flex items-center gap-2 bg-blue-600 text-white rounded-full px-6 py-3 shadow-lg">
                <Clock className="w-5 h-5" />
                <span className="font-bold">Made Fresh Daily</span>
              </div>
            </div>

            <div className="space-y-6">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 text-black text-xl px-10 py-6 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 group font-bold"
              >
                Order Premium Putharekulu Now
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <div className="flex items-center justify-center lg:justify-start gap-8 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                  <span className="text-yellow-300 font-bold">⏰ Only 47 boxes left today!</span>
                </div>
                <div className="text-yellow-300 font-bold">🚚 Free delivery above ₹500</div>
              </div>
            </div>
          </div>

          {/* Right Content - Professional Product Image */}
          <div className="relative">
            <div className="relative mx-auto w-full max-w-[600px] aspect-square">
              {/* Main product image container */}
              <div className="relative w-full h-full bg-gradient-to-br from-white to-yellow-100 rounded-3xl shadow-2xl border-4 border-yellow-400 overflow-hidden">
                <img 
                  src="/placeholder.svg" 
                  alt="Premium Sweet Putharekulu - Traditional Andhra Pradesh Delicacy"
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay with product info */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-8">
                  <div className="text-white">
                    <h3 className="text-2xl font-bold mb-2">Premium Sweet Putharekulu</h3>
                    <p className="text-yellow-300 font-semibold">Handcrafted in Atreyapuram, Andhra Pradesh</p>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-red-600 text-white px-6 py-3 rounded-xl text-sm font-bold shadow-xl animate-bounce border-2 border-white">
                LIMITED STOCK!
              </div>
              <div className="absolute -bottom-4 -left-4 bg-green-600 text-white px-6 py-3 rounded-xl text-sm font-bold shadow-xl border-2 border-white">
                ✓ Fresh Today
              </div>
              <div className="absolute top-1/2 -left-8 bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg transform -rotate-12 border-2 border-white">
                25% OFF
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-16 -right-16 w-32 h-32 bg-yellow-400 rounded-full blur-3xl opacity-60"></div>
            <div className="absolute -bottom-16 -left-16 w-40 h-40 bg-orange-400 rounded-full blur-3xl opacity-50"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
