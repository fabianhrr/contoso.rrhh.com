import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img 
              src="/contoso-logo.png" 
              alt="Contoso" 
              className="h-10 md:h-12 w-auto"
            />
            <span className="text-lg font-bold text-foreground hidden sm:block">RRHH</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#servicios" className="text-muted-foreground hover:text-primary transition-colors font-medium">
              Servicios
            </a>
            <a href="#beneficios" className="text-muted-foreground hover:text-primary transition-colors font-medium">
              Beneficios
            </a>
            <a href="#politicas" className="text-muted-foreground hover:text-primary transition-colors font-medium">
              Políticas
            </a>
            <a href="#ayuda" className="text-muted-foreground hover:text-primary transition-colors font-medium">
              Ayuda
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6">
              Iniciar Sesión
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-4">
              <a href="#servicios" className="text-muted-foreground hover:text-primary transition-colors font-medium py-2">
                Servicios
              </a>
              <a href="#beneficios" className="text-muted-foreground hover:text-primary transition-colors font-medium py-2">
                Beneficios
              </a>
              <a href="#politicas" className="text-muted-foreground hover:text-primary transition-colors font-medium py-2">
                Políticas
              </a>
              <a href="#ayuda" className="text-muted-foreground hover:text-primary transition-colors font-medium py-2">
                Ayuda
              </a>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold w-full mt-2">
                Iniciar Sesión
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
