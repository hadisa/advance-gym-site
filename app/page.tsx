import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ProgramsSection } from "@/components/programs-section"
import { FeaturesSection } from "@/components/features-section"
import { AnimatedStatsSection } from "@/components/animated-stats-section"
import { TransformationsSection } from "@/components/transformations-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { MembershipCalculator } from "@/components/membership-calculator"
import { ClassSchedule } from "@/components/class-schedule"
import { ContactSection } from "@/components/contact-section"
import { CtaSection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { ChatbotWidget } from "@/components/chatbot-widget"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <AnimatedStatsSection />
      <ProgramsSection />
      <FeaturesSection />
      <TransformationsSection />
      <MembershipCalculator />
      <ClassSchedule />
      <TestimonialsSection />
      <ContactSection />
      <CtaSection />
      <Footer />
      <ChatbotWidget />
    </main>
  )
}
