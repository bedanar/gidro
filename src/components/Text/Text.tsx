import React from 'react';
import styles from './text.module.css';
import classNames from 'classnames'

type TSizes = 36 | 28 | 24  | 20 | 16 | 14 | 12 | 10;
export enum EColors {
  black = 'black',
  grey = 'grey',
  white = 'white',
  blue = 'blue',
  beige = 'beige',
  transparent = 'transparent'
}
interface ITextProps {
  As?: 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'li' | 'button';
  children?: React.ReactNode
  size: TSizes;
  mobileSize?: TSizes;
  tabletSize?: TSizes;
  desktopSize?: TSizes;
  color?: EColors;
  bold?: boolean;
  inline?: boolean;
  top?: boolean;
}

export function Text({As = 'span', children, size, mobileSize, tabletSize, desktopSize, color = EColors.black, bold = false}: ITextProps) {
  const classes = classNames(
    styles[`s${size}`],
    {[styles.bold] : bold},
    {[styles[`m${mobileSize}`]] : mobileSize},
    {[styles[`d${desktopSize}`]] : desktopSize},
    {[styles[`t${tabletSize}`]] : tabletSize},
    styles[color],
  )
  return (
      <As className={classes}>
        {children}
      </As>
  );
}
