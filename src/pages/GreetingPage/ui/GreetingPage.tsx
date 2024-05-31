import classNames from 'classnames';
import { useNavigate } from 'react-router';
import { useCallback } from 'react';

import { Button } from '@/shared/ui/Button/Button';
import { Card } from '@/shared/ui/Card/Card';
import { Input } from '@/shared/ui/Input/Input';
import { Text } from '@/shared/ui/Text/Text';

import cls from './GreetingPage.module.scss';

interface GreetingPageProps {
  className?: string;
}

export const GreetingPage = ({ className }: GreetingPageProps) => {
  const navigate = useNavigate();

  const handleOnClick = useCallback(() => {
    navigate('/testing');
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
        <Input label="Тест на время" type="checkbox" className={cls.label} />
        <Button text="Начать тест!" onClick={handleOnClick} />
      </Card>
    </main>
  );
};
