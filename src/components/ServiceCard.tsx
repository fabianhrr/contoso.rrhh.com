import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  color: 'blue' | 'orange' | 'green' | 'purple' | 'red' | 'yellow' | 'teal';
  delay?: number;
}

const colorClasses = {
  blue: 'bg-icon-blue/10 text-icon-blue',
  orange: 'bg-icon-orange/10 text-icon-orange',
  green: 'bg-icon-green/10 text-icon-green',
  purple: 'bg-icon-purple/10 text-icon-purple',
  red: 'bg-icon-red/10 text-icon-red',
  yellow: 'bg-icon-yellow/10 text-icon-yellow',
  teal: 'bg-icon-teal/10 text-icon-teal',
};

const shadowColors = {
  blue: 'shadow-[0_8px_32px_-8px_hsl(217,91%,60%,0.3)]',
  orange: 'shadow-[0_8px_32px_-8px_hsl(25,95%,53%,0.3)]',
  green: 'shadow-[0_8px_32px_-8px_hsl(142,71%,45%,0.3)]',
  purple: 'shadow-[0_8px_32px_-8px_hsl(262,83%,58%,0.3)]',
  red: 'shadow-[0_8px_32px_-8px_hsl(0,84%,60%,0.3)]',
  yellow: 'shadow-[0_8px_32px_-8px_hsl(45,93%,47%,0.3)]',
  teal: 'shadow-[0_8px_32px_-8px_hsl(172,66%,50%,0.3)]',
};

export const ServiceCard = ({ icon: Icon, title, description, color, delay = 0 }: ServiceCardProps) => {
  return (
    <div 
      className="service-card group bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 cursor-pointer border border-border/50 hover:border-primary/20 animate-slide-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className={cn(
        "service-icon-wrapper w-16 h-16 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300",
        colorClasses[color],
        shadowColors[color]
      )}>
        <Icon size={28} strokeWidth={2} />
      </div>
      
      <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
        {title}
      </h3>
      
      <p className="text-sm text-muted-foreground leading-relaxed">
        {description}
      </p>
    </div>
  );
};
