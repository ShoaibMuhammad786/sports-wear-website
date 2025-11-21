import { createContext, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../data/baseUrl";

export const ProductsContext = createContext();

export function ProductProvider({ children }) {
  const [products, setProducts] = useState(null);
  const [categories, setCategories] = useState(null);

  const getProducts = async (setIsPending, category, LIMIT) => {
    setIsPending(true);
    try {
      const response = await axios.get(
        `${BASE_URL}/products${
          category ? `/category/${category}` : ""
        }?limit=40`
      );
      setProducts(response?.data);
    } catch (error) {
      console.log("err while getting products >>> ", error);
    } finally {
      setIsPending(false);
    }
  };
  const getProductById = async () => {};

  const getProductCategories = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/products/categories`);
      setCategories(response?.data);
    } catch (error) {
      console.log("err while getting categories >>> ", error);
    }
  };

  return (
    <ProductsContext.Provider
      value={{ products, getProducts, getProductById, getProductCategories }}
    >
      {children}
    </ProductsContext.Provider>
  );
}
