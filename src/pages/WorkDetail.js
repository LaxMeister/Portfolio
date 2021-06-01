import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Button } from "../styles";
import { useHistory } from "react-router-dom";
import { WorkState } from "../workState";
//Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

const WorkDetail = () => {
  const history = useHistory();
  const url = history.location.pathname;
  const [works, setWorks] = useState(WorkState);
  const [work, setWork] = useState(null);

  //UseEffect
  useEffect(() => {
    const currentMovie = works.filter((stateMovie) => stateMovie.url === url);
    setWork(currentMovie[0]);
  }, [works, url]);

  return (
    <>
      {work && (
        <Details
          exit="exit"
          variants={pageAnimation}
          initial="hidden"
          animate="show"
        >
          <HeadLine>
            <h2>{work.title}</h2>
            <img src={work.mainImg} alt="main image" />
          </HeadLine>
          <Awards>
            {work.awards.map((award) => (
              <Award
                title={award.title}
                description={award.description}
                key={award.title}
                git={award.git}
                git2={award.git2}
                git3={award.git3}
              />
            ))}
          </Awards>
        </Details>
      )}
    </>
  );
};

const Details = styled(motion.div)`
  color: white;
  @media (max-width: 500px) {
    overflow: hidden;
  }
`;
const HeadLine = styled.div`
  min-height: 90vh;
  padding-top: 20vh;
  position: relative;
  h2 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
  @media (max-width: 1300px) {
    position: relative;

    img {
      width: 100%;
      height: auto;
      padding: 0;
    }
  }
  @media (max-width: 500px) {
    position: relative;
    h2 {
      width: 100%;
      font-size: 4rem;
      text-align: center;
      margin-bottom: 20rem;
      padding-bottom: 30rem;
    }
    img {
      width: 100%;
      height: auto;
      padding: 0;
    }
  }
`;

const Awards = styled.div`
  min-height: 80vh;
  display: flex;
  margin: 5rem 10rem;
  align-items: center;
  justify-content: space-around;
`;

const AwardStyle = styled.div`
  padding: 5rem;
  h3 {
    font-size: 2rem;
  }
  .line {
    width: 100%;
    background: #23d997;
    height: 0.5rem;
    margin: 1rem 0rem;
  }
  p {
    padding: 2rem 0rem 4rem 0rem;
  }
  a {
    width: 11rem;
    font-weight: bold;
    font-size: 1.1.rem;
    cursor: pointer;
    padding: 1rem 2rem;
    border: 3px solid #23d997;
    background: transparent;
    color: white;
    transition: all 0.5s ease;
    font-family: "Inter", sans-serif;
    text-decoration: none;
    &:hover {
      background-color: #23d997;
      color: white;
    }
  }

  .a2,
  .a3 {
    width: 11rem;
    font-weight: bold;
    font-size: 1.1.rem;
    cursor: pointer;
    padding: 1rem 2rem;
    margin-left: 2rem;
    border: 3px solid #23d997;
    background: transparent;
    color: white;
    transition: all 0.5s ease;
    font-family: "Inter", sans-serif;
    text-decoration: none;
    &:hover {
      background-color: #23d997;
      color: white;
    }
  }
  @media (max-width: 1300px) {
    padding: 0;
    min-height: 100vh;
    min-width: 80vw;
    margin-top: -20rem;
    a,
    .a1,
    .a2,
    .a3 {
      display: block;
      padding: 1rem;
      width: 50%;
      margin-bottom: 2rem;
      margin-left: 0rem;
    }
  }
  @media (max-width: 500px) {
    padding: 0rem;
    margin-left: -9rem;
    margin-right: -9rem;
    margin-top: -70rem;
    min-width: 80vw;
    min-height: 60vh;

    h3 {
      width: 100%;
      text-align: center;
      margin-bottom: 2rem;
    }
    a,
    .a1,
    .a2,
    .a3 {
      display: block;
      padding: 1rem;
      width: 80%;
      margin-bottom: 2rem;
      margin-left: 0rem;
    }
  }
`;

const ImageDisplay = styled.div`
  min-height: 50vh;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Buttonalt = styled.a`
  width: 11rem;
  font-weight: bold;
  font-size: 1.1.rem;
  cursor: pointer;
  padding: 1rem 2rem;
  border: 3px solid #23d997;
  background: transparent;
  color: white;
  transition: all 0.5s ease;
  font-family: "Inter", sans-serif;
  &:hover {
    background-color: #23d997;
    color: white;
  }
`;

//Award Component
const Award = ({ title, description, git, git2, git3 }) => {
  console.log(title);
  if (title === "Rent-a-Knegbil - Car Rental Service") {
    return (
      <AwardStyle>
        <h3>{title}</h3>
        <div className="line"></div>
        <p>{description}</p>
        <a className="a1" href={git}>
          Go to Customer SPA on GitHub
        </a>
        <a className="a2" href={git2}>
          Go to Admin SPA on GitHub
        </a>
        <a className="a3" href={git3}>
          Go to Backend onGitHub
        </a>
      </AwardStyle>
    );
  } else {
    return (
      <AwardStyle>
        <h3>{title}</h3>
        <div className="line"></div>
        <p>{description}</p>
        <a href={git}>Go to GitHub</a>
      </AwardStyle>
    );
  }
};

export default WorkDetail;
