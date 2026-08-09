import { Rocket, Sparkles, Truck, Heart, Building2, ShieldCheck, Check } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { siteData } from "@/data/siteData";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Rocket, Sparkles, Truck, Heart, Building2, ShieldCheck,
};

const Services = () => {
  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="bg-primary/10 text-primary border-transparent mb-4">Наши услуги</Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Полный спектр <span className="text-gradient-fire">пиротехнических услуг</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            От продажи пиротехники до организации грандиозных шоу под ключ
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteData.services.map((service, i) => {
            const Icon = iconMap[service.icon] ?? Rocket;
            return (
              <Card key={i} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/30">
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl bg-gradient-fire flex items-center justify-center glow-fire mb-2 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <Separator />
                <CardFooter className="pt-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span className="font-bold text-primary text-lg">{service.price}</span>
                  </div>
                  <Button variant="ghost" className="text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <a href="#booking">Заказать</a>
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
