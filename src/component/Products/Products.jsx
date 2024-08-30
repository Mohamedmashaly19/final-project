import axios from "axios";
import React, { useEffect, useState } from "react";
import ProdctItem from "../ProdctItem/ProdctItem";
import Loder from "./../Loder/Loder";
import { Link } from "react-router-dom";

export default function Products() {
  const [products, setProducts] = useState([]);
  function getProudects() {
    axios
      .get("https://ecommerce.routemisr.com/api/v1/products")
      .then((data) => {
        setProducts(data.data.data);
      })
      .catch(() => {
        console.log("errro");
      });
  }
  useEffect(() => {
    getProudects();
  }, []);


  return (
    <div className="row mt-8">
      {products.length > 0 ? (
        products.map((prdt) => <ProdctItem prdt={prdt} getProudects={getProudects} />)
      ) : (
        <Loder />
      )}
    </div>
  );
}
