import React from "react";
import UserProvider from "./providers/user-provider";
import Header from './components/header/Header';
import Banner from './components/banner/Banner';
import Content from './components/content/Content';
import Footer from './components/footer/Footer';


const App = () => {
  return (
    <UserProvider>
      <Header/>
      <Banner/>
      <Content/>
      <Footer/>
    </UserProvider>
  );
};

export default App;
