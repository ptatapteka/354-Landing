import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { siteData } from "@/data/siteData";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-md shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-lg bg-gradient-fire flex items-center justify-center glow-fire group-hover:scale-110 transition-transform">
            <Flame className="w-6 h-6 text-white" />
          </div>
          <div className="flex flex-col">
            <span className={`font-bold text-lg leading-none ${scrolled ? "text-foreground" : "text-white"}`}>
              Центр Пиротехники
            </span>
            <span className={`text-xs ${scrolled ? "text-muted-foreground" : "text-white/70"}`}>
              Огни вашего праздника
            </span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {siteData.navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors hover:text-primary ${
                scrolled ? "text-foreground" : "text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href={`tel:${siteData.contacts.phone}`}
            className={`flex items-center gap-2 text-sm font-medium ${scrolled ? "text-foreground" : "text-white"}`}
          >
            <Phone className="w-4 h-4" />
            {siteData.contacts.phone}
          </a>
          <Button className="bg-gradient-fire text-white glow-fire hover:opacity-90">
            <a href="#booking">Забронировать</a>
          </Button>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Menu className={`w-6 h-6 ${scrolled ? "text-foreground" : "text-white"}`} />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px]">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-fire flex items-center justify-center">
                  <Flame className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold">Центр Пиротехники</span>
              </div>
              <SheetClose asChild>
                <Button variant="ghost" size="icon">
                  <X className="w-5 h-5" />
                </Button>
              </SheetClose>
            </div>
            <nav className="flex flex-col gap-1">
              {siteData.navLinks.map((link) => (
                <SheetClose asChild key={link.href}>
                  <a href={link.href} className="px-4 py-3 rounded-md text-sm font-medium hover:bg-accent transition-colors">
                    {link.label}
                  </a>
                </SheetClose>
              ))}
            </nav>
            <div className="mt-8 pt-8 border-t">
              <a href={`tel:${siteData.contacts.phone}`} className="flex items-center gap-2 text-sm font-medium mb-4">
                <Phone className="w-4 h-4 text-primary" />
                {siteData.contacts.phone}
              </a>
              <Button className="w-full bg-gradient-fire text-white glow-fire">
                <a href="#booking">Забронировать шоу</a>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
