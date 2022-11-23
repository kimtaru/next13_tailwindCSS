import { Disclosure } from "@headlessui/react";

const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Team", href: "#", current: true },
  { name: "Projects", href: "#", current: false },
  { name: "Calendar", href: "#", current: false },
];

const classNames = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

const Header = () => {
  return <Disclosure as="nav" className=""></Disclosure>;
};

export default Header;
