import React from 'react';
import { cn } from "@/lib/utils";

// Exporting BentoGrid component
export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[1rem] grid-cols-1 md:grid-cols-3 gap- max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

// Exporting BentoGridItem component
export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id?: number;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
  img?: string;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        background: "rgb(2,0,36)",
        backgroundColor:
          "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(59,59,68,1) 26%, rgba(93,108,111,1) 100%)",
      }}
    >
      <div>
        <div
          className={cn(
            "font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2 text-lg group-hover/bento:scale-105 group-hover/bento:text-neutral-800 dark:group-hover/bento:text-neutral-100 transition duration-300",
            titleClassName
          )}
        >
          {title}
        </div>
        <div className="font-sans font-normal text-neutral-600 text-sm dark:text-neutral-300 group-hover/bento:scale-105 group-hover/bento:text-neutral-700 dark:group-hover/bento:text-neutral-200 transition duration-300">
          {description}
        </div>
      </div>
    </div>
  );
};
