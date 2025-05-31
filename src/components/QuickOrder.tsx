
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Phone, ShoppingCart, Clock, Zap, Gift, Truck, Shield, Star } from 'lucide-react';

const QuickOrder = () => {
  const [timeLeft, setTimeLeft] = useState({ hours: 2, minutes: 30, seconds: 45 });
  const [phoneNumber, setPhoneNumber] = useState('');

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        }
        
        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const benefits = [
    { icon: Truck, title: "Free Express Delivery", subtitle: "Above ₹500 nationwide" },
    { icon: Gift, title: "Premium Gift Packaging", subtitle: "Complimentary for all orders" },
    { icon: Shield, title: "100% Money Back", subtitle: "If not completely satisfied" },
    { icon: Clock, title: "Same Day Delivery", subtitle: "Available in select cities" }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-red-50 via-orange-50 to-amber-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Professional urgency header */}
          <div className="text-center mb-16">
            <Badge className="bg-gradient-to-r from-red-500 to-orange-500 text-white text-xl px-8 py-4 mb-6 animate-pulse rounded-full shadow-lg">
              🔥 EXCLUSIVE FLASH SALE - LIMITED TIME 🔥
            </Badge>
            
            <h2 className="text-5xl lg:text-6xl font-bold text-slate-800 mb-6">
              Secure Your Order Now
            </h2>
            
            <p className="text-2xl text-slate-600 mb-8">
              This exclusive discount ends in:
            </p>
            
            {/* Professional countdown timer */}
            <div className="flex justify-center gap-6 mb-12">
              {[
                { value: timeLeft.hours, label: 'Hours' },
                { value: timeLeft.minutes, label: 'Minutes' },
                { value: timeLeft.seconds, label: 'Seconds' }
              ].map((time, index) => (
                <div key={index} className="bg-gradient-to-br from-red-500 to-red-600 text-white rounded-2xl p-6 min-w-[100px] shadow-2xl">
                  <div className="text-4xl font-bold">{time.value.toString().padStart(2, '0')}</div>
                  <div className="text-sm font-medium opacity-90">{time.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Professional order form */}
          <Card className="bg-white shadow-2xl border-2 border-amber-300 rounded-3xl overflow-hidden">
            <CardContent className="p-12">
              <div className="text-center mb-12">
                <h3 className="text-4xl font-bold text-slate-800 mb-4">
                  Complete Your Order in Under 60 Seconds
                </h3>
                <p className="text-xl text-slate-600">
                  Enter your phone number below and our expert will call you to confirm your order
                </p>
              </div>

              <div className="space-y-8">
                <div className="max-w-2xl mx-auto">
                  <label className="block text-xl font-bold text-slate-800 mb-4">
                    Your Phone Number:
                  </label>
                  <div className="flex gap-4">
                    <Input
                      type="tel"
                      placeholder="Enter your 10-digit mobile number"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      className="flex-1 text-xl py-8 px-6 border-2 border-slate-300 focus:border-amber-500 rounded-2xl"
                    />
                    <Button 
                      size="lg"
                      className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-10 py-8 text-xl font-bold shadow-xl transform hover:scale-105 transition-all duration-300 rounded-2xl"
                      disabled={phoneNumber.length !== 10}
                    >
                      <Phone className="w-6 h-6 mr-3" />
                      Call Me Now!
                    </Button>
                  </div>
                </div>

                {/* Benefits grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 bg-gradient-to-r from-amber-50 to-yellow-50 rounded-2xl p-8">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-md">
                        <benefit.icon className="w-6 h-6 text-amber-600" />
                      </div>
                      <div>
                        <div className="font-bold text-slate-800">{benefit.title}</div>
                        <div className="text-sm text-slate-600">{benefit.subtitle}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Final CTA */}
                <div className="text-center">
                  <div className="flex items-center justify-center gap-3 text-green-600 font-semibold text-lg mb-6">
                    <Zap className="w-6 h-6" />
                    <span>⚡ Order now and get extra 10% off + free premium packaging!</span>
                  </div>
                  
                  <Button 
                    size="lg"
                    className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white text-2xl px-16 py-8 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 animate-pulse"
                  >
                    <ShoppingCart className="w-8 h-8 mr-4" />
                    SECURE MY ORDER NOW
                  </Button>
                  
                  <div className="flex items-center justify-center gap-8 mt-6 text-slate-600">
                    <div className="flex items-center gap-2">
                      <Shield className="w-5 h-5 text-green-600" />
                      <span>100% Secure Payment</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Truck className="w-5 h-5 text-blue-600" />
                      <span>Cash on Delivery Available</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Star className="w-5 h-5 text-yellow-600" />
                      <span>Easy 7-Day Returns</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default QuickOrder;
