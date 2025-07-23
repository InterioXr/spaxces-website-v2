
import { Eye, Palette, ShoppingCart, Zap, Globe, Users2, Mail, MapPin, Phone, ArrowRight, CheckCircle } from 'lucide-react';
import Navigation from '@/components/Navigation';
import FeatureCard from '@/components/FeatureCard';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white">
      <Navigation />
      
      {/* Home Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-blue-500/10 to-blue-700/20" />
        <div className="container mx-auto px-6 text-center relative z-10 animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-medium text-white mb-6 bg-gradient-to-r from-blue-400 via-blue-300 to-blue-500 bg-clip-text text-transparent">
            SPAXCES
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed font-medium">
            Regenerating Scattered Realities
          </p>
          <p className="text-lg text-slate-300 mb-12 max-w-2xl mx-auto font-normal">
            Experience the future of Home Design exploration through immersive virtual tours, 
            innovative home decor solutions, and cutting-edge eCommerce platforms.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25 elevation-2">
            Explore the Future
          </button>
        </div>
        
        {/* Material 3 floating elements */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-400/20 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-blue-500/20 rounded-full blur-xl animate-pulse delay-1000" />
        <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-blue-600/15 rounded-full blur-lg animate-pulse delay-500" />
      </section>

      {/* Our Projects Section */}
      <section id="projects" className="min-h-screen py-20 relative bg-slate-900/30">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-transparent" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl font-medium text-white mb-6">Our Projects</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Explore our innovative mixed reality projects that are transforming home design experiences.
            </p>
          </div>

          <Carousel className="w-full max-w-6xl mx-auto">
            <CarouselContent className="-ml-6">
              <CarouselItem className="pl-6 md:basis-1/2 lg:basis-1/3">
                <div className="group relative p-8 rounded-3xl bg-slate-800/80 backdrop-blur-sm shadow-lg hover:shadow-xl border border-slate-700/60 hover:border-blue-500/50 transition-all duration-300 hover:scale-[1.02] h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-blue-800/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative z-10">
                    <div className="h-40 bg-gradient-to-br from-blue-600/30 to-blue-800/30 rounded-2xl mb-6 flex items-center justify-center">
                      <Eye size={48} className="text-blue-400" />
                    </div>
                    <h3 className="text-xl font-medium text-white mb-4">VirtualSpace Living</h3>
                    <p className="text-slate-300 leading-relaxed text-sm mb-4">Interactive 3D home tours with real-time furniture placement and lighting adjustments.</p>
                    <span className="text-blue-400 text-sm font-medium">Completed • 2024</span>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="pl-6 md:basis-1/2 lg:basis-1/3">
                <div className="group relative p-8 rounded-3xl bg-slate-800/80 backdrop-blur-sm shadow-lg hover:shadow-xl border border-slate-700/60 hover:border-blue-500/50 transition-all duration-300 hover:scale-[1.02] h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-blue-800/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative z-10">
                    <div className="h-40 bg-gradient-to-br from-blue-600/30 to-blue-800/30 rounded-2xl mb-6 flex items-center justify-center">
                      <Palette size={48} className="text-blue-400" />
                    </div>
                    <h3 className="text-xl font-medium text-white mb-4">AR Design Studio</h3>
                    <p className="text-slate-300 leading-relaxed text-sm mb-4">Augmented reality app for visualizing home decor changes before purchase.</p>
                    <span className="text-blue-400 text-sm font-medium">In Progress • 2024</span>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="pl-6 md:basis-1/2 lg:basis-1/3">
                <div className="group relative p-8 rounded-3xl bg-slate-800/80 backdrop-blur-sm shadow-lg hover:shadow-xl border border-slate-700/60 hover:border-blue-500/50 transition-all duration-300 hover:scale-[1.02] h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-blue-800/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative z-10">
                    <div className="h-40 bg-gradient-to-br from-blue-600/30 to-blue-800/30 rounded-2xl mb-6 flex items-center justify-center">
                      <ShoppingCart size={48} className="text-blue-400" />
                    </div>
                    <h3 className="text-xl font-medium text-white mb-4">MR Marketplace</h3>
                    <p className="text-slate-300 leading-relaxed text-sm mb-4">Mixed reality eCommerce platform for immersive home design shopping.</p>
                    <span className="text-blue-400 text-sm font-medium">Completed • 2023</span>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="pl-6 md:basis-1/2 lg:basis-1/3">
                <div className="group relative p-8 rounded-3xl bg-slate-800/80 backdrop-blur-sm shadow-lg hover:shadow-xl border border-slate-700/60 hover:border-blue-500/50 transition-all duration-300 hover:scale-[1.02] h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-blue-800/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative z-10">
                    <div className="h-40 bg-gradient-to-br from-blue-600/30 to-blue-800/30 rounded-2xl mb-6 flex items-center justify-center">
                      <Globe size={48} className="text-blue-400" />
                    </div>
                    <h3 className="text-xl font-medium text-white mb-4">Global Connect</h3>
                    <p className="text-slate-300 leading-relaxed text-sm mb-4">Cross-platform collaboration tools for international design teams.</p>
                    <span className="text-blue-400 text-sm font-medium">Planning • 2024</span>
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="bg-slate-800/80 border-slate-700/60 text-blue-400 hover:bg-slate-700/80" />
            <CarouselNext className="bg-slate-800/80 border-slate-700/60 text-blue-400 hover:bg-slate-700/80" />
          </Carousel>
        </div>
      </section>

      {/* Instructions Section */}
      <section id="instructions" className="min-h-screen py-20 relative bg-slate-800/30">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/30 to-transparent" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl font-medium text-white mb-6">How to Use Spaxces</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Follow these simple steps to transform your home design experience with mixed reality.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <div className="flex items-start space-x-6 p-8 rounded-3xl bg-slate-800/80 backdrop-blur-sm shadow-lg border border-slate-700/60">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                1
              </div>
              <div>
                <h3 className="text-xl font-medium text-white mb-3">Download & Setup</h3>
                <p className="text-slate-300 leading-relaxed">Download the Spaxces app and create your account. Ensure your device supports mixed reality features for the best experience.</p>
              </div>
            </div>

            <div className="flex items-start space-x-6 p-8 rounded-3xl bg-slate-800/80 backdrop-blur-sm shadow-lg border border-slate-700/60">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                2
              </div>
              <div>
                <h3 className="text-xl font-medium text-white mb-3">Scan Your Space</h3>
                <p className="text-slate-300 leading-relaxed">Use your device's camera to scan and map your room. Our AI will create a 3D model of your space for accurate furniture placement.</p>
              </div>
            </div>

            <div className="flex items-start space-x-6 p-8 rounded-3xl bg-slate-800/80 backdrop-blur-sm shadow-lg border border-slate-700/60">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                3
              </div>
              <div>
                <h3 className="text-xl font-medium text-white mb-3">Browse & Place</h3>
                <p className="text-slate-300 leading-relaxed">Explore our catalog of furniture and decor items. Place them virtually in your space to see how they look and fit.</p>
              </div>
            </div>

            <div className="flex items-start space-x-6 p-8 rounded-3xl bg-slate-800/80 backdrop-blur-sm shadow-lg border border-slate-700/60">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                4
              </div>
              <div>
                <h3 className="text-xl font-medium text-white mb-3">Purchase & Enjoy</h3>
                <p className="text-slate-300 leading-relaxed">Once satisfied with your design, purchase the items directly through our platform and enjoy your newly designed space.</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-10 py-4 rounded-full text-lg font-medium transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25 inline-flex items-center space-x-2">
              <span>Get Started</span>
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Spaxces Section */}
      <section id="spaxces" className="min-h-screen py-20 relative bg-slate-800/50">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/30 to-transparent" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl font-medium text-white mb-6">What is Spaxces?</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Spaxces is a Mixed Reality Design & eCommerce platform that bridges the gap between physical and digital home decor experiences.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25 elevation-2">
              Launch Spaxces
            </button>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="group relative p-8 rounded-3xl bg-slate-800/80 backdrop-blur-sm shadow-lg hover:shadow-xl border border-slate-700/60 hover:border-blue-500/50 transition-all duration-300 hover:scale-[1.02]">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-blue-800/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <div className="inline-flex p-4 rounded-2xl bg-blue-600/20 text-blue-400 mb-6 group-hover:bg-blue-600/30 transition-colors duration-200">
                  <Eye size={28} />
                </div>
                <h3 className="text-xl font-medium text-white mb-4">Virtual Home Tours</h3>
                <p className="text-slate-300 leading-relaxed">Immerse yourself in Home Designs with our cutting-edge virtual reality tours. Experience homes as if you're walking through them, with interactive elements and detailed exploration capabilities.</p>
              </div>
            </div>
            
            <div className="group relative p-8 rounded-3xl bg-slate-800/80 backdrop-blur-sm shadow-lg hover:shadow-xl border border-slate-700/60 hover:border-blue-500/50 transition-all duration-300 hover:scale-[1.02]">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-blue-800/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <div className="inline-flex p-4 rounded-2xl bg-blue-600/20 text-blue-400 mb-6 group-hover:bg-blue-600/30 transition-colors duration-200">
                  <Palette size={28} />
                </div>
                <h3 className="text-xl font-medium text-white mb-4">Home Decor Ideas</h3>
                <p className="text-slate-300 leading-relaxed">Transform spaces with our AI-powered interior design suggestions. Visualize furniture, colors, and layouts in real-time using mixed reality technology.</p>
              </div>
            </div>
            
            <div className="group relative p-8 rounded-3xl bg-slate-800/80 backdrop-blur-sm shadow-lg hover:shadow-xl border border-slate-700/60 hover:border-blue-500/50 transition-all duration-300 hover:scale-[1.02]">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-blue-800/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <div className="inline-flex p-4 rounded-2xl bg-blue-600/20 text-blue-400 mb-6 group-hover:bg-blue-600/30 transition-colors duration-200">
                  <ShoppingCart size={28} />
                </div>
                <h3 className="text-xl font-medium text-white mb-4">Real Estate eCommerce</h3>
                <p className="text-slate-300 leading-relaxed">Browse, compare, and purchase Home Designs through our innovative marketplace. Complete transactions with confidence using our secure, technology-driven platform.</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-medium text-white">Powered by Mixed Reality</h3>
              <p className="text-slate-300 text-lg leading-relaxed">
                Our proprietary mixed reality technology creates seamless integration between digital and physical spaces, 
                allowing you to experience Home Designs like never before.
              </p>
              <div className="flex space-x-6">
                <div className="flex items-center space-x-3 text-blue-400">
                  <div className="p-2 bg-blue-600/20 rounded-xl">
                    <Zap size={20} />
                  </div>
                  <span className="font-medium">Real-time Rendering</span>
                </div>
                <div className="flex items-center space-x-3 text-blue-400">
                  <div className="p-2 bg-blue-600/20 rounded-xl">
                    <Globe size={20} />
                  </div>
                  <span className="font-medium">Global Access</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-slate-800/60 to-slate-700/60 rounded-3xl p-8 border border-slate-700/60 backdrop-blur-sm">
              <div className="h-64 bg-gradient-to-br from-blue-600/20 to-blue-800/20 rounded-2xl flex items-center justify-center">
                <div className="text-center text-slate-300">
                  <Eye size={48} className="mx-auto mb-4 text-blue-400 animate-pulse" />
                  <p className="text-lg font-medium">Interactive Demo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collaborate Section */}
      <section id="collaborate" className="min-h-screen py-20 relative bg-slate-900/50">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl font-medium text-white mb-6">Collaborate with Us</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Join our ecosystem of real estate professionals, interior designers, and technology innovators.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center p-8 rounded-3xl bg-slate-800/80 backdrop-blur-sm shadow-lg border border-slate-700/60 hover:shadow-xl hover:border-blue-500/50 transition-all duration-300">
              <div className="inline-flex p-4 bg-blue-600/20 rounded-2xl mb-6">
                <Users2 className="text-blue-400" size={32} />
              </div>
              <h3 className="text-lg font-medium text-white mb-3">Real Estate Agents</h3>
              <p className="text-slate-300 text-sm leading-relaxed">Enhance your listings with immersive experiences</p>
            </div>
            <div className="text-center p-8 rounded-3xl bg-slate-800/80 backdrop-blur-sm shadow-lg border border-slate-700/60 hover:shadow-xl hover:border-blue-500/50 transition-all duration-300">
              <div className="inline-flex p-4 bg-blue-600/20 rounded-2xl mb-6">
                <Palette className="text-blue-400" size={32} />
              </div>
              <h3 className="text-lg font-medium text-white mb-3">Interior Designers</h3>
              <p className="text-slate-300 text-sm leading-relaxed">Showcase your designs in virtual environments</p>
            </div>
            <div className="text-center p-8 rounded-3xl bg-slate-800/80 backdrop-blur-sm shadow-lg border border-slate-700/60 hover:shadow-xl hover:border-blue-500/50 transition-all duration-300">
              <div className="inline-flex p-4 bg-blue-600/20 rounded-2xl mb-6">
                <Zap className="text-blue-400" size={32} />
              </div>
              <h3 className="text-lg font-medium text-white mb-3">Tech Partners</h3>
              <p className="text-slate-300 text-sm leading-relaxed">Integrate with our API and expand our platform</p>
            </div>
            <div className="text-center p-8 rounded-3xl bg-slate-800/80 backdrop-blur-sm shadow-lg border border-slate-700/60 hover:shadow-xl hover:border-blue-500/50 transition-all duration-300">
              <div className="inline-flex p-4 bg-blue-600/20 rounded-2xl mb-6">
                <Globe className="text-blue-400" size={32} />
              </div>
              <h3 className="text-lg font-medium text-white mb-3">Global Network</h3>
              <p className="text-slate-300 text-sm leading-relaxed">Connect with professionals worldwide</p>
            </div>
          </div>

          <div className="text-center">
            <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-10 py-4 rounded-full text-lg font-medium transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25">
              Join Our Network
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen py-20 relative bg-slate-800/30">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-transparent" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl font-medium text-white mb-6">Get in Touch</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Ready to transform your real estate experience? Let's connect and explore the possibilities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-center space-x-4 p-6 rounded-3xl bg-blue-600/10 border border-blue-500/30 backdrop-blur-sm">
                <div className="p-3 bg-blue-600/20 rounded-2xl">
                  <Mail className="text-blue-400" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white">Email</h3>
                  <p className="text-slate-300">hello@spaxces.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 p-6 rounded-3xl bg-blue-600/10 border border-blue-500/30 backdrop-blur-sm">
                <div className="p-3 bg-blue-600/20 rounded-2xl">
                  <Phone className="text-blue-400" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white">Phone</h3>
                  <p className="text-slate-300">+1 (555) 123-SPAX</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 p-6 rounded-3xl bg-blue-600/10 border border-blue-500/30 backdrop-blur-sm">
                <div className="p-3 bg-blue-600/20 rounded-2xl">
                  <MapPin className="text-blue-400" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white">Location</h3>
                  <p className="text-slate-300">San Francisco, CA</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/80 backdrop-blur-sm rounded-3xl p-8 border border-slate-700/60 shadow-lg">
              <form className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-4 bg-slate-700/50 border border-slate-600/50 rounded-2xl text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:bg-slate-700/70 transition-all duration-200"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-4 bg-slate-700/50 border border-slate-600/50 rounded-2xl text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:bg-slate-700/70 transition-all duration-200"
                  />
                </div>
                <div>
                  <textarea
                    rows={4}
                    placeholder="Your Message"
                    className="w-full px-4 py-4 bg-slate-700/50 border border-slate-600/50 rounded-2xl text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:bg-slate-700/70 transition-all duration-200 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 rounded-2xl font-medium transition-all duration-200 transform hover:scale-[1.02] shadow-lg hover:shadow-blue-500/25"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-slate-900/80 border-t border-slate-700/60">
        <div className="container mx-auto px-6 text-center">
          <p className="text-slate-400">
            © 2024 Spaxces. Transforming real estate through mixed reality technology.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
