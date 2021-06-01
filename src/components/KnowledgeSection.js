import React from "react";
//Import icons
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import reachmoonEdit from "../img/reachmoonEdit.png";
//Styles
import { BasicLayout, Description, Image } from "../styles";
import styled from "styled-components";
import { useScroll } from "./useScroll";
import { scrollReveal } from "../animation";

const KnowledgeSection = () => {
  const [element, controls] = useScroll();
  return (
    <Knowledge
      variants={scrollReveal}
      animate={controls}
      initial="hidden"
      ref={element}
    >
      <Description>
        <h2>
          My <span>qualities</span> are
        </h2>
        <Cards>
          <Card>
            <div className="icon">
              <img src={clock} alt="clock" />
              <h3>Fast learner</h3>
            </div>
            <p>Im a fast learner don't need much time to learn new things.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={teamwork} alt="teamwork" />
              <h3>Teamwork</h3>
            </div>
            <p>I love to work in teams. Working together is success</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={diaphragm} alt="diaphragm" />
              <h3>Social</h3>
            </div>
            <p>I like to chat and make new friends and contacts</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={money} alt="money" />
              <h3>Problem solver</h3>
            </div>
            <p>Problem solving is the most fun part of development</p>
          </Card>
        </Cards>
      </Description>
      <Image>
        <img src={reachmoonEdit} alt="reachthemoon" />
      </Image>
    </Knowledge>
  );
};

const Knowledge = styled(BasicLayout)`
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;
const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Card = styled.div`
  flex-basis: 20rem;
  .icon {
    display: flex;
    align-items: center;
    h3 {
      margin-left: 1rem;
      background: white;
      color: black;
      padding: 1rem;
    }
  }
`;

export default KnowledgeSection;
