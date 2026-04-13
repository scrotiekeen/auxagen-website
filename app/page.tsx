import { Hero } from "@/components/hero";
import { ServicesOverview } from "@/components/services-overview";
import { Showcase } from "@/components/showcase";
import { BottomCta } from "@/components/bottom-cta";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <Showcase />
      <BottomCta />
    </>
  );
}
