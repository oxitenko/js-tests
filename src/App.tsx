import React, {useState} from 'react';
import QuestionCard from "./components/QuestionCard";
import {quiz, IQuiz} from "./data/questions"
import {GlobalStyle, Wrapper, Logo} from "./style/App.styles";
import NavigationBar from "./components/NavigationBar";

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
                {!loading && !quizIsOver && (
                    <QuestionCard
                        questionNumber={number + 1}
                        totalQuestion={TOTAL_QUESTION}
                        question={(questions as Array<any>)[number]?.question}
                        answers={(questions as Array<any>)[number]?.answers}
                        userAnswer={userAnswers ? userAnswers[number] : undefined}
                        callback={checkAnswer}
                        score={score}
                        codeExample={(questions as Array<any>)[number]?.codeExample}
                    />)}
                {!quizIsOver &&
                !loading &&
                userAnswers.length === number + 1 &&
                number + 1 !== TOTAL_QUESTION ? (
                    <button className="next" onClick={nextQuestion}>Next &gt;</button>) : null}
            </Wrapper>
            <Logo>JS</Logo>
        </>
    );
}

export default App;
