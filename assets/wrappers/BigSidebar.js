import styled from "styled-components";

const Wrapper = styled.aside`
  display: none;
  @media only screen and (min-width: 600px) and (max-width: 995px) {
    display: block;
    position: fixed;
    box-shadow: 1px 0px 0px 0px rgba(0, 0, 0, 0.1);
    .sidebar-container {
      position: relative;
      /* background: linear-gradient(
        -180deg,
        rgba(0, 0, 0, 0.09),
        rgba(175, 173, 173, 0.1)
      ) !important; */
      min-height: 100vh;
      height: 100%;
      width: 250px;
      margin-left: -250px;
      transition: margin-left 0.3s ease-in-out;
      background-color: white !important;
    }
    .content {
      position: sticky;
      top: 0;
      background-color: white !important;
    }
    .show-sidebar {
      margin-left: 0;
      /* background-color: white !important; */
    }
    .nav-links {
      padding-top: 5rem;
      display: flex;
      flex-direction: column;
      background-color: white !important;
    }
    .nav-link {
      display: flex;
      align-items: center;
      color: var(--text-secondary-color);
      padding: 1rem 0;
      padding-left: 2.5rem;
      text-transform: capitalize;
      transition: padding-left 0.3s ease-in-out;
      background-color: white !important;
    }
    .nav-link:hover {
      /* padding-left: 3rem; */
      color: var(--blue);
      transition: var(--transition);
    }
    .scroll-link {
      display: flex;
      background-color: white !important;
    }
    .icon {
      font-size: 1.5rem;
      margin-right: 1rem;
      display: grid;
      place-items: center;
    }
    .white{
    background-color: white !important;
    /* color: aliceblue !important; */
  }
  svg{
    background-color: white !important;
  }
  }
`;

export default Wrapper;
