
import { Eye, Palette, ShoppingCart, Zap, Globe, Users2, Mail, MapPin, Phone } from 'lucide-react';
import Navigation from '@/components/Navigation';
import FeatureCard from '@/components/FeatureCard';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Navigation />
      
      {/* Home Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-indigo-500/5 to-blue-600/10" />
        <div className="container mx-auto px-6 text-center relative z-10 animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-medium text-slate-900 mb-6 bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
            SPAXCES
          </h1>
          <p className="text-xl md:text-2xl text-slate-700 mb-8 max-w-3xl mx-auto leading-relaxed font-medium">
            Regenerating Scattered Realities
          </p>
          <p className="text-lg text-slate-600 mb-12 max-w-2xl mx-auto font-normal">
            Experience the future of Home Design exploration through immersive virtual tours, 
            innovative home decor solutions, and cutting-edge eCommerce platforms.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25 elevation-2">
            Explore the Future
          </button>
        </div>
        
        {/* Material 3 floating elements */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-400/10 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-indigo-400/10 rounded-full blur-xl animate-pulse delay-1000" />
        <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-blue-500/5 rounded-full blur-lg animate-pulse delay-500" />
      </section>

      {/* Spaxces Section */}
      <section id="spaxces" className="min-h-screen py-20 relative bg-white">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-transparent" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl font-medium text-slate-900 mb-6">What is Spaxces?</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Spaxces is the next generation platform that bridges the gap between physical and digital real estate experiences.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="group relative p-8 rounded-3xl bg-white shadow-sm hover:shadow-md border border-slate-200/60 hover:border-blue-200 transition-all duration-300 hover:scale-[1.02]">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <div className="inline-flex p-4 rounded-2xl bg-blue-100 text-blue-600 mb-6 group-hover:bg-blue-200 transition-colors duration-200">
                  <Eye size={28} />
                </div>
                <h3 className="text-xl font-medium text-slate-900 mb-4">Virtual Home Tours</h3>
                <p className="text-slate-600 leading-relaxed">Immerse yourself in properties with our cutting-edge virtual reality tours. Experience homes as if you're walking through them, with interactive elements and detailed exploration capabilities.</p>
              </div>
            </div>
            
            <div className="group relative p-8 rounded-3xl bg-white shadow-sm hover:shadow-md border border-slate-200/60 hover:border-blue-200 transition-all duration-300 hover:scale-[1.02]">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <div className="inline-flex p-4 rounded-2xl bg-indigo-100 text-indigo-600 mb-6 group-hover:bg-indigo-200 transition-colors duration-200">
                  <Palette size={28} />
                </div>
                <h3 className="text-xl font-medium text-slate-900 mb-4">Home Decor Ideas</h3>
                <p className="text-slate-600 leading-relaxed">Transform spaces with our AI-powered interior design suggestions. Visualize furniture, colors, and layouts in real-time using mixed reality technology.</p>
              </div>
            </div>
            
            <div className="group relative p-8 rounded-3xl bg-white shadow-sm hover:shadow-md border border-slate-200/60 hover:border-blue-200 transition-all duration-300 hover:scale-[1.02]">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <div className="inline-flex p-4 rounded-2xl bg-blue-100 text-blue-600 mb-6 group-hover:bg-blue-200 transition-colors duration-200">
                  <ShoppingCart size={28} />
                </div>
                <h3 className="text-xl font-medium text-slate-900 mb-4">Real Estate eCommerce</h3>
                <p className="text-slate-600 leading-relaxed">Browse, compare, and purchase properties through our innovative marketplace. Complete transactions with confidence using our secure, technology-driven platform.</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-medium text-slate-900">Powered by Mixed Reality</h3>
              <p className="text-slate-600 text-lg leading-relaxed">
                Our proprietary mixed reality technology creates seamless integration between digital and physical spaces, 
                allowing you to experience properties like never before.
              </p>
              <div className="flex space-x-6">
                <div className="flex items-center space-x-3 text-blue-600">
                  <div className="p-2 bg-blue-100 rounded-xl">
                    <Zap size={20} />
                  </div>
                  <span className="font-medium">Real-time Rendering</span>
                </div>
                <div className="flex items-center space-x-3 text-indigo-600">
                  <div className="p-2 bg-indigo-100 rounded-xl">
                    <Globe size={20} />
                  </div>
                  <span className="font-medium">Global Access</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 border border-blue-100">
              <div className="h-64 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-2xl flex items-center justify-center">
                <div className="text-center text-slate-700">
                  <Eye size={48} className="mx-auto mb-4 text-blue-600 animate-pulse" />
                  <p className="text-lg font-medium">Interactive Demo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collaborate Section */}
      <section id="collaborate" className="min-h-screen py-20 relative bg-slate-50">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl font-medium text-slate-900 mb-6">Collaborate with Us</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Join our ecosystem of real estate professionals, interior designers, and technology innovators.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center p-8 rounded-3xl bg-white shadow-sm border border-slate-200/60 hover:shadow-md hover:border-blue-200 transition-all duration-300">
              <div className="inline-flex p-4 bg-blue-100 rounded-2xl mb-6">
                <Users2 className="text-blue-600" size={32} />
              </div>
              <h3 className="text-lg font-medium text-slate-900 mb-3">Real Estate Agents</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Enhance your listings with immersive experiences</p>
            </div>
            <div className="text-center p-8 rounded-3xl bg-white shadow-sm border border-slate-200/60 hover:shadow-md hover:border-indigo-200 transition-all duration-300">
              <div className="inline-flex p-4 bg-indigo-100 rounded-2xl mb-6">
                <Palette className="text-indigo-600" size={32} />
              </div>
              <h3 className="text-lg font-medium text-slate-900 mb-3">Interior Designers</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Showcase your designs in virtual environments</p>
            </div>
            <div className="text-center p-8 rounded-3xl bg-white shadow-sm border border-slate-200/60 hover:shadow-md hover:border-blue-200 transition-all duration-300">
              <div className="inline-flex p-4 bg-blue-100 rounded-2xl mb-6">
                <Zap className="text-blue-600" size={32} />
              </div>
              <h3 className="text-lg font-medium text-slate-900 mb-3">Tech Partners</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Integrate with our API and expand our platform</p>
            </div>
            <div className="text-center p-8 rounded-3xl bg-white shadow-sm border border-slate-200/60 hover:shadow-md hover:border-indigo-200 transition-all duration-300">
              <div className="inline-flex p-4 bg-indigo-100 rounded-2xl mb-6">
                <Globe className="text-indigo-600" size={32} />
              </div>
              <h3 className="text-lg font-medium text-slate-900 mb-3">Global Network</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Connect with professionals worldwide</p>
            </div>
          </div>

          <div className="text-center">
            <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-10 py-4 rounded-full text-lg font-medium transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25">
              Join Our Network
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen py-20 relative bg-white">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/30 to-transparent" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl font-medium text-slate-900 mb-6">Get in Touch</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Ready to transform your real estate experience? Let's connect and explore the possibilities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-center space-x-4 p-6 rounded-3xl bg-blue-50 border border-blue-100">
                <div className="p-3 bg-blue-100 rounded-2xl">
                  <Mail className="text-blue-600" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-slate-900">Email</h3>
                  <p className="text-slate-600">hello@spaxces.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 p-6 rounded-3xl bg-indigo-50 border border-indigo-100">
                <div className="p-3 bg-indigo-100 rounded-2xl">
                  <Phone className="text-indigo-600" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-slate-900">Phone</h3>
                  <p className="text-slate-600">+1 (555) 123-SPAX</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 p-6 rounded-3xl bg-blue-50 border border-blue-100">
                <div className="p-3 bg-blue-100 rounded-2xl">
                  <MapPin className="text-blue-600" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-slate-900">Location</h3>
                  <p className="text-slate-600">San Francisco, CA</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
              <form className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-slate-900 placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:bg-white transition-all duration-200"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-slate-900 placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:bg-white transition-all duration-200"
                  />
                </div>
                <div>
                  <textarea
                    rows={4}
                    placeholder="Your Message"
                    className="w-full px-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-slate-900 placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:bg-white transition-all duration-200 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 rounded-2xl font-medium transition-all duration-200 transform hover:scale-[1.02] shadow-lg hover:shadow-blue-500/25"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-slate-100 border-t border-slate-200">
        <div className="container mx-auto px-6 text-center">
          <p className="text-slate-600">
            © 2024 Spaxces. Transforming real estate through mixed reality technology.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
