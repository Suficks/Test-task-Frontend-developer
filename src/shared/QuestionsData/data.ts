interface Answer {
  answer: string;
  isCorrect: boolean;
};

interface Question {
  id: number;
  question: string;
  answers: Answer[];
  multiple: boolean;
};

export const data: Question[] = [
  {
    "id": 1,
    "question": "Что такое HTML?",
    "answers": [
      {
        "answer": "Язык программирования",
        "isCorrect": false
      },
      {
        "answer": "Язык разметки гипертекста",
        "isCorrect": true
      },
      {
        "answer": "База данных",
        "isCorrect": false
      },
      {
        "answer": "Операционная система",
        "isCorrect": false
      }
    ],
    "multiple": false
  },
  {
    "id": 2,
    "question": "Какие теги используются для создания таблицы в HTML?",
    "answers": [
      {
        "answer": "<table>, <tr>, <td>",
        "isCorrect": true
      },
      {
        "answer": "<div>, <span>, <p>",
        "isCorrect": false
      },
      {
        "answer": "<ul>, <ol>, <li>",
        "isCorrect": false
      },
      {
        "answer": "<form>, <input>, <button>",
        "isCorrect": false
      }
    ],
    "multiple": false
  },
  {
    "id": 3,
    "question": "Какое свойство CSS используется для изменения цвета текста?",
    "answers": [
      {
        "answer": "background-color",
        "isCorrect": false
      },
      {
        "answer": "font-size",
        "isCorrect": false
      },
      {
        "answer": "color",
        "isCorrect": true
      },
      {
        "answer": "text-align",
        "isCorrect": false
      }
    ],
    "multiple": false
  },
  {
    "id": 4,
    "question": "Какие методы доступны для массивов в JavaScript?",
    "answers": [
      {
        "answer": "push()",
        "isCorrect": true
      },
      {
        "answer": "pop()",
        "isCorrect": true
      },
      {
        "answer": "shift()",
        "isCorrect": true
      },
      {
        "answer": "exit()",
        "isCorrect": false
      }
    ],
    "multiple": true
  },
  {
    "id": 5,
    "question": "Какой хуком в React можно использовать для управления состоянием компонента?",
    "answers": [
      {
        "answer": "useEffect",
        "isCorrect": false
      },
      {
        "answer": "useState",
        "isCorrect": true
      },
      {
        "answer": "useContext",
        "isCorrect": false
      },
      {
        "answer": "useReducer",
        "isCorrect": true
      }
    ],
    "multiple": true
  },
  {
    "id": 6,
    "question": "Какой атрибут используется для указания URL-адреса в теге <a>?",
    "answers": [
      {
        "answer": "src",
        "isCorrect": false
      },
      {
        "answer": "href",
        "isCorrect": true
      },
      {
        "answer": "link",
        "isCorrect": false
      },
      {
        "answer": "url",
        "isCorrect": false
      }
    ],
    "multiple": false
  },
  {
    "id": 7,
    "question": "Какое свойство CSS используется для установки отступа внутри элемента?",
    "answers": [
      {
        "answer": "padding",
        "isCorrect": true
      },
      {
        "answer": "margin",
        "isCorrect": false
      },
      {
        "answer": "border",
        "isCorrect": false
      },
      {
        "answer": "spacing",
        "isCorrect": false
      }
    ],
    "multiple": false
  },
  {
    "id": 8,
    "question": "Какие типы данных существуют в JavaScript?",
    "answers": [
      {
        "answer": "string",
        "isCorrect": true
      },
      {
        "answer": "boolean",
        "isCorrect": true
      },
      {
        "answer": "integer",
        "isCorrect": false
      },
      {
        "answer": "undefined",
        "isCorrect": true
      }
    ],
    "multiple": true
  },
  {
    "id": 9,
    "question": "Что делает метод Array.prototype.map() в JavaScript?",
    "answers": [
      {
        "answer": "Изменяет массив на месте",
        "isCorrect": false
      },
      {
        "answer": "Создает новый массив с результатом вызова функции для каждого элемента",
        "isCorrect": true
      },
      {
        "answer": "Возвращает первый элемент массива",
        "isCorrect": false
      },
      {
        "answer": "Удаляет последний элемент массива",
        "isCorrect": false
      }
    ],
    "multiple": false
  },
  {
    "id": 10,
    "question": "Что делает метод useEffect в React?",
    "answers": [
      {
        "answer": "Управляет состоянием компонента",
        "isCorrect": false
      },
      {
        "answer": "Выполняет побочные эффекты в функциональных компонентах",
        "isCorrect": true
      },
      {
        "answer": "Создает контекст для компонентов",
        "isCorrect": false
      },
      {
        "answer": "Возвращает разметку JSX",
        "isCorrect": false
      }
    ],
    "multiple": false
  },
  {
    "id": 11,
    "question": "Какие элементы HTML используются для создания списка с маркерами?",
    "answers": [
      {
        "answer": "<ul>, <li>",
        "isCorrect": true
      },
      {
        "answer": "<ol>, <li>",
        "isCorrect": false
      },
      {
        "answer": "<div>, <p>",
        "isCorrect": false
      },
      {
        "answer": "<section>, <article>",
        "isCorrect": false
      }
    ],
    "multiple": false
  },
  {
    "id": 12,
    "question": "Какое свойство CSS используется для установки жирности текста?",
    "answers": [
      {
        "answer": "font-style",
        "isCorrect": false
      },
      {
        "answer": "font-weight",
        "isCorrect": true
      },
      {
        "answer": "text-transform",
        "isCorrect": false
      },
      {
        "answer": "text-decoration",
        "isCorrect": false
      }
    ],
    "multiple": false
  },
  {
    "id": 13,
    "question": "Что такое JSX в React?",
    "answers": [
      {
        "answer": "Язык шаблонов для JavaScript",
        "isCorrect": false
      },
      {
        "answer": "Расширение синтаксиса JavaScript для описания структуры пользовательского интерфейса",
        "isCorrect": true
      },
      {
        "answer": "Библиотека для управления состоянием",
        "isCorrect": false
      },
      {
        "answer": "Инструмент для сборки проекта",
        "isCorrect": false
      }
    ],
    "multiple": false
  },
  {
    "id": 14,
    "question": "Какие значения могут принимать атрибуты display в CSS?",
    "answers": [
      {
        "answer": "block",
        "isCorrect": true
      },
      {
        "answer": "inline",
        "isCorrect": true
      },
      {
        "answer": "flex",
        "isCorrect": true
      },
      {
        "answer": "relative",
        "isCorrect": false
      }
    ],
    "multiple": true
  },
  {
    "id": 15,
    "question": "Как можно получить элемент по его id в JavaScript?",
    "answers": [
      {
        "answer": "document.getElementById('id')",
        "isCorrect": true
      },
      {
        "answer": "document.querySelector('#id')",
        "isCorrect": true
      },
      {
        "answer": "document.getElementsByClassName('id')",
        "isCorrect": false
      },
      {
        "answer": "document.getElementsByTagName('id')",
        "isCorrect": false
      }
    ],
    "multiple": true
  }
]