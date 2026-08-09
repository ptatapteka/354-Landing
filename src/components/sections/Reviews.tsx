import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { siteData } from "@/data/siteData";

const Reviews = () => {
  return (
    <section id="reviews" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="bg-primary/10 text-primary border-transparent mb-4">Отзывы клиентов</Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Что говорят <span className="text-gradient-fire">наши клиенты</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Более 50 000 довольных клиентов за 15 лет работы
          </p>
        </div>

        <Carousel opts={{ align: "start", loop: true }} className="w-full max-w-6xl mx-auto">
          <CarouselContent>
            {siteData.reviews.map((review, i) => (
              <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/3">
                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex items-center justify-between mb-4">
                      <Quote className="w-8 h-8 text-primary/30" />
                      <div className="flex gap-0.5">
                        {Array.from({ length: 5 }).map((_, idx) => (
                          <Star key={idx} className={`w-4 h-4 ${idx < review.rating ? "fill-accent text-accent" : "fill-muted text-muted"}`} />
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-6">"{review.text}"</p>
                    <div className="flex items-center gap-3 pt-4 border-t">
                      <Avatar className="w-12 h-12 border-2 border-primary/20">
                        <AvatarImage src={review.image} alt={review.name} />
                        <AvatarFallback>{review.name.split(" ").map((n) => n[0]).join("")}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-semibold text-sm">{review.name}</div>
                        <div className="text-xs text-muted-foreground">{review.role}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
};

export default Reviews;
