import { TechniqueCard } from "@/app/components/technique-card";
import { HeartPulse } from "lucide-react";
import { logAccess } from "@/lib/logging";

const techniques = [
    {
        title: "Relaxamento Muscular Progressivo",
        description: "Tensionar e relaxar diferentes grupos musculares para liberar a tensão física.",
        icon: HeartPulse,
        steps: [
            "Encontre uma posição confortável.",
            "Comece pelos pés: tensione os músculos por 5 segundos e depois relaxe por 10 segundos.",
            "Suba pelo corpo, tensionando e relaxando pernas, abdômen, braços, mãos e rosto.",
            "Observe a sensação de relaxamento em cada parte do corpo."
        ]
    },
    {
        title: "Movimento Leve",
        description: "O exercício físico, mesmo que leve, libera endorfinas e pode distrair da ansiedade.",
        icon: HeartPulse,
        steps: [
            "Faça uma caminhada curta, mesmo que dentro de casa.",
            "Alongue suavemente os principais grupos musculares.",
            "Dance ao som de uma música.",
            "Qualquer movimento que seu corpo permita sem esforço excessivo."
        ]
    },
    {
        title: "Mudar de Ambiente",
        description: "Às vezes, uma simples mudança de cenário pode interromper o ciclo de ansiedade.",
        icon: HeartPulse,
        steps: [
            "Se estiver dentro, vá para fora e respire ar fresco.",
            "Se estiver em um cômodo barulhento, vá para um lugar silencioso.",
            "Mude de cadeira ou de posição.",
            "A mudança física pode sinalizar uma mudança mental."
        ]
    },
]

export default function PhysicalPage() {
    logAccess("Físicas");
    return (
        <div className="space-y-8">
            <h1 className="text-3xl font-bold font-headline">Técnicas Físicas</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {techniques.map(tech => (
                    <TechniqueCard key={tech.title} {...tech} />
                ))}
            </div>
        </div>
    );
}
