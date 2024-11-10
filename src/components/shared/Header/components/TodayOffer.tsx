"use client";

import assets from "@/assets";
import Image from "next/image";
import MediaQuery from "react-responsive";

interface TodayOfferBannerProps {
  isMobile: boolean;
}

const TodayOfferBanner = ({ isMobile }: TodayOfferBannerProps) => {
  return (
    <div
      className={
        isMobile
          ? "relative mt-[48px] pb-8"
          : "absolute right-0 top-[-104px] -z-[20]"
      }
    >
      <Image
        width={700}
        height={649}
        src={assets.images.bannerImg}
        alt="Banner"
      />
      <Image
        className="absolute -top-5 right-0 -z-50 -rotate-180 lg:-right-[27px] lg:-top-[34px]"
        src={assets.svgs.starIcon}
        alt="Star Icon"
      />
      <div className="absolute bottom-[43.45px] right-[15px] inline-flex size-[72px] items-center justify-center rounded-[75.47px] bg-[#febf00] pb-[7.55px] pl-[7.55px] pr-[6.79px] pt-[6.79px] shadow lg:-right-[8%] lg:bottom-0 lg:size-[120px]">
        <Image src={assets.svgs.todayOffer} alt="Today's Offer" />
      </div>
    </div>
  );
};

export const TodayOfferMobile = () => {
  return (
    <MediaQuery maxWidth={768}>
      <TodayOfferBanner isMobile />
    </MediaQuery>
  );
};

export const TodayOfferDesktop = () => {
  return (
    <MediaQuery minWidth={1024}>
      <TodayOfferBanner isMobile={false} />
    </MediaQuery>
  );
};
