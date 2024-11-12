"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Container from "@/components/ui/container";

import assets from "@/assets";
import AutoScroll from "embla-carousel-auto-scroll";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import MediaQuery from "react-responsive";
import FoodCard from "./FoodCard";

const foods = [
  {
    id: 1,
    name: "vegetables burger",
    img: assets.images.burger,
  },
  {
    id: 2,
    name: "Spacial Pizza",
    img: assets.images.pizza,
  },
  {
    id: 3,
    name: "Spacial French fries",
    img: assets.images.frenchFries,
  },
  {
    id: 4,
    name: "Cuisine Chicken",
    img: assets.images.friedShrimp,
  },
  {
    id: 5,
    name: "Fresh Sandwich",
    img: assets.images.sandwich,
  },
];

const PopularFood = () => {
  return (
    <div className="r-my relative bg-[rgb(251,247,242)]">
      <Container className="py-8 pb-[84px] lg:py-[120px]">
        <div className="flex flex-col items-start justify-start gap-4">
          <div className="flex items-center justify-start gap-2.5 self-stretch">
            <div className="size-2.5 bg-[#bd1f17]" />
            <p className="font-roboto text-base font-bold leading-relaxed text-[#bd1f17] lg:text-xl lg:leading-loose">
              Crispy, Every Bite Taste
            </p>
          </div>
          <h2 className="self-stretch font-bebas_Neue text-[40px] font-bold leading-[48px] tracking-wide text-[#181818] lg:text-[62px] lg:leading-[62px]">
            POPULAR FOOD ITEMS
          </h2>
        </div>
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
            {foods?.map((food) => (
              <CarouselItem
                key={food.id}
                className="mt-[60px] first:p-0 md:basis-3/5 lg:basis-[25%] lg:pl-8"
              >
                <div className="h-full">
                  <FoodCard food={food} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="size-10 hover:bg-white hover:text-res-primary lg:size-[60px]" />
          <CarouselNext className="size-10 hover:bg-white hover:text-res-primary lg:size-[60px]" />
        </Carousel>
      </Container>
      <MediaQuery minWidth={1600}>
        <div className="absolute bottom-[100px] left-0">
          <Image src={assets.images.topViewBell} alt="topViewBell" />
        </div>
      </MediaQuery>
    </div>
  );
};

export default PopularFood;
