import { ScrollTransition } from "@/components/scroll-transition";
import { Showcase } from "@/components/showcase";
import { WhyDifferent } from "@/components/why-different";
import { BottomCta } from "@/components/bottom-cta";

export default function Home() {
  return (
    <>
      <ScrollTransition />
      <Showcase />
      <WhyDifferent />
      <BottomCta />
    </>
  );
}
