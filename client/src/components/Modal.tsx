import { useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog";
import ToolItem from "./ToolItem";
import { Tool } from "@/data/tools";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  tools: Tool[];
  categoryColor: string;
}

export default function Modal({ isOpen, onClose, title, tools, categoryColor }: ModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-full max-w-2xl mx-4 rounded-xl overflow-hidden">
        <DialogHeader className="border-b border-gray-200 pb-2">
          <DialogTitle className="text-xl font-bold text-gray-900">{title}</DialogTitle>
        </DialogHeader>
        <div className="p-6 overflow-y-auto max-h-[70vh] space-y-4">
          {tools.map((tool) => (
            <ToolItem 
              key={tool.id} 
              tool={tool} 
              categoryColor={categoryColor} 
            />
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
