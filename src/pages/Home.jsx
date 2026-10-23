import HeroSlider from "../components/home/HeroSlider";
import WhatWeDo from "../components/home/WhatWeDo";
import MissionVision from "../components/home/MissionVision";
import Stats from "../components/home/Stats";
import WhyChooseUs from "../components/home/WhyChooseUs";
import Testimonials from "../components/home/Testimonials";
import Faq from "../components/home/Faq";
import CtaBanner from "../components/home/CtaBanner";
import FloatingContact from "../components/FloatingContact";

export default function Home() {
  return (
    <>
      <HeroSlider />
      <WhatWeDo />
      <MissionVision />
      <Stats />
      <WhyChooseUs />
      <Testimonials />
      <Faq />
      <CtaBanner />

      {/* Bar Council of India disclaimer */}
      <p className="bg-slate-950 px-4 py-4 text-center text-xs text-slate-400">
        Disclaimer: This website is for informational purposes only and is not an advertisement or solicitation.
        Nothing here is legal advice. Please consult a lawyer for advice on your specific case.
      </p>

      <FloatingContact />
    </>
  );
}