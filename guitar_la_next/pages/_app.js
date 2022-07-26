import { useEffect, useState } from "react";
import "../styles/normalize.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const cartLS = JSON.parse(localStorage.getItem("cart")) ?? [];
    setProducts(cartLS);
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(products));
  }, [products]);

  const addProduct = (product) => {
    if (products.every((item) => item.id !== product.id)) {
      setProducts([...products, product]);
      alert("Producto agregado");
      return;
    }
    const updatedList = products.map((item) => {
      if (item.id === product.id) {
        item.quantity += product.quantity;
      }
      return item;
    });
    setProducts(updatedList);
  };

  const updateQuantity = (product) => {
    const updatedList = products.map((item) => {
      if (item.id === product.id) {
        item.quantity = product.quantity;
      }
      return item;
    });
    setProducts(updatedList);
  };

  const deleteProduct = (id) => {
    const updatedList = products.filter((item) => item.id !== id);
    setProducts(updatedList);
  };
  return (
    <Component
      {...pageProps}
      products={products}
      addProduct={addProduct}
      updateQuantity={updateQuantity}
      deleteProduct={deleteProduct}
    />
  );
}

export default MyApp;
