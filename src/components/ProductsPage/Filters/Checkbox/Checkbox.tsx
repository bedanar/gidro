import React, {useState} from 'react';
import { Text } from '../../../Text';
import styles from './checkbox.module.css';

export function Checkbox({param} : {param: string}) {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <label>
      <input
        type="checkbox"
        onChange={() => {
          setIsChecked(!isChecked);
        }}
      />
      <svg
        className={isChecked ? styles.checkbox__active : styles.checkbox}
        aria-hidden="true"
        viewBox="-2 0 18 12"
        fill="none"
      >
        <path
          d="M1 4.5L5 9L14 1"
          strokeWidth="2"
          stroke={isChecked ? "#fff" : "none"} 
        />
      </svg>
      <Text size={14}>{param}</Text>
    </label>
  );
}
