"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { generatePersonalizedMessage } from "@/ai/flows/personalized-whatsapp-message";
import { CREATOR_INFO } from "@/lib/creator-data";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";
import { WhatsAppIcon } from "./icons";

const formSchema = z.object({
  situation: z.string().min(10, {
    message: "Por favor, descreva sua situação com pelo menos 10 caracteres.",
  }),
});

export function WhatsAppSupport() {
  const [isLoading, setIsLoading] = React.useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      situation: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    try {
      const result = await generatePersonalizedMessage(values);
      const baseWhatsAppUrl = `https://wa.me/${CREATOR_INFO.contact.whatsapp}`;
      
      let finalMessage = "Olá, preciso de ajuda com uma crise de ansiedade.";
      let toastDescription = "Abrindo WhatsApp com uma mensagem de ajuda...";

      if (result.message) {
        finalMessage = result.message;
      } else {
        toastDescription = "Parece que não é uma emergência, mas você ainda pode entrar em contato. Abrindo WhatsApp...";
      }

      const encodedMessage = encodeURIComponent(finalMessage);
      const url = `${baseWhatsAppUrl}?text=${encodedMessage}`;
      
      toast({
        title: "Sucesso!",
        description: toastDescription,
      });

      window.open(url, "_blank");

    } catch (error) {
      console.error("Error generating message:", error);
      toast({
        variant: "destructive",
        title: "Ocorreu um erro",
        description: "Não foi possível gerar a mensagem. Por favor, tente novamente.",
      });
    } finally {
      setIsLoading(false);
      form.reset();
    }
  }

  return (
    <Card className="sticky top-6">
      <CardHeader>
        <CardTitle>Precisa de Apoio Urgente?</CardTitle>
        <CardDescription>
          Descreva como você está se sentindo e geraremos uma mensagem de ajuda
          para você enviar rapidamente via WhatsApp.
        </CardDescription>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardContent>
            <FormField
              control={form.control}
              name="situation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="sr-only">Sua situação</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Ex: Estou me sentindo muito ansioso(a) e com o coração acelerado..."
                      {...field}
                      rows={5}
                      disabled={isLoading}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <WhatsAppIcon className="mr-2 h-5 w-5" />
              )}
              Gerar Mensagem e Abrir WhatsApp
            </Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
}
