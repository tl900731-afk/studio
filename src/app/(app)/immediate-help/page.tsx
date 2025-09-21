import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LifeBuoy, Phone } from "lucide-react";
import { logAccess } from "@/lib/logging";

const immediateHelpSigns = [
    "Dor no peito intensa ou que se espalha",
    "Desmaio ou perda de consciência",
    "Falta de ar severa ou sensação de sufocamento",
    "Pensamentos de se machucar ou de suicídio",
];

export default function ImmediateHelpPage() {
  logAccess("Ajuda");
  return (
    <div className="max-w-3xl mx-auto space-y-8">
        <Card>
            <CardHeader>
                <CardTitle className="text-3xl font-headline text-center flex items-center justify-center gap-3">
                    <LifeBuoy className="w-8 h-8 text-destructive" />
                    Quando Procurar Ajuda Imediata
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <p className="text-muted-foreground text-lg text-center">
                    Se você estiver experienciando qualquer um dos seguintes sintomas, é crucial procurar ajuda médica ou de emergência imediatamente.
                </p>
                <ul className="list-disc list-inside space-y-2 text-lg p-4 bg-muted/50 rounded-lg">
                    {immediateHelpSigns.map(sign => (
                        <li key={sign}>{sign}</li>
                    ))}
                </ul>
            </CardContent>
        </Card>
        
        <Alert variant="destructive" className="shadow-lg">
            <Phone className="h-5 w-5" />
            <AlertTitle className="text-xl font-bold">Ligue 188 – CVV (Centro de Valorização da Vida)</AlertTitle>
            <AlertDescription className="text-base mt-2">
                O CVV realiza apoio emocional e prevenção do suicídio, atendendo voluntária e gratuitamente todas as pessoas que querem e precisam conversar, sob total sigilo por telefone, email e chat 24 horas todos os dias.
                <a href="tel:188" className="block mt-4 font-bold underline hover:text-destructive-foreground/80">
                    Clique aqui para ligar
                </a>
            </AlertDescription>
        </Alert>
    </div>
  );
}
