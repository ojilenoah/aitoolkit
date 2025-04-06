import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, HelpCircle, Mail, Home } from "lucide-react";
import { categories } from "@/data/categories";

export default function Landing() {
  const [, setLocation] = useLocation();

  // Function to navigate to login page
  const navigateToLogin = () => {
    setLocation("/login");
  };

  // Map of category icons with proper color classes
  const getCategoryIconColor = (id: string) => {
    switch (id) {
      case "assignments":
        return "text-blue-600 bg-blue-100";
      case "lessonPlans":
        return "text-emerald-600 bg-emerald-100";
      case "tests":
        return "text-amber-600 bg-amber-100";
      case "grading":
        return "text-red-600 bg-red-100";
      case "presentation":
        return "text-amber-600 bg-amber-100";
      case "feedback":
        return "text-purple-600 bg-purple-100";
      case "forums":
        return "text-orange-600 bg-orange-100";
      default:
        return "text-gray-600 bg-gray-100";
    }
  };

  // Function to render icon based on category
  const renderCategoryIcon = (id: string) => {
    const colorClass = getCategoryIconColor(id);
    return (
      <div className={`rounded-lg p-3 ${colorClass}`}>
        {id === "assignments" && <BookOpen className="h-6 w-6" />}
        {id === "lessonPlans" && <BookOpen className="h-6 w-6" />}
        {id === "tests" && <HelpCircle className="h-6 w-6" />}
        {id === "grading" && <ArrowRight className="h-6 w-6" />}
        {id === "presentation" && <ArrowRight className="h-6 w-6" />}
        {id === "feedback" && <Mail className="h-6 w-6" />}
        {id === "forums" && <ArrowRight className="h-6 w-6" />}
      </div>
    );
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="bg-white shadow-sm px-6 py-4 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-8 w-8 text-indigo-600" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" 
              />
            </svg>
            <span className="text-xl font-bold text-gray-900">Teacher AI Hub</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#tools" className="text-gray-600 hover:text-indigo-600 transition-colors">
              <Home className="inline-block h-4 w-4 mr-1" />
              Home
            </a>
            <a href="#about" className="text-gray-600 hover:text-indigo-600 transition-colors">
              <BookOpen className="inline-block h-4 w-4 mr-1" />
              About
            </a>
            <a href="#how-it-works" className="text-gray-600 hover:text-indigo-600 transition-colors">
              <HelpCircle className="inline-block h-4 w-4 mr-1" />
              How it Works
            </a>
            <a href="#contact" className="text-gray-600 hover:text-indigo-600 transition-colors">
              <Mail className="inline-block h-4 w-4 mr-1" />
              Contact
            </a>
            <Button 
              onClick={navigateToLogin}
              className="bg-indigo-600 hover:bg-indigo-700 text-white transition-colors"
            >
              Login
            </Button>
          </div>
          
          {/* Mobile Navigation - Simple button for now */}
          <div className="md:hidden">
            <Button onClick={navigateToLogin} size="sm">Login</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-50 to-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            AI Tools for Modern Educators
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Enhance your teaching workflow with our curated collection of AI-powered tools designed specifically for educators.
          </p>
          <Button 
            onClick={navigateToLogin} 
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg text-lg"
          >
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Tools Categories Section */}
      <section id="tools" className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Explore AI Tools by Category
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our platform offers a variety of AI tools to help you with different teaching tasks. 
              Login to explore each category in detail.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <div 
                key={category.id}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition border p-6"
                onClick={navigateToLogin}
              >
                {renderCategoryIcon(category.id)}
                <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-2">{category.name}</h3>
                <p className="text-gray-600">{category.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              onClick={navigateToLogin}
              className="bg-indigo-600 hover:bg-indigo-700 text-white"
            >
              Sign In to Explore
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">About Teacher AI Hub</h2>
          <p className="text-gray-600 mb-6">
            Teacher AI Hub is a curated collection of AI-powered tools designed to help educators 
            save time and enhance their teaching capabilities. Our platform brings together the best 
            AI solutions for creating assignments, planning lessons, grading, and more.
          </p>
          <p className="text-gray-600">
            We believe in leveraging technology to empower teachers, not replace them. 
            Our goal is to help you focus more on what matters: inspiring and educating students.
          </p>
        </div>
      </section>

      {/* How it Works Section */}
      <section id="how-it-works" className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">How It Works</h2>
          
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="bg-indigo-100 rounded-full p-4 text-indigo-600 flex-shrink-0">
                <svg className="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">1. Create an Account</h3>
                <p className="text-gray-600">Sign up with your email and password to access the full platform.</p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="bg-indigo-100 rounded-full p-4 text-indigo-600 flex-shrink-0">
                <svg className="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">2. Explore Categories</h3>
                <p className="text-gray-600">Browse through different categories of tools based on your teaching needs.</p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="bg-indigo-100 rounded-full p-4 text-indigo-600 flex-shrink-0">
                <svg className="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">3. Discover AI Tools</h3>
                <p className="text-gray-600">Find the right tools for creating assignments, grading, or planning lessons.</p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="bg-indigo-100 rounded-full p-4 text-indigo-600 flex-shrink-0">
                <svg className="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">4. Transform Your Teaching</h3>
                <p className="text-gray-600">Use these AI-powered tools to save time and enhance your teaching capabilities.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-gray-600 mb-8">
            Have questions or suggestions? We'd love to hear from you.
          </p>
          <Button 
            className="bg-indigo-600 hover:bg-indigo-700 text-white"
            onClick={() => window.location.href = "mailto:contact@teacheraihub.com"}
          >
            <Mail className="mr-2 h-4 w-4" />
            Email Us
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6 text-indigo-600 mr-2" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" 
                />
              </svg>
              <span className="text-lg font-bold text-gray-900">Teacher AI Hub</span>
            </div>
            
            <div className="text-sm text-gray-500">
              © {new Date().getFullYear()} Teacher AI Hub. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}