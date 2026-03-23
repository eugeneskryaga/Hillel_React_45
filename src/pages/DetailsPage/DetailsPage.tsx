import { useParams } from "react-router";
import { getProductById } from "../../services/productsApi";
import type { Product } from "../../types/Product";
import { useQuery } from "@tanstack/react-query";

export const DetailsPage = () => {
  const { id } = useParams();
  const numericId = Number(id);

  const {
    data: product,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["product", numericId],
    queryFn: () => getProductById(numericId as Product["id"]),
    retry: 1,
  });

  return (
    <>
      {product && (
        <>
          <h2>{product.title}</h2>
          <p>Rating: {product.rating}</p>
          <p>Category: {product.category}</p>
          <p>Price: {product.price}</p>
          <p>Description: {product.description}</p>
        </>
      )}
      {isLoading && <p>Loading...</p>}
      {isError && <p>It`s an error.</p>}
    </>
  );
};
