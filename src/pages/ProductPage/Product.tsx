import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Product from "../../Type/product";

const Books = () => {
  const [product, setProduct] = useState<Product[]>([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProduct(data.products));
  }, []);

  return (
    <div>
      <h1>Knigi</h1>
      {product.map((product) => (
        <Link key={product.id} to={`/product/${product.id}`}>
          <li>{product.title} </li>
        </Link>
      ))}
    </div>
  );
};

export default Books;
