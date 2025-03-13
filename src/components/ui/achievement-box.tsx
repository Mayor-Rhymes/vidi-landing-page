import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface AchievementBoxProps extends HTMLAttributes<HTMLDivElement> {
  count: number | string;
  title: string;
}

export const AchievementBox = ({ count, title, className, ...props }: AchievementBoxProps) => {
  return (
      <div {...props} className={cn("bg-red-600 text-white flex flex-col gap-4 justify-center text-center p-4", className)}>
      <p className="text-4xl font-extrabold">{count}</p>
      <p className="text-xl">{title}</p>
    </div>
  );
};
