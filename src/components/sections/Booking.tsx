import { useState } from "react";
import { Calendar as CalendarIcon, Clock, Check, User, Phone, Mail, MapPin, PartyPopper } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Calendar } from "@/components/ui/calendar";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";
import { siteData } from "@/data/siteData";

const Booking = () => {
  const { toast } = useToast();
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [selectedSlot, setSelectedSlot] = useState<string>("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [showType, setShowType] = useState("");
  const [location, setLocation] = useState("");
  const [comment, setComment] = useState("");
  const [agreed, setAgreed] = useState(false);

  const formComplete = !!(date && selectedSlot && name && phone && showType);

  const handleSubmit = () => {
    if (!formComplete) {
      toast({ title: "Заполните все обязательные поля", description: "Выберите дату, время, тип шоу и укажите контакты.", variant: "destructive" });
      return;
    }
    toast({ title: "Заявка отправлена!", description: `Мы свяжемся с вами в течение 30 минут для подтверждения брони на ${date?.toLocaleDateString("ru-RU")} в ${selectedSlot}.` });
    setDate(undefined); setSelectedSlot(""); setName(""); setPhone(""); setEmail(""); setShowType(""); setLocation(""); setComment(""); setAgreed(false);
  };

  return (
    <section id="booking" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="bg-primary/10 text-primary border-transparent mb-4">Бронирование</Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Забронируйте <span className="text-gradient-fire">ваше шоу</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Выберите дату и время — мы организуем незабываемый фейерверк для вашего мероприятия
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="border-2 hover:border-primary/30 transition-colors">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CalendarIcon className="w-5 h-5 text-primary" /> Выбор даты и времени
              </CardTitle>
              <CardDescription>Выберите удобную дату и свободный временной слот</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label className="mb-3 block">Дата проведения</Label>
                <div className="flex justify-center rounded-lg border p-2">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    disabled={(d) => d < new Date(new Date().setHours(0, 0, 0, 0))}
                    className="rounded-md"
                  />
                </div>
              </div>
              <Separator />
              <div>
                <Label className="mb-3 block">Свободные временные слоты</Label>
                <div className="grid grid-cols-2 gap-3">
                  {siteData.timeSlots.map((slot) => {
                    const isBooked = siteData.bookedSlots.includes(slot);
                    const isSelected = selectedSlot === slot;
                    return (
                      <button
                        key={slot}
                        disabled={isBooked}
                        onClick={() => setSelectedSlot(slot)}
                        className={`flex items-center justify-center gap-2 px-4 py-3 rounded-lg border-2 text-sm font-medium transition-all ${
                          isBooked
                            ? "border-muted bg-muted/50 text-muted-foreground cursor-not-allowed line-through"
                            : isSelected
                            ? "border-primary bg-gradient-fire text-white glow-fire"
                            : "border-input hover:border-primary hover:bg-accent"
                        }`}
                      >
                        {!isBooked && isSelected && <Check className="w-4 h-4" />}
                        <Clock className="w-4 h-4" />
                        {slot}
                      </button>
                    );
                  })}
                </div>
              </div>
              {date && selectedSlot && (
                <div className="bg-primary/5 rounded-lg p-4 border border-primary/20">
                  <p className="text-sm text-muted-foreground mb-1">Выбранное время:</p>
                  <p className="font-semibold flex items-center gap-2">
                    <CalendarIcon className="w-4 h-4 text-primary" />
                    {date.toLocaleDateString("ru-RU", { weekday: "long", day: "numeric", month: "long" })}
                  </p>
                  <p className="font-semibold flex items-center gap-2 mt-1">
                    <Clock className="w-4 h-4 text-primary" /> {selectedSlot}
                  </p>
                </div>
              )}
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-primary/30 transition-colors">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <PartyPopper className="w-5 h-5 text-primary" /> Детали заказа
              </CardTitle>
              <CardDescription>Заполните информацию о вашем мероприятии</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Ваше имя *</Label>
                <div className="relative">
                  <User className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                  <Input id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Иван Иванов" className="pl-10" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="phone">Телефон *</Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                    <Input id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+7 (___) ___-__-__" className="pl-10" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                    <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="ivan@mail.ru" className="pl-10" />
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <Label>Тип шоу *</Label>
                <Select value={showType} onValueChange={setShowType}>
                  <SelectTrigger><SelectValue placeholder="Выберите тип шоу" /></SelectTrigger>
                  <SelectContent>
                    {siteData.showTypes.map((show) => (
                      <SelectItem key={show.name} value={show.name}>{show.name} — {show.price}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="location">Адрес проведения</Label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                  <Input id="location" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="г. Москва, парк Горького" className="pl-10" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="comment">Комментарий</Label>
                <Textarea id="comment" value={comment} onChange={(e) => setComment(e.target.value)} placeholder="Дополнительные пожелания к шоу..." rows={3} />
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="agree" checked={agreed} onCheckedChange={(v) => setAgreed(v === true)} />
                <Label htmlFor="agree" className="text-sm font-normal text-muted-foreground">
                  Согласен с правилами безопасности и обработкой данных
                </Label>
              </div>
              <Button className="w-full bg-gradient-fire text-white glow-fire text-base h-12" onClick={handleSubmit} disabled={!agreed}>
                Отправить заявку
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="max-w-5xl mx-auto mt-8">
          <div className="bg-card rounded-xl p-6 border">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-medium">Заполненность формы</span>
              <span className="text-sm text-muted-foreground">{formComplete ? "100%" : "Не заполнено"}</span>
            </div>
            <Progress value={formComplete ? 100 : 0} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
