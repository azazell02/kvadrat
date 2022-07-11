import React, { useEffect, useState } from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Product from "../components/Product/Product";
import { db } from "../firebase";

function ProductPage() {
  const [product, setProduct] = useState([])

  useEffect(() => {
    db.collection("products")
      .get()
      .then((querySnapshot) => {
        let productItem = []
        console.log(querySnapshot);
        querySnapshot.forEach((doc) => {
          productItem.push(doc.data())
        });
        setProduct(productItem)
      });
  }, []);

  console.log(product);

  return (
    <>
      <Header />
      <Product />
      <Footer />
    </>
  );
}

export default ProductPage;
