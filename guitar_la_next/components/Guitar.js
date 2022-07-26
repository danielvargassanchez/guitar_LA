import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Guitar.module.css";
const Guitar = ({ guitar }) => {
  const { name, description, slug, image, price } = guitar;

  return (
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
        <Link href={`/guitars/${slug}`}>
          <a className={`link ${styles.text_link}`}>Ver producto</a>
        </Link>
      </div>
    </div>
  );
};

export default Guitar;
