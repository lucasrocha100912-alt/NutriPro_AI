export default function BenefitsSection() {
  const benefits = [
    {
      icon: "fas fa-utensils",
      title: "Plano Alimentar Personalizado",
      description: "Criado com base em suas preferências alimentares e objetivos específicos."
    },
    {
      icon: "fas fa-dumbbell",
      title: "Treinos Adaptados",
      description: "Exercícios adequados ao seu nível: iniciante, intermediário ou avançado."
    },
    {
      icon: "fas fa-chart-line",
      title: "Acompanhamento Contínuo",
      description: "Monitoramento constante para garantir resultados reais e duradouros."
    },
    {
      icon: "fas fa-sync-alt",
      title: "Flexibilidade Total",
      description: "Inclua ou exclua alimentos conforme seus gostos e restrições."
    },
    {
      icon: "fab fa-whatsapp",
      title: "Suporte Direto",
      description: "Tire suas dúvidas diretamente via WhatsApp com nossa equipe especializada."
    },
    {
      icon: "fas fa-clock",
      title: "Praticidade",
      description: "Planos que se encaixam na sua rotina e estilo de vida."
    }
  ];

  return (
    <section id="beneficios" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Por que escolher o NutriPro?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Descubra os benefícios exclusivos que fazem do NutriPro a melhor escolha para sua transformação
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-green-lighter p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-green-primary w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <i className={`${benefit.icon} text-white text-2xl`}></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
