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
  
  // Content Summarization
  {
    id: "resoomer",
    categoryId: "summary",
    name: "Resoomer",
    description: "AI-powered text summarization tool that condenses articles, essays, and documents while retaining key information.",
    url: "https://resoomer.com/"
  },
  {
    id: "quillbot-summarizer",
    categoryId: "summary",
    name: "QuillBot Summarizer",
    description: "Creates concise summaries from long texts, allowing adjustable length and maintaining essential content.",
    url: "https://quillbot.com/summarize"
  },
  {
    id: "genei",
    categoryId: "summary",
    name: "Genei",
    description: "Automatically summarizes research papers and articles to help students and teachers save time on reading.",
    url: "https://www.genei.io/"
  },
  {
    id: "wordtune-read",
    categoryId: "summary",
    name: "Wordtune Read",
    description: "Analyzes long articles and provides key insights, summaries, and main points for quick comprehension.",
    url: "https://www.wordtune.com/read"
  },
  
  // Images & Diagrams
  {
    id: "canva-text-to-image",
    categoryId: "images",
    name: "Canva Text to Image",
    description: "Creates custom educational visuals from text descriptions to illustrate concepts and enhance materials.",
    url: "https://www.canva.com/features/text-to-image/"
  },
  {
    id: "dall-e",
    categoryId: "images",
    name: "DALL-E",
    description: "OpenAI's image generation tool that can create detailed educational illustrations from text prompts.",
    url: "https://openai.com/dall-e-3"
  },
  {
    id: "lucidchart",
    categoryId: "images",
    name: "Lucidchart",
    description: "Creates professional diagrams, concept maps, and flowcharts with AI assistance for educational materials.",
    url: "https://www.lucidchart.com/pages/"
  },
  {
    id: "miro-ai",
    categoryId: "images",
    name: "Miro AI",
    description: "Collaborative whiteboard platform with AI capabilities for creating visual learning materials and concept maps.",
    url: "https://miro.com/ai-features/"
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
    id: "turnitin-feedback-studio",
    categoryId: "feedback",
    name: "Turnitin Feedback Studio",
    description: "Combines plagiarism detection with feedback tools for academic integrity.",
    url: "https://www.turnitin.com/products/feedback-studio"
  },
  {
    id: "mentimeter",
    categoryId: "feedback",
    name: "Mentimeter",
    description: "Interactive presentation platform that allows real-time audience engagement and feedback.",
    url: "https://www.mentimeter.com"
  },
  {
    id: "mote-google-docs",
    categoryId: "feedback",
    name: "Mote for Google Docs",
    description: "Voice notes and feedback tool that integrates with Google Workspace to enhance communication.",
    url: "https://www.mote.com"
  },
  
  // Forums / Collaboration
  {
    id: "classdojo",
    categoryId: "forums",
    name: "ClassDojo",
    description: "Collaborative platform connecting teachers, students, and families to build amazing classroom communities.",
    url: "https://www.classdojo.com"
  },
  {
    id: "khanmigo",
    categoryId: "forums",
    name: "Khanmigo (Khan Academy)",
    description: "AI tutor and teaching assistant that provides personalized guidance (requires waitlist).",
    url: "https://www.khanacademy.org/khan-labs"
  },
  {
    id: "schoolai",
    categoryId: "forums",
    name: "SchoolAI",
    description: "AI-powered platform designed to enhance classroom collaboration and learning experiences.",
    url: "https://www.schoolai.com"
  },
  {
    id: "brainly",
    categoryId: "forums",
    name: "Brainly",
    description: "Peer-based learning community where students can ask and answer homework questions.",
    url: "https://brainly.com"
  }
];

export function getToolsByCategory(categoryId: string): Tool[] {
  return tools.filter(tool => tool.categoryId === categoryId);
}
