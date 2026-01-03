import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Users, Eye, Heart } from "lucide-react";

export function QuickStats() {
  const stats = [
    { label: "Total Followers", value: "124.5K", change: "+12.3%", icon: Users },
    { label: "Total Views", value: "8.2M", change: "+28.7%", icon: Eye },
    { label: "Engagement Rate", value: "6.8%", change: "+2.1%", icon: Heart },
    { label: "Growth This Month", value: "+18.4K", change: "+45%", icon: TrendingUp },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <Card key={stat.label} className="stat-card animate-fade-in" style={{ animationDelay: `${index * 50}ms` }}>
          <CardContent className="p-5">
            <div className="flex items-center justify-between mb-3">
              <stat.icon className="w-8 h-8 text-primary opacity-80" />
              <span className="text-sm font-medium text-emerald-500">{stat.change}</span>
            </div>
            <p className="text-2xl font-display font-bold text-foreground">{stat.value}</p>
            <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
