import { Text, Img } from "./..";
import React from "react";

interface Props {
  className?: string;
  image?: string;
  title?: string;
  description?: React.ReactNode | string;
}

export default function LandingPageColumncontent({
  image = "images/img_contrast.svg",
  title = "Content Strategy",
  description = (
    <>
      All our content marketing service packages include <br />a custom content strategy
    </>
  ),
  ...props
}: Props) {
  return (
    <div {...props} className={`${props.className} flex flex-col items-start w-full`}>
      <Img src={image} alt="content" className="h-[50px] w-[50px]" />
      <Text size="2xl" as="p" className="mt-[41px] !text-blue_gray-900">
        {title}
      </Text>
      <Text size="md" as="p" className="mt-[22px] w-full leading-8 !text-gray-600_02">
        {description}
      </Text>
    </div>
  );
}
