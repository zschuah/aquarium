import { Link } from "react-router-dom";

type PropTypes = {
  children: string;
  to: string;
};

const NavbarLink = ({ children, to }: PropTypes) => {
  return (
    <Link className="px-4 py-2 hover:bg-zinc-700" to={to}>
      {children}
    </Link>
  );
};

export default NavbarLink;
