import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div>
      <p className="text-center">
        © {currentYear}{" "}
        <Link href="/" className="text-black">
          Restaurant
        </Link>
        . All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
