import styled from "styled-components";

export const StyledDiv = styled.div`
  .main-container {
    font-weight: 500;
    transition: ease-in-out 0.3s;
  }
`;

export const StyledWave = styled.svg`
  /* .wave {
    fill: var(--global-background-color);
    position: absolute;
    bottom: -50px;
    left: -10px;
    z-index: 3;
    width: 105vw;
  } */
`;

export const StyledEmoji = styled.div`
  .emoji {
    color: #fff;
    font-family: "Roboto";
    font-weight: 900;
    position: absolute;
    top: 200px;
    left: 140px;
    font-size: 50px;
    transition: ease-in-out 0.3s;
  }

  /* .emoji .dark {
    color: #000;
    -webkit-text-stroke: 0.3px yellow;
    font-weight: 500;
  }

  .emoji-title .dark {
    color: #fff;
    -webkit-text-stroke: 0.4px yellow;
  } */

  .emoji-text {
    max-width: 500px;
    font-size: 30px;
    font-weight: 100;
  }
  .log-out {
    position: absolute;
    top: 30px;
    right: 50px;
  }

  .theme-btn {
    /* top: 100px; */
    left: 0px;
  }
`;
