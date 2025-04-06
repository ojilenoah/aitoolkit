export interface Tool {
  id: string;
  categoryId: string;
  name: string;
  description: string;
  url: string;
}

export const tools: Tool[] = [
  // Assignments
  {
    id: "chatgpt-edu",
    categoryId: "assignments",
    name: "ChatGPT Edu",
    description: "Brainstorm assignment ideas, provide variations, simplify language.",
    url: "https://chat.openai.com/"
  },
  {
    id: "eduaide-ai",
    categoryId: "assignments",
    name: "Eduaide.ai",
    description: "Generates full assignment prompts, includes grading criteria.",
    url: "https://eduaide.ai/"
  },
  {
    id: "quizgecko",
    categoryId: "assignments",
    name: "QuizGecko",
    description: "Converts raw text into customizable quizzes.",
    url: "https://quizgecko.com/"
  },
  {
    id: "kahoot",
    categoryId: "assignments",
    name: "Kahoot!",
    description: "Turns assignments into game-based learning experiences.",
    url: "https://kahoot.com/"
  },
  
  // Lesson Plans
  {
    id: "lessonplans-ai",
    categoryId: "lessonPlans",
    name: "LessonPlans.ai",
    description: "Automatically generates full lesson plans.",
    url: "https://example.com/lessonplans-ai"
  },
  {
    id: "education-copilot",
    categoryId: "lessonPlans",
    name: "Education Copilot",
    description: "Prepares notes, quizzes, worksheets, and outlines.",
    url: "https://example.com/education-copilot"
  },
  {
    id: "diffit",
    categoryId: "lessonPlans",
    name: "Diffit",
    description: "Translates content to multiple reading levels.",
    url: "https://example.com/diffit"
  },
  {
    id: "magicschool-ai",
    categoryId: "lessonPlans",
    name: "MagicSchool.ai",
    description: "Generates differentiated lesson content and activities.",
    url: "https://example.com/magicschool-ai"
  },
  
  // Tests & Exams
  {
    id: "formative",
    categoryId: "tests",
    name: "Formative",
    description: "Creates interactive assessments with real-time feedback.",
    url: "https://example.com/formative"
  },
  {
    id: "socrative",
    categoryId: "tests",
    name: "Socrative",
    description: "Helps teachers prepare real-time assessments and quizzes.",
    url: "https://example.com/socrative"
  },
  {
    id: "smodin-ai-tests",
    categoryId: "tests",
    name: "Smodin AI",
    description: "Generates multiple-choice or descriptive questions.",
    url: "https://example.com/smodin-ai"
  },
  {
    id: "classmarker",
    categoryId: "tests",
    name: "ClassMarker",
    description: "A secure platform for setting and marking online tests.",
    url: "https://example.com/classmarker"
  },
  
  // Grading & Evaluation
  {
    id: "gradescope",
    categoryId: "grading",
    name: "Gradescope",
    description: "Smart grading workflows for multiple formats.",
    url: "https://example.com/gradescope"
  },
  {
    id: "turnitin-feedback-studio-grading",
    categoryId: "grading",
    name: "Turnitin Feedback Studio",
    description: "Plagiarism detection + feedback tools.",
    url: "https://example.com/turnitin"
  },
  {
    id: "classpoint-ai",
    categoryId: "grading",
    name: "ClassPoint AI",
    description: "Real-time quiz grading and analytics.",
    url: "https://example.com/classpoint-ai"
  },
  {
    id: "smodin-ai-grading",
    categoryId: "grading",
    name: "Smodin AI",
    description: "AI-assisted paper grading and evaluation metrics.",
    url: "https://example.com/smodin-ai-grading"
  },
  
  // Presentation & Teaching Aids
  {
    id: "canva-magic-write",
    categoryId: "presentation",
    name: "Canva Magic Write",
    description: "Generate slide text and visuals for lessons.",
    url: "https://example.com/canva-magic-write"
  },
  {
    id: "beautiful-ai",
    categoryId: "presentation",
    name: "Beautiful.ai",
    description: "AI-powered slide design engine.",
    url: "https://example.com/beautiful-ai"
  },
  {
    id: "gamma",
    categoryId: "presentation",
    name: "Gamma",
    description: "Conversational AI that builds interactive slide decks.",
    url: "https://example.com/gamma"
  },
  {
    id: "powerpoint-speaker-coach",
    categoryId: "presentation",
    name: "PowerPoint Speaker Coach",
    description: "Helps practice delivery with live feedback.",
    url: "https://example.com/powerpoint-speaker-coach"
  },
  
  // Feedback & Reporting
  {
    id: "turnitin-feedback-studio",
    categoryId: "feedback",
    name: "Turnitin Feedback Studio",
    description: "Comment and mark up assignments clearly.",
    url: "https://example.com/turnitin-feedback"
  },
  {
    id: "eduaide-ai-feedback",
    categoryId: "feedback",
    name: "Eduaide AI",
    description: "Personalized feedback generation.",
    url: "https://example.com/eduaide-ai-feedback"
  },
  {
    id: "mentimeter",
    categoryId: "feedback",
    name: "Mentimeter",
    description: "Live polls and quizzes for real-time feedback.",
    url: "https://example.com/mentimeter"
  },
  {
    id: "kaizena",
    categoryId: "feedback",
    name: "Kaizena",
    description: "Voice feedback on student work in Google Docs.",
    url: "https://example.com/kaizena"
  },
  
  // Forums / Collaboration
  {
    id: "classdojo",
    categoryId: "forums",
    name: "ClassDojo",
    description: "Collaborative hub for teachers, parents, and students.",
    url: "https://example.com/classdojo"
  },
  {
    id: "khanmigo",
    categoryId: "forums",
    name: "Khanmigo (Khan Academy)",
    description: "AI tutor/chatbot + classroom insights.",
    url: "https://example.com/khanmigo"
  },
  {
    id: "school-ai",
    categoryId: "forums",
    name: "SchoolAI",
    description: "Custom teacher and student discussion hubs.",
    url: "https://example.com/school-ai"
  },
  {
    id: "brainly",
    categoryId: "forums",
    name: "Brainly",
    description: "Peer-based community for answering academic questions.",
    url: "https://example.com/brainly"
  }
];

export function getToolsByCategory(categoryId: string): Tool[] {
  return tools.filter(tool => tool.categoryId === categoryId);
}
