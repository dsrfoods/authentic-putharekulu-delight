
import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, Award, Clock, ShieldCheck, ArrowRight, Phone, MessageCircle, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-amber-900">
      {/* Professional Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-amber-400 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-orange-400 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-6 animate-fade-in">
            {/* Company Branding */}
            <div className="flex flex-col items-center lg:items-start space-y-4">
              <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black hover:from-yellow-400 hover:to-orange-400 text-sm sm:text-base lg:text-lg px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 rounded-full shadow-lg font-bold animate-bounce">
                <Award className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Authentic • Traditional • Premium Quality Since 1800s
              </Badge>
            </div>
            
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                <span className="text-white animate-fade-in">DSR</span>
                <span className="block text-4xl sm:text-5xl lg:text-6xl xl:text-7xl bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-300 bg-clip-text text-transparent font-extrabold animate-scale-in">
                  AUTHENTIC
                </span>
                <span className="block text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-yellow-400 font-semibold animate-slide-in-right">
                  FOODS
                </span>
              </h1>
              
              <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-slate-200 max-w-2xl leading-relaxed animate-fade-in delay-500">
                Experience the <span className="font-bold text-yellow-300">authentic taste of Andhra Pradesh</span> with our traditional Sweet Putharekulu, handcrafted using 200-year-old family recipes with pure love and tradition.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start animate-fade-in delay-700">
              <div className="flex items-center gap-2 bg-white rounded-full px-3 sm:px-4 lg:px-6 py-2 sm:py-3 border-2 border-yellow-400 shadow-lg hover:scale-105 transition-transform">
                <div className="flex">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-500 fill-current" />)}
                </div>
                <span className="text-slate-900 font-bold text-sm sm:text-base">4.9/5 (2,847 reviews)</span>
              </div>
              <div className="flex items-center gap-2 bg-green-500 text-white rounded-full px-3 sm:px-4 lg:px-6 py-2 sm:py-3 shadow-lg hover:scale-105 transition-transform">
                <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="font-bold text-sm sm:text-base">GI Certified</span>
              </div>
              <div className="flex items-center gap-2 bg-blue-600 text-white rounded-full px-3 sm:px-4 lg:px-6 py-2 sm:py-3 shadow-lg hover:scale-105 transition-transform">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="font-bold text-sm sm:text-base">Made Fresh Daily</span>
              </div>
            </div>

            {/* Modern CTA Section */}
            <div className="space-y-4 sm:space-y-6 animate-fade-in delay-1000">
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button size="lg" className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400 text-black text-base sm:text-lg lg:text-xl px-6 sm:px-8 lg:px-10 py-4 sm:py-5 lg:py-6 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 group font-bold flex-1">
                  Order Premium Putharekulu Now
                  <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 ml-2 sm:ml-3 group-hover:translate-x-1 transition-transform" />
                </Button>
                
                <Button variant="outline" size="lg" className="bg-white text-slate-900 border-4 border-yellow-400 hover:bg-yellow-400 hover:text-black text-base sm:text-lg lg:text-xl px-6 sm:px-8 py-4 sm:py-5 lg:py-6 rounded-full shadow-xl transform hover:scale-105 transition-all duration-300 font-bold">
                  <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3" />
                  Chat with Us
                </Button>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-8 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                  <span className="text-yellow-300 font-bold">⏰ Only 47 boxes left today!</span>
                </div>
                <div className="text-yellow-300 font-bold">🚚 Free delivery above ₹500</div>
              </div>

              {/* Enhanced Contact Information */}
              <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-xl p-4 sm:p-6 border-2 border-white animate-slide-in-right delay-1200 hover:scale-105 transition-transform">
                  <div className="flex items-center gap-3 text-white">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
                    <div>
                      <div className="font-bold text-sm sm:text-base lg:text-lg">📞 Call for Fresh Orders</div>
                      <div className="text-lg sm:text-xl lg:text-2xl font-bold">7659089234</div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-4 sm:p-6 border-2 border-white animate-slide-in-right delay-1400 hover:scale-105 transition-transform">
                  <div className="flex items-center gap-3 text-white">
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
                    <div>
                      <div className="font-bold text-sm sm:text-base lg:text-lg">WhatsApp Orders</div>
                      <div className="text-base sm:text-lg lg:text-xl font-bold">+91 940716411</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800 rounded-xl p-4 sm:p-6 border-2 border-yellow-400 animate-fade-in delay-1600">
                <div className="text-center">
                  <div className="text-yellow-400 font-bold text-base sm:text-lg mb-2">👨‍🍳 Your Authentic Food Specialist</div>
                  <div className="text-xl sm:text-2xl font-bold text-white">D.Bhanu Prakash</div>
                  <div className="text-slate-300 text-sm mt-2">Preserving Traditional Flavors • Atreyapuram, Andhra Pradesh</div>
                  <div className="text-yellow-300 font-bold mt-2">📍 "A Little Bliss in every bite" 🌟</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Enhanced Product Images */}
          <div className="relative animate-scale-in delay-300 flex justify-center">
            <div className="relative w-full max-w-[400px] sm:max-w-[500px] lg:max-w-[600px] aspect-square">
              {/* Main product image with real putharekulu */}
              <div className="relative w-full h-full bg-gradient-to-br from-amber-50 to-orange-100 rounded-3xl shadow-2xl border-4 border-yellow-400 overflow-hidden hover:scale-105 transition-transform duration-500">
                <img 
                  src="/lovable-uploads/eed5e66b-aa6c-4bba-b8f5-f9c33f71d3da.png" 
                  alt="Premium Sweet Putharekulu with almonds" 
                  className="w-full h-full object-cover rounded-2xl" 
                />
                
                {/* Overlay with product info */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4 sm:p-6 lg:p-8">
                  <div className="text-white">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2">Premium Sweet Putharekulu</h3>
                    <p className="text-yellow-300 font-semibold text-sm sm:text-base">Handcrafted in Atreyapuram, Andhra Pradesh</p>
                  </div>
                </div>
              </div>
              
              {/* Enhanced floating elements - adjusted for better mobile view */}
              <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 bg-red-600 text-white px-3 sm:px-6 py-2 sm:py-3 rounded-xl text-xs sm:text-sm font-bold shadow-xl animate-bounce border-2 border-white">
                LIMITED STOCK!
              </div>
              <div className="absolute -bottom-2 sm:-bottom-4 -left-2 sm:-left-4 bg-green-600 text-white px-3 sm:px-6 py-2 sm:py-3 rounded-xl text-xs sm:text-sm font-bold shadow-xl border-2 border-white animate-pulse">
                ✓ Fresh Today
              </div>
              <div className="absolute top-1/2 -left-4 sm:-left-8 bg-orange-600 text-white px-2 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-bold shadow-lg transform -rotate-12 border-2 border-white animate-bounce delay-500">
                25% OFF
              </div>
              <div className="absolute top-1/4 -right-4 sm:-right-8 bg-blue-600 text-white px-2 sm:px-4 py-1 sm:py-2 rounded-full text-xs font-bold shadow-lg transform rotate-12 border-2 border-white animate-pulse delay-700">
                ⭐ Best Quality
              </div>
            </div>

            {/* Decorative elements with animations - adjusted positioning */}
            <div className="absolute -top-8 sm:-top-16 -right-8 sm:-right-16 w-16 sm:w-32 h-16 sm:h-32 bg-yellow-400 rounded-full blur-3xl opacity-60 animate-pulse"></div>
            <div className="absolute -bottom-8 sm:-bottom-16 -left-8 sm:-left-16 w-20 sm:w-40 h-20 sm:h-40 bg-orange-400 rounded-full blur-3xl opacity-50 animate-pulse delay-700"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
