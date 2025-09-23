import { TechniqueCard } from "@/app/components/technique-card";
import { logAccess } from "@/lib/logging";
import { Wind } from "lucide-react";

const techniques = [
    {
        title: "Respiração Diafragmática (Abdominal)",
        description: "Ajuda a acalmar o sistema nervoso e reduzir o estresse, combatendo a respiração curta e rápida.",
        icon: Wind,
        steps: [
            "Sente-se ou deite-se confortavelmente.",
            "Coloque uma mão sobre o peito e a outra sobre a barriga.",
            "Inspire lentamente pelo nariz (contando até 4), sentindo a barriga expandir.",
            "Segure o ar por 1 ou 2 segundos.",
            "Expire lentamente pela boca (contando até 6), sentindo a barriga murchar.",
            "Repita por vários minutos até se sentir mais calmo."
        ]
    },
    {
        title: "Técnica 4-7-8",
        description: "Uma técnica rítmica que promove relaxamento profundo e pode ajudar a induzir o sono.",
        icon: Wind,
        steps: [
            "Expire todo o ar dos pulmões.",
            "Feche a boca e inspire silenciosamente pelo nariz contando até 4.",
            "Prenda a respiração contando até 7.",
            "Expire completamente pela boca, fazendo um som de 'sopro', contando até 8.",
            "Repita o ciclo por 3 a 5 vezes."
        ]
    },
    {
        title: "Respiração em Caixa (Box Breathing)",
        description: "Usada por militares e atletas para manter a calma e o foco sob pressão.",
        icon: Wind,
        steps: [
            "Visualize uma caixa.",
            "Inspire pelo nariz por 4 segundos (lado 1).",
            "Segure o ar por 4 segundos (lado 2).",
            "Expire pelo nariz por 4 segundos (lado 3).",
            "Mantenha os pulmões vazios por 4 segundos (lado 4).",
            "Repita o ciclo."
        ]
    },
]

export default function BreathingPage() {
    logAccess("Respiração");
    return (
        <div className="space-y-8">
            <h1 className="text-3xl font-bold font-headline">Técnicas de Respiração (Foco Fisiológico)</h1>
            <p className="text-lg text-muted-foreground">O objetivo é combater a hiperventilação (respiração curta e rápida), que piora os sintomas físicos da crise, e ativar o sistema nervoso parassimpático, responsável pelo relaxamento.</p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {techniques.map(tech => (
                    <TechniqueCard key={tech.title} {...tech} />
                ))}
            </div>
        </div>
    );
}
