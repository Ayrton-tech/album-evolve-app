import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CreditCard, Lock, ArrowLeft } from "lucide-react";
import { useCart } from "@/hooks/useCart";
import { toast } from "@/hooks/use-toast";

export const CheckoutForm = ({ onBack }: { onBack: () => void }) => {
  const { getTotalPrice, clearCart, toggleCart } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simular procesamiento de pago
    setTimeout(() => {
      toast({
        title: "¡Pago procesado con éxito!",
        description: "Recibirás un email de confirmación en breve.",
      });
      clearCart();
      toggleCart();
      setIsProcessing(false);
    }, 2000);
  };

  return (
    <div className="p-6 animate-slide-in-right">
      <div className="flex items-center gap-3 mb-6">
        <Button
          variant="ghost"
          size="icon"
          onClick={onBack}
          className="hover-scale"
        >
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <h2 className="text-2xl font-bold gradient-text">Finalizar Compra</h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Datos de contacto */}
        <div className="glass-effect rounded-xl p-4 space-y-4">
          <h3 className="font-semibold text-lg flex items-center gap-2">
            <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm">
              1
            </span>
            Datos de Contacto
          </h3>
          <div className="space-y-3">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="tu@email.com"
                required
                className="mt-1"
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <Label htmlFor="nombre">Nombre</Label>
                <Input
                  id="nombre"
                  type="text"
                  placeholder="Juan"
                  required
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="apellido">Apellido</Label>
                <Input
                  id="apellido"
                  type="text"
                  placeholder="Pérez"
                  required
                  className="mt-1"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Dirección de envío */}
        <div className="glass-effect rounded-xl p-4 space-y-4">
          <h3 className="font-semibold text-lg flex items-center gap-2">
            <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm">
              2
            </span>
            Dirección de Envío
          </h3>
          <div className="space-y-3">
            <div>
              <Label htmlFor="direccion">Dirección</Label>
              <Input
                id="direccion"
                type="text"
                placeholder="Calle Principal 123"
                required
                className="mt-1"
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <Label htmlFor="ciudad">Ciudad</Label>
                <Input
                  id="ciudad"
                  type="text"
                  placeholder="Madrid"
                  required
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="cp">Código Postal</Label>
                <Input
                  id="cp"
                  type="text"
                  placeholder="28001"
                  required
                  className="mt-1"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Método de pago */}
        <div className="glass-effect rounded-xl p-4 space-y-4">
          <h3 className="font-semibold text-lg flex items-center gap-2">
            <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm">
              3
            </span>
            Método de Pago
          </h3>
          <div className="space-y-3">
            <div>
              <Label htmlFor="tarjeta">Número de Tarjeta</Label>
              <div className="relative mt-1">
                <Input
                  id="tarjeta"
                  type="text"
                  placeholder="1234 5678 9012 3456"
                  required
                  maxLength={19}
                />
                <CreditCard className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <Label htmlFor="expiry">Vencimiento</Label>
                <Input
                  id="expiry"
                  type="text"
                  placeholder="MM/AA"
                  required
                  maxLength={5}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="cvv">CVV</Label>
                <Input
                  id="cvv"
                  type="text"
                  placeholder="123"
                  required
                  maxLength={3}
                  className="mt-1"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Resumen */}
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-4">
          <div className="flex justify-between items-center text-lg font-bold">
            <span>Total a Pagar:</span>
            <span className="text-3xl gradient-text">{getTotalPrice().toFixed(2)} €</span>
          </div>
        </div>

        {/* Botón de pago */}
        <Button
          type="submit"
          disabled={isProcessing}
          className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-primary-foreground font-semibold text-lg h-14 hover-lift"
        >
          {isProcessing ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
              Procesando...
            </>
          ) : (
            <>
              <Lock className="w-5 h-5 mr-2" />
              Pagar {getTotalPrice().toFixed(2)} € de forma segura
            </>
          )}
        </Button>

        <p className="text-xs text-center text-muted-foreground">
          <Lock className="w-3 h-3 inline mr-1" />
          Pago 100% seguro con encriptación SSL
        </p>
      </form>
    </div>
  );
};
