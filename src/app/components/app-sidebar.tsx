"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Sidebar,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
} from "@/components/ui/sidebar";
import {
  BookOpen,
  BrainCircuit,
  HeartPulse,
  LifeBuoy,
  User,
  Wind,
  Anchor,
} from "lucide-react";
import { Logo } from "./logo";

const navItems = [
  { href: "/", label: "Sobre o Criador", icon: User },
  { href: "/about-program", label: "Sobre o Programa", icon: BookOpen },
  {
    label: "Técnicas",
    isHeading: true,
  },
  { href: "/techniques/breathing", label: "Respiração", icon: Wind },
  { href: "/techniques/grounding", label: "Grounding", icon: Anchor },
  { href: "/techniques/cognitive", label: "Cognitivas", icon: BrainCircuit },
  { href: "/techniques/physical", label: "Físicas", icon: HeartPulse },
  {
    label: "Ajuda",
    isHeading: true,
  },
  { href: "/immediate-help", label: "Ajuda Imediata", icon: LifeBuoy },
];

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar collapsible="icon" side="left">
      <SidebarHeader>
        <div className="flex items-center gap-2 pl-2">
          <Logo className="w-10 h-10" />
          <div className="group-data-[collapsible=icon]:hidden">
             <h1 className="text-xl font-bold font-headline">Di Cara</h1>
          </div>
        </div>
      </SidebarHeader>
      <SidebarMenu className="flex-1">
        {navItems.map((item) =>
          item.isHeading ? (
            <SidebarMenuItem key={item.label} className="px-2 pt-4 pb-2 text-sm font-semibold text-muted-foreground group-data-[collapsible=icon]:hidden">
              {item.label}
            </SidebarMenuItem>
          ) : (
            <SidebarMenuItem key={item.href}>
              <Link href={item.href!} passHref>
                <SidebarMenuButton
                  isActive={pathname === item.href}
                  tooltip={{children: item.label}}
                  size="default"
                  asChild
                >
                  <a>
                    <item.icon className="h-5 w-5" />
                    <span>{item.label}</span>
                  </a>
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
          )
        )}
      </SidebarMenu>
      <SidebarFooter className="group-data-[collapsible=icon]:hidden">
        <p className="px-4 py-2 text-xs text-muted-foreground">
          Seu companheiro para ansiedade.
        </p>
      </SidebarFooter>
    </Sidebar>
  );
}
