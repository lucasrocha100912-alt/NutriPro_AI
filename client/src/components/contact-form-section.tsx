import { useState } from "react";
import { Button } from "@/components/ui/button";
import QuizModal from "@/components/quiz-modal";

export default function ContactFormSection() {
  const [isQuizOpen, setIsQuizOpen] = useState(false);

  const handleStartQuiz = () => {
    setIsQuizOpen(true);
  };

  return (
    <section id="contato" className="py-20 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Receba seu plano personalizado</h2>
          <p className="text-xl text-gray-600 mb-8">
            Responda nosso quiz de 10 perguntas e receba um plano feito especialmente para você
          </p>
        </div>
        
        <div className="bg-white p-12 rounded-xl shadow-lg max-w-2xl mx-auto">
          <div className="mb-8">
            <div className="w-20 h-20 bg-green-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="fas fa-clipboard-list text-white text-3xl"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Quiz Personalizado</h3>
            <p className="text-gray-600 mb-6">
              Nosso quiz inteligente vai conhecer seus objetivos, preferências e estilo de vida 
              para criar o plano perfeito para sua transformação.
            </p>
            <div className="grid grid-cols-2 gap-4 text-sm text-gray-500 mb-8">
              <div className="flex items-center">
                <i className="fas fa-check text-green-primary mr-2"></i>
                10 perguntas rápidas
              </div>
              <div className="flex items-center">
                <i className="fas fa-check text-green-primary mr-2"></i>
                Totalmente personalizado
              </div>
              <div className="flex items-center">
                <i className="fas fa-check text-green-primary mr-2"></i>
                Análise dos objetivos
              </div>
              <div className="flex items-center">
                <i className="fas fa-check text-green-primary mr-2"></i>
                Plano sob medida
              </div>
            </div>
          </div>
          
          <Button
            onClick={handleStartQuiz}
            className="bg-green-primary text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-600 transition-all duration-300 transform hover:scale-105 shadow-lg w-full"
          >
            <i className="fas fa-play-circle mr-2"></i>
            Começar Quiz Personalizado
          </Button>
        </div>
      </div>
      
      <QuizModal isOpen={isQuizOpen} onClose={() => setIsQuizOpen(false)} />
    </section>
  );
}
