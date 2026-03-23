import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../services/productsApi";
import { ProductList } from "../../components/ProductList/ProductsList";

export const ProductsPage = () => {
  const {
    data: products,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
    retry: 1,
  });

  return (
    <>
      <h2>PRODUCTS PAGE</h2>
      {products && products.length > 0 && <ProductList products={products} />}
      {isLoading && <p>LOADING...</p>}
      {isError && <p>It`s an error.</p>}
    </>
  );
};
