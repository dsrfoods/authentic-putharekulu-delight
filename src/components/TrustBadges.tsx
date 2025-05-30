
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Truck, Clock, Award, Users, Star, CheckCircle, Globe } from 'lucide-react';

const TrustBadges = () => {
  const badges = [
    {
      icon: Shield,
      title: "100% Authentic",
      description: "Traditional recipe guaranteed",
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      icon: Award,
      title: "GI Certified",
      description: "Officially recognized origin",
      color: "text-amber-600",
      bgColor: "bg-amber-50"
    },
    {
      icon: Users,
      title: "50,000+ Customers",
      description: "Trusted by families nationwide",
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: Star,
      title: "4.9/5 Rating",
      description: "Exceptional quality assured",
      color: "text-yellow-600",
      bgColor: "bg-yellow-50"
    },
    {
      icon: Truck,
      title: "Fresh Delivery",
      description: "Made fresh, delivered fast",
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      icon: CheckCircle,
      title: "Quality Promise",
      description: "100% satisfaction guarantee",
      color: "text-emerald-600",
      bgColor: "bg-emerald-50"
    }
  ];

  const stats = [
    { number: "200+", label: "Years of Tradition", icon: Clock },
    { number: "50K+", label: "Happy Customers", icon: Users },
    { number: "99.8%", label: "Customer Satisfaction", icon: Star },
    { number: "24/7", label: "Customer Support", icon: Globe }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
            Why Choose DSR Authentic Foods?
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Trusted by thousands of customers for our unwavering commitment to quality, authenticity, and exceptional service
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
          {badges.map((badge, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-slate-200 hover:border-amber-300 bg-white hover:bg-gradient-to-br hover:from-white hover:to-amber-50">
              <CardContent className="p-8 text-center">
                <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl ${badge.bgColor} group-hover:scale-110 mb-6 transition-all duration-300`}>
                  <badge.icon className={`w-10 h-10 ${badge.color}`} />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-amber-700 transition-colors">
                  {badge.title}
                </h3>
                <p className="text-slate-600 group-hover:text-slate-700 transition-colors text-lg">
                  {badge.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats section with professional styling */}
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-12 shadow-2xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="group">
                <div className="flex items-center justify-center mb-4">
                  <stat.icon className="w-8 h-8 text-amber-400 mr-3" />
                  <div className="text-5xl font-bold text-white group-hover:text-amber-400 transition-colors">
                    {stat.number}
                  </div>
                </div>
                <div className="text-slate-300 text-lg font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional certifications */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-slate-800 mb-8">Our Certifications & Recognition</h3>
          <div className="flex flex-wrap justify-center gap-8 items-center opacity-60">
            <div className="flex items-center gap-2 bg-slate-100 px-6 py-3 rounded-full">
              <Award className="w-5 h-5 text-amber-600" />
              <span className="font-semibold text-slate-700">GI Tag Certified</span>
            </div>
            <div className="flex items-center gap-2 bg-slate-100 px-6 py-3 rounded-full">
              <Shield className="w-5 h-5 text-green-600" />
              <span className="font-semibold text-slate-700">FSSAI Approved</span>
            </div>
            <div className="flex items-center gap-2 bg-slate-100 px-6 py-3 rounded-full">
              <Star className="w-5 h-5 text-yellow-600" />
              <span className="font-semibold text-slate-700">ISO 22000</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
