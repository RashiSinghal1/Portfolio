import styled from "styled-components";


const Wrapper = styled.div`
  margin-top: 5rem;
  /* background-color: var(--back-gro); */

  .About-center {
    padding: var(--padding1);
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: space-between;
    gap: 2rem;
    overflow: hidden;
  }

  .About-intro {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 3% 3%;
  }

  .About-froend {
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .About-froend > img {
    width: 450px;
    height: 320px;
    margin: 0 auto;
    z-index: -1;
    transition: opacity 0.3s ease-in-out; /* Smooth transition for opacity */
  }

  .About-froend > img.animate-in {
    animation: RslideIn 0.7s forwards; /* Apply enter animation */
  }

  .About-froend > img.animate-out {
    animation: RslideOut 0.7s forwards; /* Apply exit animation */
  }

  @media only screen and (min-width: 300px) and (max-width: 500px) {
    .span1 {
      font-size: 2.4rem;
    }
    .span2 {
      font-size: 3.2rem;
    }
    .About-froend > img {
      width: 350px;
      height: 250px;
    }
  }

  @media (max-width: 992px) {
    margin-top: -25rem;
    .About-center {
      margin-top: 30rem;
      display: flex;
      flex-direction: column;
    }
    .About-intro {
      align-items: center;
    }
    .About-froend > img {
      width: 350px;
      height: 250px;
    }
    .About-froend > img.animate-in {
    animation: none; 
  }

  .About-froend > img.animate-out {
    animation: none; 
  }
  }
`;

export default Wrapper;
