import * as React from 'react';
import {AnswerObj} from "../App"
import {CardWrapper, ButtonWrapper} from "../style/QiestionCard.styles";

type QuestionCardProps = {
    question: string;
    answers: string[];
    callback: (event: React.MouseEvent<HTMLButtonElement>) => void;
    userAnswer: AnswerObj | undefined;
    questionNumber: number;
    totalQuestion: number;
    src: string;
}

const QuestionCard: React.FC<QuestionCardProps> = ({
                                                       question,
                                                       answers,
                                                       callback,
                                                       userAnswer,
                                                       questionNumber,
                                                       totalQuestion,
                                                       src
                                                   }) => {
    return (
        <CardWrapper>
            <p className="number">
                Вопрос {questionNumber} из {totalQuestion}
            </p>
            <p dangerouslySetInnerHTML={{__html: question}}/>
            <div className="container">
            <img src={src} alt="Задача на JS"/>
            <div>
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