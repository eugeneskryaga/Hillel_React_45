import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from "react-router";
import { getProductById } from "../../services/productsApi";
import type { Product } from "../../types/Product";
import { useQuery } from "@tanstack/react-query";

export const DetailsPage = () => {
  const { id } = useParams();
  const numericId = Number(id);

  const navigate = useNavigate();
  const location = useLocation();

  const {
    data: product,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["product", numericId],
    queryFn: () => getProductById(numericId as Product["id"]),
    retry: 1,
  });

  const handleGoBack = () => {
    navigate(location.state.from);
  };

  return (
    <>
      <button onClick={handleGoBack}>Go back</button>
      {product && (
        <>
          <h2>{product.title}</h2>
          <p>Rating: {product.rating}</p>
          <p>Category: {product.category}</p>
          <p>Price: {product.price}</p>
          <p>Description: {product.description}</p>
          <Link
            to={`reviews`}
            state={{ from: location.state.from }}
          >
            Read reviews
          </Link>
          <Outlet />
        </>
      )}
      {isLoading && <p>Loading...</p>}
      {isError && <p>It`s an error.</p>}
    </>
  );
};
