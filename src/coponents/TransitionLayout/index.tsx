import React, { ReactNode } from 'react';
import { motion } from "framer-motion";

interface Props {
  children: ReactNode;
  key: string;
  entry?: "enter" | "exit";
}

const TransitionLayout = ({ children, key = "framer", entry = "enter" }: Props) => {
  const isEnter = entry === "enter";
  return <motion.div
    key={key}
    className="right-section"
    initial={{ x: isEnter ? "-10%" : "10%", opacity: 0 }}
    animate={{ x: isEnter ? "0%" : "0%", opacity: 1 }}
    exit={{ opacity: 0 }}
  >{children}</motion.div>
}

export default TransitionLayout;
