import styled from "styled-components";

export const SearchStyle = styled.div`
  flex: 1.5;
  display: flex;
  justify-content: center;
  width: 100%;
  position: relative;

  input {
    flex: 1;
    max-width: 850px;
    padding: 15px;
    border-radius: 10px;
    border: none;
    background-color: rgba(0, 0, 0, 0.175);
    caret-color: white;
    color: #fff;
  }
  input:focus {
    outline: none;
  }

  input::placeholder {
    color: white;
  }

  input:focus::placeholder {
    color: transparent;
  }

  img {
    height: 30px;
    width: 30px;
    position: absolute;
    right: 10px;
    top: 6px;
    cursor: pointer;
  }

  .activeSwitch {
    display: block !important;
  }

  .active {
    width: 100%;
    max-height: 300px;
    background-color: #fff;
    position: absolute;
    display: none;
    top: 45px;
    color: black;
    overflow-y: scroll;
  }
  .active > * {
    padding: 10px;
  }

  .name {
    cursor: pointer;
  }

  @media only screen and (max-width: 1000px) {
    .active {
      background-color: white;
      color: black;
    }
  }
`;

export const SearchSmall = styled.div`
  height: 100px;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  gap: 10px;

  @media screen and (min-width: 1080px) {
    display: none;
  }

  .top,
  .bott {
    flex: 1;
    display: flex;
    justify-content: center;
  }

  input {
    width: 93%;
    height: 40px;
    padding: 0 20px;
    border-radius: 10px;
    border: none;
    background-color: rgba(0, 0, 0, 0.11);
    caret-color: black;
  }
  input:focus {
    outline: none;
  }

  input::placeholder {
    color: black;
  }

  input:focus::placeholder {
    color: transparent;
  }

  img {
    height: 30px;
    width: 30px;
    position: absolute;
    cursor: pointer;
    right: 25px;
    top: 60px;
  }

  .activeSwitch {
    display: block !important;
  }

  .active {
    width: 100%;
    max-height: 300px;
    background-color: black;
    position: absolute;
    display: none;
    top: 45px;
    color: black;
    overflow-y: scroll;
  }

  .name {
    cursor: pointer;
  }
`;

export const SearchContainerS = styled.div`
  flex: 2;
  display: flex;
  gap: 10px;

  .searchNav:first-child {
    flex: 3;
  }

  .sel {
    flex: 0.2;
    cursor: pointer;

    border: none;
    border-radius: 10px;
    color: black;
  }

  .big {
    flex: 1;
    display: flex;
    gap: 10px;
    .sel {
      flex: 0.1;
    }
  }

  .sel:focus {
    outline: none;
  }

  .small {
    display: none;
  }

  @media only screen and (max-width: 1000px) {
    /*Big smartphones [426px -> 600px]*/
    .big {
      display: none;
    }
    .small {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
    }
  }
`;

/*

*/
