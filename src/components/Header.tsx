import { useState } from 'react';
import { Menu, X, ExternalLink, Sparkles } from 'lucide-react';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: 'About', href: '#about' },
    { name: 'Our Work', href: '#work' },
    { name: 'Our Impact', href: '#impact' },
    { name: 'Countries', href: '#countries' },
    { name: 'Get Involved', href: '#contact' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-primary/10 shadow-glass">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Advanced Logo Section */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              <div className="text-2xl font-bold text-primary">giga</div>
              <div className="absolute -top-1 -right-1">
                <Sparkles className="w-3 h-3 text-primary/60" />
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-6 bg-gradient-to-r from-primary/20 to-primary/10 rounded border border-primary/20 flex items-center justify-center backdrop-blur-sm">
                  <span className="text-xs font-semibold text-primary">UN</span>
                </div>
                <span className="font-medium">UNICEF</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-6 bg-gradient-to-r from-primary/20 to-primary/10 rounded border border-primary/20 flex items-center justify-center backdrop-blur-sm">
                  <span className="text-xs font-semibold text-primary">ITU</span>
                </div>
                <span className="font-medium text-muted-foreground/80">for every child</span>
              </div>
            </div>
          </div>

          {/* Enhanced Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative text-foreground hover:text-primary transition-all duration-300 font-medium group py-2"
              >
                {item.name}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-primary/60 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
            <a
              href="https://giga.global"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground px-6 py-2.5 rounded-xl hover:shadow-card-hover transition-all duration-300 font-medium group"
            >
              <span>Visit Giga</span>
              <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </nav>

          {/* Enhanced Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-xl hover:bg-primary/10 transition-all duration-200 border border-primary/10"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Enhanced Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-6 border-t border-primary/10 bg-white/95 backdrop-blur-xl rounded-b-2xl">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-foreground hover:text-primary transition-colors duration-200 font-medium py-2 px-3 rounded-lg hover:bg-primary/5"
                >
                  {item.name}
                </a>
              ))}
              <a
                href="https://giga.global"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground px-4 py-3 rounded-xl hover:shadow-card transition-all duration-200 mt-4 w-fit font-medium"
              >
                <span>Visit Giga</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};