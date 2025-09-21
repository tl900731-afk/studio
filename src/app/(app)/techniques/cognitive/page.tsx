import { TechniqueCard } from "@/app/components/technique-card";
import { BrainCircuit } from "lucide-react";
import { logAccess } from "@/lib/logging";

const techniques = [
    {
        title: "Questionar Pensamentos",
        description: "Desafie os pensamentos ansiosos para reduzir seu poder e veracidade.",
        icon: BrainCircuit,
        steps: [
            "Identifique o pensamento que está causando ansiedade.",
            "Pergunte a si mesmo: 'Qual é a evidência para este pensamento?'",
            "Pergunte: 'Qual é a pior, a melhor e a mais provável coisa que pode acontecer?'",
            "Tente reformular o pensamento de uma maneira mais equilibrada e realista."
        ]
    },
    {
        title: "Aceitação (Mindfulness)",
        description: "Observe seus pensamentos e sentimentos sem julgamento, permitindo que eles passem.",
        icon: BrainCircuit,
        steps: [
            "Reconheça o sentimento de ansiedade sem lutar contra ele.",
            "Diga a si mesmo: 'Estou sentindo ansiedade, e tudo bem'.",
            "Imagine os pensamentos e sentimentos como nuvens passando no céu.",
            "Volte sua atenção para a respiração ou para o momento presente."
        ]
    },
    {
        title: "Mantras Positivos",
        description: "Repetir uma frase calmante e positiva pode substituir pensamentos negativos.",
        icon: BrainCircuit,
        steps: [
            "Escolha uma frase curta e positiva, como 'Eu estou seguro' ou 'Isso vai passar'.",
            "Repita a frase para si mesmo, em voz alta ou mentalmente.",
            "Sincronize a repetição com sua respiração, se ajudar.",
            "Continue até sentir uma mudança no seu estado emocional."
        ]
    },
]

export default function CognitivePage() {
    logAccess("Cognitivas");
    return (
        <div className="space-y-8">
            <h1 className="text-3xl font-bold font-headline">Técnicas Cognitivas</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {techniques.map(tech => (
                    <TechniqueCard key={tech.title} {...tech} />
                ))}
            </div>
        </div>
    );
}
