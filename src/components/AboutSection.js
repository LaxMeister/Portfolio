import React from "react";
import NeonMe from "../img/NeonMe.png";
//Styled
import styled from "styled-components";
import { BasicLayout, Description, Image, Hide, Button } from "../styles";
//Framer Motion
import { motion } from "framer-motion";
import { titleAnimation, fade, photoAnimation } from "../animation";
import Wave from "./Wave";
import { useScroll } from "./useScroll";
import { Link } from "react-router-dom";

function link(e) {
  e.preventDefault();
  window.location = "/contact";
}

const AboutSection = () => {
  const [element, controls] = useScroll();
  return (
    <BasicLayout>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2 variants={titleAnimation}>Newly graduated </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnimation}>
              <span>System developer</span>
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnimation}>
              wants you to hire him
            </motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>Contact me for any job offer</motion.p>
        <Link to="/contact" style={{ textDecorationLine: "none" }}>
          <Button className="button" variants={fade}>
            Contact me
          </Button>
        </Link>
      </Description>
      <Image>
        <motion.img variants={photoAnimation} src={NeonMe} alt="Me" />
      </Image>
      <Wave />
    </BasicLayout>
  );
};

//Styled components

export default AboutSection;
