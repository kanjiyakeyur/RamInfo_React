import { Helmet } from "react-helmet";
import { Img, Button, Input, Heading, Text } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import LandingPageColumncontent from "../../components/LandingPageColumncontent";
import React, { Suspense } from "react";

const data = [
  {},
  {
    image: "images/img_save.svg",
    title: "Content Development",
    description: "We create some content calendar for your company’s must-share content",
  },
  {
    image: "images/img_wool_ball.svg",
    title: "Content Creation",
    description: "Experienced in copywriting and marketing team begins creating content",
  },
  {
    image: "images/img_glass.svg",
    title: "Content Optimization",
    description: "Your content marketing management services also include SEO",
  },
];

export default function LandingPagePage() {
  return (
    <>
      <Helmet>
        <title>DhiWise web app</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-white-A700">
        <div>
          <div className="relative h-[852px] bg-[url(/public/images/img_group_1.png)] bg-gradient4 bg-cover bg-no-repeat pt-10 sm:pt-5">
            <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[812px] w-full md:h-auto">
              <div className="absolute bottom-[0.00px] left-0 right-0 m-auto flex w-full flex-col items-center">
                <div className="container-xs flex flex-col items-end pl-14 pr-[180px] md:p-5 md:px-5">
                  <Img src="images/img_vector_9.svg" alt="vectornine" className="h-[9px] w-[51%] rounded" />
                </div>
                <Img
                  src="images/img_group_627.png"
                  alt="image"
                  className="relative mt-[-7px] h-[482px] w-full object-cover md:h-auto"
                />
              </div>
              <Img
                src="images/img_ellipse_1.png"
                alt="image"
                className="absolute bottom-[24%] right-[0.00px] m-auto h-[364px] w-[17%] object-cover"
              />
              <div className="mt-[153px] h-[100px] w-[7%] rounded-[50px] bg-lime-400_33 blur-[204.00px] backdrop-opacity-[0.5]" />
              <div className="container-xs absolute left-0 right-0 top-[0.00px] my-auto flex md:p-5">
                <div className="flex w-full flex-col items-center">
                  <Header />
                  <div className="mt-[104px] flex flex-col items-center gap-[37px]">
                    <Text size="4xl" as="p" className="tracking-[0.72px] !text-white-A700_cc">
                      The Best
                    </Text>
                    <Heading size="xl" as="h1" className="tracking-[3.60px] !text-white-A700">
                      Digital Marketing
                    </Heading>
                  </div>
                  <Text
                    size="xl"
                    as="p"
                    className="mt-[22px] w-[59%] text-center leading-10 !text-white-A700_99 md:w-full"
                  >
                    Completely synergize resource taxing relationships via premier niche markets. Professionally
                    cultivate one-to-one customer
                  </Text>
                  <div className="mt-[70px] flex w-[21%] flex-col items-center md:w-full">
                    <Button
                      shape="round"
                      color="white_A700_af_white_A700_3f"
                      className="relative z-[1] w-full font-semibold tracking-[0.40px] sm:px-5"
                    >
                      Get Started
                    </Button>
                    <div className="relative mt-[-53px] h-[64px] w-[69%] bg-lime-400_33_01 blur-[54.00px] backdrop-opacity-[0.5]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Img src="images/img_partner.svg" alt="partner" className="h-[140px] w-full md:h-auto" />
          <div className="relative h-[1378px] md:h-auto">
            <Img
              src="images/img_group_572.png"
              alt="image"
              className="mb-[141px] ml-28 h-[27px] w-[43%] object-cover md:ml-0"
            />
            <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max w-full flex-col items-center gap-[120px] bg-white-A700 py-20 md:gap-[90px] md:py-5 sm:gap-[60px]">
              <div className="container-xs mt-[19px] md:p-5">
                <div>
                  <div className="flex items-start justify-between gap-5 md:flex-col">
                    <div className="flex w-[42%] flex-col gap-[35px] md:w-full">
                      <Heading as="h2" className="leading-[65px] tracking-[0.84px]">
                        <>
                          We’re Strategic Digital
                          <br />
                          Marketing Agency
                        </>
                      </Heading>
                      <Text size="xl" as="p" className="w-[87%] leading-10 !text-gray-600_02 md:w-full">
                        We’ve created a full-stack structure for our working workflow processe, were from the funny the
                        century initial all made, have spare to negatives{" "}
                      </Text>
                      <div className="flex items-center gap-4">
                        <a href="#">
                          <Text size="2xl" as="p" className="tracking-[0.48px] !text-lime-700 underline">
                            See More
                          </Text>
                        </a>
                        <Img src="images/img_arrow_left.svg" alt="arrowleft" className="h-[24px] w-[24px] self-start" />
                      </div>
                    </div>
                    <div className="mt-[9px] grid w-[49%] grid-cols-2 gap-[90px] md:grid-cols-1">
                      <Suspense fallback={<div>Loading feed...</div>}>
                        {data.map((d, index) => (
                          <LandingPageColumncontent {...d} key={"landingpage" + index} />
                        ))}
                      </Suspense>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-10 flex w-[85%] md:w-full md:p-5">
                <div className="flex w-full items-center justify-between gap-5 md:flex-col">
                  <div className="relative h-[470px] w-[55%] md:h-auto md:w-full">
                    <div className="flex w-full flex-col items-end">
                      <Img
                        src="images/img_group_28.png"
                        alt="image"
                        className="relative z-[6] mr-10 h-[144px] w-[144px] object-cover md:mr-0"
                      />
                      <div className="relative mt-[-96px] flex items-center self-stretch md:flex-col">
                        <div className="relative z-[2] flex flex-1 flex-col items-end md:self-stretch">
                          <div className="flex flex-col self-stretch">
                            <Img
                              src="images/img_group_26.png"
                              alt="image"
                              className="relative z-[3] ml-[86px] h-[96px] w-[96px] object-cover md:ml-0"
                            />
                            <div className="relative mt-[-64px] flex items-center sm:flex-col">
                              <Img
                                src="images/img_group_571.svg"
                                alt="image"
                                className="h-[128px] w-[127px] self-end sm:w-full"
                              />
                              <div className="relative ml-[-37px] h-[346px] flex-1 md:h-auto sm:ml-0 sm:w-full sm:flex-none sm:self-stretch">
                                <Img src="images/img_subtract.svg" alt="subtract" className="h-[342px] w-full" />
                                <div className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[346px] w-full bg-[url(/public/images/img_group_13.svg)] bg-cover bg-no-repeat p-[45px] md:h-auto md:p-5">
                                  <div className="mb-[25px] mt-[105px] flex flex-col gap-[9px]">
                                    <div className="ml-[11px] flex items-start gap-[18px] md:ml-0 sm:flex-col">
                                      <Img
                                        src="images/img_user.svg"
                                        alt="user"
                                        className="h-[58px] w-[58px] sm:w-full"
                                      />
                                      <Img
                                        src="images/img_markethink.svg"
                                        alt="markethink"
                                        className="mt-[7px] h-[37px] w-[83%] sm:w-full"
                                      />
                                    </div>
                                    <div className="flex w-[91%] items-start justify-between gap-5 md:w-full">
                                      <Button
                                        size="sm"
                                        color="white_A700_99_red_300_4c"
                                        className="mt-[9px] w-[47px] rounded-[19px]"
                                      >
                                        <Img src="images/img_thumbs_up.svg" />
                                      </Button>
                                      <Button
                                        size="sm"
                                        color="white_A700_99_blue_500_7f_01"
                                        className="w-[47px] rounded-[19px]"
                                      >
                                        <Img src="images/img_music.svg" />
                                      </Button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="relative z-[4] mr-[198px] mt-[-24px] flex w-[26%] items-start md:mr-0 md:w-full">
                            <div className="white_A700_99_blue_500_7f_border relative z-[5] h-[68px] w-[41%] rounded-[28px] border-[3px] border-solid bg-gradient6" />
                            <Img
                              src="images/img_path200.png"
                              alt="path200"
                              className="relative ml-[-68px] mt-3.5 h-[8px] w-full object-cover"
                            />
                          </div>
                        </div>
                        <div className="relative mb-3 ml-[-81px] flex w-[22%] flex-col items-start self-end md:ml-0 md:w-full">
                          <Img src="images/img_group_294.svg" alt="image" className="h-[200px] w-full md:h-auto" />
                          <Img
                            src="images/img_group_30.png"
                            alt="image"
                            className="relative ml-4 mt-[-70px] h-[101px] w-[101px] object-cover md:ml-0"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="absolute bottom-[16%] left-0 right-0 z-[7] m-auto flex w-[70%] justify-center bg-red-300_cc">
                      <div className="w-full bg-gradient4">
                        <Img
                          src="images/img_img.png"
                          alt="img"
                          className="h-[294px] w-full object-cover opacity-0.2 md:h-auto"
                        />
                      </div>
                    </div>
                    <div className="absolute bottom-[9%] left-0 right-0 z-[8] m-auto h-[10px] w-[92%] bg-gradient5" />
                  </div>
                  <div className="flex w-[40%] flex-col items-start md:w-full">
                    <Heading as="h3" className="w-full leading-[65px] tracking-[0.84px]">
                      Increase Business on Social Media Reach
                    </Heading>
                    <Text size="xl" as="p" className="mt-[30px] w-[89%] leading-10 !text-gray-600_02 md:w-full">
                      Using our network of industry influencers, we help promote your content
                    </Text>
                    <Button
                      shape="round"
                      color="white_A700_af_white_A700_3f"
                      className="mt-[50px] min-w-[243px] font-semibold tracking-[0.40px] sm:px-5"
                    >
                      Get Started
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center bg-gray-50 py-[98px] md:py-5">
            <div className="container-xs mt-3 flex flex-col items-center px-4 md:p-5">
              <Heading as="h2" className="tracking-[0.84px]">
                How Can We Help You?
              </Heading>
              <Text size="xl" as="p" className="mt-9 !text-gray-600_02">
                Let&#39;s do great work together
              </Text>
              <div className="mt-[46px] flex flex-col items-center gap-[25px] self-stretch">
                <div className="flex w-[85%] items-center gap-5 md:w-full md:flex-col">
                  <div className="flex flex-col items-center rounded-[50px] bg-white-A700 p-[25px] shadow-xs sm:p-5">
                    <Img src="images/img_light_bulb.svg" alt="lightbulb" className="h-[50px] w-[50px]" />
                  </div>
                  <div className="h-px w-[20%] bg-green-200" />
                  <div className="h-[40px] w-[40px] rounded-[20px] border border-solid border-green-200_01 bg-white-A700" />
                  <div className="h-px flex-1 bg-green-200 md:self-stretch" />
                  <div className="h-[40px] w-[40px] rounded-[20px] border border-solid border-green-200_01 bg-white-A700" />
                  <div className="h-px flex-1 bg-green-200 md:self-stretch" />
                  <div className="h-[40px] w-[40px] rounded-[20px] border border-solid border-green-200_01 bg-white-A700" />
                </div>
                <div className="flex flex-wrap justify-between gap-5 self-stretch md:flex-col">
                  <Heading size="xs" as="h3" className="w-[21%] text-center leading-10 md:w-full">
                    <>
                      Update content <br />
                      on my Website
                    </>
                  </Heading>
                  <Text size="xl" as="p" className="w-[21%] text-center leading-10 !text-blue_gray-900 md:w-full">
                    Improve User Experience
                  </Text>
                  <Text size="xl" as="p" className="w-[21%] text-center leading-10 !text-blue_gray-900 md:w-full">
                    <>
                      Request Free <br />
                      Website Review
                    </>
                  </Text>
                  <Text size="xl" as="p" className="w-[21%] text-center leading-10 !text-blue_gray-900 md:w-full">
                    <>
                      Improve your <br />
                      SEO Rankings
                    </>
                  </Text>
                </div>
              </div>
              <div className="mt-[60px] flex items-center gap-4">
                <a href="#">
                  <Text size="2xl" as="p" className="tracking-[0.48px] !text-lime-700 underline">
                    See More
                  </Text>
                </a>
                <Img src="images/img_arrow_left.svg" alt="arrowleft" className="h-[24px] w-[24px] self-start" />
              </div>
            </div>
          </div>
          <div className="flex justify-center bg-white-A700 py-[60px] md:py-5">
            <div className="container-xs mt-[60px] flex justify-center md:p-5">
              <div className="w-full">
                <div className="relative z-[9] flex items-center justify-between gap-5 md:flex-col">
                  <Heading as="h2" className="w-[42%] leading-[65px] tracking-[0.84px] md:w-full">
                    <>
                      Read More Articles
                      <br />
                      From Our Blog
                    </>
                  </Heading>
                  <div className="mb-[9px] flex w-[40%] flex-wrap justify-between gap-5 self-end md:w-full">
                    <Text size="2xl" as="p" className="!font-normal tracking-[0.48px] !text-blue_gray-900">
                      Content Writing
                    </Text>
                    <Text size="2xl" as="p" className="!font-normal tracking-[0.48px] !text-gray-600_e5">
                      Content Marketing
                    </Text>
                  </div>
                </div>
                <div className="relative mt-[-3px] flex flex-col items-end gap-[60px] sm:gap-[30px]">
                  <div className="mr-[326px] h-[3px] w-[12%] bg-lime-800 md:mr-0" />
                  <div className="flex gap-[50px] self-stretch md:flex-col">
                    <div className="flex w-[46%] flex-col gap-[25px] md:w-full">
                      <Img src="images/img_rectangle_333.png" alt="august_172021" className="h-[343px] object-cover" />
                      <div className="flex flex-col items-start">
                        <Text size="md" as="p" className="tracking-[0.36px] !text-gray-600_01">
                          AUGUST 17, 2021
                        </Text>
                        <Text size="3xl" as="p" className="mt-[13px] w-full leading-9 !text-blue_gray-900">
                          10 Reasons to invest in SEO copywriting services
                        </Text>
                        <Button
                          size="xl"
                          className="mt-10 min-w-[206px] rounded-[34px] font-semibold tracking-[0.40px] sm:px-5"
                        >
                          Read More
                        </Button>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col gap-[25px]">
                      <Img src="images/img_rectangle_335.png" alt="image" className="h-[245px] object-cover" />
                      <div className="flex flex-col items-start gap-10">
                        <div className="flex flex-col items-start gap-[13px] self-stretch">
                          <Text size="xs" as="p" className="tracking-[0.28px] !text-gray-600_01">
                            AUGUST 17, 2021
                          </Text>
                          <Text size="2xl" as="p" className="w-full leading-9 !text-blue_gray-900">
                            How to get hired at a top Digital Marketing
                          </Text>
                          <Text size="md" as="p" className="w-full leading-[30px] !text-gray-600_02">
                            Agency life. We’ve all seen the photos posted on social media – the cool...
                          </Text>
                        </div>
                        <Button size="lg" shape="circle" className="w-[68px] !rounded-[34px]">
                          <Img src="images/img_eye.svg" />
                        </Button>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col items-start gap-8">
                      <Img
                        src="images/img_rectangle_334.png"
                        alt="image"
                        className="h-[245px] w-full object-cover md:h-auto"
                      />
                      <div className="flex flex-col items-start gap-[13px] self-stretch">
                        <Text size="xs" as="p" className="tracking-[0.28px] !text-gray-600_01">
                          AUGUST 17, 2021
                        </Text>
                        <Text size="2xl" as="p" className="w-full leading-9 !text-blue_gray-900">
                          Copywriting guidelines during the coronavirus
                        </Text>
                        <Text size="md" as="p" className="w-full leading-[30px] !text-gray-600_02">
                          Since the coronavirus hit earlier this year, it’s hard to go anywhere...
                        </Text>
                      </div>
                      <Button size="lg" shape="circle" className="w-[68px] !rounded-[34px]">
                        <Img src="images/img_eye.svg" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center gap-[73px] bg-white-A700 py-7 md:gap-[54px] sm:gap-9 sm:py-5">
            <div className="relative mt-[31px] h-[550px] w-[89%] self-end md:h-auto">
              <div className="container-xs flex md:p-5">
                <div className="w-full bg-gradient4">
                  <Img
                    src="images/img_img.png"
                    alt="img"
                    className="h-[523px] w-full object-cover opacity-0.2 md:h-auto"
                  />
                </div>
              </div>
              <div className="container-xs absolute bottom-0 left-[0.00px] top-0 my-auto flex h-max md:p-5">
                <div className="flex h-[542px] w-full items-start bg-[url(/public/images/img_group_6.png)] bg-cover bg-no-repeat py-[100px] pl-[100px] pr-14 md:h-auto md:p-5">
                  <div className="mb-[19px] ml-[26px] flex w-[67%] flex-col md:ml-0 md:w-full">
                    <Heading size="md" as="h2" className="leading-[55px] tracking-[0.32px] !text-white-A700">
                      Subscribe to get information, latest news and other interesting offers about{" "}
                    </Heading>
                    <div className="mt-[30px] flex w-[40%] items-start gap-[13px] md:w-full">
                      <Img src="images/img_user.svg" alt="user" className="h-[42px] w-[42px]" />
                      <Img src="images/img_markethink.svg" alt="markethink" className="mt-[5px] h-[26px] w-[83%]" />
                    </div>
                    <div className="mt-[61px] flex gap-[30px] md:flex-col">
                      <Input
                        shape="round"
                        color="white_A700_33_white_A700_00"
                        type="email"
                        name="email"
                        placeholder={`Your email`}
                      />
                      <Button
                        shape="round"
                        color="white_A700_af_white_A700_3f"
                        className="min-w-[243px] font-semibold tracking-[0.40px] sm:px-5"
                      >
                        Subscribe
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <Img
                src="images/img_group_294_indigo_a200.svg"
                alt="image"
                className="absolute bottom-[0.00px] right-[-0.26px] m-auto h-[491px] w-[31%]"
              />
            </div>
            <div className="container-xs mb-11 md:p-5">
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
