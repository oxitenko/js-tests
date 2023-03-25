import {AiFillGithub} from "react-icons/ai";
import { Navigation } from "../style/NavigationBar.styles"
import * as React from "react";

type NavigationBarProps = {
    startQuiz: () => void;
};
const NavigationBar: React.FC<NavigationBarProps> = ({ startQuiz }) => {
    return (
        <Navigation>
            <button onClick={startQuiz}>Start</button>
            <h1>Console</h1>
            <a href="https://github.com/oxitenko/js-tests" target="_blank"><AiFillGithub color="white" size={25}/></a>
        </Navigation>
    );
};

export default NavigationBar;

// {quizIsOver || userAnswers.length === TOTAL_QUESTION ?
//     (<button className="start" onClick={startQuiz}>Начать</button>) : null}