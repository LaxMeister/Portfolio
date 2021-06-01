import React from "react";
//Pages Components
import AboutSection from "../components/AboutSection";
import KnowledgeSection from "../components/KnowledgeSection";
import FaqSection from "../components/FaqSection";
import InfoSection from "../components/InfoSection";
//Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
import ScrollTop from "../components/ScrollTop";

const AboutMe = () => {
  return (
    <motion.div
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <AboutSection />;
      <InfoSection />
      <KnowledgeSection />
      <FaqSection />
      <ScrollTop />
    </motion.div>
  );
};

export default AboutMe;
