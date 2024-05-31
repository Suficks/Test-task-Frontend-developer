import classNames from 'classnames';
import { useState } from 'react';

import { Card } from '@/shared/ui/Card/Card';
import { questions } from '@/shared/QuestionsData/data'
import { Button } from '@/shared/ui/Button/Button';
import { Text } from '@/shared/ui/Text/Text';
import { Input } from '@/shared/ui/Input/Input';
import { getItemFromLocalStorage, setItemToLocalStorage } from '@/shared/utils/LocalStorage';

import cls from './TestingPage.module.scss'

interface TestingPageProps {
  className?: string;
}

export const TestingPage = ({ className }: TestingPageProps) => {
  const currentQuestionFromLS = Number(getItemFromLocalStorage('currentQuestion'));
  const [currentQuestion, setCurrentQuestion] = useState(currentQuestionFromLS || 0);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [correctAnswers, setCorrectAnswers] = useState(0)
  const { answers, question, multiple } = questions[currentQuestion];

  const onAnswerClickHandle = () => {
    const lastQuestionIndex = questions.length - 1
    setCurrentQuestion(prev => Math.min(prev + 1, lastQuestionIndex));
    setItemToLocalStorage('currentQuestion', String(currentQuestion + 1));
    setIsButtonDisabled(true)
  }

  const onInputChange = (isCorrect: boolean) => () => {
    setCorrectAnswers(prev => prev + 1)
    setIsButtonDisabled(false);
  }

  return (
    <main className={classNames(cls.TestingPage, className)}>
      <Card className={cls.card} gap='24'>
        <Text title="Тестирование" bold />
        <div className={cls.process}>
          {Array.from({ length: questions.length }, (_, index) => (
            <div key={index} className={
              classNames(cls.section, { [cls.current]: currentQuestion === index, [cls.solved]: index < currentQuestion })
            } />
          ))}
        </div>
        <Text text={question} bold style='italic' />
        <ul className={cls.list}>
          {answers.map(({ answer, isCorrect }) => (
            <li key={answer}>
              <Input
                name="answer"
                label={answer}
                type={multiple ? 'checkbox' : 'radio'}
                onChange={onInputChange(isCorrect)}
              />
            </li>
          ))}
        </ul>
        <Button
          text='Ответить'
          onClick={onAnswerClickHandle}
          disabled={isButtonDisabled}
        />
      </Card>
    </main>
  )
}