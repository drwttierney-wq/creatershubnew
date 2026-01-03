import { Tool } from "@/types/platform";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";
import { cn } from "@/lib/utils";

interface ToolCardProps {
  tool: Tool;
  delay?: number;
}

export function ToolCard({ tool, delay = 0 }: ToolCardProps) {
  return (
    <div className="premium-card animate-scale-in group" style={{ animationDelay: `${delay}ms` }}>
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center text-2xl">
            {tool.icon}
          </div>
          {tool.isPremium && (
            <Badge className="bg-gradient-to-r from-amber-500 to-orange-500 text-white border-none">
              <Zap className="w-3 h-3 mr-1" />
              Pro
            </Badge>
          )}
        </div>
        <h3 className="font-display font-semibold text-foreground mb-2">{tool.name}</h3>
        <p className="text-sm text-muted-foreground">{tool.description}</p>
        <Button className="mt-5 w-full group-hover:bg-primary/90 transition-colors">
          Open Tool
        </Button>
      </div>
    </div>
  );
}
