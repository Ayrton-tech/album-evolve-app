import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Tarjetas = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-500 to-pink-600">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center text-white mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Tarjetas y Postales
          </h1>
          <p className="text-xl text-rose-100 max-w-2xl mx-auto">
            Envía tus saludos con tarjetas personalizadas para cada ocasión especial
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-xl p-6 hover:shadow-2xl transition-all">
            <div className="aspect-[3/4] bg-gradient-to-br from-red-200 to-pink-200 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-4xl">💝</span>
            </div>
            <h3 className="text-lg font-semibold mb-2 text-gray-900">Tarjetas de Amor</h3>
            <p className="text-sm text-gray-600 mb-3">Expresa tus sentimientos</p>
            <p className="text-rose-600 text-xl font-bold">desde 2,95 €</p>
          </div>

          <div className="bg-white rounded-xl p-6 hover:shadow-2xl transition-all">
            <div className="aspect-[3/4] bg-gradient-to-br from-yellow-200 to-orange-200 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-4xl">🎂</span>
            </div>
            <h3 className="text-lg font-semibold mb-2 text-gray-900">Cumpleaños</h3>
            <p className="text-sm text-gray-600 mb-3">Celebra con estilo</p>
            <p className="text-rose-600 text-xl font-bold">desde 2,95 €</p>
          </div>

          <div className="bg-white rounded-xl p-6 hover:shadow-2xl transition-all">
            <div className="aspect-[3/4] bg-gradient-to-br from-green-200 to-teal-200 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-4xl">🎄</span>
            </div>
            <h3 className="text-lg font-semibold mb-2 text-gray-900">Navidad</h3>
            <p className="text-sm text-gray-600 mb-3">Felicitaciones únicas</p>
            <p className="text-rose-600 text-xl font-bold">desde 2,95 €</p>
          </div>

          <div className="bg-white rounded-xl p-6 hover:shadow-2xl transition-all">
            <div className="aspect-[3/4] bg-gradient-to-br from-purple-200 to-pink-200 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-4xl">💐</span>
            </div>
            <h3 className="text-lg font-semibold mb-2 text-gray-900">Agradecimiento</h3>
            <p className="text-sm text-gray-600 mb-3">Di gracias con cariño</p>
            <p className="text-rose-600 text-xl font-bold">desde 2,95 €</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 md:p-12 mb-12">
          <h2 className="text-3xl font-bold mb-8 text-rose-900 text-center">Formatos de Tarjetas</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-br from-rose-100 to-pink-100 aspect-[3/4] rounded-lg mb-4 p-8 flex items-center justify-center">
                <div className="text-rose-900 font-semibold">Vertical</div>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Tarjeta Vertical</h3>
              <p className="text-sm text-gray-600">10.5 x 14.8 cm</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-pink-100 to-rose-100 aspect-[4/3] rounded-lg mb-4 p-8 flex items-center justify-center">
                <div className="text-rose-900 font-semibold">Horizontal</div>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Tarjeta Horizontal</h3>
              <p className="text-sm text-gray-600">14.8 x 10.5 cm</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-rose-100 to-orange-100 aspect-square rounded-lg mb-4 p-8 flex items-center justify-center">
                <div className="text-rose-900 font-semibold">Cuadrada</div>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Tarjeta Cuadrada</h3>
              <p className="text-sm text-gray-600">14.8 x 14.8 cm</p>
            </div>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-white">
          <h2 className="text-2xl font-bold mb-6 text-center">Opciones Adicionales</h2>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-4xl mb-3">✉️</div>
              <p className="font-semibold">Con Sobre</p>
              <p className="text-sm text-rose-100">Incluido gratis</p>
            </div>
            <div>
              <div className="text-4xl mb-3">✨</div>
              <p className="font-semibold">Acabado Brillo</p>
              <p className="text-sm text-rose-100">Opcional</p>
            </div>
            <div>
              <div className="text-4xl mb-3">📝</div>
              <p className="font-semibold">Texto Interior</p>
              <p className="text-sm text-rose-100">Personalizable</p>
            </div>
            <div>
              <div className="text-4xl mb-3">🚀</div>
              <p className="font-semibold">Envío Rápido</p>
              <p className="text-sm text-rose-100">2-3 días hábiles</p>
            </div>
          </div>
          <div className="text-center mt-8">
            <Button size="lg" className="bg-white text-rose-600 hover:bg-rose-50 font-semibold">
              Crear Mi Tarjeta
            </Button>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link to="/" className="text-white hover:text-rose-200 transition-colors text-lg">
            ← Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Tarjetas;
