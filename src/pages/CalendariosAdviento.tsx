import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/useCart";
import { toast } from "@/hooks/use-toast";
import { ShoppingCart } from "lucide-react";

const CalendariosAdviento = () => {
  const { addItem } = useCart();
  
  const adventProducts = [
    { id: 'calendario-chocolates', name: 'Calendario con Chocolates', price: 24.95, description: '24 puertas con deliciosos chocolates y tus mejores fotos' },
    { id: 'calendario-premium', name: 'Calendario Premium', price: 29.95, description: 'Diseño exclusivo con acabado de lujo' },
  ];
  
  const handleAddToCart = (product: typeof adventProducts[0]) => {
    addItem(product);
    toast({
      title: "¡Añadido al carrito!",
      description: `${product.name} agregado correctamente`,
    });
  };
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
          {adventProducts.map((product, index) => (
            <div 
              key={product.id}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8 hover:bg-white/20 transition-all hover-lift animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-video bg-white/20 rounded-xl mb-6"></div>
              <h3 className="text-white text-2xl font-semibold mb-3">{product.name}</h3>
              <p className="text-red-100 mb-4">{product.description}</p>
              <p className="text-white text-3xl font-bold mb-4">desde {product.price.toFixed(2)} €</p>
              <Button 
                size="lg" 
                className="w-full bg-white text-red-600 hover:bg-red-50 font-semibold hover-scale"
                onClick={() => handleAddToCart(product)}
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                Añadir al Carrito
              </Button>
            </div>
          ))}
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
