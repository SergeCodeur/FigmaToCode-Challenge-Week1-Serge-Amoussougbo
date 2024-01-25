import AboutSection from "@/components/AboutSection";
import Banner from "@/components/Banner";
import CallToActionSection from "@/components/CallToActionSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MaxContentWidthWrapper from "@/components/MaxContentWidthWrapper";
import Navbar from "@/components/Navbar";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import VideoSection from "@/components/VideoSection";

export default function Home() {
  return (
    <>
      <Header className="bg-slate-50 rounded-b-4xl">
        <MaxContentWidthWrapper>
          <Navbar />
          <Banner />
        </MaxContentWidthWrapper>
      </Header>
      <main>
        <AboutSection />
        <ServicesSection />
        <CallToActionSection />
        <VideoSection />
        <TestimonialsSection />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
