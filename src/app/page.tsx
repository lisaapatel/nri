import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { FeaturedCoreServices } from "@/components/sections/FeaturedCoreServices";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Testimonials } from "@/components/sections/Testimonials";
import { FinalCtaBand } from "@/components/sections/FinalCtaBand";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <FeaturedCoreServices />
      <HowItWorks />
      <Testimonials />
      <FinalCtaBand />
    </>
  );
}
