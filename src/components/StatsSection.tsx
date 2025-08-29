import { AnimatedCounter } from './AnimatedCounter';
import { School, Users, MapPin, Wifi, Globe, TrendingUp } from 'lucide-react';

const stats = [
  {
    icon: MapPin,
    value: 2100000,
    suffix: '',
    label: 'Schools Mapped',
    description: 'Connecting schools begins with knowing where they are. We have successfully mapped the locations of schools across 140 countries.'
  },
  {
    icon: Wifi,
    value: 90000,
    suffix: '',
    label: 'Schools with Real-time Connectivity',
    description: 'In 2023, schools across 22 countries reported real-time connectivity status to help improve global connectivity.'
  },
  {
    icon: School,
    value: 13400,
    suffix: '',
    label: 'Schools with Increased Access',
    description: 'Giga and its partners have supported increased access to connectivity for schools in 28 countries.'
  },
  {
    icon: Users,
    value: 6740000,
    suffix: '',
    label: 'Students Connected',
    description: 'Students have benefitted from increased access to connectivity, thanks to Giga\'s technical support and solutions.'
  },
  {
    icon: Globe,
    value: 34,
    suffix: '',
    label: 'Countries with Advanced Support',
    description: 'Giga has provided advanced connectivity support in mapping, modeling, financing and contracting.'
  },
  {
    icon: TrendingUp,
    value: 6,
    suffix: '',
    label: 'Countries with Infrastructure Analysis',
    description: 'We have been conducting infrastructure mapping and analyses in multiple countries across continents.'
  }
];

export const StatsSection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-background via-secondary/20 to-background relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
      <div className="absolute top-20 right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float-gentle" />
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-primary/5 rounded-full blur-2xl animate-float-gentle" style={{ animationDelay: '2s' }} />
      
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-primary/10 backdrop-blur-sm rounded-full px-6 py-2 mb-6 border border-primary/20">
            <span className="text-sm font-medium text-primary">Since 2019</span>
          </div>
          <h2 className="giga-section-title animate-fade-up">
            Our Progress
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto animate-fade-up leading-relaxed" style={{ animationDelay: '0.2s' }}>
            Since our establishment in 2019, we have reached remarkable milestones in our mission 
            to connect every school to the Internet by 2030, transforming education globally.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div 
                key={stat.label}
                className="giga-stats-card animate-fade-up group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="w-14 h-14 bg-gradient-to-r from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <div className="flex-1">
                      <AnimatedCounter 
                        end={stat.value} 
                        suffix={stat.suffix}
                        className="text-3xl md:text-4xl font-bold text-primary font-mono drop-shadow-sm"
                      />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                    {stat.label}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {stat.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Enhanced CTA Section */}
        <div className="mt-20 text-center">
          <div className="inline-block bg-gradient-card backdrop-blur-sm border border-primary/15 rounded-2xl p-8 shadow-card">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Join Our Mission
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl">
              Help us reach our 2030 goal of connecting every school to the Internet. 
              Together, we can bridge the digital divide and unlock opportunities for millions of children.
            </p>
            <button className="giga-hero-button group">
              <span className="relative z-10">Learn More</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};