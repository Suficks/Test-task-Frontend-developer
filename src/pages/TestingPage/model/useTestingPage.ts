import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router";

import { useCorrectAnswersCounter } from "@/app/providers/context/CorrectAnswersContext";
import { Answer, questions, QuestionType } from "@/shared/QuestionsData/data";
import { getItemFromLocalStorage, setItemToLocalStorage } from "@/shared/utils/LocalStorage";

import { answerCheck } from "./answerCheck";

export const useTestingPage = () => {
  const navigate = useNavigate();

  const savedCurrentQuestion = Number(getItemFromLocalStorage('currentQuestion'));

  const [currentQuestion, setCurrentQuestion] = useState(savedCurrentQuestion || 0);
  const {
    correctAnswersCounter,
    setCorrectAnswersCounter
  } = useCorrectAnswersCounter();

  const [currentTextAnswer, setCurrentTextAnswer] = useState('');
  const [currentSelectedValues, setCurrentSelectedValues] = useState<Answer[]>([]);

  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const { answers, question, correctAnswersCount, type, answer } = questions[currentQuestion];

  const isTextAnswer = type === QuestionType.SHORT || type === QuestionType.DETAILED;
  const isShortAnswer = type === QuestionType.SHORT
  const isDetailedAnswer = type === QuestionType.DETAILED

  const handleAnswerButtonClick = useCallback(() => {
    const lastQuestionIndex = questions.length - 1;

    answerCheck(type, currentTextAnswer || currentSelectedValues, answer, correctAnswersCount, setCorrectAnswersCounter)

    if (currentQuestion === lastQuestionIndex) {
      navigate('/result')
      setItemToLocalStorage('currentQuestion', '0');
      setItemToLocalStorage('correctAnswersCounter', '0');
    } else {
      setCurrentTextAnswer('');
      setCurrentSelectedValues([]);
      setItemToLocalStorage('currentQuestion', String(currentQuestion + 1));
      setItemToLocalStorage('correctAnswersCounter', String(correctAnswersCounter));
      setCurrentQuestion((prev) => Math.min(prev + 1, lastQuestionIndex));
      setIsButtonDisabled(true);
    }
  }, [questions, type, currentTextAnswer, currentSelectedValues, answer, correctAnswersCount, currentQuestion, correctAnswersCounter]);

  const onInputChange = useCallback((answerObject: Answer, isChecked: boolean) => {
    setCurrentSelectedValues((prev) => {
      if (type === 'multiple' && isChecked) {
        if (prev.some(item => item.id === answerObject.id)) {
          return prev;
        }
        return [...prev, answerObject];
      } else if (!isChecked) {
        return prev.filter(item => item.id !== answerObject.id);
      }
      if (type === 'single' && isChecked) {
        return [answerObject];
      } else if (!isChecked) {
        return []
      }
      return [];
    })
  }, [type]);


  const onTextInputChange = (value: string) => {
    setCurrentTextAnswer(value);
    value ? setIsButtonDisabled(false) : setIsButtonDisabled(true)
  }

  useEffect(() => {
    currentSelectedValues.length === 0 ? setIsButtonDisabled(true) : setIsButtonDisabled(false);
  }, [currentSelectedValues])

  return {
    onInputChange,
    onTextInputChange,
    handleAnswerButtonClick,
    isTextAnswer,
    isShortAnswer,
    isDetailedAnswer,
    answers,
    question,
    isButtonDisabled,
    currentQuestion,
    correctAnswersCount,
    currentTextAnswer
  }
}