import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logoWhite from "@/assets/logo-white.png";
import logoDark from "@/assets/logo-dark.png";
import iconDarkBg from "@/assets/icon-dark-bg.png";
import iconLightBg from "@/assets/icon-light-bg.png";

const links = [
  { label: "Home", href: "/" },
  { label: "Product", href: "/product" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

function LogoMark({ scrolled }: { scrolled: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-2 group" aria-label="authorizationIQ home">
      {/* Square icon mark */}
      <img
        src={scrolled ? iconLightBg : iconDarkBg}
        alt="aIQ icon"
        className="h-9 w-9 rounded-xl transition-all duration-300"
      />
      {/* Full wordmark — hidden on mobile */}
      <img
        src={scrolled ? logoDark : logoWhite}
        alt="authorizationIQ"
        className="h-6 w-auto hidden sm:block transition-all duration-300"
      />
    </Link>
  );
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/96 backdrop-blur-md border-b border-border shadow-[0_1px_20px_rgba(27,77,110,0.08)]"
            : "bg-transparent"
        }`}
      >
        <div className="container-site">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <LogoMark scrolled={scrolled} />

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-0.5">
              {links.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                    scrolled
                      ? location.pathname === link.href
                        ? "text-primary bg-primary/8 font-semibold"
                        : "text-foreground hover:text-primary hover:bg-primary/6"
                      : location.pathname === link.href
                      ? "text-white bg-white/15 font-semibold"
                      : "text-white/80 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* CTA */}
            <div className="hidden md:flex items-center gap-3">
              <Link
                to="/demo"
                className="px-5 py-2.5 text-sm font-semibold rounded-xl bg-accent text-white hover:bg-accent-light transition-all duration-200 hover:-translate-y-0.5 shadow-[0_4px_15px_rgba(232,118,58,0.25)] hover:shadow-[0_8px_20px_rgba(232,118,58,0.35)]"
              >
                Request Demo
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              className={`md:hidden p-2 rounded-lg transition-colors ${
                scrolled ? "text-foreground hover:bg-muted" : "text-white hover:bg-white/10"
              }`}
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/40 z-40 md:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 bottom-0 w-80 bg-white z-50 md:hidden shadow-xl"
            >
              <div className="flex items-center justify-between p-5 border-b border-border">
                <LogoMark scrolled={true} />
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 rounded-lg hover:bg-muted text-foreground"
                >
                  <X size={20} />
                </button>
              </div>
              <nav className="p-5 flex flex-col gap-1">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className={`px-4 py-3 text-sm font-medium rounded-xl transition-colors ${
                      location.pathname === link.href
                        ? "bg-primary text-primary-foreground font-semibold"
                        : "text-foreground hover:bg-muted"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="mt-4 pt-4 border-t border-border">
                  <Link
                    to="/demo"
                    className="block w-full px-5 py-3.5 text-center text-sm font-semibold rounded-xl bg-accent text-white hover:bg-accent-light transition-all"
                  >
                    Request Demo
                  </Link>
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
