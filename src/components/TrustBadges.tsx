
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Truck, Clock, Award, Users, Star } from 'lucide-react';

const TrustBadges = () => {
  const badges = [
    {
      icon: Shield,
      title: "100% Authentic",
      description: "Traditional recipe guaranteed",
      color: "text-green-600"
    },
    {
      icon: Truck,
      title: "Fresh Delivery",
      description: "Made fresh, delivered fast",
      color: "text-blue-600"
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Always here to help",
      color: "text-purple-600"
    },
    {
      icon: Award,
      title: "GI Certified",
      description: "Officially recognized origin",
      color: "text-amber-600"
    },
    {
      icon: Users,
      title: "50,000+ Happy Customers",
      description: "Join our satisfied family",
      color: "text-red-600"
    },
    {
      icon: Star,
      title: "4.9/5 Rating",
      description: "Exceptional quality assured",
      color: "text-yellow-600"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-amber-900 mb-4">
            Why Choose DSR Authentic Foods?
          </h2>
          <p className="text-xl text-amber-700 max-w-2xl mx-auto">
            Trusted by thousands of customers for our commitment to quality and authenticity
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {badges.map((badge, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-amber-200 hover:border-amber-400">
              <CardContent className="p-6 text-center">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 group-hover:bg-amber-50 mb-4 transition-colors duration-300`}>
                  <badge.icon className={`w-8 h-8 ${badge.color}`} />
                </div>
                <h3 className="text-xl font-bold text-amber-900 mb-2 group-hover:text-amber-700 transition-colors">
                  {badge.title}
                </h3>
                <p className="text-amber-600 group-hover:text-amber-700 transition-colors">
                  {badge.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional trust elements */}
        <div className="mt-16 bg-gradient-to-r from-amber-50 to-yellow-50 rounded-2xl p-8 border border-amber-200">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-amber-900 mb-2">200+</div>
              <div className="text-amber-700">Years of Tradition</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-amber-900 mb-2">50K+</div>
              <div className="text-amber-700">Happy Customers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-amber-900 mb-2">99.8%</div>
              <div className="text-amber-700">Customer Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-amber-900 mb-2">24/7</div>
              <div className="text-amber-700">Customer Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
