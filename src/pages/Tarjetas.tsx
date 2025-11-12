import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/useCart";
import { toast } from "@/hooks/use-toast";
import { ShoppingCart } from "lucide-react";
import productCards from "@/assets/product-cards.jpg";

const Tarjetas = () => {
  const { addItem } = useCart();
  
  const cardProducts = [
    { id: 'tarjeta-amor', name: 'Tarjetas de Amor', price: 2.95, emoji: '💝', description: 'Expresa tus sentimientos' },
    { id: 'tarjeta-cumple', name: 'Cumpleaños', price: 2.95, emoji: '🎂', description: 'Celebra con estilo' },
    { id: 'tarjeta-navidad', name: 'Navidad', price: 2.95, emoji: '🎄', description: 'Felicitaciones únicas' },
    { id: 'tarjeta-gracias', name: 'Agradecimiento', price: 2.95, emoji: '💐', description: 'Di gracias con cariño' },
  ];
  
  const handleAddToCart = (product: typeof cardProducts[0]) => {
    addItem({ ...product, image: productCards });
    toast({
      title: "¡Añadido al carrito!",
      description: `${product.name} agregado correctamente`,
    });
  };
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
          {cardProducts.map((product, index) => (
            <div 
              key={product.id}
              className="bg-white rounded-xl p-6 hover:shadow-2xl transition-all hover-lift animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-[3/4] bg-gradient-to-br from-rose-200 to-pink-200 rounded-lg mb-4 flex flex-col items-center justify-center overflow-hidden">
                <span className="text-4xl mb-2">{product.emoji}</span>
                <img src={productCards} alt={product.name} className="w-full h-16 object-cover opacity-50" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900">{product.name}</h3>
              <p className="text-sm text-gray-600 mb-3">{product.description}</p>
              <p className="text-rose-600 text-xl font-bold mb-3">desde {product.price.toFixed(2)} €</p>
              <Button 
                className="w-full bg-rose-600 hover:bg-rose-700 text-white font-semibold hover-scale text-sm"
                onClick={() => handleAddToCart(product)}
              >
                <ShoppingCart className="w-4 h-4 mr-2" />
                Añadir
              </Button>
            </div>
          ))}
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
