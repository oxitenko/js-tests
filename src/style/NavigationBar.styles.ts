import styled from "styled-components";

export const Navigation = styled.header`
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 90px;
  align-items: center;
  justify-content: space-around;
  background: rgba(255, 119, 113, 0.33);
  
  button {
    background: #404040;
    box-shadow: 4px 4px 0px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    padding: 0;
    font-family: 'Lato', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 18px;
    text-align: center;
    color: #FC9788;
    width: 100px;
    height: 30px;
    cursor: pointer;
  }
  
  h1 {
    font-family: 'Martian Mono', monospace;
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 34px;
    margin: 0;
    padding: 10px;
    display: inline-block;
    color: #fff;
    border: 1px solid #fff;
    cursor: pointer;
  }
`