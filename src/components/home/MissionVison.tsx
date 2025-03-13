"use client";
import Image from "next/image";
import missionImage from "/public/images/mission-image.png";
import visionImage from "/public/images/vision-image.png";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

export default function MissionVision() {
  const MotionImage = motion.create(Image);
  return (
    <div className="py-16 flex flex-col gap-6 w-full">
      <div className="text-center flex flex-col items-center space-y-6">
        <h3 className="text-center text-4xl font-bold">
          Welcome to Vivacious Development Initiative (VIDI)
        </h3>
        <p className="text-center text-2xl text-wrap lg:w-[50%]">
          We believe in prevention over cure. Founded in 2013 by Onyinyechi J.
          Nwosu, VIDI is dedicated to inspiring, empowering, and educating women
          and children across Africa to live above sexual and gender-based
          violence (SGBV) and other rights violations.
        </p>
      </div>
      <div>
        <motion.div className="flex justify-center px-4 flex-col lg:flex-row items-center gap-y-10 gap-x-4 overflow-hidden">
          <MotionImage
            src={missionImage}
            alt="mission-image"
            className="lg:w-[45%]"
            initial={{ translateX: "-20%", opacity: 0 }}
            whileInView={{ translateX: "0%", opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
          />

          <motion.div
            className="flex flex-col lg:w-[45%] items-center justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-center uppercase text-xl font-bold">
              Our Mission
            </h3>
            <p className="text-center">
              We exist to inspire, empower, and educate every woman and child in
              Africa with preventive and coping skills to live above SGBV and
              other rights violations.
            </p>
          </motion.div>
        </motion.div>
        <div className="flex justify-center px-4 lg:flex-row-reverse flex-col items-center gap-y-10 gap-x-4 overflow-hidden">
          <MotionImage
            src={visionImage}
            alt="vision-image"
            className="lg:w-[45%]"
            initial={{ translateX: "20%", opacity: 0 }}
            whileInView={{ translateX: "0%", opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
          />

          <motion.div
            className="flex flex-col justify-center lg:w-[45%]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-center uppercase text-xl font-bold">
              Our Vision
            </h3>
            <p className="text-center">
              We see an Africa where women and children do not have their
              development distorted by the prevalence of SGBV but have their
              rights well recognized and protected.
            </p>
          </motion.div>
        </div>
      </div>

      <Button
        variant="outline"
        className={cn("self-center border-red-600 border-2")}
        size="lg"
      >
        <p className="text-lg font-semibold">Learn More</p>
      </Button>
    </div>
  );
}
