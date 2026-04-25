import Image from "next/image";
import { ContainerScroll } from "@/components/container-scroll";

export function Showcase() {
  return (
    <section className="bg-auxano-dark-base py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
          What We&apos;ve Built
        </h2>
        <p className="text-gray-600 text-center mb-4 max-w-2xl mx-auto">
          Real projects. Real results. Here&apos;s a look at our recent work.
        </p>

        <ContainerScroll>
          <Image
            src="/showcase-screenshot.png"
            alt="Project screenshot showing a dashboard built by Auxano"
            width={1920}
            height={1080}
            className="w-full h-full object-cover"
            priority={false}
          />
        </ContainerScroll>
      </div>
    </section>
  );
}
