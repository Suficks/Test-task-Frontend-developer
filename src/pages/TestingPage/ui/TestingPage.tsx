import classNames from 'classnames';
import cls from './TestingPage.module.scss'

interface TestingPageProps {
  className?: string;
}

export const TestingPage = ({ className }: TestingPageProps) => {
  return (
    <div className={classNames(cls.TestingPage, className)}>
      TestingPage
    </div>
  )
}