import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AlbumDigital from "./pages/AlbumDigital";
import Calendarios from "./pages/Calendarios";
import CalendariosAdviento from "./pages/CalendariosAdviento";
import Fotos from "./pages/Fotos";
import Regalos from "./pages/Regalos";
import Puzzles from "./pages/Puzzles";
import Cuadros from "./pages/Cuadros";
import Fundas from "./pages/Fundas";
import Tarjetas from "./pages/Tarjetas";
import Inspiracion from "./pages/Inspiracion";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/album-digital" element={<AlbumDigital />} />
          <Route path="/calendarios" element={<Calendarios />} />
          <Route path="/calendarios-adviento" element={<CalendariosAdviento />} />
          <Route path="/fotos" element={<Fotos />} />
          <Route path="/regalos" element={<Regalos />} />
          <Route path="/puzzles" element={<Puzzles />} />
          <Route path="/cuadros" element={<Cuadros />} />
          <Route path="/fundas" element={<Fundas />} />
          <Route path="/tarjetas" element={<Tarjetas />} />
          <Route path="/inspiracion" element={<Inspiracion />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
