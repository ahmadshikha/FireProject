import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from 'react-router-dom';
import ImgAll from '../assets/Categorys/All.jpg';
import Imgshoes from '../assets/Categorys/Shoes.jpg';
import ImgEquipment from '../assets/Categorys/Equipment.jpg';
import ImgUniform from '../assets/Categorys/uniform.jpg';
import Nav from "../components/Nav";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedFilter, setSelectedFilter] = useState("all");
  const productsPerPage = 20;

  const fetchProducts = async (url) => {
    try {
      const response = await axios.get(url);
      setProducts(response?.data);
    } catch (err) {
      setError("Error fetching products");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const getAllProducts = () => {
    setSelectedFilter("all");
    fetchProducts("http://localhost:4400/product");
  };

  const getEquipment = () => {
    setSelectedFilter("equipment");
    fetchProducts("http://localhost:4400/filter/equipment");
  };

  const getUniform = () => {
    setSelectedFilter("uniforms");
    fetchProducts("http://localhost:4400/filter/uniforms");
  };

  const getShoes = () => {
    setSelectedFilter("shoes");
    fetchProducts("http://localhost:4400/filter/shoes");
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(products.length / productsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  if (loading) return <p className="text-center text-xl text-gray-500">Loading...</p>;
  if (error) return <p className="text-red-500 text-center text-xl">{error}</p>;

  return (
    <div>
      <Nav/>
    <div className=" mx-auto p-4 mt-20 bg-slate-200">
      <h1 className="text-4xl font-sans mb-6 text-center text-black">Select Categories</h1>

      {/* Categories Section */}
      <div className="flex flex-col items-center mb-12">
        <div className="flex justify-center gap-4 mb-4">
          <div
            onClick={getAllProducts}
            className={`cursor-pointer transition transform hover:scale-110 ${selectedFilter === "all" ? "opacity-80" : "opacity-100"}`}
          >
            <img src={ImgAll} alt="All" className="w-40 h-24 mx-auto rounded-md shadow-lg" />
            <p className={`text-center text-lg font-semibold mt-2 ${selectedFilter === "all" ? "border-b-2 border-blue-500" : ""}`}>All Products</p>
          </div>
          <div
            onClick={getShoes}
            className={`cursor-pointer transition transform hover:scale-110 ${selectedFilter === "shoes" ? "opacity-80" : "opacity-100"}`}
          >
            <img src={Imgshoes} alt="Shoes" className="w-40 h-auto mx-auto rounded-md shadow-lg" />
            <p className={`text-center text-lg font-semibold mt-2 ${selectedFilter === "shoes" ? "border-b-2 border-blue-500" : ""}`}>Shoes</p>
          </div>
          <div
            onClick={getEquipment}
            className={`cursor-pointer transition transform hover:scale-110 ${selectedFilter === "equipment" ? "opacity-80" : "opacity-100"}`}
          >
            <img src={ImgEquipment} alt="Equipment" className="w-40 h-auto mx-auto rounded-md shadow-lg" />
            <p className={`text-center text-lg font-semibold mt-2 ${selectedFilter === "equipment" ? "border-b-2 border-blue-500" : ""}`}>Equipment</p>
          </div>
          <div
            onClick={getUniform}
            className={`cursor-pointer transition transform hover:scale-110 ${selectedFilter === "uniforms" ? "opacity-80" : "opacity-100"}`}
          >
            <img src={ImgUniform} alt="Uniform" className="w-40 h-24 mx-auto rounded-md shadow-lg" />
            <p className={`text-center text-lg font-semibold mt-2 ${selectedFilter === "uniforms" ? "border-b-2 border-blue-500" : ""}`}>Uniform</p>
          </div>
        </div>
      </div>

      <h2 className=" font-sans   mb-6 text-center text-6xl">See Products</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <AnimatePresence>
          {currentProducts.map((product) => (
            <Link to={`/product/${product._id}`} key={product._id}>
              <motion.div
                className="border rounded-lg shadow-md p-6 transition-shadow duration-300 hover:shadow-lg bg-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {product.img && (
                  <img
                    src={`http://localhost:4400/image/product/${product.img.split('\\').pop()}`}
                    alt={product.productType}
                    className="w-full h-60 rounded-md mt-2 transition-transform duration-300 hover:scale-105"
                  />
                )}
                
              </motion.div>
            </Link>
          ))}
        </AnimatePresence>
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center space-x-2 mt-6">
        {Array?.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={`px-6 py-3 rounded-lg transition duration-300 ${
              currentPage === index + 1
                ? "bg-blue-500 text-white"
                : "bg-gray-300 text-black hover:bg-gray-400"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Products;

