import { Link } from "react-router";

export const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home Page</Link>
        </li>
        <li>
          <Link to="/products">Products Page</Link>
        </li>
      </ul>
    </nav>
  );
};
