import React, { useEffect, useState } from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Product from "../components/Product/Product";
import { db } from "../firebase";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MainSlider from "../components/ProductsSlider/MainSlider";
import { useParams } from "react-router-dom";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import AboutProductBlock from "../components/aboutProductBlock/AboutProductBlock";
import { aboutProductList } from "../constants/aboutProductList";

function ProductPage() {
  const [products, setProduct] = useState([]);
  const productKeys = Object.keys(products).filter((el) => el !== "square");
  const { id } = useParams();
  useEffect(() => {
    db.collection(`products`)
      .doc(id)
      .get()
      .then((querySnapshot) => {
        setProduct(querySnapshot.data());
      });
  }, [id]);

  return (
    <>
      <Header />
      <Jumbotron />
      <div className="mainslider">
        <h1 className="square">{products.square}</h1>
        <MainSlider products={products} productKeys={productKeys} />
        <div className="aboutProduct_wrapper">
          {aboutProductList.map((item, index) => (
            <AboutProductBlock
              key={item.id}
              isOdd={(index + 1) % 2 === 0}
              {...item}
            />
          ))}
        </div>
      </div>
      <Product />
      <Footer />
    </>
  );
}

export default ProductPage;
