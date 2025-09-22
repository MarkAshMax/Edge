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
    <main className="bg-white text-slate-900 antialiased">
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
