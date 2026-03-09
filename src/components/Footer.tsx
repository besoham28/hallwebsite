import { Facebook, Instagram, Youtube, Twitter } from "lucide-react";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const resolveUrl = (hash: string) => {
    return location.pathname === "/" ? hash : "/" + hash;
  };

  return (
    <footer className="bg-royal text-cream/80">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10">
          <div className="md:col-span-2">
            <h3 className="font-display text-3xl font-bold text-gold mb-2">Mangal Karyalay</h3>
            <p className="text-[10px] uppercase tracking-[0.3em] text-gold-light/60 font-body mb-4">
              Premium Wedding Venue
            </p>
            <p className="font-body text-base leading-relaxed text-cream/70 max-w-md">
              Creating unforgettable celebrations for over 25 years. Your dream event deserves
              a venue that matches your vision — and exceeds your expectations.
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              {[Facebook, Instagram, Youtube, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-12 h-12 border border-gold/30 flex items-center justify-center text-gold/60 hover:bg-gold hover:text-background transition-all duration-300"
                >
                  <Icon size={22} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold text-gold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "About", "Facilities", "Services", "Gallery", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={resolveUrl(`#${link.toLowerCase()}`)}
                    className="font-body text-base text-cream/60 hover:text-gold transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={resolveUrl("#dine-in")}
                  className="font-body text-base text-cream/60 hover:text-gold transition-colors"
                >
                  Dine In
                </a>
              </li>
            </ul>
          </div>

        <div>
          <h4 className="font-display text-lg font-semibold text-gold mb-4">Contact Info</h4>
          <ul className="space-y-3 font-body text-base text-cream/60">
            <li>123, Shivaji Nagar, Pune</li>
            <li>Maharashtra 411001</li>
            <li>+91 87677 59598</li>
            <li>info@mangalkaryalay.com</li>
          </ul>
        </div>
      </div>
    </div>
    <div className="border-t border-gold/10 py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center">
        <p className="font-body text-sm text-cream/50 text-center">
          © 2026 Mangal Karyalay. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
  );
};

export default Footer;
