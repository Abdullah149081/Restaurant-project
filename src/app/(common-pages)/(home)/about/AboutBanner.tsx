import assets from "@/assets";
import Image from "next/image";

const AboutBanner = () => {
  return (
    <div className="relative lg:w-[617px]">
      <div className="absolute inset-0 -z-10">
        <Image
          src={assets.images.Banner1}
          alt="Banner1"
          width={617}
          height={460}
        />
      </div>
      <div className="ml-6 mt-[30.25px] h-[136.75px] w-[241.17px] rounded-[20px] bg-white p-[22px] shadow">
        <div className="flex items-center justify-center gap-2.5">
          <div className="relative flex h-[94.21px] w-[94.21px] items-center justify-center rounded-full bg-[#f1f1f1]">
            <div className="absolute inset-0">
              <div className="relative">
                <Image src={assets.svgs.circleYellow} alt="circleYellow" />
                <div className="absolute left-[5px] top-2.5 h-[16.38px] w-[16.38px] rounded-full border-4 border-[#febf00] bg-white" />
              </div>
            </div>
            <div className="flex items-center justify-center font-open_Sans text-[26px] font-bold leading-[30.16px] text-[#181818]">
              50+
            </div>
          </div>
          <div className="font-open_Sans text-base font-semibold leading-normal text-[#181818]">
            Market <br />
            Experiences
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutBanner;
