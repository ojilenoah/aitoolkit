import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
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
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

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
          <div className="flex justify-between items-center">
            <DialogTitle className="text-xl font-bold text-gray-900">{title}</DialogTitle>
            <button 
              onClick={onClose} 
              className="text-gray-400 hover:text-gray-500 focus:outline-none"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
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
