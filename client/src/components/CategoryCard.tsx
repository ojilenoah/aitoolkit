import { ReactNode } from "react";

interface CategoryCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  borderColor: string;
  onClick: () => void;
}

export default function CategoryCard({
  title,
  description,
  icon,
  borderColor,
  onClick,
}: CategoryCardProps) {
  return (
    <div
      className={`bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition cursor-pointer border-t-4 ${borderColor}`}
      onClick={onClick}
    >
      <div className="p-6">
        <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}
