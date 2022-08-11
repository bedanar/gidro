import React from 'react';
import { EColors, Text } from '../../../Text';
import styles from './aitemcard.module.css';

interface IAtemCard {
  name: string,
  image: string,
  previousPrice: number,
  currentPrice: number,
  expirationDate: string
}

export function AItemCard({name, image, previousPrice, currentPrice, expirationDate} : IAtemCard) {
  return (
    <div className={styles.card}>
      <div className={styles.card__info}>
        <span className={styles.card__status}>акция</span>
        <div className={styles.card__price}>
          <Text size={28} color={EColors.blue} bold>{currentPrice} ₽</Text>
          <span className={styles.card__pricePrevious}>{previousPrice} ₽</span>
        </div>
      </div>
      <div className={styles.card__content}>
        <div className={styles.card__image}>
          <img src={image} alt={name} />
        </div>
        <Text size={16} color={EColors.black} bold>{name}</Text>
      </div>
      <div className={styles.card__date}>
          <Text size={20} color={EColors.black}>Акция действует до</Text>
          <Text size={20} bold color={EColors.blue}>{expirationDate}</Text>
      </div>
    </div>
  );
}
