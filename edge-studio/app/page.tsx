import Hero from "@/components/ui/Hero";
import HowItWorks from "@/components/ui/HowItWorks";
import Gallery from "@/components/ui/Gallery";
import Testimonials from "@/components/ui/Testimonials";
import Inspiration from "@/components/ui/Inspiration";
import CustomizerPreview from "@/components/ui/CustomizerPreview";
import PressAndUGC from "@/components/ui/PressAndUGC";
import Footer from "@/components/ui/Footer";

export default function Page() {
  return (
    <main className="relative isolate overflow-hidden bg-slate-950 text-slate-100 antialiased">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[32rem] bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.25),transparent_65%)]" />
      <div className="pointer-events-none absolute inset-y-0 right-[-18rem] -z-10 h-[46rem] w-[36rem] bg-[radial-gradient(circle_at_center,rgba(129,140,248,0.18),transparent_70%)] blur-3xl" />
      <div className="pointer-events-none absolute inset-x-0 bottom-[-24rem] -z-10 h-[42rem] bg-[radial-gradient(circle_at_bottom,rgba(236,72,153,0.18),transparent_65%)]" />
      <Hero />
      <HowItWorks />
      <Gallery />
      <Testimonials />
      <Inspiration />
      <CustomizerPreview />
      <PressAndUGC />
      <Footer />
    </main>
  );
}
