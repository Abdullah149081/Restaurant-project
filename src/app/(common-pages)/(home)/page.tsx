import Banner from "@/components/shared/Header/Banner";

import About from "./about/About";

const Page = () => {
  return (
    <div>
      <div className="relative">
        <Banner />
      </div>
      <About />
    </div>
  );
};

export default Page;
