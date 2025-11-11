import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Fotos = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-500 to-blue-600">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center text-white mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Revelado de Fotos
          </h1>
          <p className="text-xl text-cyan-100 max-w-2xl mx-auto">
            Calidad fotográfica profesional con los mejores papeles y acabados del mercado
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-white hover:bg-white/20 transition-all">
            <h3 className="text-xl font-semibold mb-2">Foto Clásica</h3>
            <p className="text-cyan-100 mb-3">10x15 cm</p>
            <p className="text-2xl font-bold">desde 0,17 €</p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-white hover:bg-white/20 transition-all">
            <h3 className="text-xl font-semibold mb-2">Foto Cuadrada</h3>
            <p className="text-cyan-100 mb-3">13x13 cm</p>
            <p className="text-2xl font-bold">desde 0,29 €</p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-white hover:bg-white/20 transition-all">
            <h3 className="text-xl font-semibold mb-2">Foto Grande</h3>
            <p className="text-cyan-100 mb-3">20x30 cm</p>
            <p className="text-2xl font-bold">desde 1,49 €</p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-white hover:bg-white/20 transition-all">
            <h3 className="text-xl font-semibold mb-2">Foto Premium</h3>
            <p className="text-cyan-100 mb-3">30x45 cm</p>
            <p className="text-2xl font-bold">desde 4,99 €</p>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-12 text-white mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Tipos de Acabado</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl">✨</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Brillo</h3>
              <p className="text-cyan-100">Colores vibrantes y brillantes</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl">🎨</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Mate</h3>
              <p className="text-cyan-100">Elegante y sin reflejos</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl">💎</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Premium</h3>
              <p className="text-cyan-100">Papel fotográfico de máxima calidad</p>
            </div>
          </div>
          <div className="text-center mt-8">
            <Button size="lg" className="bg-pink-500 hover:bg-pink-600 text-white font-semibold">
              Revelar Mis Fotos
            </Button>
          </div>
        </div>

        <div className="text-center">
          <Link to="/" className="text-white hover:text-cyan-200 transition-colors text-lg">
            ← Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Fotos;
