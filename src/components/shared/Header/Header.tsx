import assets from "@/assets";
import { Button } from "@/components/ui/button";
import Container from "@/components/ui/container";
import Image from "next/image";

import Link from "next/link";

const Header = async () => {
  const nabVar = [
    {
      id: 1,
      name: "Home",
      link: "/",
    },
    {
      id: 2,
      name: "About",
      link: "/about",
    },
    {
      id: 3,
      name: "Portfolio",
      link: "/portfolio",
    },
    {
      id: 4,
      name: "Clients",
      link: "/clients",
    },
    {
      id: 5,
      name: "Blog",
      link: "/blog",
    },
    {
      id: 6,
      name: "Contact",
      link: "/contact",
    },
  ];
  return (
    <Container className="sticky top-0 z-50 bg-res-primary">
      {/* logo */}
      <div className="relative z-0 my-6 flex items-center justify-between py-2">
        <div className="flex items-center justify-start gap-[60px]">
          <div className="flex items-center justify-center gap-1.5">
            <Image src={assets.svgs.logo} alt="" />
            <p>
              <span className="font-poppins text-[28.44px] font-semibold leading-7 text-white">
                Restau
              </span>
              <span className="font-poppins text-[28.44px] font-normal leading-7 text-white">
                rant
              </span>
            </p>
          </div>
          <div className="inline-flex h-[18px] items-start justify-start gap-10">
            {nabVar.map((item) => (
              <Link
                key={item.id}
                href={item.link}
                className="font-raleway text-[15px] font-medium text-white"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
        <Button>Book a table</Button>
      </div>
    </Container>
  );
};

export default Header;
