import { Link } from "react-router-dom";

export default function Nav (props) {
  return (
    <div className="nav">
      <Link to="/home">
          <div>Home</div>
        </Link>


      <Link to="/crypto">
        <div>CRYPTO</div>
      </Link>

        <Link to="/meals">
          <div>Meals</div>
        </Link>

        <Link to="about">
          <div>About</div>
        </Link>


        <Link to="/users">
          <div>Users</div>
        </Link>

      
      <Link to="/currencies">
        <div>CURRENCIES</div>
      </Link>
    </div>
  );
}