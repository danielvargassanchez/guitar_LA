import Layout from "../components/Layout";
import Image from "next/image";
import styles from "../styles/About.module.css";
const About = () => {
  return (
    <Layout titlePage="Nosotros">
      <main className="container">
        <h2 className="heading">Nosotros</h2>

        <div className={styles.content}>
          <Image layout="responsive" width={600} height={450} src="/img/nosotros.jpg" alt="about us"/>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              tempor tempus turpis, nec sodales purus varius ac. Quisque a
              fringilla libero. Cras nulla tellus, porttitor sed purus in,
              sagittis congue lectus. Sed eget vehicula turpis. In dolor urna,
              tristique quis erat ac, tempor euismod ligula. Sed faucibus purus
              vitae augue sollicitudin tempus. Nunc rutrum nec eros ac semper.
              Curabitur aliquet ipsum sit amet elit elementum, sed viverra metus
              condimentum. Pellentesque habitant morbi tristique senectus et
              netus et malesuada fames ac turpis egestas. Integer sem erat,
              varius non nibh dapibus, mattis malesuada ipsum. Maecenas faucibus
              justo ipsum, vitae dapibus nisl aliquet a. Aliquam tincidunt
              aliquam pellentesque. Integer consequat quis ante sed eleifend.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default About;
