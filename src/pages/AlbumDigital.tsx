import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShoppingCart } from "lucide-react";
import { useCart } from "@/hooks/useCart";
import { toast } from "@/hooks/use-toast";
import productAlbum from "@/assets/product-album.jpg";

const AlbumDigital = () => {
  const { addItem } = useCart();
  
  const handleAddToCart = () => {
    addItem({
      id: 'album-digital',
      name: 'Álbum Digital Premium',
      price: 9.95,
      image: productAlbum
    });
    toast({
      title: "¡Añadido al carrito!",
      description: "Álbum Digital Premium agregado correctamente",
    });
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-purple-600 to-purple-900">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="text-white">
            <div className="inline-block bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <span className="text-sm font-medium">Certificado de Calidad - Premiado Internacionalmente</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Álbum Digital Premium
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              No pares de escribir historias: crea ahora un álbum de fotos único en nuestra app, nuestro programa o directamente online.
            </p>
            <div className="flex gap-3">
              <Button size="lg" className="bg-pink-500 hover:bg-pink-600 text-white font-semibold hover-lift">
                CREAR ÁLBUM AHORA <ArrowRight className="ml-2" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-purple-600 font-semibold hover-lift"
                onClick={handleAddToCart}
              >
                <ShoppingCart className="mr-2" />
                AÑADIR AL CARRITO
              </Button>
            </div>
            <div className="mt-8 text-2xl font-bold">
              desde 9,95 €*
            </div>
          </div>
          <div className="relative animate-float">
            <img 
              src={productAlbum}
              alt="Álbum Digital Premium"
              className="rounded-2xl shadow-2xl hover-lift"
            />
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 text-white">
          <h2 className="text-3xl font-bold mb-8">Características del Álbum Digital</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-3">Papel Premium</h3>
              <p className="text-blue-100">Calidad fotográfica profesional en cada página</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Personalización Total</h3>
              <p className="text-blue-100">Diseña tu álbum exactamente como lo imaginas</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Entrega Rápida</h3>
              <p className="text-blue-100">Recibe tu álbum en pocos días</p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link to="/" className="text-white hover:text-pink-300 transition-colors">
            ← Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AlbumDigital;
