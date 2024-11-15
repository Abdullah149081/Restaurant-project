import Banner from "@/components/shared/Header/Banner";

import About from "./about/About";
import BookTable from "./book/BookTable";
import Customers from "./customers/Customers";
import PopularFood from "./popularFood/PopularFood";

const Page = () => {
  return (
    <div>
      <div className="relative">
        <Banner />
      </div>
      <About />
      <PopularFood />
      <BookTable />
      <Customers />
    </div>
  );
};

export default Page;
