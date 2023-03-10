import React from "react";
import { Link } from "react-router-dom";
import HeroCard from "./helpers/HeroCard";
import AboutBlock from "./helpers/AboutBlock";
import LearningBlock from "./helpers/LearningBlock";
import PartnersBlock from "./helpers/PartnersBlock";
import Header from "./Header";

function Home({ pageRefs }) {
  return (
    <div ref={(el) => (pageRefs.current = { ...pageRefs.current, home: el })}>
      <Header pageRefs={pageRefs} />
      <div className="grid grid-cols-3 sm:grid-cols-1">
        <HeroCard img="solider-1.webp" title="Help Ukraine" />
        <Link to="/challenges">
          <HeroCard img="solider-1.webp" title="Take Challenges" />
        </Link>

        <HeroCard img="solider-1.webp" title="Get Job Offers" />
      </div>
      <AboutBlock pageRefs={pageRefs} />
      <LearningBlock pageRefs={pageRefs} />
      <PartnersBlock pageRefs={pageRefs} />
    </div>
  );
}
export default Home;
