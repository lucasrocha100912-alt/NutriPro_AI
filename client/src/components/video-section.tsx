import { useState } from "react";
import QuizModal from "@/components/quiz-modal";

export default function VideoSection() {
  const [isQuizOpen, setIsQuizOpen] = useState(false);

  const handleStartQuiz = () => {
    setIsQuizOpen(true);
  };

  return (
    <section className="bg-gray-50 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            A Importância de Cuidar da Sua Saúde
          </h2>
          <p className="text-xl text-gray-600">
            Descubra por que investir na sua saúde é a melhor decisão que você pode tomar
          </p>
        </div>
        
        <div className="mb-12">
          {/* Vídeo Principal */}
          <div className="relative rounded-xl overflow-hidden shadow-2xl max-w-4xl mx-auto">
            <div className="aspect-video">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/aUaInS6HIGo?autoplay=1&mute=1" 
                title="A Importância da Saúde - NutriPro"
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Seção de benefícios em vídeo */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="w-16 h-16 bg-green-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-utensils text-white text-2xl"></i>
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">Alimentação Personalizada</h3>
            <p className="text-gray-600 text-sm">
              Planos alimentares baseados em suas preferências e objetivos específicos
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="w-16 h-16 bg-green-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-dumbbell text-white text-2xl"></i>
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">Treinos Adaptados</h3>
            <p className="text-gray-600 text-sm">
              Exercícios adequados ao seu nível e disponibilidade de tempo
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="w-16 h-16 bg-green-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="fab fa-whatsapp text-white text-2xl"></i>
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">Suporte Total</h3>
            <p className="text-gray-600 text-sm">
              Acompanhamento direto via WhatsApp com nossa equipe especializada
            </p>
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={handleStartQuiz}
            className="bg-green-primary text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <i className="fas fa-play-circle mr-2"></i>
            Quero Começar Minha Transformação
          </button>
        </div>
      </div>
      
      <QuizModal isOpen={isQuizOpen} onClose={() => setIsQuizOpen(false)} />
    </section>
  );
}
