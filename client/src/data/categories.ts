export interface Category {
  id: string;
  name: string;
  description: string;
  borderColor: string;
  bgColor: string;
  textColor: string;
}

export const categories: Category[] = [
  {
    id: "lessonPlans",
    name: "Lesson Plans",
    description: "Effortlessly generate and customize comprehensive lesson plans tailored to your curriculum.",
    borderColor: "border-category-lessonPlans",
    bgColor: "bg-emerald-100",
    textColor: "text-category-lessonPlans"
  },
  {
    id: "institutional",
    name: "Institutional Resources",
    description: "Access a variety of AI-enhanced resources to support institutional needs and educational materials.",
    borderColor: "border-category-institutional",
    bgColor: "bg-teal-100",
    textColor: "text-category-institutional"
  },
  {
    id: "assignments",
    name: "Assignments",
    description: "Design personalized, curriculum-aligned assignments swiftly using AI.",
    borderColor: "border-category-assignments",
    bgColor: "bg-blue-100",
    textColor: "text-category-assignments"
  },
  {
    id: "tests",
    name: "Tests & Exams",
    description: "Generate, structure, and review tests efficiently without compromising quality.",
    borderColor: "border-category-tests",
    bgColor: "bg-amber-100",
    textColor: "text-category-tests"
  },
  {
    id: "grading",
    name: "Grading & Evaluation",
    description: "Grade smarter and faster with AI-driven insights and feedback.",
    borderColor: "border-category-grading",
    bgColor: "bg-red-100",
    textColor: "text-category-grading"
  },
  {
    id: "presentation",
    name: "Presentation & Teaching Aids",
    description: "Create engaging and effective teaching materials effortlessly.",
    borderColor: "border-category-presentation",
    bgColor: "bg-amber-100",
    textColor: "text-category-presentation"
  },
  {
    id: "feedback",
    name: "Feedback & Reporting",
    description: "Utilize AI to provide personalized feedback and generate comprehensive reports.",
    borderColor: "border-category-feedback",
    bgColor: "bg-purple-100",
    textColor: "text-category-feedback"
  },
  {
    id: "forums",
    name: "Forums / Collaboration",
    description: "Enhance student engagement and collaborative learning through AI-powered platforms.",
    borderColor: "border-category-forums",
    bgColor: "bg-orange-100",
    textColor: "text-category-forums"
  },
  {
    id: "summary",
    name: "Content Summarization",
    description: "Transform complex texts into concise, clear summaries for better comprehension and retention.",
    borderColor: "border-category-summary",
    bgColor: "bg-indigo-100",
    textColor: "text-category-summary"
  },
  {
    id: "images",
    name: "Images & Diagrams",
    description: "Create educational visuals, diagrams, and concept maps to enhance visual learning.",
    borderColor: "border-category-images",
    bgColor: "bg-pink-100",
    textColor: "text-category-images"
  }
];
