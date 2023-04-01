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
    userAnswers: AnswerObj[] | undefined;
    questionNumber: number;
    totalQuestion: number;
    score: number;
    codeExample: string;
    quizIsOver: boolean;
    loading: boolean;
    number: number;
    nextQuestion: () => void;
}

const QuestionCard: React.FC<QuestionCardProps> = ({
                                                       question,
                                                       answers,
                                                       callback,
                                                       userAnswer,
                                                       questionNumber,
                                                       totalQuestion,
                                                       score,
                                                       codeExample,
                                                       quizIsOver,
                                                       loading,
                                                       userAnswers,
                                                       number,
                                                       nextQuestion
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
            {!quizIsOver &&
            !loading &&
            userAnswers?.length === number + 1 &&
            number + 1 !== totalQuestion ? (
                <button className="next" onClick={nextQuestion}>Next &gt;</button>
            ) : null}
        </CardWrapper>
    );
};

export default QuestionCard;

