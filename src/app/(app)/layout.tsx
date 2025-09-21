import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/app/components/app-sidebar";
import { Button } from "@/components/ui/button";
import { PanelLeft } from "lucide-react";

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="sticky top-0 z-10 flex h-14 items-center gap-4 border-b bg-background/80 backdrop-blur-sm px-4 md:hidden">
            <SidebarTrigger asChild>
                <Button size="icon" variant="outline" className="sm:hidden">
                    <PanelLeft className="h-5 w-5" />
                    <span className="sr-only">Toggle Menu</span>
                </Button>
            </SidebarTrigger>
            <h1 className="text-lg font-bold font-headline">Di Cara</h1>
        </header>
        <main className="flex-1 p-4 sm:p-6">
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
