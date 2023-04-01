import styled from "styled-components";

export const HomeStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80vw;
  height: 80vh;
  background: linear-gradient(334.14deg, rgba(255, 255, 255, 0.31) -14.65%, rgba(255, 255, 255, 0) 103.2%), linear-gradient(149.49deg, rgba(255, 232, 191, 0.4) -4.75%, rgba(255, 232, 191, 0) 119.61%);
  filter: drop-shadow(7px 7px 28px rgba(0, 0, 0, 0.18));
  backdrop-filter: blur(4px);
  border-radius: 25px;
  padding: 10px;
  margin-top: 20px;
  
  h2 {
    font-family: 'Lato', sans-serif;
    color: #fff;
    text-align: center;
    margin: 50px 50px;
    font-weight: 700;
    font-size: 36px;
    line-height: 38px;
  }
  
  p {
    font-family: 'Lato', sans-serif;
    color: #fff;
    text-align: center;
    margin: 10px;
    display: inline-block;
    width: 60%;
    font-weight: 400;
    font-size: 20px;
  }
  
  a {
    font-family: 'Lato', sans-serif;
    color: #fff;
  }
`