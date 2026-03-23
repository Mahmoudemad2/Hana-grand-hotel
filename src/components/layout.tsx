import { ReactNode, useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { Menu, X, Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Layout({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  const { language, setLanguage, t } = useI18n();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "nav.home" },
    { href: "/rooms", label: "nav.rooms" },
    { href: "/offers", label: "nav.offers" },
    { href: "/corporate", label: "nav.corporate" },
    { href: "/services", label: "nav.services" },
    { href: "/about", label: "nav.about" },
    { href: "/contact", label: "nav.contact" },
  ];

  return (
    <div className="min-h-screen flex flex-col relative overflow-x-hidden">
      {/* Navbar */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled || location !== "/"
            ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-border/50 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 z-50">
            <img 
              src={`${import.meta.env.BASE_URL}images/hana-logo.jpg`} 
              alt="Hana Grand Hotel" 
              className="h-10 w-10 object-contain rounded-sm" 
            />
            <span className={`font-serif text-xl font-bold tracking-tight ${!isScrolled && location === "/" ? "text-white" : "text-foreground"}`}>
              Hana Grand Hotel
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium hover:text-primary transition-colors ${
                  location === link.href 
                    ? "text-primary" 
                    : !isScrolled && location === "/" ? "text-white/90 hover:text-white" : "text-muted-foreground"
                }`}
              >
                {t(link.label)}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={() => setLanguage(language === "ar" ? "en" : "ar")}
              className={`text-sm font-bold tracking-widest uppercase hover:text-primary transition-colors ${
                !isScrolled && location === "/" ? "text-white" : "text-foreground"
              }`}
            >
              {language === "ar" ? "EN" : "عربي"}
            </button>
            <Link href="/booking">
              <Button className={`rounded-none px-6 ${
                !isScrolled && location === "/" 
                  ? "bg-white text-black hover:bg-primary hover:text-white" 
                  : "bg-primary text-primary-foreground hover:bg-primary/90"
              }`}>
                {t("nav.book")}
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={`lg:hidden z-50 ${!isScrolled && location === "/" && !mobileMenuOpen ? "text-white" : "text-foreground"}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-background pt-24 px-6 flex flex-col"
          >
            <nav className="flex flex-col gap-6 text-xl font-serif">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="border-b border-border/50 pb-4"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t(link.label)}
                </Link>
              ))}
              <div className="flex justify-between items-center pt-4 border-b border-border/50 pb-4">
                <span className="text-sm uppercase tracking-widest text-muted-foreground">Language</span>
                <button
                  onClick={() => {
                    setLanguage(language === "ar" ? "en" : "ar");
                    setMobileMenuOpen(false);
                  }}
                  className="font-bold text-primary"
                >
                  {language === "ar" ? "English" : "العربية"}
                </button>
              </div>
            </nav>
            <div className="mt-auto pb-12">
              <Link href="/booking" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full rounded-none h-14 text-lg bg-primary text-primary-foreground hover:bg-primary/90">
                  {t("nav.book")}
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-1 bg-background flex flex-col">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-foreground text-background py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <img src={`${import.meta.env.BASE_URL}images/pattern.png`} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <img src={`${import.meta.env.BASE_URL}images/hana-logo.jpg`} alt="Hana Grand Hotel" className="h-12 w-12 object-contain rounded-sm" />
                <h3 className="font-serif text-2xl font-bold">Hana Grand Hotel</h3>
              </div>
              <p className="text-background/70 leading-relaxed max-w-sm">
                {t("footer.desc")}
              </p>
            </div>
            <div>
              <h4 className="font-serif text-xl font-bold mb-6 text-primary">{t("footer.links")}</h4>
              <ul className="flex flex-col gap-3">
                {navLinks.slice(1, 5).map(link => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-background/70 hover:text-primary transition-colors">
                      {t(link.label)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-serif text-xl font-bold mb-6 text-primary">{t("footer.contact")}</h4>
              <ul className="flex flex-col gap-4 text-background/70">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary shrink-0" />
                  <span>  العاشر من رمضان - المجاورة 25 - أمام الأردنية  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <span dir="ltr">+20 1080249780</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <span>info@hanagrandhotel.com</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-16 pt-8 border-t border-background/10 text-center text-background/50 text-sm">
            <p>&copy; {new Date().getFullYear()} {t("footer.rights")}</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/201080249780" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-xl hover:scale-110 hover:shadow-2xl transition-all duration-300"
        aria-label="Contact on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </div>
  );
}
