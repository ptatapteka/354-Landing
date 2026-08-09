import { Sparkles, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { siteData } from "@/data/siteData";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={siteData.images.heroMain} alt="Фейерверки" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-3xl">
          <Badge className="bg-gradient-fire text-white border-transparent mb-6 glow-fire">
            <Sparkles className="w-3.5 h-3.5 mr-1" />
            №1 Пиротехнический центр в России
          </Badge>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Зажгите небо
            <br />
            <span className="text-gradient-fire">над вашим праздником</span>
          </h1>

          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl leading-relaxed">
            Профессиональная пиротехника для свадеб, корпоративов и городских
            праздников. Салюты, фейерверки, петарды и бенгальские огни с доставкой
            по всей России.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <Button size="lg" className="bg-gradient-fire text-white glow-fire text-base">
              <a href="#catalog">Выбрать пиротехнику</a>
              <ChevronRight className="w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white/20 text-base">
              <a href="#booking">Забронировать шоу</a>
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl">
            {siteData.stats.map((stat, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20">
                <div className="text-2xl md:text-3xl font-bold text-gradient-fire mb-1">
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-xs text-white/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 pb-8 z-10 hidden md:flex justify-center">
        <div className="flex items-center gap-2 text-white/50 text-sm animate-bounce">
          <span>Листайте вниз</span>
          <ChevronRight className="w-4 h-4 rotate-90" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
