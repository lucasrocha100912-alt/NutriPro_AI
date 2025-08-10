import { useState } from "react";
import QuizModal from "@/components/quiz-modal";

export default function CTASection() {
  const [isQuizOpen, setIsQuizOpen] = useState(false);

  const handleStartQuiz = () => {
    setIsQuizOpen(true);
  };

  return (
    <section className="bg-gradient-to-r from-green-primary to-green-600 text-white py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl font-bold mb-6">Garanta já o NutriPro</h2>
        <p className="text-xl mb-8 text-green-lighter">
          Transforme seu corpo e sua vida com um plano personalizado feito especialmente para você!
        </p>
        <button
          onClick={handleStartQuiz}
          className="inline-block bg-white text-green-primary px-12 py-6 rounded-full text-xl font-bold hover:bg-green-lighter transition-all duration-300 transform hover:scale-105 shadow-2xl"
        >
          <i className="fas fa-play-circle mr-3 text-2xl"></i>Quero Começar Agora!
        </button>
        <p className="mt-6 text-green-light text-sm">
          <i className="fas fa-lock mr-2"></i>Atendimento personalizado e suporte completo
        </p>
      </div>
      
      <QuizModal isOpen={isQuizOpen} onClose={() => setIsQuizOpen(false)} />
    </section>
  );
}
