import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import WorkflowSection from "@/components/WorkflowSection";
import WorksSection from "@/components/WorksSection";
import ContactSection from "@/components/ContactSection";
import ContactForm from "@/components/ContactForm";
import Header from "@/components/Header";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1 pt-14">
        <AnimateOnScroll>
          <HeroSection />
        </AnimateOnScroll>
        <AnimateOnScroll delay={100}>
          <ServicesSection />
        </AnimateOnScroll>
        <AnimateOnScroll delay={100}>
          <AboutSection />
        </AnimateOnScroll>
        <AnimateOnScroll delay={100}>
          <WorkflowSection />
        </AnimateOnScroll>
        <AnimateOnScroll delay={100}>
          <WorksSection />
        </AnimateOnScroll>
        <AnimateOnScroll delay={100}>
          <div className="max-w-7xl mx-auto my-6 grid grid-cols-1 md:grid-cols-2 gap-6 px-6">
            <ContactSection />
            <ContactForm />
          </div>
        </AnimateOnScroll>
        <div className="flex justify-center pt-16 pb-6">
          <Image
            src="/logo.svg"
            alt="Parlato Pubblicità"
            width={200}
            height={60}
            className="h-14 w-auto"
          />
        </div>
        <p className="text-center text-gray-400 text-xs pb-8 font-helvetica" style={{ fontWeight: 200 }}>
          Parlato Pubblicità - Realizzazioni grafiche per GDO
        </p>
      </main>
    </>
  );
}
