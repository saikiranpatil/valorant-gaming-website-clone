import styles from "../../style";
import Hero from "../home/Hero";
import News from "../home/News";
// import LastEpisode from "../home/LastEpisode";
//import Overview from "../home/Overview";
import About from "./about";
import Agent from "./agent";

const Home = () => (
  <>
    <div className={`${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
        <News />
        {/* <LastEpisode /> */}
      </div>
    </div>
    {/* <Overview /> */}
    {/* <About />
    <Agent /> */}
  </>
);

export default Home;
