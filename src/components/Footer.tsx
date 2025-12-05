import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-sidebar text-sidebar-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <img src="/eesa logo.jpg" alt="EESA logo" className="w-12 h-12 object-contain rounded-md" />
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
                <span>Prof. Ram Meghe Institute of Technology & Research, Badnera, Amravati, India</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-sidebar-foreground/70">
                <Mail className="w-4 h-4 text-sidebar-primary" />
                  <a href="mailto:eesa.prmitr@gmail.com" className="text-sm text-sidebar-foreground/70 hover:text-sidebar-primary transition-colors">
                    eesa.prmitr@gmail.com
                  </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-sidebar-foreground/70">
                <Phone className="w-4 h-4 text-sidebar-primary" />
                <span>0721- 2681246</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-sidebar-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-sidebar-foreground/50">
            © {new Date().getFullYear()} EESA. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-sm text-sidebar-foreground/50 hover:text-sidebar-primary transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-sm text-sidebar-foreground/50 hover:text-sidebar-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
