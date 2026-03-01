"use client";

import {
  SidebarMenuButton,
  SidebarMenuItem,
} from "../ui/sidebar";
import { Home, BookOpen, PlusCircle } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SidebarMenuItems() {
  const path = usePathname();

  const items = [
    { title: "Home", url: "/", icon: Home },
    { title: "Create", url: "/create", icon: PlusCircle },
    { title: "Library", url: "/library", icon: BookOpen },
  ].map((item) => ({ ...item, active: path === item.url }));

  return (
    <>
      {items.map((item) => (
        <SidebarMenuItem key={item.title}>
          <SidebarMenuButton asChild isActive={item.active}>
            <Link
              href={item.url}
              className={`flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm ${
                item.active ? "bg-primary/10 font-medium" : "hover:bg-accent/4"
              }`}
            >
              <item.icon className="h-4 w-4" />
              <span>{item.title}</span>
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
      ))}
    </>
  );
}