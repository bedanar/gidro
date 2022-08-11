import React from 'react';
import styles from './productpage.module.css';
import { EColors, Text } from '../../Text'
import { Button } from '../../Button';
import FavouriteIcon from '../../icons/favourite';
import RateIcon from '../../icons/rate';
import { StarFullIcon, StarIcon } from '../../icons/star';
import { Tab } from '../../Tab';
import { ProductCards } from '../../ProductCards';
import HeartIcon from '../../icons/heart';

interface IProductPage {
  sale?: boolean,
  previousPrice?: number, 
  currentPrice: number, 
  name: string, 
  code: string, 
  stars?: number, 
  characteirstics: [
    {category: string, item: string},
    {category: string, item: number},
    {category: string, item: number},
    {category: string, item: string},
    {category: string, item: number}
  ]
  about?: string,
  reviews?: {name: string, date: number, photo?: string[], text: string, stars: number}[],
  centers?: {name: string, regime: string, availibility: boolean, count: number}[],
  warranty?: number,
  image: string
}

export function ProductPage({sale=false, image,  previousPrice, currentPrice, name, code, stars, characteirstics, about, reviews, centers, warranty} : IProductPage) {
  return (
    <div className={styles.productpage}>
      <div className={styles.productpage__content}>
        <div>
          <div className={styles.productpage__sale}>{sale && <Text size={16} color={EColors.white}>SALE</Text>}</div>
          <div>
            <img src={image} alt={name} />
            <div className={styles.productpage__prices}>
              <span className={styles.productpage__pricePrevious}>{previousPrice} ₽</span>
              <Text size={36} color={EColors.black} bold>{currentPrice} ₽</Text>
            </div>
            <Button size={16} color={EColors.blue} backgroundColor={EColors.transparent}>Нашли дешевле? Снизим цену!</Button>
          </div>
        </div>
        <div>
          <Text As='h1' size={36} bold>{name}</Text>
          <Text size={16} color={EColors.grey}>Код товара: {code}</Text>
          <div className={styles.productpage__controls}>
            <HeartIcon />
            <RateIcon />
            <div>
              <StarIcon />
              <StarFullIcon />
            </div>
          </div>
          <div className={styles.productpage__char}>
            <Text size={20} bold As='p'>Характеристики</Text>
            <div>
              {
                characteirstics.map((c, index: number) => {
                  return (
                    <div className={styles.characteirstics__item} key={index}>
                      <Text size={20}>{c.category}</Text>
                      <Text size={20}>{c.item}</Text>
                    </div>
                  )
                })
              }
            </div>
            <Button>КУПИТЬ</Button>
          </div>
        </div>
      </div>
      <div className={styles.productpage__data}>
        <Tab />
      </div>
      <ProductCards title={'С этим товаром покупают'} />
    </div>
  );
}
