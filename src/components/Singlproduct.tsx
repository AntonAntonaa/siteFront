import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Product from '../Type/product';


const SinglePage = () => {
  const {id} = useParams()
  const [product, setProduct] = useState<Product|null>(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`) 
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  return (
    <div>
      {product && (
        <>
        <h1>{product.title} </h1>
        <p>{product.thumbnail} </p>
        <Link to={`/product/${id}/edit`}></Link>
        </>
      )}
    </div>
  );
};

export default SinglePage;
