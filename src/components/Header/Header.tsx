import React from 'react';
import BucketIcon from '../icons/bucket';
import HeartIcon from '../icons/heart';
import LocationIcon from '../icons/location';
import LogoIcon from '../icons/logo';
import PersonIcon from '../icons/person';
import { EColors, Text } from '../Text';
import styles from './header.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <ul className={styles.header__list}>
        <Text size={20} bold={true} color={EColors.black} As='li'>Магазины</Text>
        <Text size={20} bold={true} color={EColors.black} As='li'>Акции</Text>
        <Text size={20} bold={true} color={EColors.black} As='li'>Акции</Text>
      </ul>
      <a href='/'>
        <LogoIcon />
      </a>
      <div className={styles.header__location}>
        <LocationIcon />
        <Text size={20} bold={true} color={EColors.black}>Москва,  ул. Науки  25</Text>
      </div>
      <div className={styles.header__controls}>
        <HeartIcon />
        <PersonIcon />
        <div className={styles.header__bucket}>
          <BucketIcon />
          <span className={styles.header__notification}>1</span>
        </div>
      </div>
    </header>
  );
}
