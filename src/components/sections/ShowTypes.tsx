import { Clock, Zap, ChevronRight } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { siteData } from "@/data/siteData";

const ShowTypes = () => {
  return (
    <section id="show-types" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="bg-primary/10 text-primary border-transparent mb-4">Типы шоу</Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Выберите своё <span className="text-gradient-fire">шоу</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Три программы на любой бюджет — от компактного мини-шоу до грандиозного пиротехнического спектакля
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {siteData.showTypes.map((show, i) => (
            <Card key={i} className={`group overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ${i === 1 ? "border-primary border-2 lg:scale-105" : ""}`}>
              <div className="relative h-48 overflow-hidden">
                <img src={show.image} alt={show.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-3 left-3">
                  <h3 className="text-2xl font-bold text-white">{show.name}</h3>
                </div>
                {i === 1 && (
                  <Badge className="absolute top-3 right-3 bg-gradient-fire text-white border-transparent glow-fire">Популярное</Badge>
                )}
              </div>
              <CardContent className="p-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-primary" />
                    <div><div className="text-xs text-muted-foreground">Длительность</div><div className="font-semibold">{show.duration}</div></div>
                  </div>
                  <Separator />
                  <div className="flex items-center gap-3">
                    <Zap className="w-5 h-5 text-primary" />
                    <div><div className="text-xs text-muted-foreground">Количество залпов</div><div className="font-semibold">{show.shots}</div></div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0 flex items-center justify-between">
                <span className="text-2xl font-bold text-primary">{show.price}</span>
                <Button className="bg-gradient-fire text-white group-hover:glow-fire">
                  <a href="#booking">Выбрать</a>
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShowTypes;
