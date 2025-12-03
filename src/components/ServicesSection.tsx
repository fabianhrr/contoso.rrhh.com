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
    description: "Envía tu solicitud de días de descanso según la normativa de tu país.",
    color: "blue" as const,
  },
  {
    icon: Receipt,
    title: "Reintegros",
    description: "Solicita el reembolso de gastos laborales aprobados.",
    color: "green" as const,
  },
  {
    icon: Award,
    title: "Bonos",
    description: "Consulta información sobre bonos de desempeño y beneficios.",
    color: "orange" as const,
  },
  {
    icon: Scale,
    title: "Consultas Legales",
    description: "Información sobre la legislación laboral de Argentina y México.",
    color: "purple" as const,
  },
  {
    icon: Baby,
    title: "Licencias",
    description: "Solicita licencias por paternidad, maternidad u otras.",
    color: "yellow" as const,
  },
  {
    icon: ShieldCheck,
    title: "Seguro y Obra Social",
    description: "Gestiona consultas sobre tu cobertura médica.",
    color: "red" as const,
  },
  {
    icon: Heart,
    title: "Bienestar",
    description: "Accede a programas de bienestar y capacitación.",
    color: "teal" as const,
  },
  {
    icon: FileText,
    title: "Documentación",
    description: "Solicita certificados, constancias y recibos de sueldo.",
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
            ¿Qué necesitas gestionar?
          </h2>
          <p className="text-muted-foreground text-lg">
            Selecciona el tipo de solicitud que deseas realizar
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
