import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: 11rem;
  /* background-color: white !important; */
  .footer {
    display: flex;
    align-items: center;
    /* background-color: white !important; */
    /* margin: -0.5rem -3.5rem; */
    /* position: relative; */
    margin-top: 6rem;
    /* height: 30vh; */
    /* z-index: 1; */
    background-color: var(--gray);
    /* opacity: calc(10%); */
    /* clip-path: ellipse(100% 90% at 90% 90%); */
  }

  .footer > img {
    height: 35vh;
    width: 100%;
    /* background-color: transparent !important; */
  }
  .f-content {
    position: absolute;
    /* background-color: blue !important; */
    height: 30vh;
    /* position: relative; */
    /* background-color: var(--gray); */
    /* background: var(--blue3); */
    background: var(--blurupfo);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    margin-top: 5rem;
    gap: 4rem;
    color: white;
  }
  .f-content > span {
    background-color: transparent !important;
  }
  .f-icons {
    display: flex;
    gap: 2rem;
    margin-top: -2rem;
    background-color: transparent !important;
  }
  .img {
    width: 50px;
    height: 50px;
    background-color: transparent !important;
  }
a{
  color: white;
}

  @media only screen and (min-width: 300px) and (max-width: 500px) {
  }
  @media (max-width: 992px) {
    margin-top: -1rem;
    .img {
      width: 30px;
      height: 30px;
    }
  }
`;

export default Wrapper;
