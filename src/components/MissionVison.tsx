
import Image from "next/image";
import missionImage from "/public/images/mission-image.png";
import visionImage from "/public/images/vision-image.png";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";


export default function MissionVision() {
  return (
    <div className="py-10 flex flex-col gap-20">
      <div className="text-center flex flex-col items-center space-y-6">
        <h3 className="text-center text-xl font-bold">
          Welcome to Vivacious Development Initiative (VIDI)
        </h3>
        <p className="text-center text-wrap lg:w-[50%]">
          We believe in prevention over cure. Founded in 2013 by Onyinyechi J.
          Nwosu, VIDI is dedicated to inspiring, empowering, and educating women
          and children across Africa to live above sexual and gender-based
          violence (SGBV) and other rights violations.
        </p>
      </div>
      <div className="flex justify-center items-center">
        <Image
          src={missionImage}
          alt="mission-image"
          className="ml-10"
          // height={474}
          // width={652}
        />

        <div className="flex flex-col items-center">
          <h3 className="text-center uppercase text-xl font-bold">
            Our Mission
          </h3>
          <p className="text-center text-wrap lg:w-[50%]">
            We exist to inspire, empower, and educate every woman and child in
            Africa with preventive and coping skills to live above SGBV and
            other rights violations.
          </p>
        </div>
      </div>
      <div className="flex justify-center flex-row-reverse items-center">
        <Image
          src={visionImage}
          alt="vision-image"
          className="mr-10"
          // height={474}
          // width={652}
        />

        <div className="flex flex-col items-center">
          <h3 className="text-center uppercase text-xl font-bold">
            Our Vision
          </h3>
          <p className="text-center text-wrap lg:w-[50%]">
            We see an Africa where women and children do not have their
            development distorted by the prevalence of SGBV but have their
            rights well recognized and protected.
          </p>
        </div>
      </div>

      <Button
        variant="outline"
        className={cn("w-[15%] self-center border-red-600")}
      >
        Learn More
      </Button>
    </div>
  );
}
