import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LifeBuoy, Phone, Hospital } from "lucide-react";
import { logAccess } from "@/lib/logging";

const immediateHelpSigns = [
    "Dor no peito que irradia para o braço ou mandíbula.",
    "Perda de consciência.",
    "Dificuldade extrema para respirar (sensação de não conseguir puxar o ar).",
    "Pensamentos de se machucar ou de suicídio.",
];

export default function ImmediateHelpPage() {
  logAccess("Ajuda");
  return (
    <div className="max-w-3xl mx-auto space-y-8">
        <Card>
            <CardHeader>
                <CardTitle className="text-3xl font-headline text-center flex items-center justify-center gap-3">
                    <Hospital className="w-8 h-8 text-destructive" />
                    Quando Procurar Ajuda Imediata
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <p className="text-muted-foreground text-lg text-center">
                    É importante diferenciar uma crise de ansiedade de uma emergência médica. Procure um pronto-socorro se, junto com a ansiedade, você tiver:
                </p>
                <ul className="list-disc list-inside space-y-2 text-lg p-4 bg-destructive/10 rounded-lg text-destructive-foreground">
                    {immediateHelpSigns.map(sign => (
                        <li key={sign} className="text-red-700">{sign}</li>
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
