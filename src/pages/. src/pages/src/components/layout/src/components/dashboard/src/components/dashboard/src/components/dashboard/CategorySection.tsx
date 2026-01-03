import { ToolCategoryInfo } from "@/types/platform";
import { ToolCard } from "./ToolCard";

interface CategorySectionProps {
  category: ToolCategoryInfo;
  tools: Tool[];
}

export function CategorySection({ category, tools }: CategorySectionProps) {
  return (
    <div>
      <div className="mb-6">
        <h3 className="font-display text-lg font-semibold text-foreground flex items-center gap-2">
          <span className="text-2xl">{category.icon}</span>
          {category.name}
        </h3>
        <p className="text-muted-foreground text-sm mt-1">{category.description}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {tools.map((tool, index) => (
          <ToolCard key={tool.id} tool={tool} delay={index * 50} />
        ))}
      </div>
    </div>
  );
}
