import React from 'react';
import styles from './navigationbar.module.css';

const navigationList = [
  {
    name: 'Квадроциклы',
    route: '/'
  },
  {
    name: 'Катера',
    route: '/'
  },
  {
    name: 'Гидроциклы',
    route: '/'
  },
  {
    name: 'Лодки',
    route: '/'
  },
  {
    name: 'Вездеходы',
    route: '/'
  },
  {
    name: 'Снегоходы',
    route: '/'
  },
  {
    name: 'Двигатели',
    route: '/'
  },
  {
    name: 'Запчасти',
    route: '/'
  },
]

export function NavigationBar() {
  return (
    <nav className={styles.nav}>
      {
        navigationList.map((n, index) => {
          return (
            <a className={styles.nav__link} href={n.route} key={index}>{n.name}</a>
          )
        })
      }
    </nav>
  );
}
