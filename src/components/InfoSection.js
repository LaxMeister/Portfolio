import React from "react";
import NeonMe from "../img/NeonMe.png";
//Styled
import styled from "styled-components";
import { BasicLayout, Description, Image, Hide, Button } from "../styles";
//Framer Motion
import { motion } from "framer-motion";
import { useScroll } from "./useScroll";
import { scrollReveal } from "../animation";
import { lineAnimation } from "../animation";

const InfoSection = () => {
  const [element, controls] = useScroll();
  return (
    <Info
      variants={scrollReveal}
      animate={controls}
      initial="hidden"
      ref={element}
    >
      <Description>
        <h2>
          Who <span>is</span> Fredrik Lax
        </h2>
        <motion.div variants={lineAnimation} className="line"></motion.div>
        <p>
          I am a former automations engineer that decided to chase my dream to
          become a system developer. Ever since third grade i always dreamt
          about being a system developer. It took me a while to get here but now
          im here and i am ready for new challenges.<br></br>
          <br></br> What i learned during my education is creating, maintaining
          and further develop technical solutions such as cloud services and web
          applications. All with the focus of Java and JavaScript.<br></br>I
          love to work in projects as a team because of the comradeship and
          knowledge sharing. Everybody has common goal and the process of
          getting it done is so fun and satisfying.<br></br>
          <br></br> In my free time I spend time with the family, fish, play
          disc golf and tinker with small home projects.
        </p>
      </Description>
    </Info>
  );
};

const Info = styled(BasicLayout)`
  h2 {
    padding-bottom: 2rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
  .line {
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 2rem;
  }
`;

export default InfoSection;
