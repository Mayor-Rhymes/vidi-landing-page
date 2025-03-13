import { cn } from "@/lib/utils";
import { AchievementBox } from "../ui/achievement-box";

export default function Story() {
  return (
    <div className="flex flex-col py-14 gap-8">
      <h4 className="uppercase text-center text-3xl font-extrabold">
        Our Story
      </h4>

      <div className="text-center text-lg">
        <p>
          Following our Founder, Onyinyechi’s experiences as a survivor of
          sexual abuse, she dedicated
        </p>
        <p>
          herself to empowering adolescent girls through coaching sessions in
          schools and places of
        </p>
        <p>
          worship. This commitment led to the establishment of Vivacious Teens
          Resources in 2006,
        </p>
        <p>laying the foundation for what would later become VIDI.</p>
      </div>
      <div className="text-center text-lg">
        <p>
          Officially registered as Vivacious Development Initiative in 2008, we
          have consistently worked
        </p>
        <p>
          towards ensuring the holistic development of every woman and child
          through all our initiatives.
        </p>
        <p>
          We have grown to become the loudest and most consistent voice when it
          comes to the
        </p>
        <p>
          protection of women and children against all forms of gender-based
          violence and other forms of human rights violations.
        </p>
      </div>

      <div className="flex h-[289px]">
        <AchievementBox
          className={cn("flex-grow")}
          title="Women Empowered"
          count="10,000+"
        />
        <AchievementBox
          className={cn("bg-black flex-grow")}
          title="SGBV Survivors"
          count="2,500+"
        />
        <AchievementBox
          className={cn("flex-grow")}
          title="Skilled Girls"
          count="500+"
        />
        <AchievementBox
          className={cn("bg-black flex-grow")}
          title="Communities"
          count="25+"
        />
      </div>
    </div>
  );
}
