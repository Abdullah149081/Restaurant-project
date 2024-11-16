"use client";

import assets from "@/assets";
import { Button } from "@/components/ui/button";
import Container from "@/components/ui/container";
import Image from "next/image";
import MediaQuery from "react-responsive";
import MobileNav from "./mobileNav";
import Navbar from "./navbar";

const Header = () => {
  return (
    <Container className="top-0 z-50 rounded-b-sm px-[30px] lg:sticky lg:bg-res-primary lg:px-0.5">
      <header className="relative z-0 my-5 flex items-center justify-between lg:my-6 lg:py-2">
        <div className="flex items-center justify-start gap-[60px]">
          <div className="flex items-center justify-center gap-1.5">
            <Image src={assets.svgs.logo} alt="logo" />
            <p>
              <span className="font-poppins text-[28.44px] font-semibold leading-7 text-white">
                Restau
              </span>
              <span className="font-poppins text-[28.44px] font-normal leading-7 text-white">
                rant
              </span>
            </p>
          </div>
          <MediaQuery minWidth={1024}>
            <Navbar />
          </MediaQuery>
        </div>
        <MediaQuery minWidth={1024}>
          <Button>Book a table</Button>
        </MediaQuery>
        {/* Mobile navbar  */}
        <MediaQuery maxWidth={1024}>
          <MobileNav />
        </MediaQuery>
      </header>
    </Container>
  );
};

export default Header;
