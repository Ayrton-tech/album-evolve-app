import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Phone, User, ShoppingCart, Award, ArrowRight, Check, Star } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2 px-4 text-center text-sm">
        <Link to="#newsletter" className="hover:underline">
          <strong>Suscríbete a nuestra Newsletter</strong> y aprovecha nuestras ofertas promocionales, consejos creativos e información sobre productos
        </Link>
      </div>

      {/* Navigation */}
      <nav className="bg-background border-b sticky top-0 z-50 backdrop-blur-sm bg-background/95">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">D</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                DigitalAlbum
              </span>
            </Link>

            {/* Navigation Links */}
            <div className="hidden lg:flex items-center gap-6">
              <Link to="/album-digital" className="text-foreground hover:text-primary transition-colors">
                Álbum Digital
              </Link>
              <Link to="/calendarios" className="text-foreground hover:text-primary transition-colors">
                Calendarios
              </Link>
              <Link to="/calendarios-adviento" className="text-foreground hover:text-primary transition-colors">
                Calendarios de Adviento
              </Link>
              <Link to="/fotos" className="text-foreground hover:text-primary transition-colors">
                Fotos
              </Link>
              <Link to="/regalos" className="text-foreground hover:text-primary transition-colors">
                Regalos
              </Link>
              <Link to="/puzzles" className="text-foreground hover:text-primary transition-colors">
                Puzzles
              </Link>
              <Link to="/cuadros" className="text-foreground hover:text-primary transition-colors">
                Cuadros
              </Link>
              <Link to="/fundas" className="text-foreground hover:text-primary transition-colors">
                Fundas
              </Link>
              <Link to="/tarjetas" className="text-foreground hover:text-primary transition-colors">
                Tarjetas
              </Link>
              <Link to="/inspiracion" className="text-foreground hover:text-primary transition-colors">
                Inspiración
              </Link>
            </div>

            {/* Right side icons */}
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 text-sm hover:text-primary transition-colors">
                <Phone className="w-4 h-4" />
                <span className="hidden sm:inline">Atención al cliente</span>
              </button>
              <button className="flex items-center gap-2 text-sm hover:text-primary transition-colors">
                <User className="w-4 h-4" />
                <span className="hidden sm:inline">Iniciar sesión</span>
              </button>
              <button className="hover:text-primary transition-colors">
                <ShoppingCart className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-500 via-purple-600 to-purple-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 mb-4">
            <Award className="w-5 h-5" />
            <span className="text-sm">Certificado de Calidad</span>
            <span className="mx-2">•</span>
            <span className="text-sm">Premiado internacionalmente</span>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Álbum Digital Premium
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                No pares de escribir historias: crea ahora un álbum de fotos único en nuestra app, nuestro programa o directamente online.
              </p>
              <Link to="/album-digital">
                <Button size="lg" className="bg-pink-500 hover:bg-pink-600 text-white font-semibold">
                  DESCUBRIR AHORA <ArrowRight className="ml-2" />
                </Button>
              </Link>

              <div className="grid grid-cols-3 gap-6 mt-12">
                <div>
                  <p className="text-sm text-blue-200 mb-1">Cuadros</p>
                  <p className="text-2xl font-bold">desde 4,95 €*</p>
                </div>
                <div>
                  <p className="text-sm text-blue-200 mb-1">Fotos</p>
                  <p className="text-2xl font-bold">desde 0,17 €</p>
                </div>
                <div>
                  <p className="text-sm text-blue-200 mb-1">Álbum Digital</p>
                  <p className="text-2xl font-bold">desde 9,95 €*</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <img 
                src="/assets/hero-album-CInqSw5l.jpg" 
                alt="Álbum Digital Premium"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute bottom-4 left-4 bg-purple-900/90 backdrop-blur-sm text-white px-4 py-2 rounded-lg">
                <p className="text-sm">Álbum Digital</p>
                <p className="text-xl font-bold">desde 9,95 €*</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            Tus mejores momentos en productos fotográficos únicos
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link to="/calendarios-adviento" className="group">
              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 bg-slate-800 border-slate-700">
                <div className="relative">
                  <img 
                    src="/assets/advent-calendar-Dp8LiglE.jpg" 
                    alt="Calendarios de Adviento"
                    className="w-full aspect-[4/3] object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    ¡Han vuelto!
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-pink-400 transition-colors">
                    Calendarios de Adviento
                  </h3>
                  <p className="text-slate-300 mb-4">
                    Personaliza tu calendario de adviento con tus fotos favoritas
                  </p>
                  <Button variant="outline" className="w-full border-pink-500 text-pink-400 hover:bg-pink-500 hover:text-white">
                    Ver productos
                  </Button>
                </div>
              </Card>
            </Link>

            <Link to="/calendarios" className="group">
              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 bg-slate-800 border-slate-700">
                <div className="relative">
                  <img 
                    src="/assets/calendar-DgX17vmJ.jpg" 
                    alt="Calendarios 2025"
                    className="w-full aspect-[4/3] object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Novedad
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-pink-400 transition-colors">
                    Calendarios 2025
                  </h3>
                  <p className="text-slate-300 mb-4">
                    Calendarios de pared, mesa y más con tus mejores momentos
                  </p>
                  <Button variant="outline" className="w-full border-pink-500 text-pink-400 hover:bg-pink-500 hover:text-white">
                    Ver productos
                  </Button>
                </div>
              </Card>
            </Link>

            <Link to="/tarjetas" className="group">
              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 bg-slate-800 border-slate-700">
                <div className="relative">
                  <img 
                    src="/assets/cards-uWNsLOo0.jpg" 
                    alt="Tarjetas y Postales"
                    className="w-full aspect-[4/3] object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-pink-400 transition-colors">
                    Tarjetas y Postales
                  </h3>
                  <p className="text-slate-300 mb-4">
                    Tarjetas personalizadas para cada ocasión especial
                  </p>
                  <Button variant="outline" className="w-full border-pink-500 text-pink-400 hover:bg-pink-500 hover:text-white">
                    Ver productos
                  </Button>
                </div>
              </Card>
            </Link>

            <Link to="/puzzles" className="group">
              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 bg-slate-800 border-slate-700">
                <div className="relative">
                  <img 
                    src="/assets/puzzle-By-aWx0w.jpg" 
                    alt="Puzzles Personalizados"
                    className="w-full aspect-[4/3] object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-pink-400 transition-colors">
                    Puzzles Personalizados
                  </h3>
                  <p className="text-slate-300 mb-4">
                    Convierte tus fotos en puzzles únicos de hasta 2000 piezas
                  </p>
                  <Button variant="outline" className="w-full border-pink-500 text-pink-400 hover:bg-pink-500 hover:text-white">
                    Ver productos
                  </Button>
                </div>
              </Card>
            </Link>

            <Link to="/cuadros" className="group">
              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 bg-slate-800 border-slate-700">
                <div className="relative">
                  <img 
                    src="/assets/canvas-C6dc7eku.jpg" 
                    alt="Cuadros y Lienzos"
                    className="w-full aspect-[4/3] object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-yellow-500 text-gray-900 px-3 py-1 rounded-full text-sm font-bold">
                    Bestseller
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-pink-400 transition-colors">
                    Cuadros y Lienzos
                  </h3>
                  <p className="text-slate-300 mb-4">
                    Impresiones premium en lienzo, acrílico y más materiales
                  </p>
                  <Button variant="outline" className="w-full border-pink-500 text-pink-400 hover:bg-pink-500 hover:text-white">
                    Ver productos
                  </Button>
                </div>
              </Card>
            </Link>

            <Link to="/fundas" className="group">
              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 bg-slate-800 border-slate-700">
                <div className="relative">
                  <img 
                    src="/assets/phone-case-Ccj5FCFl.jpg" 
                    alt="Fundas Personalizadas"
                    className="w-full aspect-[4/3] object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-pink-400 transition-colors">
                    Fundas Personalizadas
                  </h3>
                  <p className="text-slate-300 mb-4">
                    Fundas para móvil, tablet y laptop con tus diseños
                  </p>
                  <Button variant="outline" className="w-full border-pink-500 text-pink-400 hover:bg-pink-500 hover:text-white">
                    Ver productos
                  </Button>
                </div>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center bg-slate-800 border-slate-700">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Calidad Premium</h3>
              <p className="text-slate-300">
                Materiales de la más alta calidad y tecnología de impresión profesional
              </p>
            </Card>

            <Card className="p-8 text-center bg-slate-800 border-slate-700">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Check className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Garantía de Satisfacción</h3>
              <p className="text-slate-300">
                Si no estás satisfecho, te devolvemos el 100% de tu dinero
              </p>
            </Card>

            <Card className="p-8 text-center bg-slate-800 border-slate-700">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <ArrowRight className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">Envío Rápido</h3>
              <p className="text-slate-300">
                Entrega en 3-5 días laborables con seguimiento en tiempo real
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section id="newsletter" className="py-16 bg-gradient-to-br from-purple-600 to-pink-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Únete a nuestra comunidad
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Recibe ofertas exclusivas, consejos creativos y las últimas novedades directamente en tu correo
          </p>
          <div className="flex gap-4 max-w-md mx-auto">
            <Input 
              type="email" 
              placeholder="Tu correo electrónico"
              className="bg-white"
            />
            <Button size="lg" className="bg-white text-purple-600 hover:bg-purple-50 font-semibold whitespace-nowrap">
              Suscribirme
            </Button>
          </div>
          <p className="text-sm text-purple-100 mt-4">
            Al suscribirte aceptas nuestra política de privacidad. Puedes cancelar en cualquier momento.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-300 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-white font-bold mb-4">Productos</h4>
              <ul className="space-y-2">
                <li><Link to="/album-digital" className="hover:text-pink-400 transition-colors">Álbum Digital</Link></li>
                <li><Link to="/fotos" className="hover:text-pink-400 transition-colors">Fotos</Link></li>
                <li><Link to="/cuadros" className="hover:text-pink-400 transition-colors">Cuadros</Link></li>
                <li><Link to="/calendarios" className="hover:text-pink-400 transition-colors">Calendarios</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Regalos</h4>
              <ul className="space-y-2">
                <li><Link to="/regalos" className="hover:text-pink-400 transition-colors">Regalos Personalizados</Link></li>
                <li><Link to="/puzzles" className="hover:text-pink-400 transition-colors">Puzzles</Link></li>
                <li><Link to="/tarjetas" className="hover:text-pink-400 transition-colors">Tarjetas</Link></li>
                <li><Link to="/fundas" className="hover:text-pink-400 transition-colors">Fundas</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Ayuda</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-pink-400 transition-colors">Atención al cliente</a></li>
                <li><a href="#" className="hover:text-pink-400 transition-colors">Preguntas frecuentes</a></li>
                <li><a href="#" className="hover:text-pink-400 transition-colors">Envíos</a></li>
                <li><a href="#" className="hover:text-pink-400 transition-colors">Devoluciones</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Empresa</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-pink-400 transition-colors">Sobre nosotros</a></li>
                <li><Link to="/inspiracion" className="hover:text-pink-400 transition-colors">Inspiración</Link></li>
                <li><a href="#" className="hover:text-pink-400 transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-pink-400 transition-colors">Contacto</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center">
            <p>© 2025 DigitalAlbum. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
