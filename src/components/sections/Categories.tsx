import { Sparkles, Flame, Zap, PartyPopper, Lightbulb, Rocket, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { siteData } from "@/data/siteData";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Sparkles, Flame, Zap, PartyPopper, Lightbulb, Rocket,
};

const Categories = () => {
  return (
    <section id="categories" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="bg-primary/10 text-primary border-transparent mb-4">Категории товаров</Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Наш <span className="text-gradient-fire">ассортимент</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Более 5000 наименований сертифицированной пиротехники для любого повода и бюджета
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteData.categories.map((category, i) => {
            const Icon = iconMap[category.icon] ?? Sparkles;
            return (
              <Card key={i} className="group overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer">
                <div className="relative h-56 overflow-hidden">
                  <img src={category.image} alt={category.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute top-4 left-4 w-12 h-12 rounded-lg bg-gradient-fire flex items-center justify-center glow-fire">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <h3 className="text-xl font-bold text-white">{category.name}</h3>
                    <Badge className="bg-white/20 text-white border-transparent">{category.count} товаров</Badge>
                  </div>
                </div>
                <CardContent className="p-4 flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Перейти в каталог</span>
                  <ChevronRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;
