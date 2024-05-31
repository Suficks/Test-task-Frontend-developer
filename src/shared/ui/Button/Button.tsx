import classNames from 'classnames';
import cls from './Button.module.scss';
import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
}

export const Button = ({
  text,
  className = '',
  onClick,
  disabled,
  ...otherProps
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={classNames(cls.Button, className, {
        [cls.disabled]: disabled,
      })}
      onClick={onClick}
      {...otherProps}
    >
      {text}
    </button>
  );
};
