import { Button } from "@/components/ui/button";
import Container from "@/components/ui/container";
import { TodayOfferDesktop, TodayOfferMobile } from "./components/TodayOffer";

const Banner = () => {
  return (
    <>
      <div className="absolute inset-0 -top-[110px] -z-50 w-full bg-res-primary">
        <div className="r-banner-img h-full" />
      </div>
      <Container className="lg:pb-[288px] lg:pt-[236px]">
        <div className="relative">
          <div className="flex flex-col items-start justify-start gap-[38px]">
            <div className="flex flex-col items-start justify-start gap-4">
              <div className="from-[#bd1f17]/0 to-[#bd1f17]/70 lg:w-[890px] lg:bg-gradient-to-r">
                <div className="font-bebas_Neue text-5xl font-bold leading-[56px] text-white lg:max-w-[18ch] lg:text-[120px] lg:leading-[130px] lg:tracking-wide">
                  Taste the authentic Saudi cuisine
                </div>
              </div>
              <div className="max-w-[559px] font-roboto text-2xl font-normal text-white">
                Among the best Saudi chefs in the world, serving you something
                beyond flavor.{" "}
              </div>
            </div>
            <Button>Explore Menu</Button>
          </div>
          <TodayOfferMobile />
          <TodayOfferDesktop />
        </div>
      </Container>
    </>
  );
};

export default Banner;
