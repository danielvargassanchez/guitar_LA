import Link from "next/link";
import styles from "../styles/Header.module.css";
import { useRouter } from "next/router";
import Image from "next/image";
const Header = ({ guitar }) => {
  const router = useRouter();
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.bar}>
          <Link href="/">
            <a>
              <Image width={400} height={100} src="/img/logo.svg" alt="logo" />
            </a>
          </Link>

          <nav className={styles.navigation}>
            <Link href="/">Inicio</Link>
            <Link href="/about">Nosotros</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/store">Tienda</Link>
            <Link href="/cart">
              <a>
                <Image
                  layout="fixed"
                  width={30}
                  height={25}
                  src="/img/carrito.png"
                  alt="Imagen carrito"
                />
              </a>
            </Link>
          </nav>
        </div>

        {guitar && (
          <div className={styles.model}>
            <h2>Modelo {guitar.name}</h2>
            <p>{guitar.description}</p>
            <p className={styles.price}>${guitar.price}</p>
            <Link href={`/guitars/${guitar.slug}`}>
              <a className={`link ${styles.link}`}>Ver producto</a>
            </Link>
          </div>
        )}
      </div>

      {router.pathname === "/" && (
        <div className={styles.guitar}>
          <Image
            layout="fixed"
            width={450}
            height={1000}
            src="/img/header_guitarra.png"
            alt="imagen header"
          />
        </div>
      )}
    </header>
  );
};

export default Header;
