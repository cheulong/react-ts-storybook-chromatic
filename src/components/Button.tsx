import React, { FC, SetStateAction } from 'react';

interface ButtonProps {
  count: number;
  setCount: (value: SetStateAction<number>) => void;
}

const Button: FC<ButtonProps> = ({ count, setCount }: ButtonProps) => {
  return (
    <button
      style={{ borderWidth: 0, padding: 10, backgroundColor: '#bbbbbb' }}
      type='button'
      onClick={() => setCount((count) => count + 1)}
    >
      Count is: {count}
    </button>
  );
};

export default Button;
