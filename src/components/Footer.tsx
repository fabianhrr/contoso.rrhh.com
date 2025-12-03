import { Mail, Phone, MapPin } from "lucide-react";

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
            <p className="text-primary-foreground/70 leading-relaxed mb-4">
              Portal interno de autogestión para colaboradores de Contoso en Argentina y México.
            </p>
            <p className="text-primary-foreground/50 text-sm">
              169 colaboradores en 2 sedes
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Solicitudes</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">Vacaciones</a></li>
              <li><a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">Reintegros</a></li>
              <li><a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">Bonos</a></li>
              <li><a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">Documentación</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Recursos</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">Políticas Argentina</a></li>
              <li><a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">Políticas México</a></li>
              <li><a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">Preguntas Frecuentes</a></li>
              <li><a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">Manual del Colaborador</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contacto RRHH</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary" />
                <a href="mailto:rrhh@contoso.com" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  rrhh@contoso.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary" />
                <span className="text-primary-foreground/70">Interno 100</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary mt-0.5" />
                <span className="text-primary-foreground/70">
                  Argentina | México
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/50 text-sm">
              © 2025 contoso.rrhh.com - Portal interno de colaboradores
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-primary-foreground/50 hover:text-primary-foreground text-sm transition-colors">
                Política de Privacidad
              </a>
              <a href="#" className="text-primary-foreground/50 hover:text-primary-foreground text-sm transition-colors">
                Soporte
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
