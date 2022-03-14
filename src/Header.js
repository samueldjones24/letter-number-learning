import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <Link to="/">
        <h2 className="header-title">Alphabet & Numbers Learning</h2>
      </Link>
    </header>
  );
};
