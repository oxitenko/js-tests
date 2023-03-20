import question1 from "../images/Q-1.png"
import question2 from "../images/Q-2.png"
import question3 from "../images/Q-3.png"
import question4 from "../images/Q-4.png"
import question5 from "../images/Q-5.png"
import question6 from "../images/Q-6.png"
import question7 from "../images/Q-7.png"
import question8 from "../images/Q-8.png"
import question9 from "../images/Q-9.png"
import question10 from "../images/Q-10.png"
import question11 from "../images/Q-11.png"
import question12 from "../images/Q-12.png"
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
                    answers: ["4", "100", "101", "Ошибка присваивания"],
                    right_answer: "101",
                    incorrect_answers: ["4", "100", "Ошибка присваивания"],
                    src: question2,
                    id: 2
                },
                {
                    question: "Что выведется в консоль?",
                    answers: ["1, 1", "1", "1, undefined", "Ошибка"],
                    right_answer: "1, undefined",
                    incorrect_answers: ["1, 1", "1", "Ошибка"],
                    src: question3,
                    id: 3
                },
                {
                    question: "Что выведется в консоль?",
                    answers: ["0, 1, 2, 3, 4", "0, 1, 2, 3, 4, 5", "4, 4, 4, 4, 4", "5, 5, 5, 5, 5"],
                    right_answer: "5, 5, 5, 5, 5",
                    incorrect_answers: ["0, 1, 2, 3, 4", "0, 1, 2, 3, 4, 5", "4, 4, 4, 4, 4",],
                    src: question4,
                    id: 4
                },
                {
                    question: "Что выведется в консоль?",
                    answers: ["0", "[empty string]", "true", "false"],
                    right_answer: "[empty string]",
                    incorrect_answers: ["0", "true", "false"],
                    src: question5,
                    id: 5
                },
                {
                    question: "Что выведется в консоль?",
                    answers: ["false", "7", "[empty string]", "true"],
                    right_answer: "[empty string]",
                    incorrect_answers: ["false", "7", "true"],
                    src: question6,
                    id: 6
                },
                {
                    question: "Что выведется в консоль?",
                    answers: ["2, 3, 4, 1", "2, 4, 3, 1", "2, 4, 1, 3", "1, 2, 3, 4"],
                    right_answer: "2, 4, 3, 1",
                    incorrect_answers: ["2, 3, 4, 1", "2, 4, 1, 3", "1, 2, 3, 4"],
                    src: question7,
                    id: 7
                },
                {
                    question: "Что выведется в консоль?",
                    answers: ["Ничего", "undefined", "1, 2, 3", "1, 1, 1"],
                    right_answer: "1, 1, 1",
                    incorrect_answers: ["Ничего", "undefined", "1, 2, 3"],
                    src: question8,
                    id: 8
                },
                {
                    question: "Что выведется в консоль?",
                    answers: ["0", "0, 1", "0, 1, 2", "undefined"],
                    right_answer: "0",
                    incorrect_answers: ["0, 1", "0, 1, 2", "undefined"],
                    src: question9,
                    id: 9
                },
                {
                    question: "Что выведется в консоль?",
                    answers: ["[1, 2]", "[1, 2, 3]", "3", "undefined"],
                    right_answer: "3",
                    incorrect_answers: ["[1, 2]", "[1, 2, 3]", "undefined"],
                    src: question10,
                    id: 10
                },
                {
                    question: "Что выведется в консоль?",
                    answers: ["1, 2, 3", "1, 3, 2", "3, 1, 2"],
                    right_answer: "1, 3, 2",
                    incorrect_answers: ["1, 2, 3", "3, 1, 2"],
                    src: question11,
                    id: 11
                },
                {
                    question: "Что выведется в консоль?",
                    answers: ["[1, 2, 3]", "6", "Ошибка", "undefined"],
                    right_answer: "undefined",
                    incorrect_answers: ["[1, 2, 3]", "6", "Ошибка",],
                    src: question12,
                    id: 12
                }
            ]