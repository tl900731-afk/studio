import { Logo } from "@/app/components/logo";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function WelcomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80svh] text-center p-4">
      <div className="flex flex-col items-center gap-6">
        <Logo className="w-32 h-32" />
        <div className="space-y-2">
            <h1 className="text-4xl sm:text-5xl font-bold font-headline tracking-tight text-primary">
                Enfrente a ansiedade de cara.
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
                Seu companheiro com técnicas simples e eficazes para momentos de crise.
            </p>
        </div>
        <Button asChild size="lg" className="mt-4">
            <Link href="/sobre-o-criador">
                Começar
                <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
        </Button>
      </div>
    </div>
  );
}
