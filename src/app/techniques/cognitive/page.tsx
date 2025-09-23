import { TechniqueCard } from "@/app/components/technique-card";
import { BrainCircuit } from "lucide-react";
import { logAccess } from "@/lib/logging";

const techniques = [
    {
        title: "Desafio dos Pensamentos",
        description: "Questione a validade e o poder dos seus medos para reduzir sua intensidade.",
        icon: BrainCircuit,
        steps: [
            "Qual é a evidência real de que meu medo vai acontecer?",
            "Qual é a pior coisa que realisticamente pode acontecer? Eu sobreviveria a isso?",
            "Isso já aconteceu antes? O que aconteceu da última vez?",
            "Essa sensação é desconfortável, mas ela é perigosa?"
        ]
    },
    {
        title: "Aceitação e Flutuação (Mindfulness)",
        description: "Em vez de lutar contra a sensação, aceite-a e observe-a sem julgamento.",
        icon: BrainCircuit,
        steps: [
            "Diga a si mesmo: 'Ok, estou sentindo ansiedade. É uma sensação intensa, mas eu sei que é temporária e vai passar.'",
            "Imagine a ansiedade como uma onda no mar: ela vem forte, atinge um pico e depois recua.",
            "Apenas 'flutue' na sensação sem resistência, deixando-a seguir seu curso natural."
        ]
    },
    {
        title: "Uso de Mantra ou Afirmação",
        description: "Repita uma frase curta e tranquilizadora para focar sua mente em algo positivo.",
        icon: BrainCircuit,
        steps: [
           "Escolha uma frase como:",
           "'Isso vai passar.'",
           "'Eu estou seguro(a) neste momento.'",
           "'Essa sensação é apenas ansiedade, não é um perigo real.'",
           "'Eu consigo lidar com isso.'"
        ]
    },
    {
        title: "Distração Mental",
        description: "Force seu cérebro a se concentrar em uma tarefa neutra e complexa.",
        icon: BrainCircuit,
        steps: [
            "Conte de 100 para trás, de 3 em 3 (100, 97, 94...).",
            "Tente nomear todos os estados do Brasil e suas capitais.",
            "Cante a letra de uma música mentalmente.",
            "Descreva o passo a passo para fazer uma receita simples."
        ]
    }
]

export default function CognitivePage() {
    logAccess("Cognitivas");
    return (
        <div className="space-y-8">
            <h1 className="text-3xl font-bold font-headline">Técnicas Cognitivas (Foco nos Pensamentos)</h1>
            <p className="text-lg text-muted-foreground">O objetivo é interromper e desafiar o fluxo de pensamentos negativos e assustadores que alimentam a crise.</p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {techniques.map(tech => (
                    <TechniqueCard key={tech.title} {...tech} />
                ))}
            </div>
        </div>
    );
}
