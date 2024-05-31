import { ReactNode, memo } from 'react';
import cls from './Card.module.scss';
import classNames from 'classnames';

export type FlexGap = '16' | '24' | '32';

interface CardProps {
  className?: string;
  children: ReactNode;
  centeredContent?: boolean;
  gap?: FlexGap;
}

const gapClasses: Record<FlexGap, string> = {
  16: cls.gap16,
  24: cls.gap24,
  32: cls.gap32,
};

export const Card = (props: CardProps) => {
  const { className, children, centeredContent, gap } = props;
  return (
    <div
      className={classNames(
        cls.Card,
        { [cls.centered]: centeredContent },
        gap && gapClasses[gap],
        className,
      )}
    >
      {children}
    </div>
  );
};
