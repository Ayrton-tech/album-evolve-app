import { useState } from "react";
import { X, Plus, Minus, ShoppingBag, Trash2, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/useCart";
import { CheckoutForm } from "./CheckoutForm";

export const CartSidebar = () => {
  const { items, isOpen, toggleCart, removeItem, updateQuantity, getTotalPrice, clearCart } = useCart();
  const [showCheckout, setShowCheckout] = useState(false);

  const handleCheckout = () => {
    setShowCheckout(true);
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 animate-fade-in"
          onClick={toggleCart}
        />
      )}
      
      {/* Sidebar */}
      <div 
        className={`fixed top-0 right-0 h-full w-full md:w-[480px] bg-background shadow-2xl z-50 transform transition-transform duration-300 ease-out flex flex-col ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {showCheckout ? (
          <CheckoutForm onBack={() => setShowCheckout(false)} />
        ) : (
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-border bg-gradient-to-r from-primary/10 to-secondary/10">
              <div className="flex items-center gap-3">
                <ShoppingBag className="w-6 h-6 text-primary animate-pulse-glow" />
                <h2 className="text-2xl font-bold gradient-text">Tu Carrito</h2>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleCart}
                className="hover-lift"
              >
                <X className="w-6 h-6" />
              </Button>
            </div>

          {/* Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-muted-foreground animate-fade-in">
                <ShoppingBag className="w-20 h-20 mb-4 opacity-20" />
                <p className="text-lg">Tu carrito está vacío</p>
                <p className="text-sm mt-2">¡Añade productos para comenzar!</p>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item, index) => (
                  <div 
                    key={item.id} 
                    className="glass-effect rounded-xl p-4 hover-lift animate-scale-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex gap-4">
                      {item.image && (
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-20 h-20 object-cover rounded-lg"
                        />
                      )}
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground mb-1">{item.name}</h3>
                        <p className="text-primary font-bold text-lg">{item.price.toFixed(2)} €</p>
                        
                        <div className="flex items-center gap-3 mt-3">
                          <Button
                            size="icon"
                            variant="outline"
                            className="h-8 w-8 hover-scale"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          >
                            <Minus className="w-4 h-4" />
                          </Button>
                          
                          <span className="w-8 text-center font-semibold">{item.quantity}</span>
                          
                          <Button
                            size="icon"
                            variant="outline"
                            className="h-8 w-8 hover-scale"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <Plus className="w-4 h-4" />
                          </Button>
                          
                          <Button
                            size="icon"
                            variant="ghost"
                            className="h-8 w-8 ml-auto text-destructive hover:text-destructive hover-scale"
                            onClick={() => removeItem(item.id)}
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t border-border p-6 bg-gradient-to-t from-primary/5 to-transparent animate-slide-up">
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-semibold">Total:</span>
                <span className="text-3xl font-bold gradient-text">
                  {getTotalPrice().toFixed(2)} €
                </span>
              </div>
              
              <Button 
                className="w-full mb-3 bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-primary-foreground font-semibold text-lg h-12 hover-lift"
                onClick={handleCheckout}
              >
                <CreditCard className="w-5 h-5 mr-2" />
                Proceder al Pago
              </Button>
              
              <Button 
                variant="outline" 
                className="w-full hover-scale"
                onClick={clearCart}
              >
                Vaciar Carrito
              </Button>
            </div>
          )}
          </div>
        )}
      </div>
    </>
  );
};
