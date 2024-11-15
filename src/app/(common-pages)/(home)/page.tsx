import Banner from "@/components/shared/Header/Banner";

import About from "./about/About";
import BookTable from "./book/BookTable";
import Customers from "./customers/Customers";
import PopularFood from "./popularFood/PopularFood";

const Page = () => {
  return (
    <>
      <div className="relative pt-8 lg:pt-0">
        <Banner />
      </div>
      <About />
      <PopularFood />
      <BookTable />
      <Customers />
    </>
  );
};

export default Page;
