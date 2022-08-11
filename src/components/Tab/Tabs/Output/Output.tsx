import React from 'react';
import { isTemplateMiddle } from 'typescript';
import { Button } from '../../../Button';
import { Checkbox } from '../../../ProductsPage/Filters/Checkbox';
import { EColors, Text } from '../../../Text';
import styles from './output.module.css';

const outputData = [
  {
    id: 1, 
    address: "Москва, ул. Науки 25",
    workingHours: ["пн-сб: 08:00-19:00", "вс: 09:00-17:00"],
    availibility: true,
    number: 1
  },
  {
    id: 2, 
    address: "Москва, ул.  Южная 134",
    workingHours: ["пн-сб: 08:00-19:00", "вс: 09:00-17:00"],
    availibility: true,
    number: 2
  },
  {
    id: 3, 
    address: "Санкт-Петербург, ул. Красная 19",
    workingHours: ["пн-сб: 08:00-19:00", "вс: 09:00-17:00"],
    availibility: false,
    number: 0
  },
]

export function Output() {
  return (
    <div className={styles.output}>
      <div className={styles.ouput__controls}>
        <div className={styles.output__input}>
          <Text size={16} color={EColors.grey}>Магазин</Text>
          <input placeholder='|' />
        </div>
        <div className={styles.output__check}>
          <Checkbox param="Забрать сегодня" />
          <Checkbox param="Забрать в течение недели" />
        </div>
      </div>
      <table>
        <tr>
          <th>Адрес</th>
          <th>Режим работы</th>
          <th>Доступно</th>
          <th>Количество</th>
          <th></th>
        </tr>
          {
            outputData.map((item) => {
              return <tr className={styles.table__tr} key={item.id}>
                <td>{item.address}</td>
                <td>{item.workingHours.map((s) => <div>{s}</div>)}</td>
                <td>{item.availibility ? 'В наличии' : "Нет в наличии"}</td>
                <td>{item.number}</td>
                <td>
                  <Button>КУПИТЬ</Button>
                </td>
              </tr>
            })
          }
      </table>
    </div>
  );
}
