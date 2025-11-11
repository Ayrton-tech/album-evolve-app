import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Inspiracion = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 to-purple-700">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center text-white mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Inspiración y Consejos
          </h1>
          <p className="text-xl text-indigo-100 max-w-2xl mx-auto">
            Descubre ideas creativas y consejos profesionales para tus proyectos fotográficos
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-2xl overflow-hidden hover:shadow-2xl transition-all">
            <div className="aspect-video bg-gradient-to-br from-pink-300 to-purple-300"></div>
            <div className="p-6">
              <span className="inline-block bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold mb-3">
                Guía de Diseño
              </span>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">
                Cómo diseñar el álbum perfecto
              </h3>
              <p className="text-gray-600 mb-4">
                Aprende los secretos del diseño profesional para crear álbumes que cuenten historias inolvidables.
              </p>
              <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                Leer Más
              </Button>
            </div>
          </div>

          <div className="bg-white rounded-2xl overflow-hidden hover:shadow-2xl transition-all">
            <div className="aspect-video bg-gradient-to-br from-blue-300 to-cyan-300"></div>
            <div className="p-6">
              <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold mb-3">
                Fotografía
              </span>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">
                Tips para mejorar tus fotos
              </h3>
              <p className="text-gray-600 mb-4">
                Consejos prácticos de fotografía para capturar momentos perfectos con tu smartphone o cámara.
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Leer Más
              </Button>
            </div>
          </div>

          <div className="bg-white rounded-2xl overflow-hidden hover:shadow-2xl transition-all">
            <div className="aspect-video bg-gradient-to-br from-green-300 to-teal-300"></div>
            <div className="p-6">
              <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold mb-3">
                Ideas Creativas
              </span>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">
                Regalos originales con fotos
              </h3>
              <p className="text-gray-600 mb-4">
                Descubre ideas únicas y creativas para sorprender a tus seres queridos con regalos personalizados.
              </p>
              <Button className="bg-green-600 hover:bg-green-700 text-white">
                Leer Más
              </Button>
            </div>
          </div>

          <div className="bg-white rounded-2xl overflow-hidden hover:shadow-2xl transition-all">
            <div className="aspect-video bg-gradient-to-br from-orange-300 to-red-300"></div>
            <div className="p-6">
              <span className="inline-block bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-semibold mb-3">
                Tendencias
              </span>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">
                Tendencias en decoración 2025
              </h3>
              <p className="text-gray-600 mb-4">
                Conoce las últimas tendencias en decoración con fotografías y cuadros personalizados.
              </p>
              <Button className="bg-orange-600 hover:bg-orange-700 text-white">
                Leer Más
              </Button>
            </div>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-12 text-white">
          <h2 className="text-3xl font-bold mb-8 text-center">Recursos Gratuitos</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl">📐</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Plantillas de Diseño</h3>
              <p className="text-indigo-100 mb-4">
                Descarga plantillas profesionales para tus proyectos
              </p>
              <Button variant="outline" className="text-white border-white hover:bg-white hover:text-purple-600">
                Descargar
              </Button>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl">🎨</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Guías de Color</h3>
              <p className="text-indigo-100 mb-4">
                Aprende a combinar colores como un profesional
              </p>
              <Button variant="outline" className="text-white border-white hover:bg-white hover:text-purple-600">
                Ver Guías
              </Button>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl">📹</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Video Tutoriales</h3>
              <p className="text-indigo-100 mb-4">
                Aprende paso a paso con nuestros videos
              </p>
              <Button variant="outline" className="text-white border-white hover:bg-white hover:text-purple-600">
                Ver Videos
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link to="/" className="text-white hover:text-indigo-200 transition-colors text-lg">
            ← Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Inspiracion;
