import styled from "styled-components";

export const Nav = styled.div`
  min-height: 65px;
  width: 100%;
  display: flex;
  padding: 20px 50px 13px 50px;
  align-items: center;
  background-color: transparent;
  gap: 15px;

  .logo {
    flex: 1.2;
    display: flex;
    align-items: center;
    gap: 12px;
  }
  .logo img {
    height: 100%;
    width: 60px;
  }

  .logo h1 {
    font-family: "Rubik", sans-serif;
    font-size: 1.5em;
    text-align: center;
  }

  .links {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    gap: 30px;
  }

  .links img {
    width: 32px;
    height: 100%;
    cursor: pointer;
  }

  @media screen and (max-width: 1000px) {
    .links .add {
      display: none;
      cursor: pointer;
    }
  }
`;

export const NavWrapper = styled.div`
  .slide {
    position: fixed;
    width: 280px;
    height: 200%;
    background-color: white;
    left: -350px;
    z-index: 201;
    transition: all 0.8s;
    padding: 10px;
  }

  .slideOpen {
    left: 0;
  }

  .mask {
    width: 100%;
    height: 1000px;
    background-color: rgba(0, 0, 0, 0.4);
    position: fixed;
    cursor: pointer;
    z-index: 200;
  }

  .maskGone {
    display: none;
  }

  .sm {
    background-color: #578cdc;

    width: 35px;
    height: 35px;
    border-radius: 50%;

    cursor: pointer;
  }
  .addPlaceSM {
    display: flex;
    justify-content: space-around;
    margin-top: 15px;
  }

  .addPlaceSM .rev {
    width: 35px;
    height: 40px;
    cursor: pointer;
  }
`;
