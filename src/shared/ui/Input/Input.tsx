import { InputHTMLAttributes, useId } from 'react';
import classNames from 'classnames';

import cls from './Input.module.scss';

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange'
>;

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string;
  label?: string;
  onChange?: (value: string) => void;
  name?: string
  type?: string;
}

export const Input = (props: InputProps) => {
  const {
    className,
    value,
    onChange,
    type = 'text',
    label,
    name,
    ...otherProps
  } = props;

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  return (
    <label className={classNames(cls.Input, {}, [className])}>
      <input
        name={name}
        className={cls.input}
        type={type}
        value={value}
        onChange={onChangeHandler}
        {...otherProps}
      />
      {type === 'radio' && <span className={cls.fake} />}
      <span className={cls.label}>{label}</span>
    </label>
  )
}