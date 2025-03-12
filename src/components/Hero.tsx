import Image from "next/image";
// import heroImage2 from "/public/images/hero-image-2.png";
// import heroImage1 from "/public/images/hero-image.png";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Hero() {
  return (
    <div className="h-[900px] flex">
      <div className="w-[40%] opacity-95 bg-black flex flex-col items-center gap-12 text-white justify-center bg-heroImage1 bg-no-repeat bg-cover bg-left-top">
        <article className="text-white flex flex-col items-center justify-center gap-6">
          <p className="text-2xl">Empowering <span className="text-4xl">Women</span></p>
          <p className="text-2xl">& <span className="text-4xl">Children</span></p>
          <p className="text-2xl">Against <span className="text-4xl">Abuse</span></p>
        </article>

        <Button variant="destructive" className={cn("rounded-md")}>Join Us</Button>
      </div>
      <div className="w-[60%] bg-heroImage2 bg-no-repeat bg-cover bg-top"></div>
    </div>
  );
}
