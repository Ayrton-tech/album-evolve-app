import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Regalos = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-600">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center text-white mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Regalos Personalizados
          </h1>
          <p className="text-xl text-pink-100 max-w-2xl mx-auto">
            Sorprende con regalos únicos personalizados con tus mejores recuerdos
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 hover:bg-white/20 transition-all text-white">
            <div className="aspect-square bg-white/20 rounded-xl mb-4"></div>
            <h3 className="text-xl font-semibold mb-2">Tazas Personalizadas</h3>
            <p className="text-pink-100 mb-4">El regalo perfecto para el desayuno</p>
            <p className="text-2xl font-bold mb-4">desde 9,95 €</p>
            <Button className="w-full bg-white text-purple-600 hover:bg-pink-50">
              Personalizar
            </Button>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 hover:bg-white/20 transition-all text-white">
            <div className="aspect-square bg-white/20 rounded-xl mb-4"></div>
            <h3 className="text-xl font-semibold mb-2">Cojines Personalizados</h3>
            <p className="text-pink-100 mb-4">Comodidad con estilo personal</p>
            <p className="text-2xl font-bold mb-4">desde 19,95 €</p>
            <Button className="w-full bg-white text-purple-600 hover:bg-pink-50">
              Personalizar
            </Button>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 hover:bg-white/20 transition-all text-white">
            <div className="aspect-square bg-white/20 rounded-xl mb-4"></div>
            <h3 className="text-xl font-semibold mb-2">Mantas Personalizadas</h3>
            <p className="text-pink-100 mb-4">Cálidas y llenas de recuerdos</p>
            <p className="text-2xl font-bold mb-4">desde 34,95 €</p>
            <Button className="w-full bg-white text-purple-600 hover:bg-pink-50">
              Personalizar
            </Button>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 md:p-12 mb-12">
          <h2 className="text-3xl font-bold mb-8 text-purple-900 text-center">Más Ideas de Regalo</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="aspect-square bg-gradient-to-br from-pink-200 to-purple-200 rounded-xl mb-4"></div>
              <h4 className="font-semibold text-purple-900">Llaveros</h4>
              <p className="text-sm text-gray-600">desde 4,95 €</p>
            </div>
            <div className="text-center">
              <div className="aspect-square bg-gradient-to-br from-purple-200 to-indigo-200 rounded-xl mb-4"></div>
              <h4 className="font-semibold text-purple-900">Mousepads</h4>
              <p className="text-sm text-gray-600">desde 8,95 €</p>
            </div>
            <div className="text-center">
              <div className="aspect-square bg-gradient-to-br from-indigo-200 to-blue-200 rounded-xl mb-4"></div>
              <h4 className="font-semibold text-purple-900">Imanes</h4>
              <p className="text-sm text-gray-600">desde 3,95 €</p>
            </div>
            <div className="text-center">
              <div className="aspect-square bg-gradient-to-br from-blue-200 to-cyan-200 rounded-xl mb-4"></div>
              <h4 className="font-semibold text-purple-900">Bolsas</h4>
              <p className="text-sm text-gray-600">desde 12,95 €</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link to="/" className="text-white hover:text-pink-200 transition-colors text-lg">
            ← Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Regalos;
