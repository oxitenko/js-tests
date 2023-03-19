import * as React from 'react';
import { AnswerObj } from "../App"

type QuestionCardProps = {
    question: string;
    answers: string[];
    callback: (event: React.MouseEvent<HTMLButtonElement>) => void;
    userAnswer: AnswerObj | undefined;
    questionNumber: number;
    totalQuestion: number;
}

const QuestionCard: React.FC<QuestionCardProps> = ({
                                                       question,
                                                       answers,
                                                       callback,
                                                       userAnswer,
                                                       questionNumber,
                                                       totalQuestion
                                                   }) => {
    return (
        <div>
            <p className="number">
                Вопрос {questionNumber} из {totalQuestion}
            </p>
            <p dangerouslySetInnerHTML={{__html: question}}/>
            <div>
                {answers?.map(answer => (
                    <div key={answer}>
                        <button disabled={!!userAnswer} value={answer} onClick={callback}>
                            <span dangerouslySetInnerHTML={{__html: answer}}/>
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default QuestionCard;