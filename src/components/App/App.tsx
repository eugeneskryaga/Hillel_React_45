import { Route, Routes } from "react-router";
import { Layout } from "../Layout/Layout";
import { Home } from "../../pages/HomePage/HomePage";
import { ProductsPage } from "../../pages/ProductsPage/ProductsPage";
import { DetailsPage } from "../../pages/DetailsPage/DetailsPage";

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
          path="/products"
          element={<ProductsPage />}
        />
        <Route
          path="products/:id"
          element={<DetailsPage />}
        />
      </Route>
    </Routes>
  );
};
