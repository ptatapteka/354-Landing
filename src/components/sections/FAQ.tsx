import { Plus, Minus } from "lucide-react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Info } from "lucide-react";
import { siteData } from "@/data/siteData";

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="bg-primary/10 text-primary border-transparent mb-4">Вопросы и ответы</Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Частые <span className="text-gradient-fire">вопросы</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ответы на самые популярные вопросы о пиротехнике и наших услугах
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="mb-6">
            <CardContent className="p-0">
              <Accordion type="single" collapsible className="w-full">
                {siteData.faq.map((item, i) => (
                  <AccordionItem key={i} value={`item-${i}`} className="border-b last:border-b-0">
                    <AccordionTrigger className="text-left px-6 py-4 hover:no-underline hover:bg-muted/30 transition-colors text-base font-semibold">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 text-muted-foreground leading-relaxed">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>

          <Alert className="border-primary/30 bg-primary/5">
            <Info className="w-5 h-5 text-primary" />
            <AlertTitle className="font-semibold">Не нашли ответ?</AlertTitle>
            <AlertDescription className="mt-2">
              Свяжитесь с нами по телефону <a href="tel:+74951234567" className="text-primary font-semibold underline">+7 (495) 123-45-67</a> или оставьте заявку в разделе контактов. Мы ответим на все ваши вопросы!
            </AlertDescription>
          </Alert>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
