import React from 'react';
import HeartIcon from '../../icons/heart';
import styles from './productcard.module.css';
import FavouriteIcon from '../../icons/favourite'
import { EColors, Text } from '../../Text'
import { Button } from '../../Button';
import { BucketWhiteIcon } from '../../icons/bucket';

export interface IProductCard {
  sale?: boolean,
  image: string,
  title: string,
  price: number,
  available?: boolean,
  favourite?: boolean,
  id?: number
}

export function ProductCard({sale = false, image, title, price, available = true, favourite = false} : IProductCard) {
  return (
    <div className={styles.productcard}>
      <div className={styles.productcard__show}>
        <Button size={20} color={EColors.black} backgroundColor={EColors.white}>посмотреть товар</Button>
      </div>
      <div className={styles.productcard__controls}>
        {sale && <span className={styles.productcard__sale}>SALE</span>}
        <div className={styles.productcard__favourite }>{favourite ? <FavouriteIcon /> : <HeartIcon />}</div>
      </div>
      <div className={styles.productcard__image}>
        <img src={image} alt={title} />
      </div>
      <Text size={20}>{title}</Text>
      {
        available
        ? 
        <div className={styles.productcard__available}>
          <Text size={36} bold>{price} ₽</Text>
        </div>
        :
        <div className={styles.productcard__unavailable}>
          <Text size={16} bold>нет в наличии</Text>
          <Button color={EColors.blue} backgroundColor={EColors.transparent}>Сообщить о поступлении</Button>
        </div>
      }
      {
        available && <div className={styles.productcard__bucket}>
        <Button color={EColors.white} backgroundColor={EColors.blue}>
          <BucketWhiteIcon />
        </Button>
      </div>
      }
    </div>
  );
}
