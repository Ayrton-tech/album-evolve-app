import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/useCart";
import { toast } from "@/hooks/use-toast";
import { ShoppingCart } from "lucide-react";
import productCanvas from "@/assets/product-canvas.jpg";

const Cuadros = () => {
  const { addItem } = useCart();
  
  const canvasProducts = [
    { id: 'canvas', name: 'Canvas - Lienzo auténtico', price: 4.95, type: 'Canvas' },
    { id: 'acrilico', name: 'Acrílico - Acabado brillante', price: 29.95, type: 'Acrílico' },
    { id: 'dibond', name: 'Dibond - Aluminio premium', price: 34.95, type: 'Dibond' },
    { id: 'forexglas', name: 'Forexglas - Ultra moderno', price: 39.95, type: 'Forexglas' },
  ];
  
  const handleAddToCart = (product: typeof canvasProducts[0]) => {
    addItem({ ...product, image: productCanvas });
    toast({
      title: "¡Añadido al carrito!",
      description: `${product.name} agregado correctamente`,
    });
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-600 to-orange-700">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center text-white mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Cuadros Personalizados
          </h1>
          <p className="text-xl text-amber-100 max-w-2xl mx-auto">
            Transforma tus fotos en obras de arte para decorar tus espacios favoritos
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {canvasProducts.map((product, index) => (
            <div 
              key={product.id}
              className="bg-white rounded-xl p-6 hover:shadow-2xl transition-all hover-lift animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-[3/4] rounded-lg mb-4 overflow-hidden">
                <img src={productCanvas} alt={product.type} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{product.type}</h3>
              <p className="text-gray-600 mb-3 text-sm">{product.name.split(' - ')[1]}</p>
              <p className="text-amber-600 text-2xl font-bold mb-4">desde {product.price.toFixed(2)} €</p>
              <Button 
                className="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold hover-scale"
                onClick={() => handleAddToCart(product)}
              >
                <ShoppingCart className="w-4 h-4 mr-2" />
                Añadir al Carrito
              </Button>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 md:p-12 mb-12">
          <h2 className="text-3xl font-bold mb-8 text-amber-900 text-center">Formatos Disponibles</h2>
          <div className="grid md:grid-cols-5 gap-6">
            {["20x20", "30x30", "40x40", "50x50", "60x60"].map((size) => (
              <div key={size} className="text-center">
                <div className="aspect-square bg-gradient-to-br from-amber-100 to-orange-100 rounded-lg mb-3 flex items-center justify-center">
                  <span className="font-bold text-amber-900">{size} cm</span>
                </div>
                <Button variant="outline" className="w-full text-sm">
                  Seleccionar
                </Button>
              </div>
            ))}
          </div>
          <div className="grid md:grid-cols-5 gap-6 mt-6">
            {["30x40", "40x60", "50x70", "60x80", "70x100"].map((size) => (
              <div key={size} className="text-center">
                <div className="aspect-[3/4] bg-gradient-to-br from-orange-100 to-red-100 rounded-lg mb-3 flex items-center justify-center">
                  <span className="font-bold text-amber-900">{size} cm</span>
                </div>
                <Button variant="outline" className="w-full text-sm">
                  Seleccionar
                </Button>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-white">
          <h2 className="text-2xl font-bold mb-6 text-center">Características Premium</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <p className="text-lg font-semibold mb-2">🖼️ Sistema de Montaje Incluido</p>
              <p className="text-amber-100 text-sm">Listo para colgar</p>
            </div>
            <div className="text-center">
              <p className="text-lg font-semibold mb-2">✨ Impresión Profesional</p>
              <p className="text-amber-100 text-sm">Máxima calidad</p>
            </div>
            <div className="text-center">
              <p className="text-lg font-semibold mb-2">🎨 Colores Vibrantes</p>
              <p className="text-amber-100 text-sm">Resistente a la luz</p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link to="/" className="text-white hover:text-amber-200 transition-colors text-lg">
            ← Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cuadros;
