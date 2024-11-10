import Banner from "@/components/shared/Header/Banner";
import Container from "@/components/ui/container";
import About from "./about/About";

const Page = () => {
  return (
    <div>
      <div className="relative">
        <Banner />
      </div>
      <Container className="r-my">
        <About />
      </Container>
    </div>
  );
};

export default Page;
