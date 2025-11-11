import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Phone, User, ShoppingCart, Award, ArrowRight, Check, Star, Sparkles } from "lucide-react";
import heroMain from "@/assets/hero-main.jpg";
import productCalendar from "@/assets/product-calendar.jpg";
import productAlbum from "@/assets/product-album.jpg";
import productCards from "@/assets/product-cards.jpg";
import productCanvas from "@/assets/product-canvas.jpg";
import productPuzzle from "@/assets/product-puzzle.jpg";

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
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-500 via-purple-600 to-purple-900 text-white py-16 md:py-24">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center gap-2 mb-4 animate-slide-up">
            <Award className="w-5 h-5 animate-pulse-glow" />
            <span className="text-sm font-medium">Certificado de Calidad</span>
            <span className="mx-2">•</span>
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Premiado internacionalmente</span>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                <span className="inline-block animate-scale-in">Álbum Digital</span>
                <br />
                <span className="gradient-text inline-block animate-scale-in" style={{ animationDelay: '0.2s' }}>Premium</span>
              </h1>
              <p className="text-xl mb-8 text-blue-100 leading-relaxed">
                No pares de escribir historias: crea ahora un álbum de fotos único en nuestra app, nuestro programa o directamente online.
              </p>
              <Link to="/album-digital">
                <Button size="lg" className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  DESCUBRIR AHORA <ArrowRight className="ml-2 animate-pulse" />
                </Button>
              </Link>

              <div className="grid grid-cols-3 gap-6 mt-12">
                {[
                  { label: "Cuadros", price: "desde 4,95 €*", delay: '0.3s' },
                  { label: "Fotos", price: "desde 0,17 €", delay: '0.4s' },
                  { label: "Álbum Digital", price: "desde 9,95 €*", delay: '0.5s' }
                ].map((item, i) => (
                  <div key={i} className="animate-slide-up glass-effect rounded-xl p-4" style={{ animationDelay: item.delay }}>
                    <p className="text-sm text-blue-200 mb-1">{item.label}</p>
                    <p className="text-2xl font-bold">{item.price}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative animate-float">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500/30 to-purple-500/30 rounded-2xl blur-3xl"></div>
              <img 
                src={heroMain}
                alt="Álbum Digital Premium"
                className="relative rounded-2xl shadow-2xl hover-lift"
              />
              <div className="absolute bottom-4 left-4 glass-effect text-white px-6 py-3 rounded-xl animate-pulse-glow">
                <p className="text-sm font-medium">Álbum Digital</p>
                <p className="text-2xl font-bold gradient-text">desde 9,95 €*</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-5xl font-bold text-center mb-4 text-white animate-slide-up">
            Tus mejores momentos en productos fotográficos únicos
          </h2>
          <p className="text-center text-slate-400 mb-16 text-lg animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Calidad premium que cuenta tu historia
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { to: "/calendarios", img: productCalendar, badge: "Novedad", badgeColor: "bg-blue-500", title: "Calendarios 2025", desc: "Calendarios de pared, mesa y más con tus mejores momentos" },
              { to: "/album-digital", img: productAlbum, badge: "Bestseller", badgeColor: "bg-yellow-500 text-gray-900", title: "Álbum Digital Premium", desc: "Libros de fotos personalizados con calidad profesional" },
              { to: "/tarjetas", img: productCards, title: "Tarjetas y Postales", desc: "Tarjetas personalizadas para cada ocasión especial" },
              { to: "/puzzles", img: productPuzzle, title: "Puzzles Personalizados", desc: "Convierte tus fotos en puzzles únicos de hasta 2000 piezas" },
              { to: "/cuadros", img: productCanvas, badge: "Popular", badgeColor: "bg-purple-500", title: "Cuadros y Lienzos", desc: "Impresiones premium en lienzo, acrílico y más materiales" },
              { to: "/fundas", img: productCanvas, title: "Fundas Personalizadas", desc: "Fundas para móvil, tablet y laptop con tus diseños" },
            ].map((product, i) => (
              <Link key={i} to={product.to} className="group animate-scale-in" style={{ animationDelay: `${i * 0.1}s` }}>
                <Card className="overflow-hidden hover-lift bg-slate-800/50 border-slate-700/50 backdrop-blur-sm">
                  <div className="relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity"></div>
                    <img 
                      src={product.img}
                      alt={product.title}
                      className="w-full aspect-[4/3] object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    {product.badge && (
                      <div className={`absolute top-4 left-4 ${product.badgeColor} text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-lg z-20 animate-pulse-glow`}>
                        {product.badge}
                      </div>
                    )}
                  </div>
                  <div className="p-6 relative">
                    <h3 className="text-2xl font-bold mb-3 text-white group-hover:gradient-text transition-all duration-300">
                      {product.title}
                    </h3>
                    <p className="text-slate-300 mb-5 leading-relaxed">
                      {product.desc}
                    </p>
                    <Button variant="outline" className="w-full bg-gradient-to-r from-pink-500/10 to-purple-500/10 border-pink-500/50 text-pink-400 hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 hover:text-white hover:border-transparent transition-all duration-300 font-semibold">
                      Ver productos <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Star, gradient: "from-purple-500 to-pink-500", title: "Calidad Premium", desc: "Materiales de la más alta calidad y tecnología de impresión profesional", delay: '0s' },
              { icon: Check, gradient: "from-blue-500 to-cyan-500", title: "Garantía de Satisfacción", desc: "Si no estás satisfecho, te devolvemos el 100% de tu dinero", delay: '0.1s' },
              { icon: Sparkles, gradient: "from-green-500 to-teal-500", title: "Envío Rápido", desc: "Entrega en 3-5 días laborables con seguimiento en tiempo real", delay: '0.2s' }
            ].map((feature, i) => (
              <Card key={i} className="p-8 text-center bg-slate-800/50 border-slate-700/50 backdrop-blur-sm hover-lift animate-scale-in" style={{ animationDelay: feature.delay }}>
                <div className={`w-20 h-20 bg-gradient-to-br ${feature.gradient} rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg animate-pulse-glow`}>
                  <feature.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white">{feature.title}</h3>
                <p className="text-slate-300 leading-relaxed">
                  {feature.desc}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section id="newsletter" className="py-20 bg-gradient-to-br from-purple-600 via-pink-600 to-purple-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-50"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <Sparkles className="w-16 h-16 text-white mx-auto mb-6 animate-pulse-glow" />
          <h2 className="text-5xl font-bold text-white mb-6 animate-scale-in">
            Únete a nuestra comunidad
          </h2>
          <p className="text-xl text-purple-100 mb-10 max-w-2xl mx-auto leading-relaxed animate-slide-up">
            Recibe ofertas exclusivas, consejos creativos y las últimas novedades directamente en tu correo
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <Input 
              type="email" 
              placeholder="Tu correo electrónico"
              className="bg-white/90 backdrop-blur-sm border-white/20 text-gray-900 placeholder:text-gray-500 focus:bg-white h-12 text-lg"
            />
            <Button size="lg" className="bg-white text-purple-600 hover:bg-purple-50 font-bold whitespace-nowrap h-12 px-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              Suscribirme
            </Button>
          </div>
          <p className="text-sm text-purple-100 mt-6 animate-slide-up" style={{ animationDelay: '0.3s' }}>
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
