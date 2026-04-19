import { ScrollTransition } from "@/components/scroll-transition";
import { Showcase } from "@/components/showcase";
import { BottomCta } from "@/components/bottom-cta";

export default function Home() {
  return (
    <>
      <ScrollTransition />
      <Showcase />
      <BottomCta />
    </>
  );
}
