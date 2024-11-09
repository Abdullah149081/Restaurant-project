import Container from "@/components/ui/container";

const Banner = () => {
  return (
    <div className="absolute inset-0 -top-[110px] -z-50 w-full bg-res-primary">
      <div className="absolute inset-0 bg-black/10" />
      <Container className="relative h-full">
        <div className="flex h-full items-center justify-center">
          <div className="flex flex-col items-center gap-7">up to 50% off</div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
