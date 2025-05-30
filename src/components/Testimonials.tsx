
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Mumbai",
      rating: 5,
      text: "The most authentic Putharekulu I've tasted outside of Andhra Pradesh! The thin layers and perfect sweetness remind me of my grandmother's recipe. DSR Authentic Foods has truly preserved the traditional taste.",
      avatar: "PS"
    },
    {
      name: "Rajesh Kumar",
      location: "Delhi",
      rating: 5,
      text: "Ordered for Diwali celebration and everyone was amazed by the quality. The texture is exactly like the ones from Atreyapuram. Fast delivery and excellent packaging. Will definitely order again!",
      avatar: "RK"
    },
    {
      name: "Meera Patel",
      location: "Bangalore",
      rating: 5,
      text: "As someone from Andhra, I was skeptical about online sweet orders. But DSR exceeded all expectations! The authenticity and freshness are unmatched. It's like getting them directly from our hometown.",
      avatar: "MP"
    },
    {
      name: "Suresh Reddy",
      location: "Hyderabad",
      rating: 5,
      text: "Perfect for gifting! Sent these to my relatives in the US and they were delighted. The traditional taste and premium packaging make it an ideal choice for special occasions.",
      avatar: "SR"
    },
    {
      name: "Lakshmi Devi",
      location: "Chennai",
      rating: 5,
      text: "The paper-thin layers and the right amount of sweetness make these Putharekulu exceptional. You can taste the authenticity in every bite. Highly recommended for sweet lovers!",
      avatar: "LD"
    },
    {
      name: "Anil Gupta",
      location: "Pune",
      rating: 5,
      text: "Outstanding quality and taste! The GI certification gives confidence about authenticity. Customer service is also excellent. DSR has become our go-to for authentic Andhra sweets.",
      avatar: "AG"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-yellow-50 to-amber-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-amber-900 mb-6">
            What Our Customers Say
          </h2>
          <p className="text-xl text-amber-700 max-w-3xl mx-auto">
            Don't just take our word for it - hear from thousands of satisfied customers 
            who have experienced the authentic taste of our Sweet Putharekulu
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-amber-200 hover:border-amber-400 bg-white">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-400 rounded-full flex items-center justify-center text-white font-bold">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h4 className="font-bold text-amber-900">{testimonial.name}</h4>
                      <p className="text-sm text-amber-600">{testimonial.location}</p>
                    </div>
                  </div>
                  <Quote className="w-8 h-8 text-amber-300 group-hover:text-amber-400 transition-colors" />
                </div>

                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                <p className="text-amber-800 leading-relaxed group-hover:text-amber-900 transition-colors">
                  "{testimonial.text}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 border border-amber-200 shadow-lg">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <span className="text-amber-900 font-bold">4.9/5</span>
            <span className="text-amber-700">from 2,847+ reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
