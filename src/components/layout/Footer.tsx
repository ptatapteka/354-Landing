import { Flame, Phone, Mail, MapPin, Clock, Send, Instagram, Youtube } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { siteData } from "@/data/siteData";

const Footer = () => {
  return (
    <footer className="bg-gradient-fire-dark text-white pt-16 pb-8 mt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-fire flex items-center justify-center glow-fire">
                <Flame className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg">Центр Пиротехники</span>
                <span className="text-xs text-white/70">Огни вашего праздника</span>
              </div>
            </div>
            <p className="text-sm text-white/70 leading-relaxed">
              Профессиональная пиротехника для любых мероприятий. Салюты, фейерверки,
              петарды и бенгальские огни с гарантией качества и безопасности.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-lg">Навигация</h3>
            <ul className="space-y-2">
              {siteData.navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-white/70 hover:text-accent transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-lg">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-white/70">
                <Phone className="w-4 h-4 mt-0.5 text-accent shrink-0" />
                <a href={`tel:${siteData.contacts.phone}`} className="hover:text-accent transition-colors">
                  {siteData.contacts.phone}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/70">
                <Mail className="w-4 h-4 mt-0.5 text-accent shrink-0" />
                <a href={`mailto:${siteData.contacts.email}`} className="hover:text-accent transition-colors">
                  {siteData.contacts.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/70">
                <MapPin className="w-4 h-4 mt-0.5 text-accent shrink-0" />
                {siteData.contacts.address}
              </li>
              <li className="flex items-start gap-3 text-sm text-white/70">
                <Clock className="w-4 h-4 mt-0.5 text-accent shrink-0" />
                {siteData.contacts.workHours}
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-lg">Рассылка</h3>
            <p className="text-sm text-white/70 mb-4">
              Подпишитесь и получайте новости об акциях и новинках первыми!
            </p>
            <div className="flex gap-2">
              <Input type="email" placeholder="Ваш email" className="bg-white/10 border-white/20 text-white placeholder:text-white/50" />
              <Button size="icon" className="bg-gradient-fire shrink-0 glow-fire">
                <Send className="w-4 h-4" />
              </Button>
            </div>
            <div className="flex gap-3 mt-6">
              <a href="#" className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-gradient-fire transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-gradient-fire transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-gradient-fire transition-colors">
                <Send className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <Separator className="bg-white/20 mb-6" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/60">© 2024 Центр Пиротехники. Все права защищены.</p>
          <p className="text-sm text-white/60">
            Пиротехника требует соблюдения правил безопасности. Использовать только лицам старше 18 лет.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
