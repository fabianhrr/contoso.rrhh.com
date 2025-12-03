import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ServicesSection } from "@/components/ServicesSection";
import { FeaturesCarousel } from "@/components/FeaturesCarousel";
import { PoliciesSection } from "@/components/PoliciesSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Portal RRHH Contoso | Gestión de Solicitudes Laborales</title>
        <meta name="description" content="Portal de Recursos Humanos de Contoso. Gestiona vacaciones, reintegros, bonos y documentación laboral de forma rápida y segura." />
        <link rel="icon" type="image/png" href="/contoso-logo.png" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <ServicesSection />
          <FeaturesCarousel />
          <PoliciesSection />
          <CTASection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
