import classNames from 'classnames';
import { useCallback, useState } from 'react';

import { Card } from '@/shared/ui/Card/Card';
import { questions } from '@/shared/QuestionsData/data'
import { Button } from '@/shared/ui/Button/Button';
import { Text } from '@/shared/ui/Text/Text';
import { Input } from '@/shared/ui/Input/Input';

import cls from './TestingPage.module.scss'

interface TestingPageProps {
  className?: string;
}

export const TestingPage = ({ className }: TestingPageProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const { answers, question, multiple } = questions[currentQuestion];

  const onClickHandle = () => {
    setCurrentQuestion(prev => Math.min(prev + 1, questions.length - 1))
  }

  return (
    <main className={classNames(cls.TestingPage, className)}>
      <Card className={cls.card} gap='24'>
        <Text title="Тестирование" bold />
        <div className={cls.process}>
          {Array.from({ length: questions.length }, (_, index) => (
            <div key={index} className={cls.section}></div>
          ))}
        </div>
        <Text text={question} bold style='italic' />
        <ul>
          {answers.map(elem => (
            <li key={elem.answer}>
              <Input name="answer" label={elem.answer} type={multiple ? 'checkbox' : 'radio'} />
            </li>
          ))}
        </ul>
        <Button text='Ответить' onClick={onClickHandle} />
      </Card>
    </main>
  )
}