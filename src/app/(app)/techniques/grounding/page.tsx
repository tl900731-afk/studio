import { TechniqueCard } from "@/app/components/technique-card";
import { Anchor } from "lucide-react";
import { logAccess } from "@/lib/logging";

const techniques = [
    {
        title: "Técnica 5-4-3-2-1",
        description: "Usa os cinco sentidos para trazer sua atenção para o presente e longe de pensamentos ansiosos.",
        icon: Anchor,
        steps: [
            "Observe 5 coisas que você pode ver ao seu redor.",
            "Toque em 4 coisas que você pode sentir.",
            "Ouça 3 coisas que você pode ouvir.",
            "Identifique 2 cheiros que você pode sentir.",
            "Nomeie 1 coisa que você pode provar (ou uma qualidade positiva sobre si mesmo)."
        ]
    },
    {
        title: "Foco em um Objeto",
        description: "Concentrar-se intensamente em um único objeto pode ancorar sua mente.",
        icon: Anchor,
        steps: [
            "Escolha um objeto próximo a você.",
            "Observe todos os detalhes: cor, textura, peso, temperatura, forma.",
            "Descreva o objeto para si mesmo em grande detalhe.",
            "Continue por pelo menos um minuto."
        ]
    },
    {
        title: "Estímulo Intenso",
        description: "Um estímulo sensorial forte pode interromper o ciclo da ansiedade.",
        icon: Anchor,
        steps: [
            "Segure um cubo de gelo na mão.",
            "Tome um gole de água muito fria.",
            "Morda um pedaço de limão ou gengibre.",
            "Concentre-se na sensação intensa."
        ]
    },
]

export default function GroundingPage() {
    logAccess("Grounding");
    return (
        <div className="space-y-8">
            <h1 className="text-3xl font-bold font-headline">Técnicas de Grounding</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {techniques.map(tech => (
                    <TechniqueCard key={tech.title} {...tech} />
                ))}
            </div>
        </div>
    );
}
