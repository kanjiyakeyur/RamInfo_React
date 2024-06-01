import { Button, Text, Img } from "./..";
import React from "react";

interface Props {
  className?: string;
}

export default function Header({ ...props }: Props) {
  return (
    <header
      {...props}
      className={`${props.className} flex md:flex-col self-stretch justify-between items-center gap-5`}
    >
      <Img src="images/img_header_logo.png" alt="headerlogo" className="h-[31px] w-[189px] object-contain" />
      <ul className="flex flex-wrap gap-[52px] md:gap-5">
        <li>
          <a href="#">
            <Text as="p" className="!text-white-A700">
              Features
            </Text>
          </a>
        </li>
        <li>
          <a href="#">
            <Text as="p" className="!text-white-A700">
              Pricing
            </Text>
          </a>
        </li>
        <li>
          <a href="#">
            <Text as="p" className="!text-white-A700">
              About
            </Text>
          </a>
        </li>
        <li>
          <a href="#">
            <Text as="p" className="!text-white-A700">
              Contact Us
            </Text>
          </a>
        </li>
      </ul>
      <Button
        color="white_A700_19"
        size="md"
        variant="fill"
        className="min-w-[140px] rounded-[27px] border border-solid border-lime-A100_66 font-medium sm:px-5"
      >
        Free Trial
      </Button>
    </header>
  );
}
