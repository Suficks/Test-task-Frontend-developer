import classNames from 'classnames';
import { useNavigate } from 'react-router';
import { useState } from 'react';

import { Card } from '@/shared/ui/Card/Card';
import { Answer, QuestionType, questions } from '@/shared/QuestionsData/data';
import { Button } from '@/shared/ui/Button/Button';
import { Text } from '@/shared/ui/Text/Text';
import { Input } from '@/shared/ui/Input/Input';
import {
  getItemFromLocalStorage,
  setItemToLocalStorage,
} from '@/shared/utils/LocalStorage';
import { answerCheck } from '../model/answerCheck';
import { useCorrectAnswersCounter } from '@/app/providers/context/CorrectAnswersContext';

import cls from './TestingPage.module.scss';

interface TestingPageProps {
  className?: string;
}

export const TestingPage = ({ className }: TestingPageProps) => {
  const savedCurrentQuestion = Number(getItemFromLocalStorage('currentQuestion'));

  const [currentQuestion, setCurrentQuestion] = useState(savedCurrentQuestion || 0);
  const { correctAnswersCounter, setCorrectAnswersCounter
  } = useCorrectAnswersCounter();

  const [currentTextAnswer, setCurrentTextAnswer] = useState('');
  const [currentSelectedValues, setCurrentSelectedValues] = useState<Answer[]>([]);

  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const navigate = useNavigate();

  const { answers, question, correctAnswersCount, type, answer } = questions[currentQuestion];

  const isTextAnswer = type === QuestionType.SHORT || type === QuestionType.DETAILED;
  const isShortAnswer = type === QuestionType.SHORT
  const isDetailedAnswer = type === QuestionType.DETAILED

  const handleAnswerButtonClick = () => {
    const lastQuestionIndex = questions.length - 1;

    answerCheck(type, currentTextAnswer || currentSelectedValues, answers, answer, correctAnswersCount, setCorrectAnswersCounter)

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
  };

  const onInputChange = (answerObject: Answer, isChecked: boolean) => {
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
    setIsButtonDisabled(false);
  };

  const onTextInputChange = (value: string) => {
    setCurrentTextAnswer(value);
    setIsButtonDisabled(false);
  }

  return (
    <main className={classNames(cls.TestingPage, className)}>
      <Card className={cls.card} gap="24">
        <Text title="Тестирование" bold />
        <div className={cls.process}>
          {Array.from({ length: questions.length }, (_, index) => (
            <div
              key={index}
              className={classNames(cls.section, {
                [cls.current]: currentQuestion === index,
                [cls.solved]: index < currentQuestion,
              })}
            />
          ))}
        </div>
        <Text text={question} bold style="italic" />
        {!isTextAnswer && (<ul className={cls.list}>
          {answers?.map((item) => (
            <li key={item.answer}>
              <Input
                name="answer"
                label={item.answer}
                type={correctAnswersCount && correctAnswersCount > 1 ? 'checkbox' : 'radio'}
                onChange={(value, isChecked) => onInputChange(item, isChecked)}
              />
            </li>
          ))}
        </ul>)}
        {isShortAnswer && (
          <>
            <Text title='Ответ:' />
            <Input
              type='text'
              onChange={onTextInputChange}
              value={currentTextAnswer} />
          </>
        )}
        {isDetailedAnswer && (
          <>
            <Text title='Ответ:' />
            <textarea
              className={cls.textarea}
              onChange={(e) => onTextInputChange(e.target.value)}
              value={currentTextAnswer}
            />
          </>
        )}
        <Button
          text="Ответить"
          onClick={handleAnswerButtonClick}
          disabled={isButtonDisabled}
        />
      </Card>
    </main>
  );
};
