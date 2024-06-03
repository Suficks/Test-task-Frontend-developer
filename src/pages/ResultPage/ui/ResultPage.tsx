import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

import { Card } from '@/shared/ui/Card/Card';
import { Text } from '@/shared/ui/Text/Text';
import { Button } from '@/shared/ui/Button/Button';
import { useCorrectAnswersCounter } from '@/app/providers/context/CorrectAnswersContext';
import { questions } from '@/shared/QuestionsData/data';

import cls from './ResultPage.module.scss';

interface ResultPageProps {
  className?: string;
  correctAnswers: number
}

export const ResultPage = ({ className }: ResultPageProps) => {
  const { correctAnswersCounter, setCorrectAnswersCounter } = useCorrectAnswersCounter();

  const onButtonClickHandler = (value: number) => () => {
    setCorrectAnswersCounter(value)
  }

  return (
    <main className={classNames(cls.ResultPage, className)}>
      <Card centeredContent gap='24'>
        <Text bold title='Ваш результат: ' />
        <Text title={`${String(correctAnswersCounter)} / ${questions.length}`} />
        <NavLink to={'/'}>
          <Button text='На главную' onClick={onButtonClickHandler(0)} />
        </NavLink>
      </Card>
    </main>
  )
}