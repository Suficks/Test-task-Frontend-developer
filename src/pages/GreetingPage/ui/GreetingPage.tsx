import classNames from 'classnames';

import { Button } from '@/shared/ui/Button/Button';

import cls from './GreetingPage.module.scss';

interface GreetingPageProps {
  className?: string;
}

export const GreetingPage = ({ className }: GreetingPageProps) => {
  return (
    <main className={classNames(cls.GreetingPage, className)}>
      <div className={cls.greeting}>
        <h1 className={cls.title}>Привет!</h1>
        <h1 className={classNames(cls.title, cls.intro)}>Это решение тестового задания для компании Mad Soft! </h1>
        <h2 className={cls.subtitle}>Проверьте свои знания и решите увлекательный тест!</h2>
        <label className={cls.label}>
          Тест на время
          <input type="checkbox" />
        </label>
        <Button text='Начать тест!' />
      </div>
    </main>
  )
}