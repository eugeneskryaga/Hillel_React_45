import { Outlet, useLocation } from "react-router";
import { Navigation } from "../Navigation/Navigation";

export const Layout = () => {
  const { pathname } = useLocation();

  return (
    <>
      <header>{!pathname.includes("details") && <Navigation />}</header>
      <main>{<Outlet />}</main>
    </>
  );
};
