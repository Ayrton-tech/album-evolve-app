import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Fundas = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-700 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center text-white mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Fundas Personalizadas
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Protege tu móvil o tablet con estilo único y personalizado
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-2xl p-6 hover:shadow-2xl transition-all">
            <div className="aspect-[9/16] bg-gradient-to-br from-slate-200 to-slate-300 rounded-2xl mb-4 mx-auto max-w-[200px]"></div>
            <h3 className="text-2xl font-semibold mb-2 text-gray-900">Funda de Móvil</h3>
            <p className="text-gray-600 mb-4">Compatible con todos los modelos</p>
            <p className="text-slate-700 text-3xl font-bold mb-4">desde 12,95 €</p>
            <Button className="w-full bg-slate-700 hover:bg-slate-800 text-white font-semibold">
              Personalizar Ahora
            </Button>
          </div>

          <div className="bg-white rounded-2xl p-6 hover:shadow-2xl transition-all">
            <div className="aspect-[3/4] bg-gradient-to-br from-slate-300 to-slate-400 rounded-2xl mb-4"></div>
            <h3 className="text-2xl font-semibold mb-2 text-gray-900">Funda de Tablet</h3>
            <p className="text-gray-600 mb-4">Para iPad y tablets Android</p>
            <p className="text-slate-700 text-3xl font-bold mb-4">desde 24,95 €</p>
            <Button className="w-full bg-slate-700 hover:bg-slate-800 text-white font-semibold">
              Personalizar Ahora
            </Button>
          </div>

          <div className="bg-white rounded-2xl p-6 hover:shadow-2xl transition-all">
            <div className="aspect-[16/10] bg-gradient-to-br from-slate-400 to-slate-500 rounded-xl mb-4"></div>
            <h3 className="text-2xl font-semibold mb-2 text-gray-900">Funda de Portátil</h3>
            <p className="text-gray-600 mb-4">13", 15" y 17 pulgadas</p>
            <p className="text-slate-700 text-3xl font-bold mb-4">desde 29,95 €</p>
            <Button className="w-full bg-slate-700 hover:bg-slate-800 text-white font-semibold">
              Personalizar Ahora
            </Button>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-12 text-white mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Tipos de Fundas</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-24 h-24 bg-white/20 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                <span className="text-4xl">🛡️</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Funda Rígida</h3>
              <p className="text-slate-300">Máxima protección contra golpes</p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 bg-white/20 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                <span className="text-4xl">🌊</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Funda Flexible</h3>
              <p className="text-slate-300">Suave y fácil de poner/quitar</p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 bg-white/20 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                <span className="text-4xl">📖</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Funda Libro</h3>
              <p className="text-slate-300">Protección completa frontal y trasera</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Modelos Compatibles</h2>
          <p className="text-lg mb-6">iPhone, Samsung, Huawei, Xiaomi, Google Pixel y muchos más</p>
          <Button size="lg" className="bg-white text-purple-600 hover:bg-slate-50 font-semibold">
            Ver Todos los Modelos
          </Button>
        </div>

        <div className="mt-12 text-center">
          <Link to="/" className="text-white hover:text-slate-300 transition-colors text-lg">
            ← Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Fundas;
