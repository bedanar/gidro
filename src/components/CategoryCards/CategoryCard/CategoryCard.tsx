import React from 'react';
import { Button } from '../../Button';
import MoreIcon from '../../icons/more';
import { EColors, Text } from '../../Text';
import styles from './categorycard.module.css';

export interface ICategoryCard {
  title: string,
  image: string,
  route?: string
}

export function CategoryCard({title, image, route = "/"} : ICategoryCard) {
  return (
    <div className={styles.categorycard}>
      <div className={styles.categorycard__info}>
        <Text size={24} bold>{title}</Text>
        <div className={styles.categorycard__more}>
          <Button color={EColors.grey} backgroundColor={EColors.transparent}>
            <span>Подробнее</span>
             <MoreIcon />
          </Button>
        </div>
      </div>
      <div className={styles.categorycard__image}>
        <img alt={title} src={image} />
      </div>
    </div>
  );
}
