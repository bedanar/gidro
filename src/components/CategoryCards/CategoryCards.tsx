import React from 'react';
import styles from './categorycards.module.css';
import { categories } from '../../data/categories'
import { CategoryCard, ICategoryCard } from './CategoryCard/CategoryCard';

export function CategoryCards() {
  return (
    <section className={styles.cards}>
      {
        categories.map((c: ICategoryCard, index: number) => {
          return <CategoryCard key={index}
          title={c.title}
          image={c.image}
          route={c.route} />
        })
      }
    </section>
  );
}
