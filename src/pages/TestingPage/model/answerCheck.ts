import { Answer, QuestionType } from "@/shared/QuestionsData/data";

export const answerCheck = (
  type: QuestionType,
  selectedAnswer: Answer[] | string | undefined,
  answer: string | undefined,
  correctAnswersCount: number | undefined,
  setCorrectAnswersCounter: (prev: (prev: number) => number) => void
) => {
  switch (type) {
    case 'short':
      if (
        typeof selectedAnswer === 'string'
        && selectedAnswer?.toLowerCase().trim() === answer
      ) {
        setCorrectAnswersCounter((prev: number) => prev + 1)
      }
      break;
    case 'multiple':
      if (
        Array.isArray(selectedAnswer)
        && selectedAnswer.every(item => item.isCorrect)
        && selectedAnswer.length === correctAnswersCount
      ) {
        setCorrectAnswersCounter((prev: number) => prev + 1);
      }
      break;
    case 'single':
      if (
        Array.isArray(selectedAnswer)
        && selectedAnswer.every(item => item.isCorrect)
      ) {
        setCorrectAnswersCounter((prev: number) => prev + 1);
      }
      break;
    case 'detailed':
      setCorrectAnswersCounter((prev: number) => prev + 1)
      break;
    default:
      break;
  }
}