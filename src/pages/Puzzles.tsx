import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Puzzles = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-500 to-teal-600">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center text-white mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Puzzles Personalizados
          </h1>
          <p className="text-xl text-green-100 max-w-2xl mx-auto">
            Convierte tus fotos favoritas en entretenidos puzzles para disfrutar en familia
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-2xl p-6 hover:shadow-2xl transition-all">
            <div className="aspect-square bg-gradient-to-br from-green-200 to-teal-200 rounded-xl mb-4 flex items-center justify-center">
              <span className="text-6xl">🧩</span>
            </div>
            <h3 className="text-2xl font-semibold mb-2 text-gray-900">200 Piezas</h3>
            <p className="text-gray-600 mb-4">Perfecto para niños y principiantes</p>
            <p className="text-green-600 text-3xl font-bold mb-4">14,95 €</p>
            <Button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold">
              Crear Puzzle
            </Button>
          </div>

          <div className="bg-white rounded-2xl p-6 hover:shadow-2xl transition-all border-4 border-yellow-400">
            <div className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full inline-block text-sm font-bold mb-3">
              MÁS POPULAR
            </div>
            <div className="aspect-square bg-gradient-to-br from-green-300 to-teal-300 rounded-xl mb-4 flex items-center justify-center">
              <span className="text-6xl">🧩</span>
            </div>
            <h3 className="text-2xl font-semibold mb-2 text-gray-900">500 Piezas</h3>
            <p className="text-gray-600 mb-4">El tamaño ideal para todos</p>
            <p className="text-green-600 text-3xl font-bold mb-4">19,95 €</p>
            <Button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold">
              Crear Puzzle
            </Button>
          </div>

          <div className="bg-white rounded-2xl p-6 hover:shadow-2xl transition-all">
            <div className="aspect-square bg-gradient-to-br from-green-400 to-teal-400 rounded-xl mb-4 flex items-center justify-center">
              <span className="text-6xl">🧩</span>
            </div>
            <h3 className="text-2xl font-semibold mb-2 text-gray-900">1000 Piezas</h3>
            <p className="text-gray-600 mb-4">Para verdaderos expertos</p>
            <p className="text-green-600 text-3xl font-bold mb-4">24,95 €</p>
            <Button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold">
              Crear Puzzle
            </Button>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-12 text-white">
          <h2 className="text-3xl font-bold mb-8 text-center">¿Por qué elegir nuestros puzzles?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">🎨</div>
              <h3 className="text-xl font-semibold mb-3">Impresión de Alta Calidad</h3>
              <p className="text-green-100">Colores vibrantes y detalles nítidos</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">💪</div>
              <h3 className="text-xl font-semibold mb-3">Material Resistente</h3>
              <p className="text-green-100">Cartón grueso de primera calidad</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">📦</div>
              <h3 className="text-xl font-semibold mb-3">Caja Personalizada</h3>
              <p className="text-green-100">Incluye caja con tu foto para guardarlo</p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link to="/" className="text-white hover:text-green-200 transition-colors text-lg">
            ← Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Puzzles;
