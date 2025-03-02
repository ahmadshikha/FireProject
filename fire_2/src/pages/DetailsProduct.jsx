import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Nav from '../components/Nav'

const DetailsProduct = () => {
  const { id } = useParams(); // الحصول على معرف المنتج من URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:4400/product/${id}`);
        setProduct(response.data);
      } catch (err) {
        setError("Error fetching product details");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-red-500 text-center">{error}</p>;

  return (
        <div>
    <Nav/>

    <div className="max-w-4xl mx-auto p-4 mt-14">

     
      {product.img && (
        <img
          src={`http://localhost:4400/image/product/${product.img.split('\\').pop()}`}
          alt={product.productType}
          className=" object-cover rounded-md"
        />
      )}
     
    </div>
    </div>
  );
};

export default DetailsProduct;