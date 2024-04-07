import React from "react";
import TransitionLayout from "../TransitionLayout";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { pageVariants } from "../common/framerUtils";

const Project = () => {
  const params = useParams();

  return (
    <motion.div
      key={`project-${params.articleId}`}
      initial="rinitial"
      animate="rin"
      exit="rout"
      variants={pageVariants}
    >
      <Link to={`/`}>
        <h4 className="project-title">Go back</h4>
      </Link>
    </motion.div>
  );
};

export default Project;
