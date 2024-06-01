import { Text, Img, Heading, Button } from "./..";
import React from "react";

interface Props {
  className?: string;
}

export default function Footer({ ...props }: Props) {
  return (
    <footer {...props} className={`${props.className} flex flex-col items-center gap-[63px] sm:gap-[31px]`}>
      <div className="mx-auto flex w-full max-w-[1180px] items-center justify-between gap-5 self-stretch md:flex-col md:p-5">
        <div className="flex w-[30%] flex-col gap-[31px] md:w-full">
          <Img src="images/img_footer_logo.png" alt="footerlogo" className="h-[31px] w-[198px] object-contain" />
          <Text size="lg" as="p" className="leading-[34px] tracking-[0.20px]">
            Marketing is a company that focus on developing company’s strategy for increase digital marketing
          </Text>
          <div className="flex w-[47%] justify-between gap-5 md:w-full">
            <Button color="green_200" size="xs" variant="fill" shape="square" className="w-[40px]">
              <Img src="images/img_light_bulb_green_200.svg" />
            </Button>
            <Button color="green_200" size="xs" variant="fill" shape="square" className="w-[40px]">
              <Img src="images/img_trash.svg" />
            </Button>
            <Button color="green_200" size="xs" variant="fill" shape="square" className="w-[40px]">
              <Img src="images/img_info.svg" />
            </Button>
          </div>
        </div>
        <div className="flex w-[55%] items-start justify-between gap-5 md:w-full md:flex-col">
          <div className="flex flex-col gap-7">
            <Heading size="s" as="h4">
              Menu
            </Heading>
            <ul className="flex flex-col gap-[18px]">
              <li>
                <a href="Home" target="_blank" rel="noreferrer">
                  <Text as="p">Home</Text>
                </a>
              </li>
              <li>
                <a href="Features" target="_blank" rel="noreferrer">
                  <Text as="p">Features</Text>
                </a>
              </li>
              <li>
                <a href="#">
                  <Text as="p">Pricing About</Text>
                </a>
              </li>
              <li>
                <a href="#">
                  <Text as="p">Contact Us</Text>
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-7">
            <Heading size="s" as="h4">
              Services
            </Heading>
            <ul className="flex flex-col gap-[18px]">
              <li>
                <a href="#">
                  <Text as="p">Content Strategy</Text>
                </a>
              </li>
              <li>
                <a href="#">
                  <Text as="p">Content Development</Text>
                </a>
              </li>
              <li>
                <a href="#">
                  <Text as="p">Content Creation</Text>
                </a>
              </li>
              <li>
                <a href="#">
                  <Text as="p">Content Optimazion</Text>
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-start gap-7">
            <Heading size="s" as="h4">
              Company
            </Heading>
            <ul className="flex flex-col items-start gap-[18px]">
              <li>
                <a href="#">
                  <Text as="p">Site Map</Text>
                </a>
              </li>
              <li>
                <a href="#">
                  <Text as="p">Terms of Use</Text>
                </a>
              </li>
              <li>
                <a href="#">
                  <Text as="p">Privacy Notice</Text>
                </a>
              </li>
              <li>
                <a href="Cookies" target="_blank" rel="noreferrer">
                  <Text as="p">Cookies</Text>
                </a>
              </li>
              <li>
                <a href="#">
                  <Text as="p">Modern Slavery</Text>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-[37px] self-stretch">
        <div className="h-px w-full self-stretch bg-blue_gray-900_26" />
        <div className="flex items-center gap-[5px]">
          <Img src="images/img_ant_design_copy.svg" alt="antdesigncopy" className="h-[16px] w-[16px]" />
          <Text as="p">Copyright Markethink. All right reserved</Text>
        </div>
      </div>
    </footer>
  );
}
