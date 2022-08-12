import React from 'react';
import styles from './navigationbar.module.css';
import { Link } from 'react-router-dom'

const navigationList = [
  {
    name: 'Квадроциклы',
    route: '/products'
  },
  {
    name: 'Катера',
    route: '/products'
  },
  {
    name: 'Гидроциклы',
    route: '/products'
  },
  {
    name: 'Лодки',
    route: '/products'
  },
  {
    name: 'Вездеходы',
    route: '/products'
  },
  {
    name: 'Снегоходы',
    route: '/products'
  },
  {
    name: 'Двигатели',
    route: '/products'
  },
  {
    name: 'Запчасти',
    route: '/products'
  },
]

export function NavigationBar() {
  return (
    <nav className={styles.nav}>
      {
        navigationList.map((n, index) => {
          return (
            <Link className={styles.nav__link} to={n.route} key={index}>{n.name}</Link>
          )
        })
      }
    </nav>
  );
}
