import { CREATOR_INFO } from "@/lib/creator-data";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Globe, Instagram, Mail } from "lucide-react";
import { WhatsAppIcon } from "@/app/components/icons";
import { WhatsAppSupport } from "@/app/components/whatsapp-support";
import Image from "next/image";
import { logAccess } from "@/lib/logging";

export default function CreatorPage() {
    logAccess("Criador");
    const formatPhone = (phone: string) =>
    phone.replace(/(\d{2})(\d{2})(\d{5})(\d{4})/, "+$1 ($2) $3-$4");

  return (
    <div className="container mx-auto p-0">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <Card className="overflow-hidden">
            <CardHeader className="flex flex-col sm:flex-row items-start gap-4 bg-muted/50 p-6">
                <Avatar className="h-24 w-24 border">
                    <AvatarImage asChild>
                        <Image src="/images/creator.jpeg" alt={CREATOR_INFO.name} width={96} height={96} data-ai-hint="portrait man" />
                    </AvatarImage>
                    <AvatarFallback>{CREATOR_INFO.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="grid gap-0.5 pt-2">
                    <CardTitle className="text-2xl font-headline">
                        <div className="group flex items-center gap-2">
                          {CREATOR_INFO.name}
                        </div>
                    </CardTitle>
                    <p className="text-lg text-primary">{CREATOR_INFO.title}</p>
                </div>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              <p className="text-muted-foreground">{CREATOR_INFO.bio}</p>
              <div className="flex flex-wrap gap-2">
                {CREATOR_INFO.qualifications.map((qual, index) => (
                  <Badge key={index} variant="secondary" className="text-sm">
                    {qual}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Contato Direto</CardTitle>
            </CardHeader>
            <CardContent className="grid sm:grid-cols-2 gap-2">
                <a href={`https://wa.me/${CREATOR_INFO.contact.whatsapp}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent/50 transition-colors">
                    <WhatsAppIcon className="h-6 w-6 text-green-500"/>
                    <div>
                        <p className="font-semibold">WhatsApp</p>
                        <p className="text-sm text-muted-foreground">{formatPhone(CREATOR_INFO.contact.whatsapp)}</p>
                    </div>
                </a>
                <a href={`mailto:${CREATOR_INFO.contact.email}`} className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent/50 transition-colors">
                    <Mail className="h-6 w-6 text-muted-foreground"/>
                    <div>
                        <p className="font-semibold">E-mail</p>
                        <p className="text-sm text-muted-foreground">{CREATOR_INFO.contact.email}</p>
                    </div>
                </a>
                <a href={`https://instagram.com/${CREATOR_INFO.contact.instagram}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent/50 transition-colors">
                    <Instagram className="h-6 w-6 text-muted-foreground"/>
                    <div>
                        <p className="font-semibold">Instagram</p>
                        <p className="text-sm text-muted-foreground">@{CREATOR_INFO.contact.instagram}</p>
                    </div>
                </a>
                 <a href={CREATOR_INFO.contact.website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent/50 transition-colors">
                    <Globe className="h-6 w-6 text-muted-foreground"/>
                    <div>
                        <p className="font-semibold">Website</p>
                        <p className="text-sm text-muted-foreground">{CREATOR_INFO.contact.website.replace('https://www.','').replace('https://','')}</p>
                    </div>
                </a>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-1">
            <WhatsAppSupport />
        </div>
      </div>
    </div>
  );
}
