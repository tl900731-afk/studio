import { TechniqueCard } from "@/app/components/technique-card";
import { logAccess } from "@/lib/logging";
import { Wind } from "lucide-react";

const techniques = [
    {
        title: "Respiração Diafragmática",
        description: "Também conhecida como respiração abdominal, ajuda a acalmar o sistema nervoso e reduzir o estresse.",
        icon: Wind,
        steps: [
            "Sente-se ou deite-se confortavelmente.",
            "Coloque uma mão no peito e a outra na barriga.",
            "Inspire lentamente pelo nariz por 4 segundos, sentindo sua barriga expandir.",
            "Segure a respiração por 2 segundos.",
            "Expire lentamente pela boca por 6 segundos, sentindo sua barriga contrair.",
            "Repita por alguns minutos até se sentir mais calmo."
        ]
    },
    {
        title: "Técnica 4-7-8",
        description: "Uma técnica rítmica que promove relaxamento e pode ajudar a induzir o sono.",
        icon: Wind,
        steps: [
            "Sente-se com as costas retas.",
            "Inspire silenciosamente pelo nariz contando até 4.",
            "Segure a respiração contando até 7.",
            "Expire completamente pela boca, fazendo um som de 'sopro', contando até 8.",
            "Repita o ciclo por pelo menos 3 vezes."
        ]
    },
    {
        title: "Respiração em Caixa (Box Breathing)",
        description: "Usada por atletas e militares para manter a calma e o foco sob pressão.",
        icon: Wind,
        steps: [
            "Inspire pelo nariz contando até 4.",
            "Segure a respiração contando até 4.",
            "Expire pelo nariz contando até 4.",
            "Segure a expiração contando até 4.",
            "Repita por vários ciclos."
        ]
    },
]

export default function BreathingPage() {
    logAccess("Respiração");
    return (
        <div className="space-y-8">
            <h1 className="text-3xl font-bold font-headline">Técnicas de Respiração</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {techniques.map(tech => (
                    <TechniqueCard key={tech.title} {...tech} />
                ))}
            </div>
        </div>
    );
}
