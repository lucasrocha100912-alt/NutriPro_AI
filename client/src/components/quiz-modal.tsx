import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

interface QuizQuestion {
  question: string;
  options: string[];
}

interface QuizModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QuizModal({ isOpen, onClose }: QuizModalProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<string>("");

  const questions: QuizQuestion[] = [
    {
      question: "Qual é o seu principal objetivo?",
      options: [
        "Perder peso e gordura corporal",
        "Ganhar massa muscular",
        "Melhorar condicionamento físico",
        "Manter o peso atual e ter uma vida saudável"
      ]
    },
    {
      question: "Por que você quer alcançar esse objetivo?",
      options: [
        "Para me sentir mais confiante",
        "Para melhorar minha saúde",
        "Para ter mais energia no dia a dia",
        "Para ficar mais atraente"
      ]
    },
    {
      question: "Qual é o seu nível atual de atividade física?",
      options: [
        "Sedentário - não pratico exercícios",
        "Iniciante - pratico esporadicamente",
        "Intermediário - pratico regularmente",
        "Avançado - pratico intensamente"
      ]
    },
    {
      question: "Quanto tempo você pode dedicar aos treinos por dia?",
      options: [
        "15-30 minutos",
        "30-45 minutos", 
        "45-60 minutos",
        "Mais de 1 hora"
      ]
    },
    {
      question: "Onde você prefere treinar?",
      options: [
        "Em casa, sem equipamentos",
        "Em casa, com alguns equipamentos",
        "Na academia",
        "Ao ar livre"
      ]
    },
    {
      question: "Como é sua alimentação atual?",
      options: [
        "Muito desorganizada",
        "Razoável, mas poderia melhorar",
        "Boa, mas sem acompanhamento",
        "Excelente e disciplinada"
      ]
    },
    {
      question: "Você tem alguma restrição alimentar?",
      options: [
        "Não tenho nenhuma restrição",
        "Sou vegetariano/vegano",
        "Tenho intolerância/alergia",
        "Sigo alguma dieta específica"
      ]
    },
    {
      question: "Qual é sua principal dificuldade?",
      options: [
        "Falta de motivação",
        "Falta de tempo",
        "Não sei por onde começar",
        "Dificuldade em manter consistência"
      ]
    },
    {
      question: "Em quanto tempo você gostaria de ver resultados?",
      options: [
        "1-2 meses",
        "3-4 meses",
        "5-6 meses",
        "Mais de 6 meses"
      ]
    },
    {
      question: "O que mais te motiva a continuar?",
      options: [
        "Ver mudanças no espelho",
        "Sentir-me mais forte e saudável",
        "Receber elogios dos outros",
        "Superar meus próprios limites"
      ]
    }
  ];

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswer(answer);
  };

  const handleNextQuestion = () => {
    if (!selectedAnswer) return;

    const newAnswers = [...answers, selectedAnswer];
    setAnswers(newAnswers);
    setSelectedAnswer("");

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Quiz completo, ir para WhatsApp
      const quizResults = questions.map((q, index) => `${index + 1}. ${q.question}\nR: ${newAnswers[index]}`).join('\n\n');
      
      const message = `Eu quero o NutriPro`;

      const encodedMessage = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/5575987053807?text=${encodedMessage}`;
      
      window.open(whatsappUrl, "_blank");
      onClose();
    }
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-bold text-green-primary">
            Quiz Personalizado NutriPro
          </DialogTitle>
          <DialogDescription className="text-center text-gray-600">
            Responda 10 perguntas para criar seu plano personalizado
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-6">
          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-600">
              <span>Pergunta {currentQuestion + 1} de {questions.length}</span>
              <span>{Math.round(progress)}% completo</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg text-center">
                {questions[currentQuestion].question}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(option)}
                  className={`w-full p-4 text-left rounded-lg border-2 transition-all ${
                    selectedAnswer === option
                      ? "border-green-primary bg-green-lighter"
                      : "border-gray-200 hover:border-green-light hover:bg-gray-50"
                  }`}
                >
                  {option}
                </button>
              ))}
            </CardContent>
          </Card>

          <div className="flex justify-between items-center">
            <div className="text-sm text-gray-500">
              {currentQuestion === 0 ? (
                "Responda com sinceridade para um plano personalizado"
              ) : (
                `${questions.length - currentQuestion - 1} pergunta(s) restante(s)`
              )}
            </div>
            <Button
              onClick={handleNextQuestion}
              disabled={!selectedAnswer}
              className="bg-green-primary hover:bg-green-600 px-8"
            >
              {currentQuestion === questions.length - 1 ? "Finalizar Quiz" : "Próxima"}
              <i className="fas fa-arrow-right ml-2"></i>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}