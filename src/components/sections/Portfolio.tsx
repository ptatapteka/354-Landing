import { useState } from "react";
import { Calendar, MapPin, Eye } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { siteData } from "@/data/siteData";

const Portfolio = () => {
  const [selected, setSelected] = useState<typeof siteData.portfolio[0] | null>(null);

  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="bg-primary/10 text-primary border-transparent mb-4">Портфолио работ</Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Наши <span className="text-gradient-fire">проекты</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Более 1200 успешно реализованных пиротехнических шоу по всей России
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteData.portfolio.map((item, i) => (
            <Card key={i} className="group overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-300 hover:-translate-y-2" onClick={() => setSelected(item)}>
              <div className="relative h-64 overflow-hidden">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-gradient-fire text-white border-transparent">{item.category}</Badge>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-bold text-lg mb-1">{item.title}</h3>
                  <div className="flex items-center gap-3 text-white/70 text-sm">
                    <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {item.date}</span>
                  </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                    <Eye className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white">
            Смотреть все работы
          </Button>
        </div>

        <Dialog open={!!selected} onOpenChange={(open) => !open && setSelected(null)}>
          <DialogContent className="max-w-3xl">
            {selected && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-2xl">{selected.title}</DialogTitle>
                  <DialogDescription>{selected.category}</DialogDescription>
                </DialogHeader>
                <div className="relative h-80 rounded-lg overflow-hidden">
                  <img src={selected.image} alt={selected.title} className="w-full h-full object-cover" />
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {selected.date}</span>
                  <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> Москва</span>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Portfolio;
