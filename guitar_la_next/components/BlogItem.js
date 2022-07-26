import React from "react";
import { formatDate } from "../helpers";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Blog.module.css";

const BlogItem = ({ blogItem }) => {
  const { title, resume, image, published_at, id, slug } = blogItem;
  return (
    <article>
      <Image
        priority="true"
        width="800"
        height="600"
        layout="responsive"
        alt={`imagen blog ${title}`}
        src={image.url}
      />
      <div className={styles.content}>
        <h3>{title}</h3>
        <p className={styles.date}> {formatDate(published_at)}</p>
        <p className={styles.resume}>{resume}</p>
        <Link href={`/blog/${slug}`}>
          <a className={styles.link}>Leer entrada</a>
        </Link>
      </div>
    </article>
  );
};

export default BlogItem;
