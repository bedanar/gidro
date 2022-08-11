import React from 'react';
import { FilterBlock } from './FilterBlock';
import styles from './productcards.module.css';
import { products } from '../../data/products'
import { IProductCard, ProductCard } from './ProductCard/ProductCard';
import { EColors } from '../Text';
import { Button } from '../Button'

export function ProductCards({title, filter = true} : {title?: string, filter?: boolean}) {
  return (
    <section className={styles.productcards}>
      {filter && title && <FilterBlock title={title} />}
      <div className={styles.productcard__list}>
        {
          products.map((p: IProductCard) => {
            return <ProductCard key={p.id} 
            sale = {p.sale}
            price = {p.price}
            available = {p.available}
            title = {p.title}
            image = {p.image}
            favourite = {p.favourite} />
          })
        }
      </div>
      <div className={styles.productcards__more}>
        <Button color={EColors.black} backgroundColor={EColors.beige} size = {16}>Показать еще</Button>
      </div>
    </section>
  );
}
