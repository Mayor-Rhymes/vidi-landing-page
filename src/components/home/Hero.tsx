"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

export default function Hero() {
  const MotionButton = motion.create(Button);
  return (
    <div className="h-[900px] flex">
      <div
        className="w-[40%] opacity-95 bg-black flex flex-col 
        items-center gap-12 text-white justify-center bg-heroImage1 bg-no-repeat bg-cover bg-left-top"
      >
        <motion.article
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-white flex flex-col items-center justify-center gap-6"
        >
          <p className="text-2xl">
            Empowering <span className="text-4xl">Women</span>
          </p>
          <p className="text-2xl">
            & <span className="text-4xl">Children</span>
          </p>
          <p className="text-2xl">
            Against <span className="text-4xl">Abuse</span>
          </p>
        </motion.article>

        <MotionButton
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          variant="destructive"
          viewport={{ once: true }}
          className={cn("rounded-md")}
          size="lg"
        >
          <span className="text-lg font-semibold">Join Us</span>
        </MotionButton>
      </div>
      <div className="w-[60%] bg-heroImage2 bg-no-repeat bg-cover bg-top"></div>
    </div>
  );
}
