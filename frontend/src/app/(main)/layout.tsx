import "~/styles/globals.css";

import { type Metadata } from "next";
import { Geist } from "next/font/google";
import { Toaster } from "~/components/ui/sonner";
import { Providers } from "~/components/providers";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "~/components/ui/sidebar";
import { Separator } from "~/components/ui/separator";
import { AppSidebar } from "~/components/sidebar/app-sidebar";
import BreadcrumbPageClient from "~/components/sidebar/breadcrumb-client";

export const metadata: Metadata = {
  title: "HeyGen",
  description: "HeyGen",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={geist.variable}>
      <body className="min-h-svh bg-background text-foreground antialiased">
        <Providers>
          <Toaster />
          <SidebarProvider defaultOpen={false}>
            {/* Sidebar (desktop: visible, mobile: overlay) */}
            <div className="flex w-full h-screen">
              
                <AppSidebar />
             

              <SidebarInset className="flex-1 flex  flex-col">
                {/* Topbar */}
                <header className="sticky top-0 z-20 border-b bg-background/80 backdrop-blur-sm px-4 py-3">
                  <div className="mx-auto flex max-w-7xl items-center gap-4">
                    <div className="flex items-center gap-2">
                      {/* mobile trigger */}
                      <SidebarTrigger className="" aria-label="Open menu" />
                      {/* logo/title */}
                      <div className="ml-1 mr-2 text-xl font-extrabold tracking-wide text-primary">
                        HeyGen
                      </div>
                    </div>

                    <div className="flex-1">
                      {/* breadcrumb + page title */}
                      <div className="flex items-center gap-4">
                        <BreadcrumbPageClient />
                        <Separator orientation="vertical" className="h-6" />
                        {/* search (non-blocking) */}
                        <div className="flex w-full max-w-md items-center rounded-lg border px-3 py-1">
                          <input
                            aria-label="Search"
                            className="w-full bg-transparent text-sm placeholder:opacity-60 focus:outline-none"
                            placeholder="Search projects, prompts, uploads..."
                          />
                        </div>
                      </div>
                    </div>

                    {/* right side: actions & user */}
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        className="inline-flex items-center gap-2 rounded-md border px-3 py-1 text-sm hover:bg-accent/5"
                      >
                        New
                      </button>

                      <div className="hidden sm:block">
                        {/* UserButton provided by Better Auth UI */}
                        {/* the UserButton will handle sign in/out/profile */
                        /* Keep it server-safe: it's a client component */}
                        <div>
                          {/* We keep the UserButton usage inside AppSidebar footer too — this is a lightweight duplicate for convenience */}
                        </div>
                      </div>
                    </div>
                  </div>
                </header>

                {/* Main content container */}
                <main className="flex-1 overflow-y-auto">
                  <div className="mx-auto max-w-7xl px-4 py-8">{children}</div>
                </main>
              </SidebarInset>
            </div>
          </SidebarProvider>
        </Providers>
      </body>
    </html>
  );
}