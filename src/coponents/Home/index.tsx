import React from "react";
import { motion, spring } from "framer-motion";
import "./homePage.scss";
import { GenericObject } from "../../types";
import ProjectCard from "./ProjectCard";
import { pageVariants } from "../common/framerUtils";
import AppApiContext from "../../AppContextProvider";

interface HomePageProps {}

const HomePage = (props: HomePageProps) => {
  const {appData} = React.useContext(AppApiContext);
  const sectionData = appData.home.rightBar;
  return (
    <motion.div
      key={"Home-Page"}
      className="right-section"
      initial="linitial"
      animate="lin"
      exit="lout"
      variants={pageVariants}
    >
      <h2 className="title">{sectionData.intro.title}</h2>
      <p className="mt-20">{sectionData.intro.description}</p>
      <h2 className="mt-50 title">{sectionData.projects.title}</h2>
      <div className="project-cards">
        {(sectionData.projects.articles ?? []).map(
          (article: GenericObject) => (
            <ProjectCard project={article} />
          )
        )}
      </div>
    </motion.div>
  );
};

export default HomePage;
