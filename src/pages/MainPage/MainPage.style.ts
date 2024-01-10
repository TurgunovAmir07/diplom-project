import styled from "styled-components";

export const StyledMainPage = styled.div`
  overflow-y: scroll;
  height: 100vh;

  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;

  section {
    scroll-snap-align: start;
  }

  #container .dark {
    background: #222;
  }

  .wrapper {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    max-width: 100vw;
    gap: 20px;
    text-align: center;
    justify-content: center;
  }
  .search-section {
    background-image: url("https://images.unsplash.com/photo-1681927423260-aba418af6fbc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
    background-size: cover;
    background-repeat: no-repeat;
  }
`;
