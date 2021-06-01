import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
//Imgages
import jaktmeister from "../img/JaktMeister.png";
import rentAkneg from "../img/rentakneg2.png";
import construction from "../img/construction2.png";
//Animations
import { motion } from "framer-motion";
import {
  pageAnimation,
  fade,
  photoAnimation,
  lineAnimation,
  slider,
  sliderContainer,
} from "../animation";
import { useScroll } from "../components/useScroll";

const MyWork = () => {
  const [element, controls] = useScroll();
  const [element2, controls2] = useScroll();
  return (
    <Work
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      style={{ background: "#1b1b1b" }}
    >
      <motion.div variants={sliderContainer}>
        <Frame1 variants={slider}></Frame1>
        <Frame2 variants={slider}></Frame2>
        <Frame3 variants={slider}></Frame3>
        <Frame4 variants={slider}></Frame4>
        <Frame5 variants={slider}></Frame5>
      </motion.div>
      <Movie>
        <motion.h2 variants={fade}>JaktMeister</motion.h2>
        <motion.div variants={lineAnimation} className="line"></motion.div>
        <Link to="/work/jaktmeister">
          <Hide>
            <motion.img
              variants={photoAnimation}
              src={jaktmeister}
              alt="hunting"
            />
          </Hide>
        </Link>
      </Movie>
      <Movie variants={fade} animate={controls} initial="hidden" ref={element}>
        <h2>Rent-a-knegbil</h2>
        <motion.div variants={lineAnimation} className="line"></motion.div>
        <Link to="/work/rent-a-knegbil">
          <img src={rentAkneg} alt="rent-a-knegbil" />
        </Link>
      </Movie>
      <Movie
        variants={fade}
        animate={controls2}
        initial="hidden"
        ref={element2}
      >
        <h2>More projects to come.</h2>
        <motion.div variants={lineAnimation} className="line"></motion.div>
        <img src={construction} alt="goodtimes" />
      </Movie>
    </Work>
  );
};

const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  h2 {
    color: white;
    padding: 1rem 0rem;
  }
  @media (max-width: 500px) {
    padding: 0;

    h2 {
      font-size: 3rem;
      text-align: center;
      padding: 2rem;
    }
  }
`;
const Movie = styled(motion.div)`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
  @media (max-width: 1300px) {
    img {
      width: 100%;
      height: auto;
      overflow: hidden;
      padding: 0;
    }
  }
  @media (max-width: 500px) {
    img {
      padding: 2rem;
    }
  }
`;
const Hide = styled.div`
  overflow: hidden;
`;

//Frame Animation
const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #3cc8eb;
  z-index: 2;
`;
const Frame2 = styled(Frame1)`
  background: #1b1b1b;
`;
const Frame3 = styled(Frame1)`
  background: #eb82fd;
`;
const Frame4 = styled(Frame1)`
  background: #1b1b1b;
`;
const Frame5 = styled(Frame1)`
  background: #83f16f;
`;

export default MyWork;
