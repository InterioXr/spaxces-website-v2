
import { Eye, Palette, ShoppingCart, Zap, Globe, Users2, Mail, MapPin, Phone } from 'lucide-react';
import Navigation from '@/components/Navigation';
import FeatureCard from '@/components/FeatureCard';

const Index = () => {
  return (
    <div className="min-h-screen bg-spaxces-gradient-alt">
      <Navigation />
      
      {/* Home Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto px-6 text-center relative z-10 animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 bg-gradient-to-r from-sky-400 via-white to-orange-400 bg-clip-text text-transparent">
            SPAXCES
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            Revolutionizing Real Estate with Mixed Reality Technology
          </p>
          <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto">
            Experience the future of property exploration through immersive virtual tours, 
            innovative home decor solutions, and cutting-edge eCommerce platforms.
          </p>
          <button className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-sky-500/25">
            Explore the Future
          </button>
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-sky-500/20 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-orange-500/20 rounded-full blur-xl animate-pulse delay-1000" />
      </section>

      {/* Spaxces Section */}
      <section id="spaxces" className="min-h-screen py-20 relative">
        <div className="absolute inset-0 bg-section-gradient" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl font-bold text-white mb-6">What is Spaxces?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Spaxces is the next generation platform that bridges the gap between physical and digital real estate experiences.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <FeatureCard
              icon={Eye}
              title="Virtual Home Tours"
              description="Immerse yourself in properties with our cutting-edge virtual reality tours. Experience homes as if you're walking through them, with interactive elements and detailed exploration capabilities."
            />
            <FeatureCard
              icon={Palette}
              title="Home Decor Ideas"
              description="Transform spaces with our AI-powered interior design suggestions. Visualize furniture, colors, and layouts in real-time using mixed reality technology."
            />
            <FeatureCard
              icon={ShoppingCart}
              title="Real Estate eCommerce"
              description="Browse, compare, and purchase properties through our innovative marketplace. Complete transactions with confidence using our secure, technology-driven platform."
            />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-white">Powered by Mixed Reality</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Our proprietary mixed reality technology creates seamless integration between digital and physical spaces, 
                allowing you to experience properties like never before.
              </p>
              <div className="flex space-x-4">
                <div className="flex items-center space-x-2 text-sky-400">
                  <Zap size={20} />
                  <span>Real-time Rendering</span>
                </div>
                <div className="flex items-center space-x-2 text-orange-400">
                  <Globe size={20} />
                  <span>Global Access</span>
                </div>
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="h-64 bg-gradient-to-br from-sky-500/30 to-orange-500/30 rounded-xl flex items-center justify-center">
                <div className="text-center text-white">
                  <Eye size={48} className="mx-auto mb-4 animate-pulse" />
                  <p className="text-lg font-semibold">Interactive Demo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collaborate Section */}
      <section id="collaborate" className="min-h-screen py-20 relative">
        <div className="absolute inset-0 bg-black/40" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl font-bold text-white mb-6">Collaborate with Us</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Join our ecosystem of real estate professionals, interior designers, and technology innovators.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
              <Users2 className="mx-auto mb-4 text-sky-400" size={40} />
              <h3 className="text-lg font-semibold text-white mb-2">Real Estate Agents</h3>
              <p className="text-gray-400 text-sm">Enhance your listings with immersive experiences</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
              <Palette className="mx-auto mb-4 text-orange-400" size={40} />
              <h3 className="text-lg font-semibold text-white mb-2">Interior Designers</h3>
              <p className="text-gray-400 text-sm">Showcase your designs in virtual environments</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
              <Zap className="mx-auto mb-4 text-sky-400" size={40} />
              <h3 className="text-lg font-semibold text-white mb-2">Tech Partners</h3>
              <p className="text-gray-400 text-sm">Integrate with our API and expand our platform</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
              <Globe className="mx-auto mb-4 text-orange-400" size={40} />
              <h3 className="text-lg font-semibold text-white mb-2">Global Network</h3>
              <p className="text-gray-400 text-sm">Connect with professionals worldwide</p>
            </div>
          </div>

          <div className="text-center">
            <button className="bg-gradient-to-r from-sky-500 to-orange-500 text-white px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl">
              Join Our Network
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen py-20 relative">
        <div className="absolute inset-0 bg-section-gradient" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl font-bold text-white mb-6">Get in Touch</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Ready to transform your real estate experience? Let's connect and explore the possibilities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-center space-x-4 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                <Mail className="text-sky-400" size={24} />
                <div>
                  <h3 className="text-lg font-semibold text-white">Email</h3>
                  <p className="text-gray-300">hello@spaxces.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                <Phone className="text-orange-400" size={24} />
                <div>
                  <h3 className="text-lg font-semibold text-white">Phone</h3>
                  <p className="text-gray-300">+1 (555) 123-SPAX</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                <MapPin className="text-sky-400" size={24} />
                <div>
                  <h3 className="text-lg font-semibold text-white">Location</h3>
                  <p className="text-gray-300">San Francisco, CA</p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <form className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-sky-400 transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-sky-400 transition-colors"
                  />
                </div>
                <div>
                  <textarea
                    rows={4}
                    placeholder="Your Message"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-sky-400 transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-sky-500 to-orange-500 text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-black/60 backdrop-blur-sm border-t border-white/10">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2024 Spaxces. Transforming real estate through mixed reality technology.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
