import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../services/productsApi";
import { ProductList } from "../../components/ProductList/ProductsList";
import { useSearchParams } from "react-router";

export const ProductsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortOrder = searchParams.get("sort") ?? "asc";

  const {
    data: products,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["products", sortOrder],
    queryFn: () => getProducts(sortOrder),
    retry: 1,
  });

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSearchParams({ sort: event.target.value });
  };

  return (
    <>
      <h2>PRODUCTS PAGE</h2>
      {products && products.length > 0 && (
        <>
          <select onChange={handleSortChange}>
            <option
              value="asc"
              selected={sortOrder === "asc"}
            >
              From A to Z
            </option>
            <option
              value="desc"
              selected={sortOrder === "desc"}
            >
              From Z to A
            </option>
          </select>
          <ProductList products={products} />
        </>
      )}
      {isLoading && <p>LOADING...</p>}
      {isError && <p>It`s an error.</p>}
    </>
  );
};
