import { useState } from "react";
import QuizModal from "@/components/quiz-modal";

export default function HeroSection() {
  const [isQuizOpen, setIsQuizOpen] = useState(false);

  const handleStartQuiz = () => {
    setIsQuizOpen(true);
  };

  return (
    <section className="bg-gradient-to-br from-green-primary to-green-600 text-white py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Transforme seu corpo com o <span className="text-green-light">NutriPro</span>!
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-green-lighter max-w-4xl mx-auto leading-relaxed">
          Treinos e planos alimentares feitos sob medida para você, com base no seu estilo de vida e preferências.
        </p>
        <button
          onClick={handleStartQuiz}
          className="inline-block bg-white text-green-primary px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-lighter transition-all duration-300 transform hover:scale-105 shadow-xl"
        >
          <i className="fas fa-play-circle mr-2"></i>Garanta já o NutriPro
        </button>
      </div>
      
      <QuizModal isOpen={isQuizOpen} onClose={() => setIsQuizOpen(false)} />
    </section>
  );
}
