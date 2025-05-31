
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Truck, Clock, Award, Users, Star, CheckCircle, Globe, Phone, MessageCircle, Mail, MapPin } from 'lucide-react';

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

  const contactMethods = [
    {
      icon: Phone,
      title: "Call Direct",
      detail: "7659089234",
      subtitle: "Instant Support & Orders",
      bgColor: "bg-green-600",
      hoverColor: "hover:bg-green-700"
    },
    {
      icon: Phone,
      title: "Secondary Line",
      detail: "9490781341",
      subtitle: "Alternative Contact",
      bgColor: "bg-blue-600",
      hoverColor: "hover:bg-blue-700"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      detail: "Chat with us instantly",
      subtitle: "Quick responses guaranteed",
      bgColor: "bg-emerald-600",
      hoverColor: "hover:bg-emerald-700"
    },
    {
      icon: Mail,
      title: "Email Orders",
      detail: "DSRauthenticfoods@gmail.com",
      subtitle: "Detailed inquiries welcome",
      bgColor: "bg-orange-600",
      hoverColor: "hover:bg-orange-700"
    }
  ];

  return (
    <section className="py-24 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex justify-center mb-8">
            <div className="bg-white rounded-2xl p-6 shadow-xl border-4 border-yellow-400 hover:scale-110 transition-transform duration-500">
              <img 
                src="/lovable-uploads/47151413-d0d8-4ba9-af7a-660efbb98cfb.png" 
                alt="DSR Authentic Foods Logo" 
                className="w-32 h-auto object-contain"
              />
            </div>
          </div>
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
        <div className="bg-gradient-to-br from-yellow-500 to-orange-500 rounded-3xl p-12 shadow-2xl border-4 border-white animate-scale-in mb-16">
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

        {/* Modern Contact Methods Grid */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white text-center mb-12 animate-fade-in">Multiple Ways to Reach Us</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <Card key={index} className={`${method.bgColor} ${method.hoverColor} border-2 border-white hover:border-yellow-400 transition-all duration-300 hover:scale-105 cursor-pointer animate-fade-in group`} style={{animationDelay: `${index * 200}ms`}}>
                <CardContent className="p-6 text-center text-white">
                  <method.icon className="w-8 h-8 mx-auto mb-4 group-hover:scale-110 transition-transform animate-bounce" style={{animationDelay: `${index * 150}ms`}} />
                  <h4 className="font-bold text-lg mb-2">{method.title}</h4>
                  <p className="font-bold text-xl mb-1">{method.detail}</p>
                  <p className="text-sm opacity-90">{method.subtitle}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Enhanced Business Information Card */}
        <div className="text-center animate-fade-in delay-1000">
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-12 border-4 border-yellow-400 max-w-4xl mx-auto animate-scale-in shadow-2xl">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="text-center">
                <div className="bg-white rounded-2xl p-4 inline-block mb-4 shadow-lg">
                  <img 
                    src="/lovable-uploads/47151413-d0d8-4ba9-af7a-660efbb98cfb.png" 
                    alt="DSR Logo" 
                    className="w-24 h-auto object-contain"
                  />
                </div>
                <h3 className="text-2xl font-bold text-yellow-400">DSR Authentic Foods</h3>
              </div>
              
              <div className="text-center">
                <h4 className="text-3xl font-bold text-white mb-4">D.Bhanu Prakash</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-center gap-3 text-yellow-400 text-xl font-bold animate-bounce">
                    <Phone className="w-6 h-6" />
                    <span>7659089234</span>
                  </div>
                  <div className="flex items-center justify-center gap-3 text-blue-400 text-lg font-bold">
                    <Phone className="w-5 h-5" />
                    <span>9490781341</span>
                  </div>
                </div>
                <div className="text-slate-300 mt-4">Authentic Foods Specialist</div>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 text-yellow-300 font-bold mb-4">
                  <MapPin className="w-6 h-6" />
                  <span className="text-lg">Atreyapuram</span>
                </div>
                <div className="text-slate-400 mb-4">Andhra Pradesh, India</div>
                <div className="text-yellow-300 font-bold animate-pulse text-lg">
                  "A Little Bliss in every bite" 🌟
                </div>
                <div className="text-slate-300 text-sm mt-2">
                  @DSRauthenticfoods
                </div>
              </div>
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
