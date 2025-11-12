import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/useCart";
import { toast } from "@/hooks/use-toast";
import { ShoppingCart } from "lucide-react";

const Fotos = () => {
  const { addItem } = useCart();
  
  const photoProducts = [
    { id: 'foto-clasica', name: 'Foto Clásica 10x15 cm', price: 0.17, size: '10x15 cm' },
    { id: 'foto-cuadrada', name: 'Foto Cuadrada 13x13 cm', price: 0.29, size: '13x13 cm' },
    { id: 'foto-grande', name: 'Foto Grande 20x30 cm', price: 1.49, size: '20x30 cm' },
    { id: 'foto-premium', name: 'Foto Premium 30x45 cm', price: 4.99, size: '30x45 cm' },
  ];
  
  const handleAddToCart = (product: typeof photoProducts[0]) => {
    addItem(product);
    toast({
      title: "¡Añadido al carrito!",
      description: `${product.name} agregado correctamente`,
    });
  };
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
          {photoProducts.map((product, index) => (
            <div 
              key={product.id}
              className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-white hover:bg-white/20 transition-all hover-lift animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-semibold mb-2">{product.name.split(' ').slice(0, 2).join(' ')}</h3>
              <p className="text-cyan-100 mb-3">{product.size}</p>
              <p className="text-2xl font-bold mb-4">desde {product.price.toFixed(2)} €</p>
              <Button 
                className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold hover-scale"
                onClick={() => handleAddToCart(product)}
              >
                <ShoppingCart className="w-4 h-4 mr-2" />
                Añadir al Carrito
              </Button>
            </div>
          ))}
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
