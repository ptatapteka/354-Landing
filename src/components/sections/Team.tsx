import { Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@/components/ui/tooltip";
import { siteData } from "@/data/siteData";

const Team = () => {
  return (
    <section id="team" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="bg-primary/10 text-primary border-transparent mb-4">Наша команда</Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Профессионалы <span className="text-gradient-fire">своего дела</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Сертифицированные пиротехники с многолетним опытом организации фейерверков
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {siteData.team.map((member, i) => (
            <Card key={i} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center">
              <CardContent className="p-6">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div className="relative inline-block mb-4">
                        <Avatar className="w-24 h-24 border-4 border-primary/20 group-hover:border-primary transition-colors">
                          <AvatarImage src={member.image} alt={member.name} />
                          <AvatarFallback className="text-lg">{member.name.split(" ").map((n) => n[0]).join("")}</AvatarFallback>
                        </Avatar>
                        <div className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-gradient-fire flex items-center justify-center glow-fire">
                          <Award className="w-4 h-4 text-white" />
                        </div>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{member.experience}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                <h3 className="font-bold text-lg mb-1">{member.name}</h3>
                <p className="text-sm text-primary font-medium mb-2">{member.role}</p>
                <Separator className="mb-3" />
                <p className="text-xs text-muted-foreground flex items-center justify-center gap-1">
                  <Award className="w-3 h-3" /> {member.experience}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
