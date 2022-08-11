import React from 'react';
import { EColors } from '../Text';
import styles from './button.module.css';
import classNames from 'classnames'

interface IButton {
    children: React.ReactNode
    color?: EColors,
    backgroundColor?: EColors,
    size?: number,
    bold?: boolean,
    underline?: boolean
}

export function Button({children, color = EColors.white, backgroundColor = EColors.blue, size = 14, bold = false, underline = false} : IButton) {
  const classes = classNames(
    styles[color],
    styles[`bg-${backgroundColor}`],
    styles[`s${size}`],
    {[styles.bold] : bold},
    {[styles.underline] : underline}
  )
  return (
    <button className={classes}>{children}</button>
  );
}
