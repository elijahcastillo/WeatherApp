import styled from "styled-components";

export const WTop = styled.div`
  width: 100%;
  min-height: 400px;

  margin-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .top,
  .mid,
  .bottom {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .top {
    gap: 15px;
    margin-bottom: 40px;
    h1 {
      font-size: 2.7em;
      text-align: center;
    }
  }

  .mid {
    margin-bottom: 40px;
    .temp {
      font-size: 5em;
    }
  }

  .bottom {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
  }

  /* Loading styles */

  .error {
    margin-bottom: 50px;
    text-align: center;
  }
  .everyLoad {
    background: #f8f8f8;
    position: relative;
    overflow-x: hidden;
    border-radius: 12px;
  }
  @keyframes shine {
    0% {
      left: -50px;
    }
    100% {
      transform: translateX(350px);
    }
  }

  .everyLoad::after {
    content: "";
    animation: shine 1.6s infinite;
    width: 60px;
    height: 100%;
    background-image: linear-gradient(
      to right,
      #ebebeb,
      #e6e7e8,
      #dfe3e3,
      #dadfdd,
      #f2f4f0
    );
    position: absolute;
    left: 0;
    filter: blur(4px);
  }

  .nameLoad {
    width: 350px;
    height: 45px;
  }
  .dateLoad {
    width: 180px;
    height: 35px;
  }
  .tempLoad {
    width: 100px;
    height: 100px;
  }
  .feelLoad {
    width: 135px;
    height: 35px;
  }
  .typeLoad {
    margin-top: 10px;
    width: 120px;
    height: 30px;
  }
`;

export const SavedW = styled.div`
  width: 100%;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  gap: 10px;

  .name {
    cursor: pointer;
    padding: 25px 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 28px;
    color: black;
    width: 100%;
    height: 20px;
  }

  .x {
    width: 15px;
    height: 15px;
  }
`;
