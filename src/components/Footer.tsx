import { ExternalLink, Mail, Twitter, Linkedin, Globe } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-foreground text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="text-3xl font-bold mb-4">giga</div>
            <p className="text-white/80 mb-6 max-w-md">
              A partnership between UNICEF and ITU working to connect every school 
              in the world to the Internet and every young person to information, 
              opportunity and choice.
            </p>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-sm">
                <div className="w-8 h-6 bg-white/20 rounded flex items-center justify-center">
                  <span className="text-xs font-semibold">UN</span>
                </div>
                <span>UNICEF</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <div className="w-8 h-6 bg-white/20 rounded flex items-center justify-center">
                  <span className="text-xs font-semibold">ITU</span>
                </div>
                <span>for every child</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-white/80 hover:text-white transition-colors">
                  About Giga
                </a>
              </li>
              <li>
                <a href="#impact" className="text-white/80 hover:text-white transition-colors">
                  Our Impact
                </a>
              </li>
              <li>
                <a href="#countries" className="text-white/80 hover:text-white transition-colors">
                  Global Footprint
                </a>
              </li>
              <li>
                <a 
                  href="https://giga.global/about-us/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white transition-colors flex items-center space-x-1"
                >
                  <span>Annual Reports</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="https://giga.global"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white transition-colors flex items-center space-x-1"
                >
                  <Globe className="w-4 h-4" />
                  <span>giga.global</span>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:info@giga.global"
                  className="text-white/80 hover:text-white transition-colors flex items-center space-x-1"
                >
                  <Mail className="w-4 h-4" />
                  <span>info@giga.global</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://twitter.com/Gigaglobal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white transition-colors flex items-center space-x-1"
                >
                  <Twitter className="w-4 h-4" />
                  <span>@Gigaglobal</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://linkedin.com/company/giga-global"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white transition-colors flex items-center space-x-1"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-white/60 text-sm mb-4 md:mb-0">
            © 2023 Giga. A partnership between UNICEF and ITU. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-white/60 hover:text-white/80 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-white/60 hover:text-white/80 transition-colors">
              Terms of Use
            </a>
            <a href="#" className="text-white/60 hover:text-white/80 transition-colors">
              Accessibility
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};