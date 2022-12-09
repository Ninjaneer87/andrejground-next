import BlurIn from "@/components/UI/BlurIn";
import React from "react";

type Props = {
  image: string;
  title: string;
};

export function SingleProjectImage({ image, title }: Props) {
  return (
    <BlurIn>
      <div
        style={{ backgroundImage: `url('/images/${image}')` }}
        title={title}
        className={`bg-no-repeat bg-center bg-contain aspect-[4/3] max-w-[800px] mx-auto drop-shadow-themed`}
      />
    </BlurIn>
  );
}
