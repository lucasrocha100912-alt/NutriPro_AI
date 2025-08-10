import { useState } from "react";
import QuizModal from "@/components/quiz-modal";

export default function AboutSection() {
  const [isQuizOpen, setIsQuizOpen] = useState(false);

  const handleStartQuiz = () => {
    setIsQuizOpen(true);
  };

  return (
    <section id="sobre" className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">O que é o NutriPro?</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              O NutriPro é um serviço exclusivo que cria planos de treino e alimentação personalizados para você. 
              Basta responder um quiz personalizado sobre seus objetivos e preferências, e nós entregamos 
              um plano adaptado às suas necessidades específicas.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Não importa se você está começando ou é um atleta avançado, o NutriPro vai te ajudar a alcançar 
              seus objetivos de forma prática e eficiente.
            </p>
            <button
              onClick={handleStartQuiz}
              className="inline-block bg-green-primary text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <i className="fas fa-play-circle mr-2"></i>Saiba Mais
            </button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300"
              alt="Woman doing yoga outdoors"
              className="rounded-xl shadow-lg object-cover h-48"
            />
            <img
              src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300"
              alt="Healthy meal prep containers"
              className="rounded-xl shadow-lg object-cover h-48"
            />
            <img
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300"
              alt="Fitness tracking with smartphone"
              className="rounded-xl shadow-lg object-cover h-48"
            />
            <img
              src="https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300"
              alt="Fresh organic vegetables and fruits"
              className="rounded-xl shadow-lg object-cover h-48"
            />
          </div>
        </div>
      </div>
      
      <QuizModal isOpen={isQuizOpen} onClose={() => setIsQuizOpen(false)} />
    </section>
  );
}
