import Image from "next/image";
import heroImage2 from "/public/images/hero-image-2.png";
import heroImage1 from "/public/images/hero-image.png";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <div className="flex relative">
      <div className="relative">
        <div className="absolute top-0 left-0 h-full w-full bg-black opacity-85 flex items-center justify-center"></div>
        <div className="absolute top-0 right-0 w-full h-full flex flex-col items-center space-y-10 justify-center">
          <p className="text-white text-center flex flex-col space-y-3">
            <span>
              Empowering <span className="text-3xl">Women</span>
            </span>
            <span className="text-center">
              & <span className="text-3xl">Children</span>{" "}
            </span>
            <span>
              Against <span className="text-3xl">Abuse</span>
            </span>
          </p>
          <Button variant="destructive" size="lg">
            Join us
          </Button>
        </div>
        <Image src={heroImage2} alt="hero-image" />
      </div>

      <div className="">
        <Image src={heroImage1} alt="hero-image-1" />
      </div>
    </div>
  );
}
