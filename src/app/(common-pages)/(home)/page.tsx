import Banner from "@/components/shared/Header/Banner";

import About from "./about/About";
import PopularFood from "./popularFood/PopularFood";

const Page = () => {
  return (
    <div>
      <div className="relative">
        <Banner />
      </div>
      <About />
      <PopularFood />
    </div>
  );
};

export default Page;
