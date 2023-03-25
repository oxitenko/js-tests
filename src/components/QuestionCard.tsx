import * as React from 'react';
import {AnswerObj} from "../App"
import SyntaxHighlighter from "react-syntax-highlighter";
import {atomOneDark} from 'react-syntax-highlighter/dist/esm/styles/hljs';
import {CardWrapper, ButtonWrapper} from "../style/QiestionCard.styles";

type QuestionCardProps = {
    question: string;
    answers: string[];
    callback: (event: React.MouseEvent<HTMLButtonElement>) => void;
    userAnswer: AnswerObj | undefined;
    questionNumber: number;
    totalQuestion: number;
    score: number;
    codeExample: string;
}

const QuestionCard: React.FC<QuestionCardProps> = ({
                                                       question,
                                                       answers,
                                                       callback,
                                                       userAnswer,
                                                       questionNumber,
                                                       totalQuestion,
                                                       score,
                                                       codeExample
                                                   }) => {
    return (
        <CardWrapper>
            <div className="container">
                <div className="question">

                    <div className="progress">
                        <p className="number">
                            {questionNumber} / {totalQuestion}
                        </p>
                        <p className="score">Результат: {score}</p>
                    </div>
                    <SyntaxHighlighter language="javascript"
                                       showLineNumbers={true}
                                       wrapLongLines={true}
                                       style={atomOneDark}
                                       customStyle={{
                                           borderRadius: "10px",
                                           padding: "20px",
                                           margin: "0px"
                                       }}>
                        {codeExample}
                    </SyntaxHighlighter>
                </div>
                <div className="answers">
                    <p className="question_text" dangerouslySetInnerHTML={{__html: question}}/>
                    {answers?.map(answer => (
                        <ButtonWrapper
                            isCorrect={userAnswer?.correctAnswer === answer}
                            isUserClicked={userAnswer?.answer === answer}
                            key={answer}
                        >
                            <button disabled={!!userAnswer} value={answer} onClick={callback}>
                                <span dangerouslySetInnerHTML={{__html: answer}}/>
                            </button>
                        </ButtonWrapper>
                    ))}
                </div>

            </div>
        </CardWrapper>
    );
};

export default QuestionCard;

