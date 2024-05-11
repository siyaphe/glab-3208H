import { Link } from "react-router-dom";

export default function Nav (props) {
  return (
    <div className="nav">
      <Link to="/">
        <div>CRYPTO</div>
      </Link>

        <Link to="/home">
          <div>Home</div>
        </Link>

        <Link to="/about">
          <div>About</div>
        </Link>


        <Link to="/contact">
          <div>Contact</div>
        </Link>

      
      <Link to="/currencies">
        <div>CURRENCIES</div>
      </Link>
    </div>
  );
}