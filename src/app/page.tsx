import Hero from "@/components/home/Hero";
import MissionVision from "@/components/home/MissionVison";

import Marquee from "@/components/home/Marquee";
import ApproachJoin from "@/components/home/ApproachJoin";
import Partners from "@/components/home/Partners";
import Change from "@/components/home/Change";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Hero />
      <MissionVision />
      <Marquee />
      <ApproachJoin />
      <Partners />
      <Change />
      <Footer />
    </div>
  );
}
