import React, { useState } from 'react';
import LineIcon from '../icons/line';
import SquareIcon from '../icons/square';
import { ProductCards } from '../ProductCards';
import { IProductCard, ProductCard } from '../ProductCards/ProductCard';
import { Text } from '../Text';
import { Filters } from './Filters';
import styles from './productspage.module.css';

interface IProductsPage {
  title: string,
}

export function ProductsPage({title} : IProductsPage) {
  const [active, setActive] = useState(false)
  return (
    <main className={styles.productspage}>
      <section className={styles.productspage__content}>
        <Text size={36} bold As="h3">{title}</Text>
        <div className={styles.productspage__controls}>
          <div className={styles.controls__tags}>
            <span>Полноприводные</span>
          </div>
          <div className={styles.controls__sort}>
            <div></div>
            <div className={styles.sort__buttons}>
              <SquareIcon active />
              <LineIcon />
            </div>
          </div>
        </div>
      </section>
      <section className={styles.productspage__products}>
        <Filters />
        <ProductCards filter = {false} />
      </section>
    </main>
  );
}
