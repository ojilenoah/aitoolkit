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
    id: "assignments",
    name: "Assignments",
    description: "Design personalized, curriculum-aligned assignments in minutes using AI.",
    borderColor: "border-category-assignments",
    bgColor: "bg-blue-100",
    textColor: "text-category-assignments"
  },
  {
    id: "lessonPlans",
    name: "Lesson Notes & Plans",
    description: "Automate the creation of structured, standards-compliant lesson materials.",
    borderColor: "border-category-lessonPlans",
    bgColor: "bg-emerald-100",
    textColor: "text-category-lessonPlans"
  },
  {
    id: "tests",
    name: "Tests & Exams",
    description: "Generate, structure, and review tests at scale without compromising quality.",
    borderColor: "border-category-tests",
    bgColor: "bg-amber-100",
    textColor: "text-category-tests"
  },
  {
    id: "grading",
    name: "Grading & Evaluation",
    description: "Grade faster and smarter, with data-driven insights and feedback.",
    borderColor: "border-category-grading",
    bgColor: "bg-red-100",
    textColor: "text-category-grading"
  },
  {
    id: "presentation",
    name: "Presentation & Teaching Aids",
    description: "Create visually engaging and pedagogically effective materials with ease.",
    borderColor: "border-category-presentation",
    bgColor: "bg-amber-100",
    textColor: "text-category-presentation"
  },
  {
    id: "feedback",
    name: "Feedback & Reporting",
    description: "Deliver actionable feedback and build student confidence.",
    borderColor: "border-category-feedback",
    bgColor: "bg-purple-100",
    textColor: "text-category-feedback"
  },
  {
    id: "forums",
    name: "Forums / Collaboration",
    description: "Foster teacher collaboration and classroom engagement communities.",
    borderColor: "border-category-forums",
    bgColor: "bg-orange-100",
    textColor: "text-category-forums"
  }
];
