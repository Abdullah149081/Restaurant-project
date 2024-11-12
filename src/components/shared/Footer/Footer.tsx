import Container from "@/components/ui/container";

import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer-bg">
      <Container className="h-full py-[120px]">
        <p className="flex h-full items-center justify-center text-white">
          © {currentYear}{" "}
          <Link href="/" className="pl-1">
            Restaurant
          </Link>
          . All rights reserved.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
