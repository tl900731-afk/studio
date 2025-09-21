import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { LucideIcon } from "lucide-react";

interface TechniqueCardProps {
    title: string;
    description: string;
    icon: LucideIcon;
    steps: string[];
}

export function TechniqueCard({ title, description, icon: Icon, steps }: TechniqueCardProps) {
    return (
        <Card>
            <CardHeader className="flex flex-row items-center gap-4">
                <Icon className="w-8 h-8 text-primary" />
                <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <p className="text-muted-foreground">{description}</p>
                <ul className="list-disc list-inside space-y-2 bg-muted/50 p-4 rounded-lg">
                    {steps.map((step, index) => (
                        <li key={index}>{step}</li>
                    ))}
                </ul>
            </CardContent>
        </Card>
    )
}
