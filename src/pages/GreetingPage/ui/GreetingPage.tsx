import classNames from 'classnames';

import cls from './GreetingPage.module.scss';

interface GreetingPageProps {
  className?: string;
}

export const GreetingPage = ({ className }: GreetingPageProps) => {
  return (
    <main className={classNames(cls.GreetingPage, className)}>
      <div className={cls.greeting}>
        <h1>Привет! Это решение тестового задания для компании Mad Soft! </h1>
        <h2>Проверьте свои знания и решите увлекательный тест!</h2>
        <label className={cls.label}>
          Игра на время
          <input />
        </label>
        <Button text={Начать тест!}/>
      </div>
    </div>
  )
}