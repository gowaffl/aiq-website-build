import { Link } from "react-router-dom";
import { Mail, Phone } from "lucide-react";
import logoWhite from "@/assets/logo-white.png";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#0F3048" }} className="text-white">
      <div className="container-site py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Col 1: Brand */}
          <div className="lg:col-span-1">
            <img src={logoWhite} alt="authorizationIQ" className="h-8 w-auto mb-4" />
            <p className="text-sm text-white/65 leading-relaxed mb-6">
              Empowering OPOs with predictive analytics and AI-powered tools to improve authorization rates and save more lives.
            </p>
            <div className="flex flex-col gap-2">
              <a
                href="mailto:brent@donationadvocates.com"
                className="flex items-center gap-2 text-sm text-white/65 hover:text-white transition-colors"
              >
                <Mail size={14} className="flex-shrink-0" />
                brent@donationadvocates.com
              </a>
              <a
                href="tel:+13308837131"
                className="flex items-center gap-2 text-sm text-white/65 hover:text-white transition-colors"
              >
                <Phone size={14} className="flex-shrink-0" />
                (330) 883-7131
              </a>
            </div>
          </div>

          {/* Col 2: Platform */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-white/40 mb-5">Platform</h4>
            <ul className="flex flex-col gap-3">
              {[
                { label: "aIQ Predict", href: "/product#predict" },
                { label: "aIQ Navigator", href: "/product#navigator" },
                { label: "aIQ Insights", href: "/product#insights" },
              ].map((item) => (
                <li key={item.href}>
                  <Link to={item.href} className="text-sm text-white/65 hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Company */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-white/40 mb-5">Company</h4>
            <ul className="flex flex-col gap-3">
              {[
                { label: "About Us", href: "/about" },
                { label: "How It Works", href: "/how-it-works" },
                { label: "Contact", href: "/contact" },
                { label: "Request Demo", href: "/demo" },
              ].map((item) => (
                <li key={item.href}>
                  <Link to={item.href} className="text-sm text-white/65 hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Legal */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-white/40 mb-5">Legal</h4>
            <ul className="flex flex-col gap-3">
              {[
                { label: "Privacy Policy", href: "/privacy" },
                { label: "Terms of Service", href: "/terms" },
              ].map((item) => (
                <li key={item.href}>
                  <Link to={item.href} className="text-sm text-white/65 hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-xs text-white/40">© 2026 authorizationIQ™. All rights reserved.</p>
          <p className="text-xs text-white/40 text-center">
            Built by organ donation professionals, for organ donation professionals.
          </p>
        </div>
      </div>
    </footer>
  );
}
