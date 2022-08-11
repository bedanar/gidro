import React from 'react';
import { EColors } from '../Text';
import styles from './input.module.css';
import classNames from 'classnames'

interface IInput {
  color?: EColors,
  backgroundColor?: EColors,
  placeholder: string,
  type?: string
}

export function Input({color = EColors.black, backgroundColor = EColors.beige, placeholder, type = 'text'} : IInput) {
  const classes = classNames(
    styles[color],
    styles[`bg-${backgroundColor}`]
  )
  return (
    <input className={classes} placeholder={placeholder} type={type} />
  );
}
