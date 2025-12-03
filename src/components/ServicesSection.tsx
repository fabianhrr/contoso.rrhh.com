import { ServiceCard } from "./ServiceCard";
import { 
  CalendarDays, 
  Receipt, 
  Award, 
  Scale, 
  Baby, 
  ShieldCheck,
  Heart,
  FileText
} from "lucide-react";

const services = [
  {
    icon: CalendarDays,
    title: "Solicitar Vacaciones",
    description: "Gestiona tus días de descanso de forma rápida y sencilla según la normativa vigente.",
    color: "blue" as const,
  },
  {
    icon: Receipt,
    title: "Reintegros",
    description: "Solicita el reembolso de gastos laborales aprobados de manera eficiente.",
    color: "green" as const,
  },
  {
    icon: Award,
    title: "Bonos y Beneficios",
    description: "Consulta y solicita tus bonos de desempeño y beneficios adicionales.",
    color: "orange" as const,
  },
  {
    icon: Scale,
    title: "Leyes Laborales",
    description: "Accede a información sobre la legislación laboral aplicable en tu país.",
    color: "purple" as const,
  },
  {
    icon: Baby,
    title: "Licencia de Paternidad",
    description: "Solicita tu licencia por nacimiento de hijos según corresponda.",
    color: "yellow" as const,
  },
  {
    icon: ShieldCheck,
    title: "Seguro de Salud",
    description: "Gestiona tu cobertura médica ampliada y obra social.",
    color: "red" as const,
  },
  {
    icon: Heart,
    title: "Bienestar Laboral",
    description: "Accede a programas de bienestar y capacitación continua.",
    color: "teal" as const,
  },
  {
    icon: FileText,
    title: "Documentación",
    description: "Solicita certificados, constancias y documentos laborales.",
    color: "blue" as const,
  },
];

export const ServicesSection = () => {
  return (
    <section id="servicios" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-muted-foreground text-lg">
            Selecciona el servicio que necesitas para comenzar tu solicitud
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              color={service.color}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
