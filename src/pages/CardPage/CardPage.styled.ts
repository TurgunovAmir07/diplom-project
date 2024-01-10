import styled from "styled-components";

export const StyledCardPage = styled.div`
  height: 100vh;
  background-image: url("https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
  background-repeat: no-repeat;
  background-size: 100%;

  .card-container {
    display: flex;
    justify-content: center;
    text-align: center;
  }

  .card-wrapper {
    width: 400px;
    height: 100%;
    backdrop-filter: blur(12.5px);
    margin-top: 7%;
    border: 3px solid rgba(108, 163, 161, 0.6);
    border-radius: 15px;
    padding: 10px 10px;
    font-family: "Roboto";
  }
`;

export const StyledCardPageAttributes = styled.div`
  .attribute {
    margin: 10px 0;
    font-size: 20px;
    color: #fff;
  }
  .text-attribute {
    color: #222;
  }
  .hoverable {
    transition: ease-in-out 200ms;
    /* transition: transform 250ms ease; */
  }

  .hoverable:hover {
    transform: scale(1.1);
  }
`;
