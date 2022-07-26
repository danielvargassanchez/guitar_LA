import Layout from "../components/Layout";
import GuitarList from "../components/GuitarList";
import Course from "../components/Course";
import BlogList from "../components/BlogList";
export default function Home({ guitars, course, blogs }) {
  return (
    <Layout titlePage="Inicio" guitar={guitars[0]}>
      <main className="container">
        <h1 className="heading">Nuestra colección</h1>
        <GuitarList guitars={guitars} />
      </main>

      <Course course={course} />

      <section className="container">
        <BlogList blogs={blogs} />
      </section>
    </Layout>
  );
}

export async function getServerSideProps() {
  const urlGuitars = `${process.env.BASE_URL}/guitars?_limit=6&_sort=created_at:desc`;
  const urlCourses = `${process.env.BASE_URL}/courses`;
  const urlBlogs = `${process.env.BASE_URL}/blogs?_limit=3&_sort=created_at:desc`;

  const [resCourses, resGuitars, resBlogs] = await Promise.all([
    fetch(urlCourses),
    fetch(urlGuitars),
    fetch(urlBlogs),
  ]);
  const [course, guitars, blogs] = await Promise.all([
    resCourses.json(),
    resGuitars.json(),
    resBlogs.json(),
  ]);
  return {
    props: {
      guitars,
      course,
      blogs,
    },
  };
}
