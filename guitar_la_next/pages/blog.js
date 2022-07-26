import Layout from "../components/Layout";
import BlogList from "../components/BlogList";
const Blog = ({ blogs }) => {
  return (
    <Layout titlePage="Tienda virtual">
      <main className="container ">
        <BlogList blogs={blogs} />
      </main>
    </Layout>
  );
};

export async function getServerSideProps() {
  const url = `${process.env.BASE_URL}/blogs?_sort=created_at:desc`;
  const response = await fetch(url);
  const result = await response.json();

  return {
    props: {
      blogs: result,
    },
  };
}

export default Blog;
