import React from 'react';
import { AItemCard } from '../ProductCards/ProductCard/AItemCard';
import { Slider } from '../Slider';
import styles from './mainpage.module.css';
import boat from '../../assets/boat.png'
import { SearchBlock } from '../SearchBlock';
import { CategoryCards } from '../CategoryCards';
import { ProductCards } from '../ProductCards';
import cars from '../../assets/cars.png'
import { EColors, Text } from '../Text';
import { Button } from '../Button'
import { FilterBlock } from '../ProductCards/FilterBlock';

export function MainPage() {
  return (
    <main className={styles.main}>
      <section className={styles.section__main}>
        <Slider />
        <AItemCard 
          name="Лодочный мотор 
          Suzuki DF9.9BRS"
          image={boat}
          previousPrice={225000}
          currentPrice={190000}
          expirationDate={"31.08.2020"}
          />
      </section>
      <section className={styles.section__search}>
        <SearchBlock />
      </section>
      <CategoryCards />
      <ProductCards title={"Популярные товары"} />
      <section className={styles.section__sale}>
        <img alt="cars" src={cars} />
        <Text size={36} bold color={EColors.white}>CКИДКИ на все запчасти до 70%</Text>
        <Button color={EColors.black} backgroundColor={EColors.white} size={24}>ПОСМОТРЕТЬ ВСЕ</Button>
      </section>
      <ProductCards title = {"С этим товаром покупают"} />
    </main>
  );
}
