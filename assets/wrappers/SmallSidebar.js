import styled from 'styled-components';


const Wrapper = styled.aside`
  @media (min-width: 550px) {
    display: none;
  }
  .Sidebar-container {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: -1;
    opacity: 0;
    transition: var(--transition);
    visibility: hidden;
    /* background-color: white !important; */
  }
  .show-sidebar {
    z-index: 99;
    opacity: 1;
    visibility: visible;
    
    
  }
  .content {
    background-color: white !important;
    background: var(--background-secondary-color);
    width: var(--fluid-width);
    /* height: 70vh; */
    border-radius: var(--border-radius);
    padding: 2rem 2rem;
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .close-button {
    position: absolute;
    background-color: white !important;
    top: 10px;
    right: 10px;
    background: transparent;
    border-color: transparent;
    font-size: 1.8rem;
    color: var(--red-dark);
    cursor: pointer;
  }
  .nav-links {
    padding-top: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: white !important;
  }
  .nav-link {
    display: flex;
    background-color: white !important;
    align-items: center;
    color: var(--text-secondary-color);
    padding: 1rem 0;
    padding-left: 2.5rem;
    text-transform: capitalize;
    /* transition: var(--transition); */
  }
  .scroll-link:hover {
    color: var(--blue);
    /* padding-left: 3rem; */
    transition: var(--transition);
  }
  .scroll-link{
    display: flex;
    background-color: white !important;
  } 
  .icon {
    font-size: 1.5rem;
    margin-right: 1rem;
    display: grid;
    place-items: center;
    background-color: white !important;
  }
  .white{
    background-color: white !important;
    /* color: aliceblue !important; */
  }
  svg{
    background-color: white !important;
  }
`;

export default Wrapper;