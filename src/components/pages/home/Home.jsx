import styles from "../../../style";
import Hero from "../home/Hero";
import News from "../home/News";
/*import LastEpisode from "../home/LastEpisode";*/
import About from "./About";
import Maps from "./MapsSection";

const Home = () => (
  <>
    <div className={`${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
        <News />
      </div>
    </div>
    <About />
    <Maps />
  </>
);

export default Home;
