import { ExternalLink } from "lucide-react";
import { Tool } from "@/data/tools";

interface ToolItemProps {
  tool: Tool;
  categoryColor: string;
}

export default function ToolItem({ tool, categoryColor }: ToolItemProps) {
  const hoverBorderColor = categoryColor.replace("bg-", "hover:border-");
  
  return (
    <div className={`bg-white border border-gray-200 rounded-lg p-4 ${hoverBorderColor} transition`}>
      <h4 className="font-semibold text-lg text-gray-900">{tool.name}</h4>
      <p className="text-gray-600 mb-3">{tool.description}</p>
      <a 
        href={tool.url} 
        target="_blank" 
        rel="noopener noreferrer" 
        className={`inline-flex items-center text-sm font-medium ${categoryColor.replace("bg-", "text-").replace("-100", "-600")} ${categoryColor.replace("bg-", "hover:text-").replace("-100", "-800")}`}
      >
        Visit Tool
        <ExternalLink className="h-4 w-4 ml-1" />
      </a>
    </div>
  );
}
