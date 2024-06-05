import React from "react";
import Img from "../MainImg";

const HeroHeading = () => {
  return (
    <section className="HeaderHeroSection">
      <div className="MainHeroHeading">
        <div className="date">21 DEC 2021</div>
        <div className="SectionHeading">
          <h1>Is climate change happening faster than expected?</h1>
        </div>
        <div className="SectionText">
          <p>
            Mauris morbi sed dignissim a in nec aliquam fringilla et. Mattis
            elit dignissim nibh sit.
          </p>
        </div>
      </div>

      <div className="sectionImg">
        <Img />
      </div>
    </section>
  );
};

export default HeroHeading;
