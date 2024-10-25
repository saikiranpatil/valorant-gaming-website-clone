import React from 'react';
import styles, { layout } from "../../style";

const About = () => {
  return (
    <div className={`h-[70vh] ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <section id="about" className={`${layout.section} relative`}>
          <div className={`relative flex md:flex-row-reverse flex-col md:py-8 py-4`}>
            <div className={`${layout.sectionInfo} relative md:mr-16`}>
              <div className="relative max-w-full md:max-w-[50%]">
                <h1 className="relative">
                  <div className="relative font-bold md:text-[80px] text-[44px] text-primary leading-tight md:leading-[4rem] leading-[3rem]">
                    WE ARE FURY
                  </div>
                </h1>
                <h5 className="font-semibold text-primary mb-4 md:mb-8 mt-4 md:mt-8 text-center md:text-left">
                  DEFY THE LIMITS
                </h5>
                <span className="text-white text-sm md:text-base leading-relaxed text-center md:text-left">
                  Blend your style and experience on a global, competitive stage. You have 13 rounds to attack and defend your side using sharp gunplay and tactical abilities. And, with one life per-round, you'll need to think faster than your opponent if you want to survive. Take on foes across Competitive and Unranked modes as well as Deathmatch and Spike Rush.
                </span>
                <div className="flex justify-center md:justify-start mt-4">
                  {/* Add content for buttons or more information here */}
                </div>
              </div>
            </div>
            <div className={`flex ${styles.flexCenter} relative`}>
              {/* If needed, add the image back in this block */}
              {/* <img
                src="https://playvalorant.com/static/agents-group-31d7ce5a3637e45d8b25d2fd03159e6c.png"
                alt="agents"
                className="w-[100%] h-[100%] relative"
              /> */}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
