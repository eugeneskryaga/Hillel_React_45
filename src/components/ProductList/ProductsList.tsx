import { Link } from "react-router";
import type { Product } from "../../types/Product";

interface Props {
  products: Product[];
}

export const ProductList = ({ products }: Props) => {
  return (
    <ul>
      {products.map(product => (
        <li key={product.id}>
          <Link to={`${product.id}`}>
            <p>{product.title}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};
