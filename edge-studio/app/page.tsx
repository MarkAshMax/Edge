import CustomizerPreview from "@/components/ui/CustomizerPreview";
import Footer from "@/components/ui/Footer";
import Gallery from "@/components/ui/Gallery";
import Header from "@/components/ui/Header";
import Hero from "@/components/ui/Hero";
import HowItWorks from "@/components/ui/HowItWorks";
import Inspiration from "@/components/ui/Inspiration";
import PressAndUGC from "@/components/ui/PressAndUGC";
import StickyCTA from "@/components/ui/StickyCTA";
import Testimonials from "@/components/ui/Testimonials";

export default function Page() {
  return (
    <>
      <Header />
      <main className="relative overflow-hidden bg-[#04050b] text-white antialiased">
        <div className="pointer-events-none absolute inset-x-0 top-[-18rem] h-[32rem] bg-[radial-gradient(circle_at_top,#5146ff33,transparent_70%)]" aria-hidden="true" />
        <div className="pointer-events-none absolute inset-y-0 right-[-22rem] h-[46rem] w-[40rem] bg-[radial-gradient(circle_at_center,#f84fb533,transparent_70%)] blur-3xl" aria-hidden="true" />
        <div className="pointer-events-none absolute inset-x-0 bottom-[-28rem] h-[42rem] bg-[radial-gradient(circle_at_bottom,#6ee7f922,transparent_65%)]" aria-hidden="true" />
        <Hero />
        <HowItWorks />
        <Gallery />
        <Testimonials />
        <Inspiration />
        <CustomizerPreview />
        <PressAndUGC />
        <Footer />
        <StickyCTA />
      </main>
    </>
  );
}
