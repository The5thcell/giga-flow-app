import { ArrowRight, Globe, Wifi, Sparkles } from 'lucide-react';
import heroImage from '../assets/hero-connectivity.jpg';

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Advanced Background with Mesh Gradient */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-hero-overlay" />
        </div>
        {/* Floating Mesh Gradient */}
        <div className="absolute inset-0 bg-gradient-mesh opacity-60" />
      </div>

      {/* Advanced Floating Elements */}
      <div className="absolute top-20 left-10 animate-float-gentle opacity-30">
        <div className="relative">
          <Wifi className="w-12 h-12 text-white drop-shadow-lg" />
          <div className="absolute inset-0 bg-white/20 rounded-full blur-xl animate-pulse-glow" />
        </div>
      </div>
      <div className="absolute top-40 right-20 animate-float-gentle opacity-25" style={{ animationDelay: '1.5s' }}>
        <div className="relative">
          <Globe className="w-16 h-16 text-white drop-shadow-lg" />
          <div className="absolute inset-0 bg-primary/30 rounded-full blur-2xl animate-pulse-glow" />
        </div>
      </div>
      <div className="absolute bottom-40 left-20 animate-float-gentle opacity-20" style={{ animationDelay: '3s' }}>
        <div className="relative">
          <Sparkles className="w-10 h-10 text-white drop-shadow-lg" />
          <div className="absolute inset-0 bg-white/15 rounded-full blur-lg animate-pulse-glow" />
        </div>
      </div>

      {/* Premium Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center text-white">
        <div className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
          <div className="inline-flex items-center bg-white/10 backdrop-blur-md rounded-full px-6 py-2 mb-8 border border-white/20">
            <Sparkles className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">Annual Results 2023</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-bold mb-8 text-balance leading-none">
            Connecting The Dots:
            <br />
            <span className="bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent">
              Giga's Impact in 2023
            </span>
          </h1>
        </div>
        
        <div className="animate-fade-up" style={{ animationDelay: '0.4s' }}>
          <p className="text-xl md:text-2xl mb-12 text-white/90 max-w-4xl mx-auto text-balance leading-relaxed">
            Every child deserves access to the Internet. We're connecting every school 
            in the world to unlock opportunities for 1.3 billion children through 
            innovative technology and global partnerships.
          </p>
        </div>

        <div className="animate-fade-up" style={{ animationDelay: '0.6s' }}>
          <button className="giga-hero-button group">
            <span className="relative z-10">Explore Our Impact</span>
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
          </button>
        </div>

        {/* Enhanced Quick Stats */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-up" style={{ animationDelay: '0.8s' }}>
          {[
            { value: '2.1M', label: 'Schools Mapped', icon: Globe },
            { value: '6.74M', label: 'Students Connected', icon: Wifi },
            { value: '34', label: 'Countries Supported', icon: Sparkles }
          ].map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="giga-glass-card text-center p-6">
                <Icon className="w-8 h-8 text-white/80 mx-auto mb-3" />
                <div className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-white/70 text-sm font-medium">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Advanced Geometric Decorations */}
      <div className="absolute top-1/2 left-8 w-2 h-32 bg-gradient-to-b from-white/20 to-transparent rounded-full animate-parallax-slow" />
      <div className="absolute top-1/3 right-8 w-2 h-24 bg-gradient-to-b from-white/15 to-transparent rounded-full animate-parallax-slow" style={{ animationDelay: '2s' }} />
    </section>
  );
};