import NavbarLink from "../layout/NavbarLink";

const Navbar = () => {
  return (
    <nav className="bg-zinc-800 text-white flex">
      <NavbarLink to="/">Center Tank</NavbarLink>
      <NavbarLink to="daily">Daily</NavbarLink>
    </nav>
  );
};

export default Navbar;
