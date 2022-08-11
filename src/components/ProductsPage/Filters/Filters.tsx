import React, { useState } from 'react';
import { Button } from '../../Button';
import DropdownIcon from '../../icons/dropdownIcon';
import { EColors, Text } from '../../Text';
import { Checkbox } from './Checkbox';
import { Dropdown } from './Dropdown';
import styles from './filters.module.css';

const powers = [90, 130, 154, 230, 300]

export function Filters() {
  const [comboValue, setComboValue] = useState<number>(90)
  const [comboValue1, setComboValue1] = useState<number>(90)
  const [comboValue2, setComboValue2] = useState<number>(90)
  return (
    <div className={styles.filters}>
      <Text size={16} bold>П А Р А М Е Т Р Ы</Text>
      <div className={styles.filters__dropdown}>
        <Dropdown 
          button={<Button size = {16} 
            backgroundColor={EColors.transparent}
            color={EColors.black}
            bold>
              <DropdownIcon />
              Наличие
            </Button>}>
          <div className={styles.filters__content}>
            <Checkbox param='В наличие' />
            <Checkbox param='Под заказ' />
          </div>
        </Dropdown>
      </div>

      <div className={styles.filters__dropdown}>
        <Dropdown 
          button={<Button size = {16} 
            backgroundColor={EColors.transparent}
            color={EColors.black}
            bold>
              <DropdownIcon />
              Новинки
            </Button>}>
          <div className={styles.filters__content}>
            <Checkbox param='Все' />
            <Checkbox param='Новинки' />
            <Checkbox param='Акции' />
          </div>
        </Dropdown>
      </div>

      <div className={styles.filters__dropdown}>
        <div className={styles.dropdown__item}>
          <Text size={16} bold>Мощность, л.с.</Text>
          <Dropdown button={<Button size = {16} 
            backgroundColor={EColors.transparent}
            color={EColors.black}
            bold>
              {comboValue}
              <DropdownIcon />
            </Button>}>
            <div className={styles.dropdown__list}>
              {
                powers.map((p: number, index: number) => (
                  <button 
                  key={index}
                  onClick={() => setComboValue(p)}>{p}</button>
                ))
              }
            </div>
          </Dropdown>
        </div>
      </div>

      <div className={styles.filters__dropdown}>
        <div className={styles.dropdown__item}>
          <Text size={16} bold>Мощность двигателя, л.с.</Text>
          <Dropdown button={<Button size = {16} 
            backgroundColor={EColors.transparent}
            color={EColors.black}
            bold>
              {comboValue1}
              <DropdownIcon />
            </Button>}>
            <div className={styles.dropdown__list}>
              {
                powers.map((p: number, index: number) => (
                  <button 
                  key={index}
                  onClick={() => setComboValue1(p)}>{p}</button>
                ))
              }
            </div>
          </Dropdown>
        </div>
      </div>
      
      <div className={styles.filters__dropdown}>
        <div className={styles.dropdown__item}>
          <Text size={16} bold>Макс. скорость</Text>
          <Dropdown button={<Button size = {16} 
            backgroundColor={EColors.transparent}
            color={EColors.black}
            bold>
              {comboValue2}
              <DropdownIcon />
            </Button>}>
            <div className={styles.dropdown__list}>
              {
                powers.map((p: number, index: number) => (
                  <button 
                  key={index}
                  onClick={() => setComboValue2(p)}>{p}</button>
                ))
              }
            </div>
          </Dropdown>
        </div>
      </div>

      <div className={styles.filters__dropdown}>
        <Dropdown 
          button={<Button size = {16} 
            backgroundColor={EColors.transparent}
            color={EColors.black}
            bold>
              <DropdownIcon />
              Бренд
            </Button>}>
          <div className={styles.filters__content}>
            <Checkbox param='BRP' />
            <Checkbox param='Spark 2' />
            <Checkbox param='Spark 3' />
          </div>
          <Button underline backgroundColor={EColors.transparent} color={EColors.blue} size={14}>Показать еще</Button>
        </Dropdown>
      </div>

      <div className={styles.filters__dropdown}>
        <Dropdown button={<Button size = {16} 
            backgroundColor={EColors.transparent}
            color={EColors.black}
            bold>
              <DropdownIcon />
              Акции
            </Button>}>
            <div className={styles.filters__content}>
              <Button size={12} bold>SALE</Button>
              <Button size={12} bold color={EColors.grey} backgroundColor={EColors.beige}>NEW</Button>
              <Button size={12} bold color={EColors.grey} backgroundColor={EColors.beige}>HIT</Button>
              <Button size={12} bold backgroundColor={EColors.black}>ДИЛЕР</Button>
            </div>
            </Dropdown>
      </div>

      <div className={styles.filters__dropdown}>
        <Dropdown 
          button={<Button size = {16} 
            backgroundColor={EColors.transparent}
            color={EColors.black}
            bold>
              <DropdownIcon />
              Страны
            </Button>}>
          <div className={styles.filters__content}>
            <Checkbox param='Россия' />
            <Checkbox param='Германия' />
            <Checkbox param='США' />
            <Checkbox param='Китай' />
          </div>
          <Button underline backgroundColor={EColors.transparent} color={EColors.blue} size={14}>Показать еще</Button>
        </Dropdown>
      </div>
    </div>
  );
}
