import React from "react";
//Animations
import { motion } from "framer-motion";
import { pageAnimation, titleAnimation, lineAnimation } from "../animation";
import styled from "styled-components";

const ContactMe = () => {
  return (
    <ContactStyle
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      style={{ background: "#1b1b1b" }}
    >
      <Title>
        <Hide>
          <motion.h2 variants={titleAnimation}>Get in touch.</motion.h2>
        </Hide>
        <motion.div variants={lineAnimation} className="line"></motion.div>
      </Title>

      <div>
        <Hide>
          <Social variants={titleAnimation}>
            <Circle />
            <a
              className="a1"
              href="https://www.linkedin.com/in/fredrik-lax-0443728a/"
            >
              Send me a message
            </a>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titleAnimation}>
            <Circle />
            <a className="a2" href="mailto:fredrik.lax@gmail.com">
              Send me a Email
            </a>
          </Social>
        </Hide>
        <Hide>
          <Social variants={titleAnimation}>
            <Circle />
            <a className="a3" href="https://github.com/LaxMeister">
              GitHub
            </a>
          </Social>
        </Hide>
      </div>
    </ContactStyle>
  );
};

const ContactStyle = styled(motion.div)`
  padding: 5rem 10rem;
  color: #ffffff;
  min-height: 90vh;
  @media (max-width: 1500px) {
    padding: 2rem;
    font-size: 1rem;
  }
`;
const Title = styled.div`
  margin-bottom: 4rem;
  color: #ffffff;
  @media (max-width: 1500px) {
    margin-top: 5rem;
  }
  .line {
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 3rem;
  }
`;
const Hide = styled.div`
  overflow: hidden;
`;
const Circle = styled.div`
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  background: #ffffff;
`;
const Social = styled(motion.div)`
  display: flex;
  align-items: center;
  .a1 {
    font-family: "inter", sans-serif;
    font-size: 3rem;
    margin: 2rem;
    text-decoration: none;
    :visited {
      color: inherit;
    }
    :hover {
      color: #23d997;
    }
  }
  .a2,
  .a1,
  .a3,
  .a[href^="mailto"] {
    color: white;
  }
  .a2 {
    font-family: "inter", sans-serif;
    font-size: 3rem;
    margin: 2rem;
    text-decoration: none;
    :visited {
      color: #eb82fd;
    }
    :hover {
      color: #eb82fd;
    }
  }
  .a3 {
    font-family: "inter", sans-serif;
    font-size: 3rem;
    margin: 2rem;
    text-decoration: none;
    :visited {
      color: inherit;
    }
    :hover {
      color: #3cc8eb;
    }
  }
`;

export default ContactMe;
