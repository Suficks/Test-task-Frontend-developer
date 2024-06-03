import { useEffect, useState } from 'react';
import classNames from 'classnames';
import { useNavigate } from 'react-router';

import { questions } from '@/shared/QuestionsData/data';

import cls from './Timer.module.scss';

interface TimerProps {
  className?: string;
}

export const Timer = ({ className }: TimerProps) => {
  const [[m, s], setTime] = useState([questions.length, 0]);
  const navigate = useNavigate();

  const tick = () => {
    if (m === 0 && s === 0) {
      navigate('/result')
    } else if (s == 0) {
      setTime([m - 1, 59]);
    } else {
      setTime([m, s - 1]);
    }
  }

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    return () => clearInterval(timerID);
  })

  return (
    <p className={classNames(cls.Timer, className)}>
      {`${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`}
    </p>
  )
}