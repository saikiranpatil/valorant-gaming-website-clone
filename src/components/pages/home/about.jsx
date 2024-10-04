import { Link } from "react-router-dom";
import styles, { layout } from "../../../style";

const About = () => (
  <div className={`bg-primary  ${styles.paddingX} ${styles.flexStart}`}>
    <div className={`${styles.boxWidth}`}>
      <section id="agents" className={`${layout.section} relative`}>
        <div
          className={`relative flex md:flex-row-reverse flex-col md:py-8 py-0`}
        >
          <div className={`${layout.sectionInfo} relative md:mr-16`}>
            <div className="relative m-width-[25%]">
              <h1 className="pt-8 relative">  
                <div className="relative font-bold md:text-[80px] text-[44px] text-secondary  leading-[4rem] md:my-10">
                WE ARE VALORANT
                </div>
              </h1>
              <h5 className="font-semibold text-secondary mb-8">
              DEFY THE LIMITS
              </h5>
              <span className="text-white">
              Blend your style and experience on a global, competitive
                  stage. You have 13 rounds to attack and defend your side using
                  sharp gunplay and tactical abilities. And, with one life
                  per-round, you'll need to think faster than your opponent if
                  you want to survive. Take on foes across Competitive and
                  Unranked modes as well as Deathmatch and Spike Rush.
              </span>
              <div className=" md:flex-start flex md:justify-start justify-center">
                
              </div>
            </div>
          </div>
          <div className={`flex ${styles.flexCenter} relative`}>
            {/* <div
              className={`flex ${styles.flexCenter} relative w-[100%] h-[100%]`}
            >
              <img
                src="https://playvalorant.com/static/agents-group-31d7ce5a3637e45d8b25d2fd03159e6c.png"
                alt="agents"
                className="w-[100%] h-[100%] relative"
              />
            </div> */}
          </div>
        </div>
      </section>
    </div>
  </div>
);

export default About;
