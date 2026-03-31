import { Route, Routes } from "react-router";
import { Layout } from "../Layout/Layout";
import { Home } from "../../pages/HomePage/HomePage";
import { ProductsPage } from "../../pages/ProductsPage/ProductsPage";
import { DetailsPage } from "../../pages/DetailsPage/DetailsPage";
import { Reviews } from "../Reviews/Reviews";

export const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<Layout />}
      >
        <Route
          index
          element={<Home />}
        />
        <Route
          path="products"
          element={<ProductsPage />}
        />
        <Route
          path="products/:id/details"
          element={<DetailsPage />}
        >
          <Route
            path="reviews"
            element={<Reviews />}
          />
        </Route>
      </Route>
    </Routes>
  );
};
