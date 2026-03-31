import axios from "axios";
import type { Product } from "../types/Product";

const BASE_URL = "https://dummyjson.com/";
const api = axios.create({
  baseURL: BASE_URL,
});

interface ProductsResponse {
  products: Product[];
}

export const getProducts = async (order: string) => {
  const { data } = await api<ProductsResponse>(
    `products?sortBy=title&order=${order}`,
    {
      params: {
        limit: 50,
      },
    },
  );
  return data.products;
};

export const getProductById = async (id: Product["id"]) => {
  const { data } = await api<Product>(`/products/${id}`);
  return data;
};
