import classNames from 'classnames';
import { useNavigate } from 'react-router';
import { useCallback } from 'react';

import { Button } from '@/shared/ui/Button/Button';
import { Card } from '@/shared/ui/Card/Card';
import { Input } from '@/shared/ui/Input/Input';
import { Text } from '@/shared/ui/Text/Text';
import { useIsTimeTest } from '@/app/providers/context/IsTimeTest';

import cls from './GreetingPage.module.scss';

interface GreetingPageProps {
  className?: string;
}

export const GreetingPage = ({ className }: GreetingPageProps) => {
  const navigate = useNavigate();
  const { isTimeTest, setIsTimeTest } = useIsTimeTest();

  const handleOnClick = useCallback(() => {
    navigate('/testing');
  }, []);

  const onInputChange = useCallback(() => {
    setIsTimeTest(prev => !prev)
  }, []);

  return (
    <main className={classNames(cls.GreetingPage, className)}>
      <Card centeredContent>
        <Text bold title="Привет!" />
        <Text
          bold
          title="Это решение тестового задания для компании Mad Soft!"
        />
        <Text
          title="Проверьте свои знания и решите увлекательный тест!"
          size="s"
          className={cls.subtitle}
        />
        <Input
          label="Тест на время"
          type="checkbox"
          className={cls.label}
          onChange={onInputChange}
          checked={isTimeTest}
        />
        <Button text="Начать тест!" onClick={handleOnClick} />
      </Card>
    </main>
  );
};
