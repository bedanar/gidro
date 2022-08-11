import React from 'react';
import styles from './filterblock.module.css';
import { Text } from '../../Text'

interface IFilterBlock {
  title: string
}
const filters = ['запчасти', 'моторы', 'шины', 'электроника', 'инструменты', 'аксессуары']
export function FilterBlock({title} : IFilterBlock) {
  return (
    <div className={styles.filterblock}>
      <Text size={20} bold>{title}</Text>
      <ul className={styles.filterblock__list}>
        {
          filters.map((f: string, index: number) => {
            return <li key={index} className={styles.filterblock__item}>{f}</li>
          })
        }
      </ul>
    </div>
  );
}
