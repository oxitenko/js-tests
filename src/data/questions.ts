import question1 from "../images/Q-1.png"
export interface IQuiz {
    question?: string,
    answers?: string[],
    right_answer?: string,
    incorrect_answers?: string[],
    src?: string,
    id?: number
}
export const quiz:IQuiz[] =
            [
                {
                    question: "Что выведется в консоль?",
                    answers: ["1, 2, 3", "1, 1, 1", "undefined, undefined, undefined", "3 раза лямда-функция"],
                    right_answer: "3 раза лямда-функция",
                    incorrect_answers: ["1, 2, 3", "1, 1, 1", "undefined, undefined, undefined"],
                    src: question1,
                    id: 1
                },
                {
                    question: "Что выведется в консоль?",
                    answers: ["0", "1", "11", "Ошибка"],
                    right_answer: "1",
                    incorrect_answers: ["0", "11", "Ошибка"],
                    src: "http://pic/com",
                },
                {
                    question: "Что выведется в консоль?",
                    answers: ["0", "1", "11", "Ошибка"],
                    right_answer: "1",
                    incorrect_answers: ["0", "11", "Ошибка"],
                    src: "http://pic/com",
                },
                {
                    question: "Что выведется в консоль?",
                    answers: ["0", "1", "11", "Ошибка"],
                    right_answer: "1",
                    incorrect_answers: ["0", "11", "Ошибка"],
                    src: "http://pic/com",
                },
                {
                    question: "Что выведется в консоль?",
                    answers: ["0", "1", "11", "Ошибка"],
                    right_answer: "1",
                    incorrect_answers: ["0", "11", "Ошибка"],
                    src: "http://pic/com",
                },
                {
                    question: "Что выведется в консоль?",
                    answers: ["0", "1", "11", "Ошибка"],
                    right_answer: "1",
                    incorrect_answers: ["0", "11", "Ошибка"],
                    src: "http://pic/com",
                },
                {
                    question: "Что выведется в консоль?",
                    answers: ["0", "1", "11", "Ошибка"],
                    right_answer: "1",
                    incorrect_answers: ["0", "11", "Ошибка"],
                    src: "http://pic/com",
                },
                {
                    question: "Что выведется в консоль?",
                    answers: ["0", "1", "11", "Ошибка"],
                    right_answer: "1",
                    incorrect_answers: ["0", "11", "Ошибка"],
                    src: "http://pic/com",
                },
                {
                    question: "Что выведется в консоль?",
                    answers: ["0", "1", "11", "Ошибка"],
                    right_answer: "1",
                    incorrect_answers: ["0", "11", "Ошибка"],
                    src: "http://pic/com",
                },
                {
                    question: "Что выведется в консоль?",
                    answers: ["0", "1", "11", "Ошибка"],
                    right_answer: "1",
                    incorrect_answers: ["0", "11", "Ошибка"],
                    src: "http://pic/com",
                },
            ]