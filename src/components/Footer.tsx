import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img 
                src="/contoso-logo.png" 
                alt="Contoso" 
                className="h-10 w-auto brightness-0 invert"
              />
              <span className="text-lg font-bold">RRHH</span>
            </div>
            <p className="text-primary-foreground/70 leading-relaxed mb-6">
              Proveer soluciones tecnológicas innovadoras y confiables que impulsen el crecimiento y la transformación digital.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Servicios</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">Solicitar Vacaciones</a></li>
              <li><a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">Reintegros</a></li>
              <li><a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">Bonos y Beneficios</a></li>
              <li><a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">Documentación</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Legal</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">Política de Privacidad</a></li>
              <li><a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">Términos de Uso</a></li>
              <li><a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">Aviso Legal</a></li>
              <li><a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">Cookies</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary" />
                <a href="mailto:rrhh@contoso.com" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  rrhh@contoso.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary" />
                <span className="text-primary-foreground/70">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary mt-0.5" />
                <span className="text-primary-foreground/70">
                  Oficinas en Argentina y México
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/50 text-sm">
              © 2025 contoso.rrhh.com - Todos los derechos reservados
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-primary-foreground/50 hover:text-primary-foreground text-sm transition-colors">
                Política de Privacidad
              </a>
              <a href="#" className="text-primary-foreground/50 hover:text-primary-foreground text-sm transition-colors">
                Términos de Uso
              </a>
              <a href="#" className="text-primary-foreground/50 hover:text-primary-foreground text-sm transition-colors">
                Contacto
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
