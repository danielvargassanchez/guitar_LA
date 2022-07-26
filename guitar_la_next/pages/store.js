import Layout from "../components/Layout";
import GuitarList from "../components/GuitarList";
const Store = ({ guitars }) => {
  return (
    <Layout titlePage="Tienda virtual">
      <main className="container">
        <h1 className="heading">Nuestra colección</h1>
        <GuitarList guitars={guitars}/>
      </main>
    </Layout>
  );
};

export async function getServerSideProps() {
  const url = `${process.env.BASE_URL}/guitars?_sort=created_at:desc`;
  const response = await fetch(url);
  const guitars = await response.json();

  return {
    props: {
      guitars,
    },
  };
}
export default Store;
