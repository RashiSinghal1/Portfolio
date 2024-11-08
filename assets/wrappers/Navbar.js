import styled from "styled-components";

const Wrapper = styled.nav`
  /* background: linear-gradient(
    -180deg,
    rgba(0, 0, 0, 0.800),
    rgba(175, 173, 173, 0.123)
  ); */
  background: var(--blurupdo);
  display: flex;
  justify-content: space-between;
  padding: var(--padding);
  height: 7vh;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 20;

  // logo and toggle design

  .logo {
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--black);
    font-size: 2rem;
    font-weight: bold;
  }

  .logo_heading_tex {
    font-size: 2rem;
    color: var(--black);
  }

  // list menu design

  .menu {
    display: flex;
    gap: 2rem;
    align-items: center;
    justify-content: center;
  }
  li {
    color: var(--black);
    gap: 1rem;
    padding: 5% 0%;
    font-size: 1.1rem;
    background:transparent !important;
  }
  ul  {
    background: transparent !important;
    overflow:  hidden;
  }
.white{
  background: transparent !important;
}
  // hover effect for meenu

  ul > :hover {
    cursor: pointer;
    color: var(--blue);
    transform: scale(11.5rem);
  }

  .button1 {
    color: var(--blueCard);
    /* gap: 1rem; */
    /* padding: 5% 0%; */
    /* font-size: 1.1rem; */
  }
  .button1:hover {
    cursor: pointer;
    color: var(--white);
    transform: scale(11.5rem);
  }
   li  > .active {
  
    color: var(--white);
    
  }



  Link {
    color: var(--black);
  }

  // toggle button style

  .button {
    display: none;
    border: none;
    background-color: transparent;
    color: var(--white);
    font-size: 1.5rem;
  }

  // hover effect for toggle button

  .button:hover {
    cursor: pointer;
    color: var(--blue);
  }

  // displaying none the menu
  // and display the toggle menu button
  // on small tab and mobile

  @media (max-width: 992px) {
    .menu {
      display: none;
    }
    .button {
      display: block;
    }
    .logo_heading {
      font-size: 1.7rem;
    }
  }
  @media only screen and (min-width: 300px) and (max-width: 550px) {
    .logo_heading_tex  {
      font-size: 1.2rem;
    }
  }
`;

export default Wrapper;
