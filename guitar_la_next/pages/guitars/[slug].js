import Layout from "../../components/Layout";
import Image from "next/image";
import styles from "../../styles/Guitar.module.css";
import { useState } from "react";

const ShowGuitar = ({ guitar, addProduct }) => {
  const [quantity, setQuantity] = useState(1);

  const { name, description, slug, image, price } = guitar;
  const handlerAddProduct = (e) => {
    e.preventDefault();
    if (isNaN(quantity)) {
      alert("Cantidad no válida");
      return;
    }

    const selectedGuitar = {
      id: guitar.id,
      image: guitar.image.url,
      name: guitar.name,
      price: guitar.price,
      quantity,
    };

    addProduct(selectedGuitar);
  };

  return (
    <Layout titlePage={`Guitarra ${name}`}>
      <div className={styles.guitar}>
        <Image
          layout="responsive"
          width={180}
          height={350}
          src={image.url}
          alt={`imagen guitarra ${name}`}
        />
        <div className={styles.content}>
          <h3>{name}</h3>
          <p className={styles.description}>{description}</p>
          <p className={styles.price}>${price}</p>

          <form className={styles.guitar_form} onSubmit={handlerAddProduct}>
            <label>Cantidad:</label>
            <select
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value))}
            >
              <option value="">--Seleccione--</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
            <input type="submit" value="Agregar a carrito"></input>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export async function getServerSideProps({ query: { slug } }) {
  const url = `${process.env.BASE_URL}/guitars?slug=${slug}`;
  const response = await fetch(url);
  const guitars = await response.json();
  return {
    props: {
      guitar: guitars[0],
    },
  };
}

export default ShowGuitar;
