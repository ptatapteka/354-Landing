import { BadgeCheck, Award, Truck, ShieldCheck, Boxes, Tags } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { siteData } from "@/data/siteData";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  BadgeCheck, Award, Truck, ShieldCheck, Boxes, Tags,
};

const Advantages = () => {
  return (
    <section id="advantages" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-fire-dark" />
      <div className="absolute inset-0 opacity-20">
        <img src={siteData.images.backgroundDark} alt="" className="w-full h-full object-cover" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <Badge className="bg-white/10 text-white border-transparent mb-4">Почему мы</Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
            Преимущества <span className="text-gradient-fire">нашей компании</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Мы делаем праздник незабываемым, обеспечивая безопасность и качество на каждом этапе
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {siteData.advantages.map((adv, i) => {
            const Icon = iconMap[adv.icon] ?? BadgeCheck;
            return (
              <Card key={i} className="bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/15 transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-fire flex items-center justify-center glow-fire mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{adv.title}</h3>
                  <p className="text-sm text-white/70 leading-relaxed">{adv.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center border border-white/20">
            <div className="text-4xl font-bold text-gradient-fire mb-2">98%</div>
            <Progress value={98} className="mb-2" />
            <p className="text-sm text-white/70">Довольных клиентов</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center border border-white/20">
            <div className="text-4xl font-bold text-gradient-fire mb-2">100%</div>
            <Progress value={100} className="mb-2" />
            <p className="text-sm text-white/70">Сертифицированных товаров</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center border border-white/20">
            <div className="text-4xl font-bold text-gradient-fire mb-2">24/7</div>
            <Progress value={85} className="mb-2" />
            <p className="text-sm text-white/70">Поддержка клиентов</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantages;
