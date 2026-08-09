import { useState } from "react";
import { Expand } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { siteData } from "@/data/siteData";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const allImages = [
    ...siteData.images.gallery,
    ...siteData.images.sparklers,
    ...siteData.images.cityFireworks,
    ...siteData.images.weddings,
  ];

  return (
    <section id="gallery" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="bg-primary/10 text-primary border-transparent mb-4">Галерея</Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Зал <span className="text-gradient-fire">огней</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Яркие моменты наших фейерверков и пиротехнических шоу
          </p>
        </div>

        <Carousel opts={{ align: "start", loop: true }} className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {allImages.map((img, i) => (
              <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/3">
                <Card className="group overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-1" onClick={() => setSelectedImage(img)}>
                  <div className="relative h-56 overflow-hidden">
                    <img src={img} alt={`Фейерверк ${i + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
                      <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                        <Expand className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-2 mt-8 max-w-5xl mx-auto">
          {allImages.slice(0, 12).map((img, i) => (
            <div key={i} className="relative h-20 md:h-24 rounded-lg overflow-hidden cursor-pointer group" onClick={() => setSelectedImage(img)}>
              <img src={img} alt={`Миниатюра ${i + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
            </div>
          ))}
        </div>

        <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
          <DialogContent className="max-w-4xl p-0 overflow-hidden">
            {selectedImage && (
              <img src={selectedImage} alt="Просмотр фейерверка" className="w-full h-auto max-h-[80vh] object-contain" />
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Gallery;
