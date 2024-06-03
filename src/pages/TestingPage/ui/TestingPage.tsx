import classNames from 'classnames';

import { Card } from '@/shared/ui/Card/Card';
import { questions } from '@/shared/QuestionsData/data';
import { Button } from '@/shared/ui/Button/Button';
import { Text } from '@/shared/ui/Text/Text';
import { Input } from '@/shared/ui/Input/Input';

import { useIsTimeTest } from '@/app/providers/context/IsTimeTest';
import { Timer } from '@/app/features/Timer/Timer';

import cls from './TestingPage.module.scss';
import { useTestingPage } from '../model/useTestingPage';

interface TestingPageProps {
  className?: string;
}

export const TestingPage = ({ className }: TestingPageProps) => {
  const { isTimeTest } = useIsTimeTest();
  const {
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
  } = useTestingPage()

  return (
    <main className={classNames(cls.TestingPage, className)}>
      <Card className={cls.card} gap="24">
        <div className={cls.process}>
          <Text title="Тестирование" bold />
          {isTimeTest && <Timer />}
        </div>
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
