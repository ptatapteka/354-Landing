import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, User, MessageSquare } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import { siteData } from "@/data/siteData";

const Contacts = () => {
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    if (!name || !phone || !message) {
      toast({ title: "Заполните обязательные поля", description: "Имя, телефон и сообщение обязательны для отправки.", variant: "destructive" });
      return;
    }
    toast({ title: "Сообщение отправлено!", description: "Мы свяжемся с вами в ближайшее время. Спасибо за обращение!" });
    setName(""); setPhone(""); setEmail(""); setSubject(""); setMessage("");
  };

  return (
    <section id="contacts" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="bg-primary/10 text-primary border-transparent mb-4">Контакты</Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Свяжитесь <span className="text-gradient-fire">с нами</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Есть вопросы или хотите оформить заказ? Напишите нам — мы ответим быстро!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="space-y-4">
            <Card className="border-2 hover:border-primary/30 transition-colors">
              <CardHeader>
                <CardTitle className="text-xl">Контактная информация</CardTitle>
                <CardDescription>Все способы связи с нами</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-4 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-gradient-fire flex items-center justify-center glow-fire shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">Телефон</div>
                    <a href={`tel:${siteData.contacts.phone}`} className="font-semibold hover:text-primary transition-colors">
                      {siteData.contacts.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-gradient-fire flex items-center justify-center glow-fire shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">Email</div>
                    <a href={`mailto:${siteData.contacts.email}`} className="font-semibold hover:text-primary transition-colors">
                      {siteData.contacts.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-gradient-fire flex items-center justify-center glow-fire shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">Адрес</div>
                    <span className="font-semibold">{siteData.contacts.address}</span>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-gradient-fire flex items-center justify-center glow-fire shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">Часы работы</div>
                    <span className="font-semibold">{siteData.contacts.workHours}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="relative h-48">
                <img src={siteData.images.store} alt="Магазин пиротехники" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <Badge className="bg-gradient-fire text-white border-transparent">Наш магазин</Badge>
                </div>
              </div>
            </Card>
          </div>

          <Card className="border-2 hover:border-primary/30 transition-colors">
            <CardHeader>
              <CardTitle className="text-xl">Форма обратной связи</CardTitle>
              <CardDescription>Заполните форму, и мы перезвоним вам в течение 30 минут</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="c-name">Ваше имя *</Label>
                <div className="relative">
                  <User className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                  <Input id="c-name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Иван Иванов" className="pl-10" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="c-phone">Телефон *</Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                    <Input id="c-phone" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+7 (___) ___-__-__" className="pl-10" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="c-email">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                    <Input id="c-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="ivan@mail.ru" className="pl-10" />
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <Label>Тема обращения</Label>
                <Select value={subject} onValueChange={setSubject}>
                  <SelectTrigger><SelectValue placeholder="Выберите тему" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="order">Оформление заказа</SelectItem>
                    <SelectItem value="booking">Бронирование шоу</SelectItem>
                    <SelectItem value="consult">Консультация</SelectItem>
                    <SelectItem value="corp">Корпоративное мероприятие</SelectItem>
                    <SelectItem value="other">Другое</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="c-message">Сообщение *</Label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                  <Textarea id="c-message" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Расскажите о вашем мероприятии..." rows={4} className="pl-10" />
                </div>
              </div>
              <Separator />
              <Button className="w-full bg-gradient-fire text-white glow-fire text-base h-12" onClick={handleSubmit}>
                <Send className="w-4 h-4 mr-2" /> Отправить сообщение
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
