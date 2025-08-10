export default function Footer() {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5575987053807", "_blank");
  };

  return (
    <footer className="bg-gray-800 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <div className="text-3xl font-bold mb-4">
          <i className="fas fa-leaf mr-2 text-green-light"></i>NutriPro
        </div>
        <p className="text-gray-300 mb-6">Transformando vidas através da nutrição e exercícios personalizados</p>
        <div className="flex justify-center space-x-6 mb-6">
          <a href="#" className="text-gray-300 hover:text-green-light transition-colors">
            <i className="fab fa-facebook text-2xl"></i>
          </a>
          <a href="#" className="text-gray-300 hover:text-green-light transition-colors">
            <i className="fab fa-instagram text-2xl"></i>
          </a>
          <button
            onClick={handleWhatsAppClick}
            className="text-gray-300 hover:text-green-light transition-colors"
          >
            <i className="fab fa-whatsapp text-2xl"></i>
          </button>
        </div>
        <p className="text-gray-400 text-sm">© 2024 NutriPro. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
