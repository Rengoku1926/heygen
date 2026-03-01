import { UserButton } from "@daveyplate/better-auth-ui";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
} from "../ui/sidebar";
import { User } from "lucide-react";
import SidebarMenuItems from "./sidebar-menu-items";
import { Credits } from "./credits";
// import Upgrade from "./upgrade";

export async function AppSidebar() {
  return (
    <Sidebar className="h-screen w-64">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="mb-6 flex items-center justify-center px-4 text-2xl font-black tracking-widest uppercase text-primary">
            HeyGen
          </SidebarGroupLabel>

          <SidebarGroupContent className="px-2">
            <SidebarMenu>
              <SidebarMenuItems />
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="px-4 py-4">
        <div className="mb-2 flex w-full items-center justify-center gap-1 text-xs">
          <Credits />
          {/* <Upgrade /> */}
        </div>
        <div className="mb-3 text-xs text-muted-foreground">Account</div>

        <UserButton
          variant="ghost"
          size="default"
          additionalLinks={[
            {
              label: "Customer Portal",
              href: "/customer-portal",
              icon: <User />,
            },
          ]}
        />
      </SidebarFooter>
    </Sidebar>
  );
}