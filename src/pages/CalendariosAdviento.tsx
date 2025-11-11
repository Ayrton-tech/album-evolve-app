import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CalendariosAdviento = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-600 via-red-500 to-orange-500">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center text-white mb-12">
          <span className="inline-block bg-white text-red-600 px-4 py-2 rounded-full text-sm font-bold mb-4">
            ¡Han vuelto!
          </span>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Calendarios de Adviento
          </h1>
          <p className="text-xl text-red-100 max-w-2xl mx-auto">
            Personaliza tu calendario de adviento con tus fotos favoritas y crea la cuenta atrás perfecta para Navidad
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 hover:bg-white/20 transition-all">
            <div className="aspect-video bg-white/20 rounded-xl mb-6"></div>
            <h3 className="text-white text-2xl font-semibold mb-3">Calendario con Chocolates</h3>
            <p className="text-red-100 mb-4">24 puertas con deliciosos chocolates y tus mejores fotos</p>
            <p className="text-white text-3xl font-bold mb-4">desde 24,95 €</p>
            <Button size="lg" className="w-full bg-white text-red-600 hover:bg-red-50 font-semibold">
              Crear Ahora
            </Button>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 hover:bg-white/20 transition-all">
            <div className="aspect-video bg-white/20 rounded-xl mb-6"></div>
            <h3 className="text-white text-2xl font-semibold mb-3">Calendario Premium</h3>
            <p className="text-red-100 mb-4">Diseño exclusivo con acabado de lujo</p>
            <p className="text-white text-3xl font-bold mb-4">desde 29,95 €</p>
            <Button size="lg" className="w-full bg-white text-red-600 hover:bg-red-50 font-semibold">
              Crear Ahora
            </Button>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">¿Por qué elegir nuestros calendarios de adviento?</h2>
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            <div>
              <p className="font-semibold text-lg mb-2">🎁 Personalización Única</p>
              <p className="text-red-100">Añade tus fotos favoritas</p>
            </div>
            <div>
              <p className="font-semibold text-lg mb-2">🍫 Chocolates Premium</p>
              <p className="text-red-100">Deliciosos chocolates de calidad</p>
            </div>
            <div>
              <p className="font-semibold text-lg mb-2">📦 Entrega Garantizada</p>
              <p className="text-red-100">Llega antes de diciembre</p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link to="/" className="text-white hover:text-orange-200 transition-colors text-lg">
            ← Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CalendariosAdviento;
