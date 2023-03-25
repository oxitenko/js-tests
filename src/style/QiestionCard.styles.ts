import styled from "styled-components";

export const CardWrapper = styled.div`
  width: 75vw;
  height: 100%;
  display: flex;
  margin-top: 30px;
  
  .container {
    display: flex;
    flex-direction: row;
    gap: 40px;
    width: 100%;
    justify-content: space-between;
  }
  
  .question {
    display: flex;
    flex-direction: column;
    width: 50%;
  }
  
  .progress {
    display: flex;
    justify-content: space-between;
    margin-bottom: 25%;
  }
  .number, .score {
    color: #fff;
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 18px;
    text-align: center;
    background: rgba(64, 64, 64, 0.75);
    border-radius: 50px;
    padding: 10px 25px;
    margin: 0;
  }
  .answers {
    display: flex;
    flex-direction: column;
    width: 50%;
    height: 600px;
    align-items: center;
    background: linear-gradient(334.14deg, rgba(255, 255, 255, 0.31) -14.65%, rgba(255, 255, 255, 0) 103.2%), linear-gradient(149.49deg, rgba(255, 232, 191, 0.4) -4.75%, rgba(255, 232, 191, 0) 119.61%);
    filter: drop-shadow(7px 7px 28px rgba(0, 0, 0, 0.18));
    backdrop-filter: blur(4px);
    border-radius: 25px;
  }
  
  .question_text {
    font-family: 'Lato', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    line-height: 25px;
    text-align: center;
    color: #FFFFFF;
    margin-bottom: 30px;
    margin-top: 60px;
  }
`
type ButtonWrapperProps = {
    isCorrect: boolean,
    isUserClicked: boolean
}
export const ButtonWrapper = styled.div<ButtonWrapperProps>`
  transition: all 0.3s ease;

  :hover {
    opacity: 0.8;
  }

  button {
    cursor: pointer;
    user-select: none;
    width: 300px;
    height: 60px;
    margin-bottom: 20px;
    background: ${({isCorrect, isUserClicked}) =>
            isCorrect
                    ? "#8EF389"
                    : !isCorrect && isUserClicked
                            ? "#D53F3F"
                            : "#404040"};
    border-radius: 10px;
    font-family: 'Roboto Mono', monospace;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 18px;
    text-align: center;
    color: #FC9788;
    border: 0;
  }
`