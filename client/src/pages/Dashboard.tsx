import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { useAuth } from "@/context/AuthContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CategoryCard from "@/components/CategoryCard";
import Modal from "@/components/Modal";
import { categories } from "@/data/categories";
import { getToolsByCategory } from "@/data/tools";
import { FileText, TestTube, CheckSquare, ChartBarStacked, MessageSquare, Users } from "lucide-react";

export default function Dashboard() {
  const [, setLocation] = useLocation();
  const { isLoggedIn } = useAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [modalTitle, setModalTitle] = useState("");
  const [categoryColor, setCategoryColor] = useState("");

  // Redirect to login if not logged in
  useEffect(() => {
    if (!isLoggedIn) {
      setLocation("/");
    }
  }, [isLoggedIn, setLocation]);

  const handleCategoryClick = (categoryId: string, categoryName: string, color: string) => {
    setSelectedCategory(categoryId);
    setModalTitle(`Tools for ${categoryName}`);
    setCategoryColor(color);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Map of category icons
  const categoryIcons: { [key: string]: JSX.Element } = {
    assignments: (
      <div className="bg-blue-100 rounded-lg w-full h-full flex items-center justify-center">
        <FileText className="h-6 w-6 text-category-assignments" />
      </div>
    ),
    lessonPlans: (
      <div className="bg-emerald-100 rounded-lg w-full h-full flex items-center justify-center">
        <FileText className="h-6 w-6 text-category-lessonPlans" />
      </div>
    ),
    tests: (
      <div className="bg-amber-100 rounded-lg w-full h-full flex items-center justify-center">
        <TestTube className="h-6 w-6 text-category-tests" />
      </div>
    ),
    grading: (
      <div className="bg-red-100 rounded-lg w-full h-full flex items-center justify-center">
        <CheckSquare className="h-6 w-6 text-category-grading" />
      </div>
    ),
    presentation: (
      <div className="bg-amber-100 rounded-lg w-full h-full flex items-center justify-center">
        <ChartBarStacked className="h-6 w-6 text-category-presentation" />
      </div>
    ),
    feedback: (
      <div className="bg-purple-100 rounded-lg w-full h-full flex items-center justify-center">
        <MessageSquare className="h-6 w-6 text-category-feedback" />
      </div>
    ),
    forums: (
      <div className="bg-orange-100 rounded-lg w-full h-full flex items-center justify-center">
        <Users className="h-6 w-6 text-category-forums" />
      </div>
    ),
  };

  if (!isLoggedIn) {
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow p-4 sm:p-6 lg:p-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
              AI-Powered Teaching Tools
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Select a category below to explore AI tools that can help optimize your teaching workflow and save valuable time.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {categories.map((category) => (
              <CategoryCard
                key={category.id}
                title={category.name}
                description={category.description}
                icon={categoryIcons[category.id]}
                borderColor={category.borderColor}
                onClick={() => 
                  handleCategoryClick(category.id, category.name, category.bgColor)
                }
              />
            ))}
          </div>
        </div>
      </main>
      <Footer />

      {/* Modal for displaying tools */}
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title={modalTitle}
        tools={getToolsByCategory(selectedCategory)}
        categoryColor={categoryColor}
      />
    </div>
  );
}
