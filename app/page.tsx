import { BodySection } from "./_components/BodySection";
import { Contact } from "./_components/Contact";
import { Footer } from "./_components/Footer";
import { Header } from "./_components/Header";
import { Hero } from "./_components/Hero";
import { Skills } from "./_components/Skills";
import { Spacing } from "./_components/Spacing";

export default function Home() {
  return (
    <main className="w-full">
      <Header />
      <Spacing size="md" />
      <Hero />
      <Spacing size="sm" />
      <BodySection />
      <Spacing size="sm" />
      <Skills />
      <Spacing size="sm" />
      <Contact />
      <Spacing size="lg" />
      <Footer />
    </main>
  );
}
