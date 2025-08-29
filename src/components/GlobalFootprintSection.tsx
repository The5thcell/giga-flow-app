import { Globe, MapPin, Users, School } from 'lucide-react';

const countries = [
  {
    name: 'Brazil',
    description: 'Through coordinated efforts with the Government of Brazil, UNICEF Brazil, Nic.Br and Giga, more than 80k schools have shared live connectivity data with Giga.',
    stats: '80k schools connected',
    flag: '🇧🇷'
  },
  {
    name: 'Botswana',
    description: 'Giga supported the Government\'s SmartBots initiative to connect 609 schools, benefiting more than 387,000 students and teachers.',
    stats: '609 schools, 387k students',
    flag: '🇧🇼'
  },
  {
    name: 'Kazakhstan',
    description: 'Giga supported a feasibility study and proposed technical solutions to enhance connectivity speeds in schools, piloting upgrades in 38 schools.',
    stats: '38 pilot schools',  
    flag: '🇰🇿'
  },
  {
    name: 'Mongolia',
    description: 'There are a total of 871 schools, some situated at considerable distance from central facilities. Giga employed AI to accurately identify each school building.',
    stats: '871 schools mapped',
    flag: '🇲🇳'
  },
  {
    name: 'Kenya',
    description: 'Giga helped to connect 309 schools and more than 115,000 students to the Internet, transforming education in rural communities.',
    stats: '309 schools, 115k students',
    flag: '🇰🇪'
  },
  {
    name: 'Honduras',
    description: 'Giga helped to connect 545 schools and more than 60,000 students to the Internet, bringing hope and opportunity to communities.',
    stats: '545 schools, 60k students',
    flag: '🇭🇳'
  }
];

export const GlobalFootprintSection = () => {
  return (
    <section id="countries" className="py-24 bg-gradient-to-br from-background via-primary/5 to-background relative overflow-hidden">
      {/* Advanced Background Elements */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-25" />
      <div className="absolute top-40 right-40 w-80 h-80 bg-gradient-to-r from-primary/8 to-primary/4 rounded-full blur-3xl animate-float-gentle" />
      <div className="absolute bottom-40 left-40 w-60 h-60 bg-gradient-to-r from-primary/6 to-transparent rounded-full blur-2xl animate-float-gentle" style={{ animationDelay: '4s' }} />
      
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-primary/10 backdrop-blur-sm rounded-full px-6 py-2 mb-6 border border-primary/20">
            <span className="text-sm font-medium text-primary">Global Reach</span>
          </div>
          <h2 className="giga-section-title animate-fade-up">
            Our Global Footprint
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto animate-fade-up leading-relaxed" style={{ animationDelay: '0.2s' }}>
            Giga's global footprint now reaches more than 50 countries, including 34 countries 
            provided with advanced connectivity support, transforming education worldwide.
          </p>
        </div>

        {/* Enhanced Key Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-20">
          <div className="text-center p-8 bg-gradient-card backdrop-blur-sm rounded-2xl border border-primary/15 animate-fade-up hover:shadow-card-hover transition-all duration-500 hover:-translate-y-1 group" style={{ animationDelay: '0.3s' }}>
            <Globe className="w-10 h-10 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
            <div className="text-4xl font-bold text-primary mb-2 font-mono">50+</div>
            <div className="text-muted-foreground font-medium">Countries Reached</div>
          </div>
          <div className="text-center p-8 bg-gradient-card backdrop-blur-sm rounded-2xl border border-primary/15 animate-fade-up hover:shadow-card-hover transition-all duration-500 hover:-translate-y-1 group" style={{ animationDelay: '0.4s' }}>
            <MapPin className="w-10 h-10 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
            <div className="text-4xl font-bold text-primary mb-2 font-mono">140</div>
            <div className="text-muted-foreground font-medium">Countries Mapped</div>
          </div>
          <div className="text-center p-8 bg-gradient-card backdrop-blur-sm rounded-2xl border border-primary/15 animate-fade-up hover:shadow-card-hover transition-all duration-500 hover:-translate-y-1 group" style={{ animationDelay: '0.5s' }}>
            <School className="w-10 h-10 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
            <div className="text-4xl font-bold text-primary mb-2 font-mono">34</div>
            <div className="text-muted-foreground font-medium">Advanced Support</div>
          </div>
          <div className="text-center p-8 bg-gradient-card backdrop-blur-sm rounded-2xl border border-primary/15 animate-fade-up hover:shadow-card-hover transition-all duration-500 hover:-translate-y-1 group" style={{ animationDelay: '0.6s' }}>
            <Users className="w-10 h-10 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
            <div className="text-4xl font-bold text-primary mb-2 font-mono">22</div>
            <div className="text-muted-foreground font-medium">Real-time Reporting</div>
          </div>
        </div>

        {/* Enhanced Featured Countries */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {countries.map((country, index) => (
            <div 
              key={country.name}
              className="bg-gradient-card backdrop-blur-sm border border-primary/15 rounded-2xl p-8 hover:border-primary/25 hover:shadow-card-hover transition-all duration-500 hover:-translate-y-2 animate-fade-up group overflow-hidden relative"
              style={{ animationDelay: `${(index + 1) * 0.1}s` }}
            >
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <span className="text-4xl mr-4 group-hover:scale-110 transition-transform duration-300">{country.flag}</span>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">{country.name}</h3>
                    <div className="text-sm text-primary font-semibold bg-primary/10 px-3 py-1 rounded-full inline-block">{country.stats}</div>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {country.description}
                </p>
              </div>
              
              {/* Subtle background decoration */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>

        {/* Enhanced Call to Action */}
        <div className="text-center mt-20 animate-fade-up" style={{ animationDelay: '1s' }}>
          <div className="bg-gradient-to-r from-primary via-primary/95 to-primary/90 rounded-3xl p-12 text-white relative overflow-hidden shadow-hero">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-mesh opacity-20" />
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full blur-xl" />
            
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-6">Join the Movement</h3>
              <p className="text-white/90 mb-8 max-w-3xl mx-auto text-lg leading-relaxed">
                Help us connect every school in the world to the Internet by 2030. 
                Together, we can ensure every child has access to information, opportunity, and choice.
              </p>
              <button className="bg-white text-primary px-10 py-4 rounded-xl font-semibold text-lg hover:bg-white/95 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                Get Involved Today
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};