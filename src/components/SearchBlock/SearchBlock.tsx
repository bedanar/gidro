import React, { useState } from 'react';
import { Button } from '../Button';
import { Input } from '../Input';
import { EColors } from '../Text';
import styles from './searchblock.module.css';

export function SearchBlock() {
  const [active, setActive] = useState(false)
  return (
    <div className={styles.searchblock}>
      <div className={styles.searchblock__params}>
        <button className={active ? styles.searchblock__paramActive : styles.searchblock__param} onClick={() => setActive(true)}>Поиск по номеру</button>
        <button className={active ? styles.searchblock__paramActive : styles.searchblock__param} onClick={() => setActive(true)}>Поиск по марке</button>
        <button className={active ? styles.searchblock__paramActive : styles.searchblock__param} onClick={() => setActive(true)}>Поиск по марке</button>
      </div>
      <div className={styles.searchblock__input}>
          <Input color={EColors.black} backgroundColor={EColors.beige} placeholder={"Введите марку "} />
          <Button>искать</Button>
      </div>
    </div>
  );
}
