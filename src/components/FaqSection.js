import React from "react";
import styled from "styled-components";
import { BasicLayout } from "../styles";
import Toggle from "./Toggle";
import { AnimateSharedLayout } from "framer-motion";
import { useScroll } from "./useScroll";
import { fade, scrollReveal } from "../animation";

const FaqSection = () => {
  const [element, controls] = useScroll();
  return (
    <Faq
      variants={scrollReveal}
      animate={controls}
      initial="hidden"
      ref={element}
    >
      <h2>
        Any questions <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title="What is your short term career goal?">
          <div className="answer">
            <p>
              My short term career goal is to gain a foothold in the industry
            </p>
            <p>and to develop my skills as a system developer.</p>
          </div>
        </Toggle>
        <Toggle title="What is your long term career goal?">
          <div className="answer">
            <p>
              My long term career goal Is to become a full-stack developer.{" "}
            </p>
            <p>
              To be the developer that people go to when they have questions.
            </p>
          </div>
        </Toggle>
        <Toggle title="What is the best part of being a system developer?">
          <div className="answer">
            <p>The best part is the problem solving.</p>
            <p>
              The feeling you get when you find a good solution for a difficult
              problem.
            </p>
          </div>
        </Toggle>
        <Toggle title="What is your spirit animal?">
          <div className="answer">
            <p>Raccoons (trash pandas).</p>
            <p>Smart, lives in small packs and loves food.</p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </Faq>
  );
};

const Faq = styled(BasicLayout)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;

export default FaqSection;
