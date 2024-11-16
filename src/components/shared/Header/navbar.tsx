import Link from "next/link";

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
const Navbar = () => {
  return (
    <nav className="flex h-[18px] flex-col items-start justify-start gap-8 lg:flex-row lg:gap-10">
      {nabVar.map((item) => (
        <Link
          key={item.id}
          href={item.link}
          className="nav-underline font-raleway text-[15px] font-medium text-black lg:text-white"
        >
          {item.name}
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
