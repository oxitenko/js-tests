import React, {useState} from 'react';
import {
    Routes,
    Route,
} from "react-router-dom";
import QuestionCard from "./components/QuestionCard";
import {quiz, IQuiz} from "./data/questions"
import {GlobalStyle, Wrapper, Logo} from "./style/App.styles";
import NavigationBar from "./components/NavigationBar";
import Home from "./components/Home";

export type AnswerObj = {
    question?: string;
    answer?: string;
    isCorrect?: boolean;
    correctAnswer?: string;
}

const App = () => {

    const [loading, setLoading] = useState(false);
    const [questions, setQuestions] = useState<IQuiz[]>([]);
    const [number, setNumber] = useState(0);
    const [userAnswers, setUserAnswers] = useState<AnswerObj[]>([]);
    const [score, setScore] = useState(0);
    const [quizIsOver, setQuizIsOver] = useState(true);
    const TOTAL_QUESTION = questions.length;

    const startQuiz = () => {
        setLoading(true);
        setQuizIsOver(false);
        setQuestions(quiz);
        setScore(0);
        setUserAnswers([]);
        setNumber(0);
        setLoading(false);
    }

    const checkAnswer = (event: React.MouseEvent<HTMLButtonElement>) => {
        if (!quizIsOver) {
            const answer = event.currentTarget.value;
            const isCorrect = questions[number]?.right_answer === answer;
            if (isCorrect) setScore(prev => prev + 1);
            const answerOnj = {
                question: questions[number]?.question,
                answer,
                isCorrect,
                correctAnswer: questions[number]?.right_answer,
            };
            setUserAnswers((prev: AnswerObj[]) => [...prev, answerOnj]);
        }
    }

    const nextQuestion = () => {
        const nextQuestion = number + 1;
        if (nextQuestion === TOTAL_QUESTION) {
            setQuizIsOver(true);
        } else {
            setNumber(nextQuestion);
        }
    }

    return (

        <>
            <GlobalStyle/>
            <Wrapper>
                <NavigationBar startQuiz={startQuiz}/>
                {loading && <p>Loading...</p>}
                    <Routes>
                        <Route path="js-tests" element={<Home/>}/>
                {!loading && !quizIsOver && (
                        <Route path="js-tests/test" element={
                            <QuestionCard
                            questionNumber={number + 1}
                            totalQuestion={TOTAL_QUESTION}
                            question={(questions as Array<any>)[number]?.question}
                            answers={(questions as Array<any>)[number]?.answers}
                            userAnswer={userAnswers ? userAnswers[number] : undefined}
                            userAnswers={userAnswers}
                            callback={checkAnswer}
                            score={score}
                            codeExample={(questions as Array<any>)[number]?.codeExample}
                            quizIsOver={quizIsOver}
                            loading={loading}
                            number={number}
                            nextQuestion={nextQuestion}
                        />}/>
                )}
                    </Routes>
            </Wrapper>
            <Logo>JS</Logo>
        </>
    );
}

export default App;
