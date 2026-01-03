import { useState } from "react";
import { AppSidebar } from "@/components/ui/sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  const isMobile = useIsMobile();
  const [open, setOpen] = useState(!isMobile);

  return (
    <SidebarProvider open={open} onOpenChange={setOpen}>
      <AppSidebar />
      <main className={cn("min-h-screen bg-background transition-all duration-300", open && !isMobile ? "lg:pl-64" : "pl-0")}>
        <div className="sticky top-0 z-40 flex items-center gap-4 border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-6 py-4">
          <SidebarTrigger />
          <h1 className="font-display text-xl font-semibold">CreatorHub</h1>
        </div>
        <div className="p-6 lg:p-8">
          {children}
        </div>
      </main>
    </SidebarProvider>
  );
}
