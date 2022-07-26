import Link from "next/link";
import styles from "../styles/Course.module.css";

const Course = ({ course }) => {
  return (
    <section>
      <div className={`container ${styles.grid}`}>
        <div className={styles.content}>
          <h2 className="heading">{course.title}</h2>
          <p className={styles.text}>{course.content}</p>
          <Link href="/">
            <a className={`link ${styles.link}`}>Más información</a>
          </Link>
        </div>
      </div>

      <style jsx>
        {`
          section {
            padding: 10rem;
            margin-top: 10rem;
            background-image: linear-gradient(
                to right,
                rgb(0 0 0 / 0.65),
                rgb(0 0 0 / 0.7)
              ),
              url(${course.image.url});
            background-size: cover;
            background-position: 50%;
          }
        `}
      </style>
    </section>
  );
};

export default Course;
