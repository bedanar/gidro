import React, {useState} from 'react';
import styles from './tab.module.css';
import { Output } from './Tabs/Output';

interface ITab {
  id: number, 
  text: string,
  content: React.ReactNode
  // content: string
}
const tabItems = [
  {
    id: 1,
    text: 'О товаре',
    content: <p>hello world</p>,
  },
  {
    id: 2,
    text: 'Характеристики',
    content: <p>hello world</p>,
  },
  {
    id: 3,
    text: 'Отзывы',
    content: <p>hello world</p>,
  },
  {
    id: 4,
    text: 'Самовывоз',
    content: <Output />,
  },
  {
    id: 5,
    text: 'Доставка',
    content: <p>hello world</p>,
  },
  {
    id: 6,
    text: 'Cервис',
    content: <p>hello world</p>,
  },
  {
    id: 7,
    text: 'Гарантия',
    content: <p>hello world</p>,
  },
];

export function Tab() {
  const [active, setActive] = useState(4);
  
  return (
    <div className={styles.wrapper}>
      <div className={styles.tabs}>
        {tabItems.map(({ id, text } : ITab) => {
          return <TabItemComponent
          key={text}
          onItemClicked={() => setActive(id)}
          isActive={active === id}
          text={text}
        />
        }
      )}
      </div>
      <div className={styles.content}>
        {tabItems.map(({ id, content }: ITab) => {
          return active === id ? <div>{content}</div> : ''
        })}
      </div>
     </div>
  )
}

const TabItemComponent = ({
  icon = '',
  text = '',
  onItemClicked = () => console.error('You passed no action to the component'),
  isActive = false,
}) => {
  return (
    <div className={isActive ? styles.tabitem : styles.tabitem__inactive} onClick={onItemClicked}>
      <i className={icon}></i>
      <p className="tabitem__title">{text}</p>
    </div>
  )
};