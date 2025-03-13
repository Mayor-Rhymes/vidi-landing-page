import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function CoreValues() {
  return (
    <div className="py-12 flex flex-col gap-6">
      <h4 className="uppercase text-center text-3xl font-extrabold">
        Our Core Values
      </h4>

      <p className="text-center">
        These values guide everything we do at VIDI. They serve as the
        foundation <br /> of our organization, shaping our actions and decisions
        as we strive for positive change.
      </p>
    </div>
  );
}
