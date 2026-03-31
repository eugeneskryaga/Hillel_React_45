import { Link, useLocation } from "react-router";
import type { Product } from "../../types/Product";

interface Props {
  products: Product[];
}

export const ProductList = ({ products }: Props) => {
  const location = useLocation();

  return (
    <ul>
      {products.map(product => (
        <li key={product.id}>
          <Link
            to={`${product.id}/details`}
            state={{ from: location }}
          >
            <p>{product.title}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};
