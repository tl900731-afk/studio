import { TechniqueCard } from "@/app/components/technique-card";
import { Anchor } from "lucide-react";
import { logAccess } from "@/lib/logging";

const techniques = [
    {
        title: "Técnica 5-4-3-2-1",
        description: "Use os cinco sentidos para trazer sua atenção para o momento presente.",
        icon: Anchor,
        steps: [
            "5 coisas que você pode VER (a cor da parede, um objeto, a textura do chão).",
            "4 coisas que você pode TOCAR (a textura da roupa, a lisura do celular, a temperatura da pele).",
            "3 coisas que você pode OUVIR (o som do ar-condicionado, carros passando, sua respiração).",
            "2 coisas que você pode CHEIRAR (o cheiro do café, um perfume, o ar fresco).",
            "1 coisa que você pode PROVAR (um gole de água, uma bala, o gosto em sua boca)."
        ]
    },
    {
        title: "Foco em um Objeto",
        description: "Concentre-se intensamente em um único objeto para ancorar sua mente nos detalhes.",
        icon: Anchor,
        steps: [
            "Escolha um objeto próximo e observe-o em detalhes.",
            "Note sua cor, forma, textura, peso, temperatura e qualquer imperfeição.",
            "Descreva-o mentalmente com o máximo de detalhes, como se nunca o tivesse visto antes."
        ]
    },
    {
        title: "Sensações Físicas Intensas",
        description: "Use um estímulo sensorial forte para 'chocar' o sistema e quebrar o ciclo do pânico.",
        icon: Anchor,
        steps: [
            "Segure um cubo de gelo na mão (você pode combinar com a respiração).",
            "Lave o rosto com água bem fria.",
            "Morda uma fatia de limão ou gengibre.",
            "Cheire algo com um aroma muito forte (álcool, óleo essencial de hortelã)."
        ]
    },
]

export default function GroundingPage() {
    logAccess("Grounding");
    return (
        <div className="space-y-8">
            <h1 className="text-3xl font-bold font-headline">Técnicas de Aterramento (Foco Sensorial)</h1>
            <p className="text-lg text-muted-foreground">O objetivo é tirar o foco dos pensamentos catastróficos e das sensações internas, trazendo sua atenção para o momento presente e para o ambiente ao seu redor.</p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {techniques.map(tech => (
                    <TechniqueCard key={tech.title} {...tech} />
                ))}
            </div>
        </div>
    );
}
