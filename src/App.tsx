import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';

import UserProvider from "./providers/user-provider";
import Header from './components/header/Header';
import Banner from './components/banner/Banner';
import Content from './components/content/Content';
import Footer from './components/footer/Footer';
import ProductProvider from "./providers/product-provider";


const App = () => {
  return (
    <Router>
      <UserProvider>
        <ProductProvider>
          <div style={{margin: "22px 137px 0px 137px"}}>
            <Header />
            <Banner />
            <Content />
          </div>
          <Footer />
        </ProductProvider>
      </UserProvider>
    </Router>
  );
};

export default App;
