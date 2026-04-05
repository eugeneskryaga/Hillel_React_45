import { NavLink } from "react-router";
import css from "./Navigation.module.css";

export const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? css.nav_link_active : css.nav_link
            }
          >
            Home Page
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive ? css.nav_link_active : css.nav_link
            }
          >
            Products Page
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
