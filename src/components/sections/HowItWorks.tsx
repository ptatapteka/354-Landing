import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";
import { siteData } from "@/data/siteData";

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="bg-primary/10 text-primary border-transparent mb-4">Как мы работаем</Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Простые <span className="text-gradient-fire">4 шага</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            От выбора до незабываемого шоу — мы позаботимся обо всём
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {siteData.steps.map((step, i) => (
            <HoverCard key={i}>
              <HoverCardTrigger asChild>
                <Card className="group relative cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/30">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-fire flex items-center justify-center glow-fire mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <span className="text-2xl font-bold text-white">{step.number}</span>
                    </div>
                    <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </CardContent>
                  {i < siteData.steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-primary/30 z-10" />
                  )}
                </Card>
              </HoverCardTrigger>
              <HoverCardContent className="w-72">
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold">Шаг {step.number}</h4>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              </HoverCardContent>
            </HoverCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
