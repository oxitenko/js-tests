export interface IQuiz {
    question?: string,
    answers?: string[],
    right_answer?: string,
    incorrect_answers?: string[],
    codeExample?: string,
    id?: number
}

export const quiz: IQuiz[] =
    [
        {
            question: "Что выведется в консоль?",
            answers: ["1, 2, 3", "1, 1, 1", "undefined, undefined, undefined", "3 раза лямда-функция"],
            right_answer: "3 раза лямда-функция",
            incorrect_answers: ["1, 2, 3", "1, 1, 1", "undefined, undefined, undefined"],
            codeExample: `const increment = () => {
    let counter = 0;
    return () => (counter += 1);
}

const cl = increment
console.log(cl())
console.log(cl())
console.log(cl())`,
            id: 1
        },
        {
            question: "Что выведется в консоль?",
            answers: ["4", "100", "101", "Ошибка присваивания"],
            right_answer: "101",
            incorrect_answers: ["4", "100", "Ошибка присваивания"],
            codeExample:
`const a = [0,1,2];
a[100] = 100;
console.log(a.length)`,
            id: 2
        },
        {
            question: "Что выведется в консоль?",
            answers: ["1, 1", "1", "1, undefined", "Ошибка"],
            right_answer: "1, undefined",
            incorrect_answers: ["1, 1", "1", "Ошибка"],
            codeExample:
`const p = new Promise((res) => res(1))
p.then((a) => console.log(a))
.then((b) => console.log(b));`,
            id: 3
        },
        {
            question: "Что выведется в консоль?",
            answers: ["0, 1, 2, 3, 4", "0, 1, 2, 3, 4, 5", "4, 4, 4, 4, 4", "5, 5, 5, 5, 5"],
            right_answer: "5, 5, 5, 5, 5",
            incorrect_answers: ["0, 1, 2, 3, 4", "0, 1, 2, 3, 4, 5", "4, 4, 4, 4, 4",],
            codeExample: `let i = 0;
while (i < 5) {
    setTimeout(() => {
        console.log(i)
    }, 0);
    i++
}`,
            id: 4
        },
        {
            question: "Что выведется в консоль?",
            answers: ["0", "[empty string]", "true", "false"],
            right_answer: "[empty string]",
            incorrect_answers: ["0", "true", "false"],
            codeExample: `console.log(0 || "")`,
            id: 5
        },
        {
            question: "Что выведется в консоль?",
            answers: ["false", "7", "[empty string]", "true"],
            right_answer: "[empty string]",
            incorrect_answers: ["false", "7", "true"],
            codeExample: `console.log("" && 7)`,
            id: 6
        },
        {
            question: "Что выведется в консоль?",
            answers: ["2, 3, 4, 1", "2, 4, 3, 1", "2, 4, 1, 3", "1, 2, 3, 4"],
            right_answer: "2, 4, 3, 1",
            incorrect_answers: ["2, 3, 4, 1", "2, 4, 1, 3", "1, 2, 3, 4"],
            codeExample:
`setTimeout(() => console.log(1), 0);
console.log(2);
Promise.resolve(3)
.then((x) => console.log(x));
console.log(4);`,
            id: 7
        },
        {
            question: "Что выведется в консоль?",
            answers: ["Ничего", "undefined", "1, 2, 3", "1, 1, 1"],
            right_answer: "1, 1, 1",
            incorrect_answers: ["Ничего", "undefined", "1, 2, 3"],
            codeExample: `const increment = () => {
    let counter = 0;
    return () => (counter += 1);
}

console.log(increment()());
console.log(increment()());
console.log(increment()());`,
            id: 8
        },
        {
            question: "Что выведется в консоль?",
            answers: ["0", "0, 1", "0, 1, 2", "undefined"],
            right_answer: "0",
            incorrect_answers: ["0, 1", "0, 1, 2", "undefined"],
            codeExample: `const fun = (flag) => {
    for (let i = 0; i < 2; i++) {
        if (flag) {
            if (flag) {
                return i;
            }
        }
    }
};
console.log(fun([]))`,
            id: 9
        },
        {
            question: "Что выведется в консоль?",
            answers: ["[1, 2]", "[1, 2, 3]", "3", "undefined"],
            right_answer: "3",
            incorrect_answers: ["[1, 2]", "[1, 2, 3]", "undefined"],
            codeExample:
`const arr = [1,2];
console.log(arr.push(3));`,
            id: 10
        },
        {
            question: "Что выведется в консоль?",
            answers: ["1, 2, 3", "1, 3, 2", "3, 1, 2"],
            right_answer: "1, 3, 2",
            incorrect_answers: ["1, 2, 3", "3, 1, 2"],
            codeExample: `const p = new Promise((res) => {
    console.log(1);
    res(2);
})
p.then((a) => console.log(a));
console.log(3);`,
            id: 11
        },
        {
            question: "Что выведется в консоль?",
            answers: ["[1, 2, 3]", "6", "Ошибка", "undefined"],
            right_answer: "undefined",
            incorrect_answers: ["[1, 2, 3]", "6", "Ошибка",],
            codeExample: `const a = [1,2,3].reduce((x,y,i) => {
    x += y
});
console.log(a);`,
            id: 12
        }
    ]