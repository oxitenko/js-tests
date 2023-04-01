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
            id: 1,
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
        },
        {
            id: 2,
            question: "Что выведется в консоль?",
            answers: ["4", "100", "101", "Ошибка присваивания"],
            right_answer: "101",
            incorrect_answers: ["4", "100", "Ошибка присваивания"],
            codeExample:
`const a = [0,1,2];
a[100] = 100;
console.log(a.length)`,
        },
        {
            id: 3,
            question: "Что выведется в консоль?",
            answers: ["1, 1", "1", "1, undefined", "Ошибка"],
            right_answer: "1, undefined",
            incorrect_answers: ["1, 1", "1", "Ошибка"],
            codeExample:
`const p = new Promise((res) => res(1))
p.then((a) => console.log(a))
.then((b) => console.log(b));`,
        },
        {
            id: 4,
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
        },
        {
            id: 5,
            question: "Что выведется в консоль?",
            answers: ["0", "[empty string]", "true", "false"],
            right_answer: "[empty string]",
            incorrect_answers: ["0", "true", "false"],
            codeExample: `console.log(0 || "")`,
        },
        {
            id: 6,
            question: "Что выведется в консоль?",
            answers: ["false", "7", "[empty string]", "true"],
            right_answer: "[empty string]",
            incorrect_answers: ["false", "7", "true"],
            codeExample: `console.log("" && 7)`,
        },
        {
            id: 7,
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
        },
        {
            id: 8,
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
        },
        {
            id: 9,
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
        },
        {
            id: 10,
            question: "Что выведется в консоль?",
            answers: ["[1, 2]", "[1, 2, 3]", "3", "undefined"],
            right_answer: "3",
            incorrect_answers: ["[1, 2]", "[1, 2, 3]", "undefined"],
            codeExample:
`const arr = [1,2];
console.log(arr.push(3));`,
        },
        {
            id: 11,
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
        },
        {
            id: 12,
            question: "Что выведется в консоль?",
            answers: ["[1, 2, 3]", "6", "Ошибка", "undefined"],
            right_answer: "undefined",
            incorrect_answers: ["[1, 2, 3]", "6", "Ошибка",],
            codeExample: `const a = [1,2,3].reduce((x,y,i) => {
    x += y
});
console.log(a);`,
        },
        {
            id: 13,
            question: "Что выведется в консоль?",
            answers: ["Ivan, undefined", "Ivan, ReferenceError", "ReferenceError, 21", "undefined, ReferenceError"],
            right_answer: "undefined, ReferenceError",
            incorrect_answers: ["Ivan, undefined", "Ivan, ReferenceError", "ReferenceError, 21"],
            codeExample: `function sayHi() {
  console.log(name);
  console.log(age);
  var name = "Ivan";
  let age = 21;
}

sayHi();`
        },
        {
            id: 14,
            question: "Что выведется в консоль?",
            answers: ["0 1 2, 0 1 2", "0 1 2, 3 3 3", "3 3 3, 0 1 2"],
            right_answer: "3 3 3, 0 1 2",
            incorrect_answers: ["0 1 2, 0 1 2", "0 1 2, 3 3 3"],
            codeExample: `for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}

for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}`
        },
        {
            id: 15,
            question: "Что выведется в консоль?",
            answers: ["20, 62.83185307179586", "20, NaN", "20, 63", "NaN, 63"],
            right_answer: "20, NaN",
            incorrect_answers: ["20, 62.83185307179586", "20, 63", "NaN, 63"],
            codeExample: `const shape = {
  radius: 10,
  diameter() {
    return this.radius * 2;
  },
  perimeter:()=>2 * Math.PI * this.radius
};

console.log(shape.diameter());
console.log(shape.perimeter());`
        },
        {
            id: 16,
            question: "Что выведется в консоль?",
            answers: ["1, false", "false, NaN", "false, false"],
            right_answer: "1, false",
            incorrect_answers: ["false, NaN", "false, false"],
            codeExample: `+true;
!'Lydia';`
        },
        {
            id: 17,
            question: "Что выведется в консоль?",
            answers: ["Hello", "Hey!", "undefined", "ReferenceError", "TypeError"],
            right_answer: "Hello",
            incorrect_answers: ["Hey!", "undefined", "ReferenceError", "TypeError"],
            codeExample: `let c = { greeting: 'Hey!' };
let d;

d = c;
c.greeting = 'Hello';
console.log(d.greeting);`
        },
        {
            id: 18,
            question: "Что выведется в консоль?",
            answers: ["true false true", "false false true", "true false false", "false true true"],
            right_answer: "true false false",
            incorrect_answers: ["true false true", "false false true", "false true true"],
            codeExample: `let a = 3;
let b = new Number(3);
let c = 3;

console.log(a == b);
console.log(a === b);
console.log(b === c);`
        },
        {
            id: 19,
            question: "Что выведется в консоль?",
            answers: ["TypeError", "SyntaxError", "Ivan Ivanov", "undefined undefined"],
            right_answer: "TypeError",
            incorrect_answers: ["SyntaxError", "Ivan Ivanov", "undefined undefined"],
            codeExample: `function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

const member = new Person('Ivan','Ivanov');

Person.getFullName = function() {
  return this.firstName + this.lastName;
};

console.log(member.getFullName());`
        },
        {
            id: 20,
            question: "Что выведется в консоль?",
            answers: ["1 1 2", "1 2 2", "0 2 2", "0 1 2"],
            right_answer: "0 2 2",
            incorrect_answers: ["1 1 2", "1 2 2", "0 2 2", "0 1 2"],
            codeExample: `let number = 0;
console.log(number++);
console.log(++number);
console.log(number);`
        }
    ]