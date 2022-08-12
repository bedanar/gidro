import React from 'react';
import { Header } from './components/Header';
import { Layout } from './components/Layout';
import { NavigationBar } from './components/NavigationBar';
import { MainPage } from './components/MainPage'
import { Content } from './components/Content'
import { Footer } from './components/Footer';

function App() {
  return (
    <div className='body'>
      <Layout>
        <Header />
        <NavigationBar />
        <Content>
          <MainPage />
        </Content>
      </Layout>
      <Footer />
    </div>
  );
}

export default App;
