export enum QuestionType {
  SINGLE = 'single',
  MULTIPLE = 'multiple',
  SHORT = 'short',
  DETAILED = 'detailed',
}

export interface Answer {
  id: number
  answer: string;
  isCorrect: boolean;
}

interface Question {
  id: number;
  question: string;
  correctAnswersCount?: number
  type: QuestionType
  answers?: Answer[];
  answer?: string;
}

export const questions: Question[] = [
  {
    id: 1,
    question: 'Что такое HTML?',
    type: QuestionType.SINGLE,
    answers: [
      {
        id: 1,
        answer: 'Язык программирования',
        isCorrect: false,
      },
      {
        id: 2,
        answer: 'Язык разметки гипертекста',
        isCorrect: true,
      },
      {
        id: 3,
        answer: 'База данных',
        isCorrect: false,
      },
      {
        id: 4,
        answer: 'Операционная система',
        isCorrect: false,
      },
    ],
  },
  {
    id: 2,
    question: 'Объясните, как работает модель коробочной модели (box model) в CSS и какие свойства используются для управления каждым из ее компонентов. Приведите пример кода.',
    answers: [],
    type: QuestionType.DETAILED
  },
  {
    id: 3,
    question: 'Какое свойство CSS используется для изменения цвета текста?',
    type: QuestionType.SINGLE,
    answers: [
      {
        id: 1,
        answer: 'background-color',
        isCorrect: false,
      },
      {
        id: 2,
        answer: 'font-size',
        isCorrect: false,
      },
      {
        id: 3,
        answer: 'color',
        isCorrect: true,
      },
      {
        id: 4,
        answer: 'text-align',
        isCorrect: false,
      },
    ],
  },
  {
    id: 4,
    question: 'Какие методы доступны для массивов в JavaScript?',
    correctAnswersCount: 3,
    type: QuestionType.MULTIPLE,
    answers: [
      {
        id: 1,
        answer: 'push()',
        isCorrect: true,
      },
      {
        id: 2,
        answer: 'pop()',
        isCorrect: true,
      },
      {
        id: 3,
        answer: 'shift()',
        isCorrect: true,
      },
      {
        id: 4,
        answer: 'exit()',
        isCorrect: false,
      },
    ],
  },
  {
    id: 5,
    question: 'Какой хуком в React можно использовать для управления состоянием компонента?',
    correctAnswersCount: 2,
    type: QuestionType.MULTIPLE,
    answers: [
      {
        id: 1,
        answer: 'useEffect',
        isCorrect: false,
      },
      {
        id: 2,
        answer: 'useState',
        isCorrect: true,
      },
      {
        id: 3,
        answer: 'useContext',
        isCorrect: false,
      },
      {
        id: 4,
        answer: 'useReducer',
        isCorrect: true,
      },
    ],
  },
  {
    id: 6,
    question: 'Какой тег в HTML используется для вставки изображения?',
    answer: 'img',
    type: QuestionType.SHORT,
  },
  {
    id: 7,
    question: 'Какое свойство CSS используется для установки отступа внутри элемента?',
    type: QuestionType.SINGLE,
    answers: [
      {
        id: 1,
        answer: 'padding',
        isCorrect: true,
      },
      {
        id: 2,
        answer: 'margin',
        isCorrect: false,
      },
      {
        id: 3,
        answer: 'border',
        isCorrect: false,
      },
      {
        id: 4,
        answer: 'spacing',
        isCorrect: false,
      },
    ],
  },
  {
    id: 8,
    question: 'Какие типы данных существуют в JavaScript?',
    correctAnswersCount: 3,
    type: QuestionType.MULTIPLE,
    answers: [
      {
        id: 1,
        answer: 'string',
        isCorrect: true,
      },
      {
        id: 2,
        answer: 'boolean',
        isCorrect: true,
      },
      {
        id: 3,
        answer: 'integer',
        isCorrect: false,
      },
      {
        id: 4,
        answer: 'undefined',
        isCorrect: true,
      },
    ],
  },
  {
    id: 9,
    question: 'Какой метод в JavaScript используется для добавления элемента в конец массива?',
    answer: 'push',
    type: QuestionType.SHORT,
  },
  {
    id: 10,
    question: 'Расскажите о различных способах управления состоянием в веб-приложениях. Сравните использование React с использованием Vanilla JavaScript для управления состоянием. Какие преимущества и недостатки есть у каждого подхода? Приведите примеры кода для обоих подходов.',
    answers: [],
    type: QuestionType.DETAILED,
  },
  {
    id: 11,
    question: 'Что такое JSX в React?',
    type: QuestionType.SINGLE,
    answers: [
      {
        id: 1,
        answer: 'Язык шаблонов для JavaScript',
        isCorrect: false,
      },
      {
        id: 2,
        answer: 'Расширение синтаксиса JavaScript для описания структуры пользовательского интерфейса',
        isCorrect: true,
      },
      {
        id: 3,
        answer: 'Библиотека для управления состоянием',
        isCorrect: false,
      },
      {
        id: 4,
        answer: 'Инструмент для сборки проекта',
        isCorrect: false,
      },
    ],
  },
  {
    id: 12,
    question: 'Какое ключевое слово используется для объявления константы в JavaScript?',
    answer: 'const',
    type: QuestionType.SHORT,
  },
  {
    id: 13,
    question: 'Опишите процесс работы механизма замыканий (closures) в JavaScript. Почему замыкания полезны и как они могут быть использованы в разработке веб-приложений? Приведите пример кода, иллюстрирующий использование замыканий.',
    answers: [],
    type: QuestionType.DETAILED,
  },
  {
    id: 14,
    question: 'Какие значения могут принимать атрибуты display в CSS?',
    correctAnswersCount: 3,
    type: QuestionType.MULTIPLE,
    answers: [
      {
        id: 1,
        answer: 'block',
        isCorrect: true,
      },
      {
        id: 2,
        answer: 'inline',
        isCorrect: true,
      },
      {
        id: 3,
        answer: 'flex',
        isCorrect: true,
      },
      {
        id: 4,
        answer: 'relative',
        isCorrect: false,
      },
    ],
  },
  {
    id: 15,
    question: 'Как можно получить элемент по его id в JavaScript?',
    correctAnswersCount: 2,
    type: QuestionType.MULTIPLE,
    answers: [
      {
        id: 1,
        answer: "getElementById('id')",
        isCorrect: true,
      },
      {
        id: 2,
        answer: "querySelector('#id')",
        isCorrect: true,
      },
      {
        id: 3,
        answer: "getElementsByClassName('id')",
        isCorrect: false,
      },
      {
        id: 4,
        answer: "getElementsByTagName('id')",
        isCorrect: false,
      },
    ],
  },
];