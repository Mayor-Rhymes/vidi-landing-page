import Image from "next/image";
import marquee1 from "/public/images/marquee-images/marquee1.png";
import marquee2 from "/public/images/marquee-images/marquee2.png";
import marquee3 from "/public/images/marquee-images/marquee3.png";
import marquee4 from "/public/images/marquee-images/marquee4.png";
import { Button } from "@/components/ui/button";

export default function Marquee() {
  return (
    <div className="flex flex-col space-y-10 py-4">
      <div className="flex py-10 lg:flex-row flex-col lg:p-10">
        <Image src={marquee1} alt="marquee1" />
        <Image src={marquee2} alt="marquee2" />
        <Image src={marquee3} alt="marquee3" />
        <Image src={marquee4} alt="marquee4" />
      </div>

      <Button variant="destructive" className="self-center">
        View Projects
      </Button>
    </div>
  );
}
