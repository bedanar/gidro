import React from 'react';
import styles from './footer.module.css';
import { EColors, Text } from '../Text';
import { Input } from '../Input';
import { Button } from '../Button';
import InstagramIcon from '../icons/instagram';
import VKIcon from '../icons/vk';
import FacebookIcon from '../icons/facebook';
import YoutubeIcon from '../icons/youtube';
import { Layout } from '../Layout';

export function Footer() {
  return (
    <footer className={styles.footer}>
        <Layout>
          <div className={styles.footer__main}>
            <div className={styles.footer__info}>
              <Text size={14} bold>Подпишитесь на нашу рассылку и узнавайте о акция быстрее</Text>
              <div className={styles.footer__input}>
                <Input placeholder='Введите ваш e-mail:' color={EColors.grey} backgroundColor={EColors.white} />
                <Button size={10} color={EColors.white} backgroundColor={EColors.blue}>Отправить</Button>
              </div>
            </div>
            <div className={styles.footer__nav}>
              <Text size = {14} bold>Информация</Text>
              <a>О компании</a>
              <a>Контакты</a>
              <a>Акции</a>
              <a>Магазины</a>
            </div>
            <div className={styles.footer__nav}>
              <Text size = {14} bold>Интернет-магазин</Text>
              <a>Доставка и самовывоз</a>
              <a>Оплата</a>
              <a>Возврат-обмен</a>
              <a>Новости</a>
            </div>
            <div className={styles.footer_socialsites}>
              <InstagramIcon link="/" />
              <VKIcon link="/" />
              <FacebookIcon link="/" />
              <YoutubeIcon link="/" />
            </div>
          </div>
          <div className={styles.footer__docs}>
            <a href="/">Договор оферты</a>
            <a href='/'>Политика обработки персональных данных</a>
          </div>
        </Layout>
    </footer>
  );
}
