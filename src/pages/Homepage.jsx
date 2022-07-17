import React from 'react';
import Benefits from '../components/Benefits/Benefits';
import Feedback from '../components/Feedback/Feedback';
import Footer from '../components/Footer/Footer';
import Header from "../components/Header/Header"
import Jumbotron from '../components/Jumbotron/Jumbotron';
import Product from '../components/Product/Product';
const Homepage = () => {
  return (
    <>
      <Header/>
      <Jumbotron />
      <Benefits />
      <Product />
      <Feedback />
      <Footer />
    </>
  );
}

export default Homepage;
