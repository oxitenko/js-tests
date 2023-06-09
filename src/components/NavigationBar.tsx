import {AiFillGithub} from "react-icons/ai";
import { Navigation } from "../style/NavigationBar.styles"
import * as React from "react";
import {Link} from "react-router-dom";

type NavigationBarProps = {
    startQuiz: () => void;
};
const NavigationBar: React.FC<NavigationBarProps> = ({ startQuiz }) => {
    return (
        <Navigation>
            <Link to="js-tests/test"><button onClick={startQuiz}>Start</button></Link>
            <Link to="js-tests"><h1>Console</h1></Link>
            <a href="https://github.com/oxitenko/js-tests" target="_blank" rel="noreferrer"><AiFillGithub color="white" size={25}/></a>
        </Navigation>
    );
};

export default NavigationBar;