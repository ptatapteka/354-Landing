import { Star, ShoppingCart, Eye, Zap, Clock, Sparkles } from "lucide-react";
import { useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { siteData } from "@/data/siteData";

const badgeClass: Record<string, string> = {
  "Хит продаж": "bg-gradient-fire text-white glow-fire",
  "Новинка": "bg-accent text-accent-foreground",
  "Скидка": "bg-destructive text-white",
  "Премиум": "bg-gradient-fire text-white glow-fire",
};

const Catalog = () => {
  const { toast } = useToast();
  const [selected, setSelected] = useState<typeof siteData.products[0] | null>(null);
  const categories = ["Все", ...Array.from(new Set(siteData.products.map((p) => p.category)))];

  const addToCart = (name: string) => {
    toast({ title: "Товар добавлен в корзину", description: `${name} успешно добавлен в вашу корзину.` });
  };

  return (
    <section id="catalog" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="bg-primary/10 text-primary border-transparent mb-4">Каталог продукции</Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Популярные <span className="text-gradient-fire">товары</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Выберите идеальную пиротехнику для вашего мероприятия</p>
        </div>

        <Tabs defaultValue="Все" className="w-full">
          <div className="flex justify-center mb-8 overflow-x-auto">
            <TabsList className="flex flex-wrap h-auto gap-1">
              {categories.map((cat) => (
                <TabsTrigger key={cat} value={cat} className="text-sm">{cat}</TabsTrigger>
              ))}
            </TabsList>
          </div>

          {categories.map((cat) => (
            <TabsContent key={cat} value={cat}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {siteData.products.filter((p) => cat === "Все" || p.category === cat).map((product) => (
                  <Card key={product.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="relative h-52 overflow-hidden">
                      <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                      {product.badge && (
                        <Badge className={`absolute top-3 left-3 border-transparent ${badgeClass[product.badge] ?? ""}`}>
                          {product.badge}
                        </Badge>
                      )}
                      <Button size="icon" variant="secondary" className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity" onClick={() => setSelected(product)}>
                        <Eye className="w-4 h-4" />
                      </Button>
                    </div>
                    <CardContent className="p-4">
                      <div className="flex items-center gap-1 mb-2">
                        <Star className="w-4 h-4 fill-accent text-accent" />
                        <span className="text-sm font-medium">{product.rating}</span>
                        <span className="text-xs text-muted-foreground ml-auto">{product.shots} залпов</span>
                      </div>
                      <h3 className="font-semibold text-base mb-1 line-clamp-2">{product.name}</h3>
                      <p className="text-xs text-muted-foreground mb-3 line-clamp-2">{product.description}</p>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Clock className="w-3 h-3" /> {product.duration}
                      </div>
                    </CardContent>
                    <CardFooter className="p-4 pt-0 flex items-center justify-between">
                      <div className="flex flex-col">
                        {product.oldPrice && <span className="text-xs text-muted-foreground line-through">{product.oldPrice} ₽</span>}
                        <span className="text-xl font-bold text-primary">{product.price} ₽</span>
                      </div>
                      <Button size="sm" className="bg-gradient-fire text-white" onClick={() => addToCart(product.name)}>
                        <ShoppingCart className="w-4 h-4" />
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <Dialog open={!!selected} onOpenChange={(open) => !open && setSelected(null)}>
          <DialogContent className="max-w-2xl">
            {selected && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-2xl">{selected.name}</DialogTitle>
                  <DialogDescription>{selected.description}</DialogDescription>
                </DialogHeader>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative h-64 rounded-lg overflow-hidden">
                    <img src={selected.image} alt={selected.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-2">
                      <Star className="w-5 h-5 fill-accent text-accent" />
                      <span className="font-medium">{selected.rating} / 5.0</span>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/30">
                        <Zap className="w-5 h-5 text-primary" />
                        <div><div className="text-xs text-muted-foreground">Количество залпов</div><div className="font-semibold">{selected.shots}</div></div>
                      </div>
                      <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/30">
                        <Clock className="w-5 h-5 text-primary" />
                        <div><div className="text-xs text-muted-foreground">Длительность</div><div className="font-semibold">{selected.duration}</div></div>
                      </div>
                      <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/30">
                        <Sparkles className="w-5 h-5 text-primary" />
                        <div><div className="text-xs text-muted-foreground">Категория</div><div className="font-semibold">{selected.category}</div></div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between mt-auto pt-4 border-t">
                      <div className="flex flex-col">
                        {selected.oldPrice && <span className="text-sm text-muted-foreground line-through">{selected.oldPrice} ₽</span>}
                        <span className="text-2xl font-bold text-primary">{selected.price} ₽</span>
                      </div>
                      <Button className="bg-gradient-fire text-white glow-fire" onClick={() => addToCart(selected.name)}>
                        <ShoppingCart className="w-4 h-4 mr-2" /> В корзину
                      </Button>
                    </div>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Catalog;
