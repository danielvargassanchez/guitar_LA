import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import Image from "next/image";
import { formatDate } from "../../helpers";
import styles from '../../styles/Blog.module.css'
const ShowBlog = ({ blogItem }) => {
  const { content, image, published_at, title } = blogItem;
  return (
    <Layout titlePage={title}>
      <main className="container">
        <h1 className="heading">{title}</h1>
        <article className={styles.item}>
          <Image
            layout="responsive"
            width={800}
            height={600}
            src={image.url}
            alt={`imagen entrada ${title}`}
          />
          <div className={styles.content}>
            <p className={styles.date}>{formatDate(published_at)}</p>
            <p className={styles.blogtext}>{content}</p>
          </div>
        </article>
      </main>
    </Layout>
  );
};

export async function getStaticPaths() {
  const url = `${process.env.BASE_URL}/blogs`;
  const response = await fetch(url);
  const items = await response.json();

  const paths = items.map((item) => ({
    params: { slug: item.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const url = `${process.env.BASE_URL}/blogs?slug=${slug}`;
  const response = await fetch(url);
  const blogsItems = await response.json();
  return {
    props: {
      blogItem: blogsItems[0],
    },
  };
}

// export async function getServerSideProps({ query: { id } }) {
//   const url = `${process.env.BASE_URL}/blogs/${id}`;
//   const response = await fetch(url);
//   const blogItem = await response.json();
//   return {
//     props: {
//         blogItem: blogItem,
//     },
//   };
// }

export default ShowBlog;
