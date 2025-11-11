import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Calendarios = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center text-white mb-12">
          <span className="inline-block bg-pink-500 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Novedad
          </span>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Calendarios 2025
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Planifica tu año con calendarios personalizados de pared, mesa y más con tus mejores momentos
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 hover:bg-white/20 transition-all">
            <div className="aspect-square bg-white/20 rounded-xl mb-4"></div>
            <h3 className="text-white text-xl font-semibold mb-2">Calendario de Pared</h3>
            <p className="text-blue-100 mb-4">Formato grande para toda la familia</p>
            <p className="text-white text-2xl font-bold">desde 12,95 €</p>
            <Button className="w-full mt-4 bg-pink-500 hover:bg-pink-600">
              Personalizar
            </Button>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 hover:bg-white/20 transition-all">
            <div className="aspect-square bg-white/20 rounded-xl mb-4"></div>
            <h3 className="text-white text-xl font-semibold mb-2">Calendario de Mesa</h3>
            <p className="text-blue-100 mb-4">Perfecto para tu escritorio</p>
            <p className="text-white text-2xl font-bold">desde 8,95 €</p>
            <Button className="w-full mt-4 bg-pink-500 hover:bg-pink-600">
              Personalizar
            </Button>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 hover:bg-white/20 transition-all">
            <div className="aspect-square bg-white/20 rounded-xl mb-4"></div>
            <h3 className="text-white text-xl font-semibold mb-2">Calendario Plegable</h3>
            <p className="text-blue-100 mb-4">Compacto y elegante</p>
            <p className="text-white text-2xl font-bold">desde 9,95 €</p>
            <Button className="w-full mt-4 bg-pink-500 hover:bg-pink-600">
              Personalizar
            </Button>
          </div>
        </div>

        <div className="text-center">
          <Link to="/" className="text-white hover:text-pink-300 transition-colors text-lg">
            ← Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Calendarios;
