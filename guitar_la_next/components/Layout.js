import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children, titlePage, guitar }) => {
  return (
    <div>
      <Head>
        <title>GuitarLA - {titlePage}</title>
        <meta name="description" content="Sitio de ventas de guitarras" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header guitar={guitar} />
      {children}
      <Footer />
    </div>
  ); 
};

Layout.defaultProps = {
  guitar: null,
};
export default Layout;
