import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import styles from "../styles/Cart.module.css";
import Image from "next/image";

const Cart = ({ products, updateQuantity, deleteProduct }) => {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const newTotal = products.reduce(
      (total, element) => total + element.quantity * element.price,
      0
    );
    setTotal(newTotal);
  }, [products]);
  return (
    <Layout titlePage={"Carrito de compras"}>
      <h1 className="heading">Carrito de compras</h1>
      <main className={`container ${styles.content}`}>
        <div className={styles.cart}>
          <h2>Artículos de tu carrito</h2>
          {products.length === 0
            ? "Carrito vacío"
            : products.map((product) => (
                <div key={product.id} className={styles.product}>
                  <div>
                    <Image
                      layout="responsive"
                      width={250}
                      height={480}
                      src={product.image}
                      alt={`imagen producto ${product.name}`}
                    />
                  </div>
                  <div>
                    <p className={styles.name}>{product.name}</p>

                    <div className={styles.quantity}>
                      <p>Cantidad:</p>
                      <select
                        className={styles.select}
                        value={product.quantity}
                        onChange={(e) =>
                          updateQuantity({
                            ...product,
                            quantity: e.target.value,
                          })
                        }
                      >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                      </select>
                    </div>

                    <p className={styles.price}>${product.price}</p>
                    <p className={styles.subtotal}>
                      Subtotal: <span>${product.price * product.quantity}</span>{" "}
                    </p>
                  </div>
                  <button
                    type="button"
                    className={styles.delete}
                    onClick={() => deleteProduct(product.id)}
                  >
                    X
                  </button>
                </div>
              ))}
        </div>
        <div className={styles.resume}>
          {total > 0 ? (
            <>
              <h3>Resumen del pedido</h3>
              <p>Total a pagar: ${total}</p>
            </>
          ) : (
            <p>No hay productos en el carrito</p>
          )}
        </div>
      </main>
    </Layout>
  );
};

export default Cart;
