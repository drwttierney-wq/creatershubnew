import { Link } from "react-router-dom";
import { Platform } from "@/types/platform";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface PlatformCardProps {
  platform: Platform;
  delay?: number;
}

export function PlatformCard({ platform, delay = 0 }: PlatformCardProps) {
  return (
    <Link
      to={`/platform/${platform.id}`}
      className="group block animate-fade-in"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="premium-card group-hover:scale-105 group-hover:shadow-lg transition-all duration-300 p-6 text-center">
        <div className={cn("w-16 h-16 mx-auto rounded-2xl flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform", platform.color)}>
          {platform.icon}
        </div>
        <h3 className="font-display font-semibold text-foreground mb-1">{platform.name}</h3>
        <p className="text-sm text-muted-foreground mb-3">{platform.description}</p>
        <Badge variant="secondary" className="mx-auto">
          Connected
        </Badge>
      </div>
    </Link>
  );
}
