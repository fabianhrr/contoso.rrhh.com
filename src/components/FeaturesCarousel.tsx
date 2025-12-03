import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { useCallback, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Globe, Clock, Lock, Zap, CheckCircle, HeadphonesIcon } from 'lucide-react';
import { Button } from './ui/button';

const features = [
  {
    icon: Globe,
    title: "Argentina y México",
    description: "Portal unificado para colaboradores de ambas sedes con políticas adaptadas a cada país.",
    gradient: "from-primary to-primary/60",
  },
  {
    icon: Clock,
    title: "Disponible 24/7",
    description: "Envía tus solicitudes en cualquier momento, incluso fuera del horario laboral.",
    gradient: "from-accent to-accent/60",
  },
  {
    icon: Lock,
    title: "Información Segura",
    description: "Tus datos personales y solicitudes están protegidos con altos estándares de seguridad.",
    gradient: "from-success to-success/60",
  },
  {
    icon: Zap,
    title: "Proceso Ágil",
    description: "Recibe notificaciones sobre el estado de tus solicitudes en tiempo real.",
    gradient: "from-warning to-warning/60",
  },
  {
    icon: CheckCircle,
    title: "Seguimiento Fácil",
    description: "Consulta el historial y estado de todas tus solicitudes desde un solo lugar.",
    gradient: "from-icon-purple to-icon-purple/60",
  },
  {
    icon: HeadphonesIcon,
    title: "Soporte de RRHH",
    description: "El equipo de Recursos Humanos está disponible para resolver tus dudas.",
    gradient: "from-icon-teal to-icon-teal/60",
  },
];

export const FeaturesCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'start' },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  );
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section id="beneficios" className="py-20 md:py-32 bg-secondary/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ventajas del Portal
          </h2>
          <p className="text-muted-foreground text-lg">
            Simplifica la gestión de tus trámites laborales
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="embla" ref={emblaRef}>
            <div className="embla__container -ml-4">
              {features.map((feature, index) => (
                <div key={index} className="embla__slide pl-4">
                  <div className="bg-card rounded-3xl p-8 h-full border border-border/50 hover:border-primary/20 transition-all duration-300 group">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <feature.icon className="text-primary-foreground" size={24} />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={scrollPrev}
              className="rounded-full border-border hover:border-primary hover:bg-primary/5"
            >
              <ChevronLeft size={20} />
            </Button>
            
            {/* Dots */}
            <div className="flex gap-2">
              {features.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === selectedIndex 
                      ? 'bg-primary w-6' 
                      : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                  }`}
                  onClick={() => emblaApi?.scrollTo(index)}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={scrollNext}
              className="rounded-full border-border hover:border-primary hover:bg-primary/5"
            >
              <ChevronRight size={20} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
