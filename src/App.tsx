import React from 'react';
import { Header } from './components/Header';
import { Layout } from './components/Layout';
import { NavigationBar } from './components/NavigationBar';
import { MainPage } from './components/MainPage'
import { Content } from './components/Content'
import { Footer } from './components/Footer';
import { ProductsPage } from './components/ProductsPage';
import { ProductPage } from './components/ProductsPage/ProductPage'
import image from './assets/image.png'
import { Tab } from './components/Tab';


function App() {
  return (
    <div className='body'>
      <Layout>
        <Header />
        <NavigationBar />
        <Content>
          <MainPage />
          {/* <ProductsPage title="Гидроциклы" /> */}
          {/* <ProductPage
            sale={true}
            previousPrice={117000}
            currentPrice={115000}
            name='Гидроцикл BRP SeaDoo GTI 155hp SE Long Blue Metallic'
            code="366666-2"
            stars={4}
            characteirstics = {[
              {category: 'Производитель', item: 'Канада'},
              {category: 'Количество мест, шт: ', item: 3},
              {category: 'Мощность, л.с.', item: 155},
              {category: 'Тип двигателя', item: 'Бензиновый'},
              {category: 'Год выпуска', item: 2018},
            ]}
            image={image} /> */}
        </Content>
      </Layout>
      <Footer />
    </div>
  );
}

export default App;
