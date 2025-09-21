import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import { logAccess } from "@/lib/logging";

const programPillars = [
    "Diagnóstico",
    "Intervenção",
    "Controle",
    "Alívio"
];

export default function AboutProgramPage() {
  logAccess("Programa");
  return (
    <div className="max-w-3xl mx-auto">
        <Card>
            <CardHeader>
                <CardTitle className="text-3xl text-center font-headline">
                    Sobre o Programa DI CARA
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-lg">
                <p className="text-muted-foreground text-center">
                    O programa DI CARA foi criado com o objetivo de fornecer apoio imediato a pessoas que estão passando por crises de ansiedade.
                </p>
                <div className="p-6 bg-muted/50 rounded-lg">
                    <h3 className="font-semibold text-xl mb-4 text-center">
                        É baseado em 4 pilares:
                    </h3>
                    <ul className="space-y-3">
                        {programPillars.map(pillar => (
                            <li key={pillar} className="flex items-center gap-3">
                                <CheckCircle2 className="h-6 w-6 text-primary" />
                                <span className="font-medium">{pillar}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </CardContent>
        </Card>
    </div>
  );
}
