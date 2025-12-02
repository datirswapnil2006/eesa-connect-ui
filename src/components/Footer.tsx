import { Link } from 'react-router-dom';
import { Zap, Mail, MapPin, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-sidebar text-sidebar-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-sidebar-primary/20 flex items-center justify-center">
                <Zap className="w-5 h-5 text-sidebar-primary" />
              </div>
              <span className="font-display font-bold text-xl">EESA</span>
            </Link>
            <p className="text-sm text-sidebar-foreground/70 leading-relaxed">
              Electronic Engineering Students Association - Building the future of technology, one circuit at a time.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold text-sm uppercase tracking-wide mb-4 text-sidebar-primary">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Gallery', 'Forums', 'Blog'].map(link => (
                <li key={link}>
                  <Link
                    to={link === 'Home' ? '/' : `/${link.toLowerCase()}`}
                    className="text-sm text-sidebar-foreground/70 hover:text-sidebar-primary transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-display font-semibold text-sm uppercase tracking-wide mb-4 text-sidebar-primary">
              Resources
            </h3>
            <ul className="space-y-2">
              {['Documentation', 'Tutorials', 'Projects', 'Research Papers', 'Events'].map(item => (
                <li key={item}>
                  <a href="#" className="text-sm text-sidebar-foreground/70 hover:text-sidebar-primary transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-semibold text-sm uppercase tracking-wide mb-4 text-sidebar-primary">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-sidebar-foreground/70">
                <MapPin className="w-4 h-4 mt-0.5 text-sidebar-primary" />
                <span>Engineering Building, Room 301<br />University Campus</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-sidebar-foreground/70">
                <Mail className="w-4 h-4 text-sidebar-primary" />
                <a href="mailto:eesa@university.edu" className="hover:text-sidebar-primary transition-colors">
                  eesa@university.edu
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-sidebar-foreground/70">
                <Phone className="w-4 h-4 text-sidebar-primary" />
                <span>+1 (555) 123-4567</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-sidebar-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-sidebar-foreground/50">
            © {new Date().getFullYear()} EESA. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-sidebar-foreground/50 hover:text-sidebar-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-sidebar-foreground/50 hover:text-sidebar-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
