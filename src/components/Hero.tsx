
import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, Award, Clock, ShieldCheck, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-amber-50">
      {/* Professional Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-72 h-72 bg-amber-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-orange-200 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-6">
              <Badge className="bg-gradient-to-r from-amber-600 to-orange-600 text-white hover:from-amber-700 hover:to-orange-700 text-sm px-6 py-3 rounded-full shadow-lg">
                <Award className="w-4 h-4 mr-2" />
                Authentic • Traditional • Premium Quality
              </Badge>
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="text-slate-800">DSR</span>
                <span className="block text-6xl lg:text-8xl bg-gradient-to-r from-amber-600 via-orange-600 to-yellow-600 bg-clip-text text-transparent font-extrabold">
                  AUTHENTIC
                </span>
                <span className="block text-4xl lg:text-6xl text-amber-700 font-semibold">
                  FOODS
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-slate-700 max-w-2xl leading-relaxed">
                Experience the <span className="font-bold text-amber-800">authentic taste of Andhra Pradesh</span> with our traditional Sweet Putharekulu, handcrafted using 200-year-old family recipes.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 border border-amber-200 shadow-md">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                  ))}
                </div>
                <span className="text-slate-700 font-semibold">4.9/5 (2,847 reviews)</span>
              </div>
              <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 border border-green-200 shadow-md">
                <ShieldCheck className="w-5 h-5 text-green-600" />
                <span className="text-slate-700 font-semibold">GI Certified</span>
              </div>
              <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full px-6 py-3 border border-blue-200 shadow-md">
                <Clock className="w-5 h-5 text-blue-600" />
                <span className="text-slate-700 font-semibold">Made Fresh Daily</span>
              </div>
            </div>

            <div className="space-y-6">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white text-xl px-10 py-6 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 group"
              >
                Order Premium Putharekulu Now
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <div className="flex items-center justify-center lg:justify-start gap-8 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                  <span className="text-slate-600 font-medium">⏰ Only 47 boxes left today!</span>
                </div>
                <div className="text-slate-600 font-medium">🚚 Free delivery above ₹500</div>
              </div>
            </div>
          </div>

          {/* Right Content - Professional Product Image */}
          <div className="relative">
            <div className="relative mx-auto w-full max-w-[600px] aspect-square">
              {/* Main product image container */}
              <div className="relative w-full h-full bg-gradient-to-br from-white to-amber-50 rounded-3xl shadow-2xl border border-amber-100 overflow-hidden">
                <img 
                  src="/placeholder.svg" 
                  alt="Premium Sweet Putharekulu - Traditional Andhra Pradesh Delicacy"
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay with product info */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-8">
                  <div className="text-white">
                    <h3 className="text-2xl font-bold mb-2">Premium Sweet Putharekulu</h3>
                    <p className="text-amber-200">Handcrafted in Atreyapuram, Andhra Pradesh</p>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-red-500 text-white px-6 py-3 rounded-xl text-sm font-bold shadow-xl animate-bounce">
                LIMITED STOCK!
              </div>
              <div className="absolute -bottom-4 -left-4 bg-green-500 text-white px-6 py-3 rounded-xl text-sm font-bold shadow-xl">
                ✓ Fresh Today
              </div>
              <div className="absolute top-1/2 -left-8 bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg transform -rotate-12">
                25% OFF
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-16 -right-16 w-32 h-32 bg-yellow-300 rounded-full blur-3xl opacity-40"></div>
            <div className="absolute -bottom-16 -left-16 w-40 h-40 bg-orange-300 rounded-full blur-3xl opacity-30"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
