import { Button } from "@/components/ui/button";
import { ArrowRight, UserCheck } from "lucide-react";
import heroIllustration from "@/assets/hero-illustration.png";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background gradient */}
      <div 
        className="absolute inset-0 opacity-60"
        style={{ background: 'var(--gradient-hero)' }}
      />
      
      {/* Animated shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-success/5 rounded-full blur-3xl animate-float-slow" />
        
        {/* Floating 3D elements */}
        <div className="absolute top-1/4 right-1/4 animate-float">
          <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/50 rounded-2xl rotate-12 shadow-lg" />
        </div>
        <div className="absolute bottom-1/3 left-1/4 animate-float-delayed">
          <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent/50 rounded-xl -rotate-12 shadow-lg" />
        </div>
        <div className="absolute top-1/3 left-[10%] animate-float-slow">
          <div className="w-8 h-8 bg-gradient-to-br from-success to-success/50 rounded-lg rotate-45 shadow-lg" />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-8 animate-fade-in">
              <UserCheck size={16} />
              <span className="text-sm font-medium">Portal Interno de Colaboradores</span>
            </div>

            {/* Main heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              Portal de{" "}
              <span className="gradient-text">Recursos Humanos</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl animate-slide-up" style={{ animationDelay: '0.2s' }}>
              Gestiona tus solicitudes laborales de forma rápida y sencilla. 
              Vacaciones, reintegros, bonos y más desde un solo lugar.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg shadow-glow hover:shadow-card-hover transition-all duration-300 group"
              >
                Iniciar Solicitud
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-border hover:border-primary hover:bg-primary/5 font-semibold px-8 py-6 text-lg transition-all duration-300"
              >
                Ver Mis Solicitudes
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <div className="text-center lg:text-left">
                <div className="text-2xl md:text-3xl font-bold text-primary mb-1">169</div>
                <div className="text-sm text-muted-foreground">Colaboradores</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl md:text-3xl font-bold text-accent mb-1">2</div>
                <div className="text-sm text-muted-foreground">Sedes</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl md:text-3xl font-bold text-success mb-1">24/7</div>
                <div className="text-sm text-muted-foreground">Disponible</div>
              </div>
            </div>
          </div>

          {/* Hero illustration */}
          <div className="hidden lg:block animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-3xl" />
              <img 
                src={heroIllustration} 
                alt="Portal de RRHH - Gestión de solicitudes" 
                className="relative rounded-3xl shadow-2xl animate-float-slow"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-subtle">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};
