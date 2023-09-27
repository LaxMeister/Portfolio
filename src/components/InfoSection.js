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
        Having transitioned from an automation engineer to a system developer, I have since accrued two years of invaluable experience in this dynamic field. My journey to realizing my dream of becoming a system developer, which began in my childhood, has culminated in my current position, where I am poised and enthusiastic about taking on new challenges.
<br></br><br></br>
My educational background has provided me with a robust foundation in the creation, maintenance, and advancement of technical solutions, particularly within the realms of Process orchestration, Ai, cloud services and web applications. I have honed my skills in Java and JavaScript, and over the past two years, I have further refined my expertise through practical application in the professional landscape.
<br></br><br></br>
Working collaboratively on projects remains a key facet of my role, as I thrive on the camaraderie and knowledge sharing that emerges within a team environment. The pursuit of a common goal, coupled with the enjoyable and gratifying process of achieving it, continues to be a source of motivation for me.
<br></br><br></br>
In my leisure time, I balance my professional pursuits with quality moments spent with my family, leisure activities such as fishing and disc golf, and engaging in small-scale home projects. This multifaceted approach to life enriches my experiences and contributes to my overall well-being.
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
  @media (max-width: 1300px) {
    padding: 0rem;
    p {
      margin: 0rem 10rem 0rem 10rem;
    }
  }
  @media (max-width: 500px) {
    padding: 0rem;
    p {
      margin: 0rem 5rem 0rem 5rem;
    }
  }
`;

export default InfoSection;
