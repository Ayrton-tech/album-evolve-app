import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/useCart";
import { toast } from "@/hooks/use-toast";
import { ShoppingCart } from "lucide-react";
import productPuzzle from "@/assets/product-puzzle.jpg";

const Puzzles = () => {
  const { addItem } = useCart();
  
  const puzzleProducts = [
    { id: 'puzzle-200', name: 'Puzzle 200 Piezas', price: 14.95, pieces: 200, description: 'Perfecto para niños y principiantes' },
    { id: 'puzzle-500', name: 'Puzzle 500 Piezas', price: 19.95, pieces: 500, description: 'El tamaño ideal para todos', popular: true },
    { id: 'puzzle-1000', name: 'Puzzle 1000 Piezas', price: 24.95, pieces: 1000, description: 'Para verdaderos expertos' },
  ];
  
  const handleAddToCart = (product: typeof puzzleProducts[0]) => {
    addItem({ ...product, image: productPuzzle });
    toast({
      title: "¡Añadido al carrito!",
      description: `${product.name} agregado correctamente`,
    });
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-500 to-teal-600">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center text-white mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Puzzles Personalizados
          </h1>
          <p className="text-xl text-green-100 max-w-2xl mx-auto">
            Convierte tus fotos favoritas en entretenidos puzzles para disfrutar en familia
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {puzzleProducts.map((product, index) => (
            <div 
              key={product.id}
              className={`bg-white rounded-2xl p-6 hover:shadow-2xl transition-all hover-lift animate-scale-in ${
                product.popular ? 'border-4 border-yellow-400' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {product.popular && (
                <div className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full inline-block text-sm font-bold mb-3">
                  MÁS POPULAR
                </div>
              )}
              <div className="aspect-square bg-gradient-to-br from-green-200 to-teal-200 rounded-xl mb-4 flex items-center justify-center overflow-hidden">
                <img src={productPuzzle} alt={product.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-2xl font-semibold mb-2 text-gray-900">{product.pieces} Piezas</h3>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <p className="text-green-600 text-3xl font-bold mb-4">{product.price.toFixed(2)} €</p>
              <Button 
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold hover-scale"
                onClick={() => handleAddToCart(product)}
              >
                <ShoppingCart className="w-4 h-4 mr-2" />
                Añadir al Carrito
              </Button>
            </div>
          ))}
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-12 text-white">
          <h2 className="text-3xl font-bold mb-8 text-center">¿Por qué elegir nuestros puzzles?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">🎨</div>
              <h3 className="text-xl font-semibold mb-3">Impresión de Alta Calidad</h3>
              <p className="text-green-100">Colores vibrantes y detalles nítidos</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">💪</div>
              <h3 className="text-xl font-semibold mb-3">Material Resistente</h3>
              <p className="text-green-100">Cartón grueso de primera calidad</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">📦</div>
              <h3 className="text-xl font-semibold mb-3">Caja Personalizada</h3>
              <p className="text-green-100">Incluye caja con tu foto para guardarlo</p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link to="/" className="text-white hover:text-green-200 transition-colors text-lg">
            ← Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Puzzles;
