import styled from "styled-components";

export const FCast = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  overflow-x: scroll;
  max-width: 500px;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 12px;
  padding: 1rem 1.5rem;
  ::-webkit-scrollbar {
    width: 1; /* Remove scrollbar space */
    background: transparent; /* Optional: just make scrollbar invisible */
  }

  .period {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    min-width: 100px;
    min-height: 60px;
    color: white;
  }

  .period .time {
    min-width: 130px;
    text-align: center;
  }

  .period .icon {
    width: 55px;
    height: 55px;
    border-radius: 30%;
  }

  //load
  .timeLoad {
    width: 30px;
    height: 30px;
    overflow: hidden;
  }

  .iconLoad {
    width: 55px;
    height: 55px;
  }

  .tempLoad {
    overflow: hidden;
    width: 30px;
    height: 30px;
  }

  @media only screen and (max-width: 1000px) {
    max-width: 320px;
  }
`;
