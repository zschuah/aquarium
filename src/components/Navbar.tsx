import NavbarLink from "../layout/NavbarLink";

const Navbar = () => {
  return (
    <nav className="bg-zinc-800 text-white flex">
      <NavbarLink to="/">Aquarium</NavbarLink>
      <NavbarLink to="daily">Daily Random</NavbarLink>
    </nav>
  );
};

export default Navbar;
