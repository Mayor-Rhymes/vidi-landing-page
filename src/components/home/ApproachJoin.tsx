"use client"

import Image from "next/image";
import approachImage from "/public/images/approach-image.png";
import joinusImage from "/public/images/joinus-image.png";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

export default function ApproachJoin() {
  const MotionImage = motion.create(Image);
  return (
    <div className="py-10 flex flex-col">
      <div className="flex lg:flex-row flex-col justify-center items-center gap-y-10 px-4 overflow-hidden">
        <MotionImage
          src={approachImage}
          alt="mission-image"
          className="lg:w-[45%]"
          initial={{ translateX: "-20%", opacity: 0 }}
          whileInView={{ translateX: "0%", opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          viewport={{ once: true }}
        />

        <motion.div
          className="flex flex-col lg:w-[45%] items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          viewport={{ once: true }}

        >
          <h3 className="text-center uppercase text-xl font-bold">
            Our Approach
          </h3>
          <p className="text-center text-wrap lg:w-[50%]">
            We exist to inspire, empower, and educate every woman and child in
            Africa with preventive and coping skills to live above SGBV and
            other rights violations.
          </p>
        </motion.div>
      </div>
      <div className="flex justify-center flex-col lg:flex-row-reverse gap-y-10 items-center px-4 overflow-hidden">
        <MotionImage
          src={joinusImage}
          alt="vision-image"
          className="lg:w-[45%]"
          initial={{ translateX: "20%", opacity: 0 }}
          whileInView={{ translateX: "0%", opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          viewport={{ once: true }}
        />

        <motion.div className="flex flex-col lg:w-[45%] items-center" initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-center uppercase text-xl font-bold">Join us</h3>
          <p className="text-center text-wrap lg:w-[50%]">
            Join us in our mission to build a safer Africa. Explore our past
            projects, read our blog, and connect with us to learn how you can
            make a difference.
          </p>
        </motion.div>
      </div>

      <Button
        variant="destructive"
        className={cn("self-center mt-10")}
        size="lg"
      >
        <span className="text-lg font-semibold">Make a Change</span>
      </Button>
    </div>
  );
}
