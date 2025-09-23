import { TechniqueCard } from "@/app/components/technique-card";
import { HeartPulse } from "lucide-react";
import { logAccess } from "@/lib/logging";

const techniques = [
    {
        title: "Relaxamento Muscular Progressivo (RMP)",
        description: "Contraia e relaxe diferentes grupos musculares para liberar a tensão acumulada.",
        icon: HeartPulse,
        steps: [
            "Comece pelos pés: contraia os músculos com força por 5 segundos e depois solte por 10 segundos.",
            "Note a diferença entre a tensão e o relaxamento.",
            "Suba pelo corpo: pernas, glúteos, abdômen, braços, mãos, ombros e rosto."
        ]
    },
    {
        title: "Movimento Leve",
        description: "Movimentar o corpo pode ser muito eficaz para liberar a tensão e distrair a mente.",
        icon: HeartPulse,
        steps: [
            "Faça uma caminhada lenta, prestando atenção no movimento dos pés tocando o chão.",
            "Realize alongamentos suaves, como esticar os braços para cima ou girar o pescoço devagar."
        ]
    },
    {
        title: "Mudar de Ambiente",
        description: "Às vezes, o próprio local pode ser um gatilho. Mudar de cenário pode quebrar o ciclo da crise.",
        icon: HeartPulse,
        steps: [
            "Levante-se e vá para outro cômodo.",
            "Saia para tomar um ar fresco na varanda ou no quintal.",
            "A simples mudança de cenário pode sinalizar uma mudança mental."
        ]
    },
]

export default function PhysicalPage() {
    logAccess("Físicas");
    return (
        <div className="space-y-8">
            <h1 className="text-3xl font-bold font-headline">Técnicas Físicas (Foco no Corpo)</h1>
            <p className="text-lg text-muted-foreground">O objetivo é liberar a tensão física acumulada e mudar o estado fisiológico do corpo.</p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {techniques.map(tech => (
                    <TechniqueCard key={tech.title} {...tech} />
                ))}
            </div>
        </div>
    );
}
