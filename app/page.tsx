
import Bento from "./components/bento";
import Clients from "./components/clients";
import Companies from "./components/companies";
import CtaS from "./components/ctas";
import CtaSection from "./components/ctaSection";
import Features from "./components/features";
import Footer from "./components/footer";
import Frame39 from "./components/frame39";
import Hero from "./components/hero";
import Margin from "./components/margin";
import Navm from "./components/navBar";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full flex-col items-center justify-between bg-white dark:bg-black sm:items-start">
        <Navm />
        <Hero />
        <Companies />
        <Bento />
        <Features />
        <CtaS />
        <Margin />
        <Frame39 />
        <Clients />
        <CtaSection />
        <Footer />
      </main>
    </div>
  );
}
