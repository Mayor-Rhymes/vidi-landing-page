import Image from "next/image";
import approachImage from "/public/images/approach-image.png";
import joinusImage from "/public/images/joinus-image.png";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

export default function ApproachJoin() {
  return (
    <div className="py-10 flex flex-col">
      <div className="flex lg:flex-row flex-col justify-center items-center gap-y-10 px-4">
        <Image
          src={approachImage}
          alt="mission-image"
           className="lg:w-[45%]"
        />

        <div className="flex flex-col lg:w-[45%] items-center">
          <h3 className="text-center uppercase text-xl font-bold">
            Our Approach
          </h3>
          <p className="text-center text-wrap lg:w-[50%]">
            We exist to inspire, empower, and educate every woman and child in
            Africa with preventive and coping skills to live above SGBV and
            other rights violations.
          </p>
        </div>
      </div>
      <div className="flex justify-center flex-col lg:flex-row-reverse gap-y-10 items-center px-4">
        <Image
          src={joinusImage}
          alt="vision-image"
          className="lg:w-[45%]"
          // height={474}
          // width={652}
        />

        <div className="flex flex-col lg:w-[45%] items-center">
          <h3 className="text-center uppercase text-xl font-bold">Join us</h3>
          <p className="text-center text-wrap lg:w-[50%]">
            Join us in our mission to build a safer Africa. Explore our past
            projects, read our blog, and connect with us to learn how you can
            make a difference.
          </p>
        </div>
      </div>

      <Button
        variant="destructive"
        className={cn("self-center mt-10")}
      >
        Make a Change
      </Button>
    </div>
  );
}
