export interface Tool {
  id: string;
  categoryId: string;
  name: string;
  description: string;
  url: string;
}

export const tools: Tool[] = [
  // Lesson Plans
  {
    id: "education-copilot",
    categoryId: "lessonPlans",
    name: "Education Copilot",
    description: "AI-powered platform assisting teachers in creating structured lesson plans across various subjects.",
    url: "https://educationcopilot.com/ai-lesson-plans/"
  },
  {
    id: "lessonplans-ai",
    categoryId: "lessonPlans",
    name: "LessonPlans.ai",
    description: "Generates detailed lesson plans with step-by-step guides and engaging activities.",
    url: "https://www.aitoolmate.com/best-ai-tools-for-teachers/"
  },
  {
    id: "curipod",
    categoryId: "lessonPlans",
    name: "Curipod",
    description: "Simplifies lesson planning by generating inquiry-based lessons tailored to specific grades and topics.",
    url: "https://www.aitoolmate.com/best-ai-tools-for-teachers/"
  },
  {
    id: "magicschool-ai",
    categoryId: "lessonPlans",
    name: "MagicSchool.ai",
    description: "Suite of AI tools to automate educational tasks, including lesson planning for all grade levels.",
    url: "https://www.ispringsolutions.com/blog/ai-tools-for-teachers"
  },
  
  // Institutional Resources
  {
    id: "freepik-ai",
    categoryId: "institutional",
    name: "Freepik AI",
    description: "Provides AI-generated images and design resources for visually appealing educational content.",
    url: "https://www.freepik.com/ai"
  },
  {
    id: "roshi-ai",
    categoryId: "institutional",
    name: "Roshi AI",
    description: "Helps teachers create learning materials from online content, simplifying text and generating questions.",
    url: "https://www.aitoolmate.com/best-ai-tools-for-teachers/"
  },
  {
    id: "difft",
    categoryId: "institutional",
    name: "Difft",
    description: "Creates differentiated text resources, summaries, and comprehension questions for various reading levels.",
    url: "https://www.fotor.com/blog/best-free-ai-tools-for-teachers/"
  },
  {
    id: "canva-magic-write",
    categoryId: "institutional",
    name: "Canva Magic Write",
    description: "AI writing assistant that aids in brainstorming, creating outlines, and generating engaging written content.",
    url: "https://www.ispringsolutions.com/blog/ai-tools-for-teachers"
  },
  
  // Assignments
  {
    id: "eduaide-ai",
    categoryId: "assignments",
    name: "Eduaide.Ai",
    description: "AI-powered workspace that simplifies lesson planning, resource creation, and customized assignments.",
    url: "https://gptzero.me/news/best-ai-tools-teachers/"
  },
  {
    id: "quizizz",
    categoryId: "assignments",
    name: "Quizizz",
    description: "Create interactive quizzes and assignments with instant feedback and gamified learning experiences.",
    url: "https://www.ispringsolutions.com/blog/ai-tools-for-teachers"
  },
  {
    id: "kahoot",
    categoryId: "assignments",
    name: "Kahoot!",
    description: "Game-based learning platform for creating fun and engaging quizzes and assignments.",
    url: "https://kahoot.com/"
  },
  {
    id: "class-companion",
    categoryId: "assignments",
    name: "Class Companion",
    description: "Provides personalized feedback on written assignments with instant, detailed suggestions for improvement.",
    url: "https://gptzero.me/news/best-ai-tools-teachers/"
  },
  
  // Tests & Exams
  {
    id: "gradescope-tests",
    categoryId: "tests",
    name: "Gradescope",
    description: "Streamlines grading of various assessments with detailed analytics to inform teaching.",
    url: "https://www.aitoolmate.com/best-ai-tools-for-teachers/"
  },
  {
    id: "socrative",
    categoryId: "tests",
    name: "Socrative",
    description: "Helps educators create real-time assessments and quizzes with immediate feedback.",
    url: "https://www.socrative.com/"
  },
  {
    id: "formative",
    categoryId: "tests",
    name: "Formative",
    description: "Creates interactive assessments with real-time feedback to enhance student learning experiences.",
    url: "https://goformative.com/"
  },
  {
    id: "classmarker",
    categoryId: "tests",
    name: "ClassMarker",
    description: "A secure online testing platform for creating and grading custom tests and exams.",
    url: "https://www.classmarker.com/"
  },
  
  // Grading & Evaluation
  {
    id: "turnitin-feedback-studio-grading",
    categoryId: "grading",
    name: "Turnitin Feedback Studio",
    description: "Combines plagiarism detection with feedback tools to ensure academic integrity.",
    url: "https://www.turnitin.com/products/feedback-studio"
  },
  {
    id: "gradescope",
    categoryId: "grading",
    name: "Gradescope",
    description: "AI-assisted grading workflows for various assignment formats with detailed analytics.",
    url: "https://www.aitoolmate.com/best-ai-tools-for-teachers/"
  },
  {
    id: "class-companion-grading",
    categoryId: "grading",
    name: "Class Companion",
    description: "Offers personalized feedback on student assignments to enhance learning outcomes.",
    url: "https://gptzero.me/news/best-ai-tools-teachers/"
  },
  {
    id: "smodin-ai-grading",
    categoryId: "grading",
    name: "Smodin AI Grader",
    description: "Assists in grading essays and providing evaluation metrics for consistency.",
    url: "https://smodin.io/grade"
  },
  
  // Presentation & Teaching Aids
  {
    id: "brisk-teaching-presentation",
    categoryId: "presentation",
    name: "Brisk Teaching's AI Presentation Maker",
    description: "Generate presentations from various sources by specifying topic, slides count, and theme.",
    url: "https://www.briskteaching.com/ai-tools-for-teachers"
  },
  {
    id: "canva-magic-design",
    categoryId: "presentation",
    name: "Canva's Magic Design™ for Presentations",
    description: "AI-powered tool that generates customizable presentations quickly by describing the desired content.",
    url: "https://www.canva.com/create/ai-presentations/"
  },
  {
    id: "slidesgo-presentation",
    categoryId: "presentation",
    name: "Slidesgo's AI Presentation Maker",
    description: "Create presentations from scratch, generate lesson plans, and convert PDFs to PowerPoint.",
    url: "https://slidesgo.com/ai"
  },
  {
    id: "monsha-presentation",
    categoryId: "presentation",
    name: "Monsha's AI Presentation Slides Maker",
    description: "Design engaging presentations tailored to specific subjects and learning objectives.",
    url: "https://monsha.ai/tools/presentation-maker/"
  },
  
  // Feedback & Reporting
  {
    id: "eduaide-ai-feedback",
    categoryId: "feedback",
    name: "Eduaide.Ai",
    description: "AI-powered workspace for providing customized evaluations efficiently.",
    url: "https://www.eduaide.ai/"
  },
  {
    id: "teachfx",
    categoryId: "feedback",
    name: "TeachFX",
    description: "Analyzes teacher-student interactions to provide feedback on teaching practices.",
    url: "https://teachfx.com/"
  },
  {
    id: "m-powering-teachers",
    categoryId: "feedback",
    name: "M-Powering Teachers",
    description: "Offers feedback with examples of classroom dialogue to illustrate supportive conversational patterns.",
    url: "https://news.stanford.edu/stories/2023/05/ai-feedback-tool-improves-teaching-practices"
  },
  {
    id: "turnitin-feedback-studio",
    categoryId: "feedback",
    name: "Turnitin Feedback Studio",
    description: "Combines plagiarism detection with feedback tools for academic integrity.",
    url: "https://www.turnitin.com/products/feedback-studio"
  },
  
  // Forums / Collaboration
  {
    id: "edmodo",
    categoryId: "forums",
    name: "Edmodo",
    description: "Educational platform with AI that offers professional development resources and peer collaboration.",
    url: "https://new.edmodo.com/"
  },
  {
    id: "boilertai",
    categoryId: "forums",
    name: "BoilerTAI",
    description: "Integrates Generative AI with online educational forums to enhance instructional support.",
    url: "https://arxiv.org/abs/2409.13196"
  },
  {
    id: "google-classroom",
    categoryId: "forums",
    name: "Google Classroom",
    description: "Facilitates communication and collaboration between teachers and students with various AI tools.",
    url: "https://classroom.google.com/"
  },
  {
    id: "microsoft-teams-edu",
    categoryId: "forums",
    name: "Microsoft Teams for Education",
    description: "Collaborative platform with AI features for communication, assignments, and feedback.",
    url: "https://www.microsoft.com/en-us/education/products/teams"
  }
];

export function getToolsByCategory(categoryId: string): Tool[] {
  return tools.filter(tool => tool.categoryId === categoryId);
}
