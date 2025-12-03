import { Button } from "./ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-primary/80" />
      
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary-foreground/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
        
        {/* Floating shapes */}
        <div className="absolute top-1/4 left-1/4 animate-float">
          <div className="w-8 h-8 bg-primary-foreground/10 rounded-lg rotate-45" />
        </div>
        <div className="absolute bottom-1/4 right-1/4 animate-float-delayed">
          <div className="w-6 h-6 bg-primary-foreground/10 rounded-full" />
        </div>
        <div className="absolute top-1/2 right-1/3 animate-float-slow">
          <div className="w-4 h-4 bg-accent/30 rounded-lg rotate-12" />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 text-primary-foreground mb-8">
            <Sparkles size={16} />
            <span className="text-sm font-medium">Comienza Ahora</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
            ¿Listo para gestionar tus solicitudes?
          </h2>
          
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
            Accede al portal de RRHH de Contoso y simplifica todos tus trámites laborales en un solo lugar.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold px-8 py-6 text-lg shadow-xl transition-all duration-300 group"
            >
              Acceder al Portal
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-primary-foreground/30 text-primary-foreground bg-transparent hover:bg-primary-foreground/10 font-semibold px-8 py-6 text-lg transition-all duration-300"
            >
              Contactar RRHH
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
