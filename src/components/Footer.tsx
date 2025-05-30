
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter, Star } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-amber-900 via-amber-800 to-orange-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                DSR AUTHENTIC FOODS
              </h3>
              <p className="text-amber-100 text-lg leading-relaxed">
                Preserving the authentic taste of Andhra Pradesh's traditional Sweet Putharekulu 
                for over 200 years. We bring you the finest handcrafted sweets made with pure 
                ingredients and time-honored recipes.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-amber-200">4.9/5 from 2,847+ customers</span>
            </div>

            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-amber-700 hover:bg-amber-600 rounded-full flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-amber-700 hover:bg-amber-600 rounded-full flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-amber-700 hover:bg-amber-600 rounded-full flex items-center justify-center transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-yellow-300">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-yellow-400" />
                <div>
                  <div className="font-semibold">+91 98765 43210</div>
                  <div className="text-amber-200 text-sm">24/7 Customer Support</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-yellow-400" />
                <div>
                  <div className="font-semibold">orders@dsrfoods.com</div>
                  <div className="text-amber-200 text-sm">Quick Order Response</div>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-yellow-400 mt-1" />
                <div>
                  <div className="font-semibold">Atreyapuram, Andhra Pradesh</div>
                  <div className="text-amber-200 text-sm">Original Putharekulu Birthplace</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-yellow-400" />
                <div>
                  <div className="font-semibold">Mon-Sun: 6AM - 10PM</div>
                  <div className="text-amber-200 text-sm">Always Fresh, Always Ready</div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-yellow-300">Quick Order</h4>
            <div className="space-y-4">
              <Card className="bg-amber-800/50 border-amber-700">
                <CardContent className="p-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-yellow-300 mb-1">₹549</div>
                    <div className="text-amber-200 text-sm mb-2">500g Premium Pack</div>
                    <button className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white py-2 rounded-lg text-sm font-semibold transition-all duration-300 transform hover:scale-105">
                      Order Now
                    </button>
                  </div>
                </CardContent>
              </Card>
              
              <div className="space-y-2 text-sm text-amber-200">
                <div>✅ Free Delivery Above ₹500</div>
                <div>✅ Same Day Delivery Available</div>
                <div>✅ COD & Online Payment</div>
                <div>✅ 100% Authentic Guarantee</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-amber-700 mt-12 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-amber-200">
              © 2024 DSR Authentic Foods. All rights reserved. | GI Certified Traditional Sweet Makers
            </div>
            <div className="flex gap-6 text-sm text-amber-300">
              <a href="#" className="hover:text-yellow-300 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-yellow-300 transition-colors">Terms & Conditions</a>
              <a href="#" className="hover:text-yellow-300 transition-colors">Return Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
