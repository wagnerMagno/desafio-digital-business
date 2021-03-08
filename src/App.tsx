import React from "react";
import UserProvider from "./providers/user-provider";
import Header from './components/header/Header';
import Banner from './components/banner/Banner';
import Content from './components/content/Content';
import Footer from './components/footer/Footer';
import ProductProvider from "./providers/product-provider";


const App = () => {
  return (
    <UserProvider>
      <ProductProvider>

        <Header />
        <Banner />
        <Content />
        <Footer />
      </ProductProvider>
    </UserProvider>
  );
};

export default App;
