import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { gridItems } from "@/data";



const Grid = () => {
  return (
    <section >
      <BentoGrid>
        {gridItems.map(
          ({ id, title, description, className, imgClassName, titleClassName}) => (
            <BentoGridItem
              id={id}
              key={id}
              title={title}
              description={description}
              className={className}
              
              imgClassName={imgClassName}
              titleClassName={titleClassName}
              
            />
          )
        )}
      </BentoGrid>
    </section>
  );
};
export default Grid;
