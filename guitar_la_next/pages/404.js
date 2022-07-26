import Link from "next/link";
import styles from "../styles/NotFound.module.css";

const PageNotFound = () => {
  return (
      <div className={styles.not_found}>
        <h1 className="heading">Página no encontrada</h1>
        <Link href="/">Regresar al inicio</Link>
      </div>
  );
};

export default PageNotFound;
