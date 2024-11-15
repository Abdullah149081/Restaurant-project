/* eslint-disable react/no-array-index-key */
/* eslint-disable react/no-unescaped-entities */

"use client";

import assets from "@/assets";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Container from "@/components/ui/container";
import TitleSubTitle from "@/components/ui/titleSubTitle";

import AutoScroll from "embla-carousel-auto-scroll";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

const Customers = () => {
  return (
    <Container className="r-my pb-[50px] lg:pb-0">
      <TitleSubTitle
        title=" What Some of my Customers Say"
        subtitle=" Crispy, Every Bite Taste"
      />
      <Carousel
        plugins={[
          Autoplay({
            delay: 2000,
          }),
          AutoScroll({
            speed: 2,
          }),
        ]}
      >
        <CarouselContent className="-ml-1">
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem
              key={index}
              className="mt-6 basis-full pl-2 first:pl-0 lg:mt-[60px] lg:pl-6"
            >
              <div className="h-full">
                <div className="flex h-full flex-col-reverse items-center justify-start self-stretch lg:flex-row">
                  <div className="relative flex h-full items-center justify-center gap-[37px] bg-[#febf00] lg:w-[556.45px]">
                    <div className="absolute -bottom-2 left-0 lg:bottom-[50px]">
                      <Image
                        src={assets.svgs.group}
                        alt="group"
                        width={39}
                        height={76}
                        className="h-[49.29px] w-[24.64px] lg:h-[76px] lg:w-[39px]"
                      />
                    </div>
                    <div className="flex flex-col items-end justify-start gap-10 px-[15px] py-[25px] lg:w-[386.19px] lg:gap-[164px] lg:p-0">
                      <div className="flex gap-1">
                        <div className="h-[29.13px] w-[90px]">
                          <Image
                            src={assets.icons.quote}
                            width={28}
                            height={29}
                            alt="quote"
                            className="h-[29.13px] w-[20.36px]"
                          />
                        </div>
                        <p className="max-w-[359.92px] font-roboto text-lg font-normal leading-7 text-[#091325] opacity-90 lg:leading-[34px] xl:text-xl">
                          You can't go wrong with Chicken Mandi, I had it twice.
                          The chicken was cooked perfectly, juicy & soft
                          (usually mandi chicken is a bit dry). I would
                          defiantly recommend it.
                        </p>
                      </div>

                      <div className="flex flex-col items-start justify-start gap-[18px]">
                        <div className="flex w-full justify-between">
                          <div className="flex flex-col items-start justify-start gap-[3px]">
                            <h3 className="font-bebas_Neue text-lg font-bold leading-tight text-[#091325] opacity-90 lg:w-[115.06px]">
                              Khalid Al Dawsry
                            </h3>
                            <h4 className="font-roboto text-sm font-normal leading-[13.32px] text-[#333333]">
                              Jeddah, Saudi
                            </h4>
                          </div>
                          <div className="flex items-start justify-start gap-2">
                            <Image
                              className="h-10 w-[39.62px] rounded-full"
                              src={
                                assets.images.customers ??
                                "https://via.placeholder.com/40x40"
                              }
                              alt="user"
                            />
                          </div>
                        </div>
                        <div className="relative h-[0px] w-[280px] lg:w-[360.75px]">
                          <div className="absolute left-0 top-0 h-[0px] w-[280px] border border-[#091325] lg:w-[360.75px]" />
                          <div className="absolute -top-[5px] right-0 h-[0px] w-[40.45px] border-4 border-[#bd1f17]" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="h-full max-w-[763.60px]">
                    <Image
                      src={assets.images.video}
                      alt="video"
                      className="h-full"
                    />
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="size-10 hover:bg-white hover:text-res-primary lg:size-[60px]" />
        <CarouselNext className="size-10 hover:bg-white hover:text-res-primary lg:size-[60px]" />
      </Carousel>
    </Container>
  );
};

export default Customers;
