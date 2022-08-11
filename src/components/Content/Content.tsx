import React from 'react';
import styles from './content.module.css';

interface IContent {
  children: React.ReactNode
}

export function Content({children} : IContent) {
  return (
    <div>{children}</div>
  );
}
