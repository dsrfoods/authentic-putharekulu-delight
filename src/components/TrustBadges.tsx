
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Truck, Clock, Award, Users, Star, CheckCircle, Globe, Phone } from 'lucide-react';

const TrustBadges = () => {
  const badges = [
    {
      icon: Shield,
      title: "100% Authentic",
      description: "Traditional recipe guaranteed",
      color: "text-white",
      bgColor: "bg-green-600"
    },
    {
      icon: Award,
      title: "GI Certified",
      description: "Officially recognized origin",
      color: "text-black",
      bgColor: "bg-yellow-400"
    },
    {
      icon: Users,
      title: "50,000+ Customers",
      description: "Trusted by families nationwide",
      color: "text-white",
      bgColor: "bg-blue-600"
    },
    {
      icon: Star,
      title: "4.9/5 Rating",
      description: "Exceptional quality assured",
      color: "text-black",
      bgColor: "bg-yellow-400"
    },
    {
      icon: Truck,
      title: "Fresh Delivery",
      description: "Made fresh, delivered fast",
      color: "text-white",
      bgColor: "bg-purple-600"
    },
    {
      icon: CheckCircle,
      title: "Quality Promise",
      description: "100% satisfaction guarantee",
      color: "text-white",
      bgColor: "bg-green-600"
    }
  ];

  const stats = [
    { number: "200+", label: "Years of Tradition", icon: Clock },
    { number: "50K+", label: "Happy Customers", icon: Users },
    { number: "99.8%", label: "Customer Satisfaction", icon: Star },
    { number: "24/7", label: "Customer Support", icon: Globe }
  ];

  return (
    <section className="py-24 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 animate-scale-in">
            Why Choose DSR Authentic Foods?
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto animate-fade-in delay-300">
            Trusted by thousands of customers for our unwavering commitment to quality, authenticity, and exceptional service
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
          {badges.map((badge, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-2 border-yellow-400 hover:border-orange-400 bg-slate-800 hover:bg-slate-700 animate-fade-in hover:scale-105" style={{animationDelay: `${index * 150}ms`}}>
              <CardContent className="p-8 text-center">
                <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl ${badge.bgColor} group-hover:scale-110 mb-6 transition-all duration-300 animate-bounce`} style={{animationDelay: `${index * 100}ms`}}>
                  <badge.icon className={`w-10 h-10 ${badge.color}`} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors">
                  {badge.title}
                </h3>
                <p className="text-slate-300 group-hover:text-white transition-colors text-lg">
                  {badge.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats section with high contrast and animations */}
        <div className="bg-gradient-to-br from-yellow-500 to-orange-500 rounded-3xl p-12 shadow-2xl border-4 border-white animate-scale-in">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="group animate-fade-in hover:scale-110 transition-transform duration-300" style={{animationDelay: `${index * 200}ms`}}>
                <div className="flex items-center justify-center mb-4">
                  <stat.icon className="w-8 h-8 text-black mr-3 animate-bounce" style={{animationDelay: `${index * 150}ms`}} />
                  <div className="text-5xl font-bold text-black group-hover:text-white transition-colors animate-pulse">
                    {stat.number}
                  </div>
                </div>
                <div className="text-slate-900 text-lg font-bold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section with Business Card Info */}
        <div className="mt-16 text-center animate-fade-in delay-1000">
          <div className="bg-slate-800 rounded-3xl p-8 border-4 border-yellow-400 max-w-2xl mx-auto animate-scale-in">
            <h3 className="text-3xl font-bold text-white mb-6">Contact DSR Authentic Foods</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-center gap-3 text-yellow-400 text-xl font-bold animate-bounce">
                <Phone className="w-6 h-6" />
                <span>7659089234</span>
              </div>
              <div className="text-slate-300 text-lg">D.Bhanu Prakash</div>
              <div className="text-slate-400">Authentic Foods Specialist</div>
              <div className="text-yellow-300 font-bold animate-pulse">📍 Atreyapuram, Andhra Pradesh</div>
            </div>
          </div>
        </div>

        {/* Additional certifications with high contrast and animations */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-white mb-8 animate-fade-in">Our Certifications & Recognition</h3>
          <div className="flex flex-wrap justify-center gap-8 items-center">
            <div className="flex items-center gap-2 bg-yellow-400 text-black px-6 py-3 rounded-full font-bold hover:scale-110 transition-transform animate-bounce">
              <Award className="w-5 h-5" />
              <span>GI Tag Certified</span>
            </div>
            <div className="flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-full font-bold hover:scale-110 transition-transform animate-bounce delay-300">
              <Shield className="w-5 h-5" />
              <span>FSSAI Approved</span>
            </div>
            <div className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full font-bold hover:scale-110 transition-transform animate-bounce delay-500">
              <Star className="w-5 h-5" />
              <span>ISO 22000</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
