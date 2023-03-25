import styled, {createGlobalStyle} from "styled-components";


export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }

  body {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    max-width: 1440px;
    min-width: 300px;
    background: radial-gradient(47.19% 174.68% at 88.51% 100%, #FF1A57 0%, rgba(254, 23, 85, 0.5) 55.73%, rgba(254, 22, 84, 0.2) 100%), radial-gradient(41.94% 100% at 64.1% 0%, #FEB263 0%, rgba(254, 178, 99, 0.615686) 60.09%, rgba(254, 178, 99, 0.2) 100%), radial-gradient(37.29% 77.29% at 22.4% 0%, #FE7059 0%, rgba(251, 103, 92, 0.7) 67.71%, rgba(248, 93, 95, 0.25) 92.71%), radial-gradient(28.61% 83.35% at 17.15% 100%, #D427A5 67.19%, rgba(212, 39, 165, 0.2) 100%), radial-gradient(27.05% 59.26% at 47.22% 100%, #D427A5 0%, rgba(212, 39, 165, 0.7) 100%);
  }

  * {
    box-sizing: border-box;
    font-family: "Roboto Mono", monospace;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  position: relative;
  

  .next {
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
    position: absolute;
    bottom: 20px;
  }
`
export const Logo = styled.p`
  font-family: 'Roboto Mono', monospace;
  font-style: normal;
  font-weight: 700;
  font-size: 350px;
  text-align: center;
  color: #FFFFFF;
  padding: 0;
  margin: 0;
  position: absolute;
  right: 5%;
  bottom: 0;
  z-index: -1;
`