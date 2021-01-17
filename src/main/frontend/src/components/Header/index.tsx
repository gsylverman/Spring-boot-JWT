import { Link } from "react-router-dom";

export interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <header>
      <Link to="/">Home</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/login">Login</Link>
    </header>
  );
};

export default Header;
