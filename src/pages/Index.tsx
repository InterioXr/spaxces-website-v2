import { Eye, Palette, ShoppingCart, Zap, Globe, Users2, Mail, MapPin, Phone, ArrowRight, CheckCircle, ExternalLink } from 'lucide-react';
import Navigation from '@/components/Navigation';
import { ThemeToggle } from '@/components/ThemeToggle';
import FeatureCard from '@/components/FeatureCard';
import ContactForm from '@/components/ContactForm';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

// Import background images
import vrHomeTour from '@/assets/vr-home-tour.jpg';
import vanityLamp from '@/assets/vanity-lamp.jpg';
import ecommerceTablet from '@/assets/ecommerce-tablet.jpg';
import appLaunch from '@/assets/app-launch.jpg';
import roomScan from '@/assets/room-scan.jpg';
import arNavigation from '@/assets/ar-navigation.jpg';
import purchaseDelivery from '@/assets/purchase-delivery.jpg';
import realEstateAgent from '@/assets/real-estate-agent.jpg';
import interiorDesignWorkspace from '@/assets/interior-design-workspace.jpg';
import techIntegration from '@/assets/tech-integration.jpg';
import globalNetwork from '@/assets/global-network.jpg';
const Index = () => {
  return <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      {/* Top Left External Link Buttons */}
      <div className="fixed top-4 left-4 z-50 flex flex-col space-y-2">
        <a href="https://platforms.ebuildbazaar.in" target="_blank" rel="noopener" className="bg-white/90 dark:bg-slate-800/90 hover:bg-gray-100/90 dark:hover:bg-slate-700/90 text-gray-900 dark:text-white px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 backdrop-blur-sm border border-gray-300/60 dark:border-slate-700/60 hover:border-blue-400 dark:hover:border-blue-500/50 inline-flex items-center gap-2">
          eBb Platforms
          <ExternalLink size={14} />
        </a>
        <a href="https://www.interioxr.com" target="_blank" rel="noopener" className="bg-white/90 dark:bg-slate-800/90 hover:bg-gray-100/90 dark:hover:bg-slate-700/90 text-gray-900 dark:text-white px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 backdrop-blur-sm border border-gray-300/60 dark:border-slate-700/60 hover:border-blue-400 dark:hover:border-blue-500/50 inline-flex items-center gap-2">
          InterioXr Labs
          <ExternalLink size={14} />
        </a>
      </div>

      {/* Top Right Theme Toggle */}
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>
      
      {/* Home Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black pr-20 md:pr-6">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-blue-500/5 to-blue-700/10" />
        <div className="container mx-auto px-6 text-center relative z-10 animate-fade-in">
          {/* Logo */}
          <div className="relative mb-8 flex justify-center">
            <div className="relative">
              <img src="/Spaxces_Logo_v1_1.png" alt="Spaxces Logo" className="w-72 h-72 object-contain relative z-10" />
              {/* Glassmorphism blur overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60 backdrop-blur-sm rounded-3xl" />
              <div className="absolute -inset-4 bg-gradient-to-br from-blue-600/20 via-transparent to-blue-700/20 blur-xl rounded-full" />
            </div>
          </div>
          
          <p className="text-blue-300 mb-2 text-lg font-medium">
            Early Access - awaiting full launch soon.
          </p>
          <a href="https://bit.ly/InterioXrNotion" target="_blank" rel="noopener" className="text-blue-200 mb-8 text-base underline cursor-pointer hover:text-blue-100 transition-colors duration-200 inline-flex items-center gap-2">
            Read about us here
            <ExternalLink size={16} />
          </a>
          
          <h1 className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed font-medium">
            Regenerating Scattered Realities
          </h1>
          <p className="text-2xl md:text-3xl text-white mb-6 max-w-3xl mx-auto font-medium leading-snug">
            AI-generated 3D objects and spaces, experienced in Augmented, Virtual and Mixed Reality.
          </p>
          <p className="text-lg text-slate-300 mb-6 max-w-2xl mx-auto font-normal">
            From a single idea to an immersive space — designed with AI, built in Unity &amp; Unreal Engine, and explored in MR.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25 elevation-2">
            Explore Spaxces
          </button>
        </div>
        
        {/* Material 3 floating elements */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-400/20 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-blue-500/20 rounded-full blur-xl animate-pulse delay-1000" />
        <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-blue-600/15 rounded-full blur-lg animate-pulse delay-500" />
      </section>

      {/* What is Spaxces Section */}
      <section id="spaxces" className="min-h-screen py-20 relative bg-slate-800/50 pr-20 md:pr-6">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/30 to-transparent" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl font-medium text-white mb-6">What is Spaxces?</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Spaxces is a Mixed Reality platform by InterioXr Labs that uses AI to generate 3D objects and environments, then places them in the real world (AR), a fully virtual one (VR), or a blend of both (MR).
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25 elevation-2">
              Launch Spaxces
            </button>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="group relative p-8 rounded-3xl bg-slate-800/80 backdrop-blur-sm shadow-lg hover:shadow-xl border border-slate-700/60 hover:border-blue-500/50 transition-all duration-300 hover:scale-[1.02] overflow-hidden">
              {/* Background image with fade effect */}
              <div className="absolute top-0 right-0 w-44 h-44 opacity-40 bg-cover bg-center" style={{
              backgroundImage: `url(${vrHomeTour})`,
              maskImage: 'radial-gradient(circle at top right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 50%, rgba(0,0,0,0) 75%)',
              WebkitMaskImage: 'radial-gradient(circle at top right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 50%, rgba(0,0,0,0) 75%)'
            }} />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-blue-800/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <div className="inline-flex p-4 rounded-2xl bg-blue-600/20 text-blue-400 mb-6 group-hover:bg-blue-600/30 transition-colors duration-200">
                  <Eye size={28} />
                </div>
                <h3 className="text-xl font-medium text-white mb-4">AI → 3D Generation</h3>
                <p className="text-slate-300 leading-relaxed">Turn prompts, sketches or reference images into ready-to-place 3D objects in minutes.</p>
              </div>
            </div>
            
            <div className="group relative p-8 rounded-3xl bg-slate-800/80 backdrop-blur-sm shadow-lg hover:shadow-xl border border-slate-700/60 hover:border-blue-500/50 transition-all duration-300 hover:scale-[1.02] overflow-hidden">
              {/* Background image with fade effect */}
              <div className="absolute top-0 right-0 w-44 h-44 opacity-40 bg-cover bg-center" style={{
              backgroundImage: `url(${vanityLamp})`,
              maskImage: 'radial-gradient(circle at top right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 50%, rgba(0,0,0,0) 75%)',
              WebkitMaskImage: 'radial-gradient(circle at top right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 50%, rgba(0,0,0,0) 75%)'
            }} />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-blue-800/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <div className="inline-flex p-4 rounded-2xl bg-blue-600/20 text-blue-400 mb-6 group-hover:bg-blue-600/30 transition-colors duration-200">
                  <Palette size={28} />
                </div>
                <h3 className="text-xl font-medium text-white mb-4">Interior &amp; Spatial Design</h3>
                <p className="text-slate-300 leading-relaxed">Design rooms and spaces at true scale, then walk through them before anything is built.</p>
              </div>
            </div>
            
            <div className="group relative p-8 rounded-3xl bg-slate-800/80 backdrop-blur-sm shadow-lg hover:shadow-xl border border-slate-700/60 hover:border-blue-500/50 transition-all duration-300 hover:scale-[1.02] overflow-hidden">
              {/* Background image with fade effect */}
              <div className="absolute top-0 right-0 w-44 h-44 opacity-40 bg-cover bg-center" style={{
              backgroundImage: `url(${ecommerceTablet})`,
              maskImage: 'radial-gradient(circle at top right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 50%, rgba(0,0,0,0) 75%)',
              WebkitMaskImage: 'radial-gradient(circle at top right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 50%, rgba(0,0,0,0) 75%)'
            }} />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-blue-800/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <div className="inline-flex p-4 rounded-2xl bg-blue-600/20 text-blue-400 mb-6 group-hover:bg-blue-600/30 transition-colors duration-200">
                  <ShoppingCart size={28} />
                </div>
                <h3 className="text-xl font-medium text-white mb-4">Real-Time Engines</h3>
                <p className="text-slate-300 leading-relaxed">Photorealistic environments rendered in Unity and Unreal Engine, viewable on headsets, phones and the web.</p>
              </div>
            </div>
          </div>

          <div className="text-center mb-10">
            <h3 className="text-3xl font-medium text-white">How it works</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              ["Describe or Scan", "Start from a prompt, a reference image or a scan of your room."],
              ["AI Generates 3D", "Our AI pipeline creates the 3D objects and materials."],
              ["Built in Unity / Unreal", "Assets are placed into a real-time, true-to-scale environment."],
              ["Experience in AR / VR / MR", "Walk through it on a headset, phone or browser."],
            ].map(([title, text], i) => (
              <div key={title} className="p-6 rounded-3xl bg-slate-800/80 backdrop-blur-sm shadow-lg border border-slate-700/60 hover:border-blue-500/50 transition-all duration-300">
                <div className="w-10 h-10 mb-4 rounded-full bg-blue-600 text-white flex items-center justify-center font-medium">{i + 1}</div>
                <h3 className="text-lg font-medium text-white mb-2">{title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed">{text}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-medium text-white">Powered by AI, Unity &amp; Unreal</h3>
              <p className="text-slate-300 text-lg leading-relaxed">
                We combine generative AI with real-time game engines to build spaces you can step into — with full locomotion, panning and zooming, true-to-scale objects and realistic lighting.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-3 text-blue-400">
                  <div className="p-2 bg-blue-600/20 rounded-xl">
                    <Zap size={20} />
                  </div>
                  <span className="font-medium">Full Locomotion</span>
                </div>
                <div className="flex items-center space-x-3 text-blue-400">
                  <div className="p-2 bg-blue-600/20 rounded-xl">
                    <Globe size={20} />
                  </div>
                  <span className="font-medium">Panning & Zooming</span>
                </div>
                <div className="flex items-center space-x-3 text-blue-400">
                  <div className="p-2 bg-blue-600/20 rounded-xl">
                    <Palette size={20} />
                  </div>
                  <span className="font-medium">AI Asset Generation</span>
                </div>
                <div className="flex items-center space-x-3 text-blue-400">
                  <div className="p-2 bg-blue-600/20 rounded-xl">
                    <Eye size={20} />
                  </div>
                  <span className="font-medium">Unity / Unreal</span>
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

      {/* Instructions Section */}
      <section id="instructions" className="min-h-screen py-20 relative bg-slate-800/30 pr-20 md:pr-6">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/30 to-transparent" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl font-medium text-white mb-6">How to Use Spaxces</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Follow these simple steps to design and explore spaces with AI and Mixed Reality.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <div className="flex items-start space-x-6 p-8 rounded-3xl bg-slate-800/80 backdrop-blur-sm shadow-lg border border-slate-700/60 overflow-hidden relative">
              {/* Background image with fade effect */}
              <div className="absolute top-0 right-0 w-44 h-44 opacity-40 bg-cover bg-center" style={{
              backgroundImage: `url(${appLaunch})`,
              maskImage: 'radial-gradient(circle at top right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 50%, rgba(0,0,0,0) 75%)',
              WebkitMaskImage: 'radial-gradient(circle at top right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 50%, rgba(0,0,0,0) 75%)'
            }} />
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg relative z-10">
                1
              </div>
              <div className="relative z-10">
                <h3 className="text-xl font-medium text-white mb-3">Launch & Setup</h3>
                <p className="text-slate-300 leading-relaxed">Launch the Spaxces app and create your account. Ensure your device supports mixed reality features for the best experience.</p>
              </div>
            </div>

            <div className="flex items-start space-x-6 p-8 rounded-3xl bg-slate-800/80 backdrop-blur-sm shadow-lg border border-slate-700/60 overflow-hidden relative">
              {/* Background image with fade effect */}
              <div className="absolute top-0 right-0 w-44 h-44 opacity-40 bg-cover bg-center" style={{
              backgroundImage: `url(${roomScan})`,
              maskImage: 'radial-gradient(circle at top right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 50%, rgba(0,0,0,0) 75%)',
              WebkitMaskImage: 'radial-gradient(circle at top right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 50%, rgba(0,0,0,0) 75%)'
            }} />
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg relative z-10">
                2
              </div>
              <div className="relative z-10">
                <h3 className="text-xl font-medium text-white mb-3">Scan Your Space</h3>
                <p className="text-slate-300 leading-relaxed">Our app may use your device's camera to scan and map your room. You would then be able to place and see objects within your environment</p>
              </div>
            </div>

            <div className="flex items-start space-x-6 p-8 rounded-3xl bg-slate-800/80 backdrop-blur-sm shadow-lg border border-slate-700/60 overflow-hidden relative">
              {/* Background image with fade effect */}
              <div className="absolute top-0 right-0 w-44 h-44 opacity-40 bg-cover bg-center" style={{
              backgroundImage: `url(${arNavigation})`,
              maskImage: 'radial-gradient(circle at top right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 50%, rgba(0,0,0,0) 75%)',
              WebkitMaskImage: 'radial-gradient(circle at top right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 50%, rgba(0,0,0,0) 75%)'
            }} />
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg relative z-10">
                3
              </div>
              <div className="relative z-10">
                <h3 className="text-xl font-medium text-white mb-3">Explore & Navigate</h3>
                <p className="text-slate-300 leading-relaxed">Explore our catalog of furniture and decor items. Navigate through virtual spaces to see how they look and fit.</p>
              </div>
            </div>

            <div className="flex items-start space-x-6 p-8 rounded-3xl bg-slate-800/80 backdrop-blur-sm shadow-lg border border-slate-700/60 overflow-hidden relative">
              {/* Background image with fade effect */}
              <div className="absolute top-0 right-0 w-44 h-44 opacity-40 bg-cover bg-center" style={{
              backgroundImage: `url(${purchaseDelivery})`,
              maskImage: 'radial-gradient(circle at top right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 50%, rgba(0,0,0,0) 75%)',
              WebkitMaskImage: 'radial-gradient(circle at top right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 50%, rgba(0,0,0,0) 75%)'
            }} />
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg relative z-10">
                4
              </div>
              <div className="relative z-10">
                <h3 className="text-xl font-medium text-white mb-3">Refine &amp; Realise</h3>
                <p className="text-slate-300 leading-relaxed">Adjust materials, layouts and lighting, then take your design into the real world — with our partners or your own team.</p>
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

      {/* Our Projects Section */}
      <section id="projects" className="min-h-screen py-20 relative bg-slate-900/30 pr-20 md:pr-6">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-transparent" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl font-medium text-white mb-6">Our Projects</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Explore our innovative mixed reality projects that are reshaping interior and spatial design.
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

      {/* Collaborate Section */}
      <section id="collaborate" className="min-h-screen py-20 relative bg-slate-900/50 pr-20 md:pr-6">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl font-medium text-white mb-6">Collaborate with Us</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Join our ecosystem of interior and spatial designers, architects, developers and XR innovators.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center p-8 rounded-3xl bg-slate-800/80 backdrop-blur-sm shadow-lg border border-slate-700/60 hover:shadow-xl hover:border-blue-500/50 transition-all duration-300 overflow-hidden relative">
              {/* Background image with fade effect */}
              <div className="absolute top-0 right-0 w-36 h-36 opacity-40 bg-cover bg-center" style={{
              backgroundImage: `url(${interiorDesignWorkspace})`,
              maskImage: 'radial-gradient(circle at top right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 50%, rgba(0,0,0,0) 75%)',
              WebkitMaskImage: 'radial-gradient(circle at top right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 50%, rgba(0,0,0,0) 75%)'
            }} />
              <div className="inline-flex p-4 bg-blue-600/20 rounded-2xl mb-6 relative z-10">
                <Palette className="text-blue-400" size={32} />
              </div>
              <h3 className="text-lg font-medium text-white mb-3 relative z-10">Interior &amp; Spatial Designers</h3>
              <p className="text-slate-300 text-sm leading-relaxed relative z-10">Design and present spaces at true scale in AR, VR and MR</p>
            </div>
            <div className="text-center p-8 rounded-3xl bg-slate-800/80 backdrop-blur-sm shadow-lg border border-slate-700/60 hover:shadow-xl hover:border-blue-500/50 transition-all duration-300 overflow-hidden relative">
              {/* Background image with fade effect */}
              <div className="absolute top-0 right-0 w-36 h-36 opacity-40 bg-cover bg-center" style={{
              backgroundImage: `url(${globalNetwork})`,
              maskImage: 'radial-gradient(circle at top right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 50%, rgba(0,0,0,0) 75%)',
              WebkitMaskImage: 'radial-gradient(circle at top right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 50%, rgba(0,0,0,0) 75%)'
            }} />
              <div className="inline-flex p-4 bg-blue-600/20 rounded-2xl mb-6 relative z-10">
                <Users2 className="text-blue-400" size={32} />
              </div>
              <h3 className="text-lg font-medium text-white mb-3 relative z-10">Architects &amp; Developers</h3>
              <p className="text-slate-300 text-sm leading-relaxed relative z-10">Walk clients through projects before anything is built</p>
            </div>
            <div className="text-center p-8 rounded-3xl bg-slate-800/80 backdrop-blur-sm shadow-lg border border-slate-700/60 hover:shadow-xl hover:border-blue-500/50 transition-all duration-300 overflow-hidden relative">
              {/* Background image with fade effect */}
              <div className="absolute top-0 right-0 w-36 h-36 opacity-40 bg-cover bg-center" style={{
              backgroundImage: `url(${realEstateAgent})`,
              maskImage: 'radial-gradient(circle at top right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 50%, rgba(0,0,0,0) 75%)',
              WebkitMaskImage: 'radial-gradient(circle at top right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 50%, rgba(0,0,0,0) 75%)'
            }} />
              <div className="inline-flex p-4 bg-blue-600/20 rounded-2xl mb-6 relative z-10">
                <Zap className="text-blue-400" size={32} />
              </div>
              <h3 className="text-lg font-medium text-white mb-3 relative z-10">Real Estate Partners</h3>
              <p className="text-slate-300 text-sm leading-relaxed relative z-10">Bring properties to life with immersive spatial experiences</p>
            </div>
            <div className="text-center p-8 rounded-3xl bg-slate-800/80 backdrop-blur-sm shadow-lg border border-slate-700/60 hover:shadow-xl hover:border-blue-500/50 transition-all duration-300 overflow-hidden relative">
              {/* Background image with fade effect */}
              <div className="absolute top-0 right-0 w-36 h-36 opacity-40 bg-cover bg-center" style={{
              backgroundImage: `url(${techIntegration})`,
              maskImage: 'radial-gradient(circle at top right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 50%, rgba(0,0,0,0) 75%)',
              WebkitMaskImage: 'radial-gradient(circle at top right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 50%, rgba(0,0,0,0) 75%)'
            }} />
              <div className="inline-flex p-4 bg-blue-600/20 rounded-2xl mb-6 relative z-10">
                <Globe className="text-blue-400" size={32} />
              </div>
              <h3 className="text-lg font-medium text-white mb-3 relative z-10">Tech &amp; XR Partners</h3>
              <p className="text-slate-300 text-sm leading-relaxed relative z-10">Build with us on AI, Unity and Unreal pipelines</p>
            </div>
          </div>

          <div className="text-center">
            <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-10 py-4 rounded-full text-lg font-medium transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25">
              Collaborate With Us
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen py-20 relative bg-slate-800/30 pr-20 md:pr-6">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-transparent" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl font-medium text-white mb-6">Get in Touch</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Ready to see your space in a new dimension? Let's talk.
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
                  <a href="mailto:spaxces@interioxr.com" className="text-slate-300 block">spaxces@interioxr.com</a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 p-6 rounded-3xl bg-blue-600/10 border border-blue-500/30 backdrop-blur-sm">
                <div className="p-3 bg-blue-600/20 rounded-2xl">
                  <Phone className="text-blue-400" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white">WhatsApp</h3>
                  <a href="https://wa.me/918826144224" target="_blank" rel="noopener" className="text-slate-300 block">+91 8826144224</a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 p-6 rounded-3xl bg-blue-600/10 border border-blue-500/30 backdrop-blur-sm">
                <div className="p-3 bg-blue-600/20 rounded-2xl">
                  <MapPin className="text-blue-400" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white">Our Offices</h3>
                  <p className="text-slate-300">Delhi/NCR, Sydney, London</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/80 backdrop-blur-sm rounded-3xl p-8 border border-slate-700/60 shadow-lg">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-slate-900/80 border-t border-slate-700/60">
        <div className="container mx-auto px-6 text-center">
          <p className="text-slate-400">
            © 2022–2026 Spaxces - Product of InterioXr Labs. Regenerating scattered realities with AI and Mixed Reality.
          </p>
          <p className="text-slate-400 mt-2 flex items-center justify-center gap-2">
            <Mail size={16} />
            <a href="mailto:info@interioxr.com">info@interioxr.com</a>
          </p>
        </div>
      </footer>
    </div>;
};
export default Index;