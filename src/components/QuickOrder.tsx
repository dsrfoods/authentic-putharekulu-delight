
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Phone, ShoppingCart, Clock, Zap, Gift, Truck } from 'lucide-react';

const QuickOrder = () => {
  const [timeLeft, setTimeLeft] = useState({ hours: 2, minutes: 30, seconds: 45 });
  const [phoneNumber, setPhoneNumber] = useState('');
  const [selectedOffer, setSelectedOffer] = useState(0);

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

  const offers = [
    {
      title: "Flash Sale Special",
      description: "Buy 2 Get 1 FREE + Free Delivery",
      price: "₹1,098",
      originalPrice: "₹1,647",
      savings: "₹549",
      popular: true
    },
    {
      title: "Family Pack",
      description: "3kg Mix Pack + Premium Gift Box",
      price: "₹2,499",
      originalPrice: "₹3,999",
      savings: "₹1,500"
    },
    {
      title: "Single Pack",
      description: "500g Premium Pack",
      price: "₹549",
      originalPrice: "₹799",
      savings: "₹250"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Urgency Header */}
          <div className="text-center mb-12">
            <Badge className="bg-red-500 text-white text-lg px-6 py-2 mb-4 animate-pulse">
              🔥 LIMITED TIME OFFER - ENDING SOON! 🔥
            </Badge>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-amber-900 mb-4">
              Order Now & Save Big!
            </h2>
            
            <p className="text-xl text-amber-700 mb-6">
              Special discount expires in:
            </p>
            
            {/* Countdown Timer */}
            <div className="flex justify-center gap-4 mb-8">
              <div className="bg-red-500 text-white rounded-lg p-4 min-w-[80px]">
                <div className="text-2xl font-bold">{timeLeft.hours.toString().padStart(2, '0')}</div>
                <div className="text-sm">Hours</div>
              </div>
              <div className="bg-red-500 text-white rounded-lg p-4 min-w-[80px]">
                <div className="text-2xl font-bold">{timeLeft.minutes.toString().padStart(2, '0')}</div>
                <div className="text-sm">Minutes</div>
              </div>
              <div className="bg-red-500 text-white rounded-lg p-4 min-w-[80px]">
                <div className="text-2xl font-bold">{timeLeft.seconds.toString().padStart(2, '0')}</div>
                <div className="text-sm">Seconds</div>
              </div>
            </div>
          </div>

          {/* Quick Order Options */}
          <div className="grid lg:grid-cols-3 gap-6 mb-12">
            {offers.map((offer, index) => (
              <Card 
                key={index}
                className={`cursor-pointer transition-all duration-300 ${
                  selectedOffer === index 
                    ? 'border-red-500 bg-red-50 shadow-xl scale-105' 
                    : 'border-amber-200 hover:border-red-300 hover:shadow-lg'
                } ${offer.popular ? 'ring-2 ring-orange-400' : ''}`}
                onClick={() => setSelectedOffer(index)}
              >
                <CardContent className="p-6 text-center relative">
                  {offer.popular && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white">
                      Most Popular
                    </Badge>
                  )}
                  
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-amber-900 mb-2">{offer.title}</h3>
                    <p className="text-amber-700 text-sm">{offer.description}</p>
                  </div>
                  
                  <div className="mb-4">
                    <div className="text-3xl font-bold text-green-600">{offer.price}</div>
                    <div className="text-lg text-gray-500 line-through">{offer.originalPrice}</div>
                    <Badge className="bg-red-500 text-white mt-2">
                      Save {offer.savings}
                    </Badge>
                  </div>
                  
                  {selectedOffer === index && (
                    <Badge className="bg-green-500 text-white">
                      ✓ Selected
                    </Badge>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Quick Order Form */}
          <Card className="bg-white shadow-2xl border-2 border-amber-300">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-amber-900 mb-4">
                  Complete Your Order in 30 Seconds!
                </h3>
                <p className="text-amber-700">
                  Just enter your phone number and we'll call you to confirm your order
                </p>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-lg font-semibold text-amber-900 mb-3">
                    Your Phone Number:
                  </label>
                  <div className="flex gap-4">
                    <Input
                      type="tel"
                      placeholder="Enter your 10-digit mobile number"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      className="flex-1 text-lg py-6 border-amber-300 focus:border-amber-500"
                    />
                    <Button 
                      size="lg"
                      className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-6 text-lg font-bold shadow-xl transform hover:scale-105 transition-all duration-300"
                      disabled={phoneNumber.length !== 10}
                    >
                      <Phone className="w-5 h-5 mr-2" />
                      Call Me Now!
                    </Button>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4 bg-amber-50 rounded-lg p-6">
                  <div className="flex items-center gap-3">
                    <Truck className="w-8 h-8 text-green-600" />
                    <div>
                      <div className="font-bold text-amber-900">Free Delivery</div>
                      <div className="text-sm text-amber-700">Above ₹500</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Gift className="w-8 h-8 text-purple-600" />
                    <div>
                      <div className="font-bold text-amber-900">Gift Packaging</div>
                      <div className="text-sm text-amber-700">Complimentary</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-8 h-8 text-blue-600" />
                    <div>
                      <div className="font-bold text-amber-900">Same Day</div>
                      <div className="text-sm text-amber-700">Delivery Available</div>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 text-green-600 font-medium mb-4">
                    <Zap className="w-5 h-5" />
                    <span>⚡ Order in next {timeLeft.hours}h {timeLeft.minutes}m and get extra 10% off!</span>
                  </div>
                  
                  <Button 
                    size="lg"
                    className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white text-xl px-12 py-6 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 animate-pulse"
                  >
                    <ShoppingCart className="w-6 h-6 mr-3" />
                    ORDER NOW - {offers[selectedOffer].price}
                  </Button>
                  
                  <p className="text-sm text-amber-600 mt-3">
                    ✅ 100% Secure | ✅ COD Available | ✅ Easy Returns
                  </p>
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
