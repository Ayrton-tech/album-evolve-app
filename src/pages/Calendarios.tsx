import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/useCart";
import { toast } from "@/hooks/use-toast";
import { ShoppingCart } from "lucide-react";
import productCalendar from "@/assets/product-calendar.jpg";

const Calendarios = () => {
  const { addItem } = useCart();
  
  const calendarProducts = [
    { id: 'calendario-pared', name: 'Calendario de Pared', price: 12.95, description: 'Formato grande para toda la familia' },
    { id: 'calendario-mesa', name: 'Calendario de Mesa', price: 8.95, description: 'Perfecto para tu escritorio' },
    { id: 'calendario-plegable', name: 'Calendario Plegable', price: 9.95, description: 'Compacto y elegante' },
  ];
  
  const handleAddToCart = (product: typeof calendarProducts[0]) => {
    addItem({ ...product, image: productCalendar });
    toast({
      title: "¡Añadido al carrito!",
      description: `${product.name} agregado correctamente`,
    });
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center text-white mb-12">
          <span className="inline-block bg-pink-500 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Novedad
          </span>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Calendarios 2025
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Planifica tu año con calendarios personalizados de pared, mesa y más con tus mejores momentos
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {calendarProducts.map((product, index) => (
            <div 
              key={product.id}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-6 hover:bg-white/20 transition-all hover-lift animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-square bg-white/20 rounded-xl mb-4 overflow-hidden">
                <img src={productCalendar} alt={product.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-white text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-blue-100 mb-4">{product.description}</p>
              <p className="text-white text-2xl font-bold mb-4">desde {product.price.toFixed(2)} €</p>
              <Button 
                className="w-full bg-pink-500 hover:bg-pink-600 hover-scale"
                onClick={() => handleAddToCart(product)}
              >
                <ShoppingCart className="w-4 h-4 mr-2" />
                Añadir al Carrito
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/" className="text-white hover:text-pink-300 transition-colors text-lg">
            ← Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Calendarios;
