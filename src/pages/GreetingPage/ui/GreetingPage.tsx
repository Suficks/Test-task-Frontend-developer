import classNames from 'classnames';

import cls from './GreetingPage.module.scss';

interface GreetingPageProps {
  className?: string;
}

export const GreetingPage = ({ className }: GreetingPageProps) => {
  return (
    <div className={classNames(cls.GreetingPage, className)}>
      Greeting Page
    </div>
  )
}