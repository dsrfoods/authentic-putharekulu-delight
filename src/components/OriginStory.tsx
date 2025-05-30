
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Clock, Users, Award } from 'lucide-react';

const OriginStory = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 to-yellow-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-amber-900 mb-6">
            Our Heritage & Authenticity
          </h2>
          <p className="text-xl text-amber-700 max-w-3xl mx-auto">
            Discover the rich history and authentic origins of our Sweet Putharekulu, 
            a culinary treasure from the heart of Andhra Pradesh.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Origin Story Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center text-white flex-shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-amber-900 mb-2">
                    Born in Atreyapuram, Andhra Pradesh
                  </h3>
                  <p className="text-amber-700 leading-relaxed">
                    Our Sweet Putharekulu originates from the sacred town of Atreyapuram, 
                    where this delicacy has been perfected for over 200 years. Known as the 
                    "Paper Sweet" for its incredibly thin layers, it's a testament to the 
                    skilled craftsmanship of Andhra's traditional sweet makers.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center text-white flex-shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-amber-900 mb-2">
                    5 Generations of Expertise
                  </h3>
                  <p className="text-amber-700 leading-relaxed">
                    Our family recipe has been passed down through 5 generations, 
                    preserving the authentic taste and traditional preparation methods. 
                    Each sheet is still hand-pulled to achieve the signature paper-thin 
                    texture that melts in your mouth.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center text-white flex-shrink-0">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-amber-900 mb-2">
                    Community of Master Craftsmen
                  </h3>
                  <p className="text-amber-700 leading-relaxed">
                    We work directly with local artisans who have mastered this art form. 
                    By supporting traditional methods and fair trade practices, we ensure 
                    both authenticity and the livelihood of these skilled craftspeople.
                  </p>
                </div>
              </div>
            </div>

            <Card className="bg-gradient-to-r from-amber-100 to-yellow-100 border-amber-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Award className="w-8 h-8 text-amber-600" />
                  <h4 className="text-xl font-bold text-amber-900">
                    Geographical Indication (GI) Tag Certified
                  </h4>
                </div>
                <p className="text-amber-800">
                  Our Putharekulu carries the prestigious GI tag, officially recognizing 
                  its authentic origin and traditional preparation methods from Andhra Pradesh.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Visual Elements */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              <Card className="bg-white shadow-xl">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-3">🏛️</div>
                  <h4 className="font-bold text-amber-900 mb-2">Traditional Kitchen</h4>
                  <p className="text-sm text-amber-700">Handcrafted in authentic wood-fired ovens</p>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-xl">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-3">🌾</div>
                  <h4 className="font-bold text-amber-900 mb-2">Pure Ingredients</h4>
                  <p className="text-sm text-amber-700">Organic rice, pure ghee, jaggery</p>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-xl">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-3">👨‍🍳</div>
                  <h4 className="font-bold text-amber-900 mb-2">Master Artisans</h4>
                  <p className="text-sm text-amber-700">Skilled craftsmen with decades of experience</p>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-xl">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-3">🏆</div>
                  <h4 className="font-bold text-amber-900 mb-2">Award Winning</h4>
                  <p className="text-sm text-amber-700">National recognition for authenticity</p>
                </CardContent>
              </Card>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-8 -right-8 w-24 h-24 bg-yellow-300 rounded-full blur-2xl opacity-60"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-orange-300 rounded-full blur-3xl opacity-40"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OriginStory;
