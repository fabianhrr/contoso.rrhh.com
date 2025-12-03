import { MapPin, FileText, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const countries = [
  {
    name: "Argentina",
    flag: "🇦🇷",
    description: "Régimen según Ley de Contrato de Trabajo (LCT). Vacaciones de 14 a 35 días según antigüedad.",
    features: ["SAC en dos cuotas anuales", "Obra social + ART", "Teletrabajo según política interna"],
  },
  {
    name: "México",
    flag: "🇲🇽",
    description: "Régimen según Ley Federal del Trabajo (LFT). Mínimo 12 días de vacaciones al año.",
    features: ["Aguinaldo conforme LFT", "IMSS + seguro médico", "Vales de despensa"],
  },
];

export const PoliciesSection = () => {
  return (
    <section id="politicas" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent mb-4">
            <FileText size={16} />
            <span className="text-sm font-medium">Información por Sede</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Políticas según tu ubicación
          </h2>
          <p className="text-muted-foreground text-lg">
            Las políticas laborales varían según la sede donde trabajes
          </p>
        </div>

        {/* Country cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {countries.map((country, index) => (
            <div 
              key={country.name}
              className="bg-card rounded-3xl p-8 border border-border/50 hover:border-primary/20 shadow-card hover:shadow-card-hover transition-all duration-300 group animate-slide-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="text-5xl">{country.flag}</div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">{country.name}</h3>
                  <div className="flex items-center gap-1 text-muted-foreground text-sm">
                    <MapPin size={14} />
                    <span>Sede Contoso</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {country.description}
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {country.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-foreground">
                    <div className="w-2 h-2 rounded-full bg-success" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button 
                variant="outline" 
                className="w-full group/btn border-border hover:border-primary hover:bg-primary/5"
              >
                Ver políticas completas
                <ArrowRight size={16} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
