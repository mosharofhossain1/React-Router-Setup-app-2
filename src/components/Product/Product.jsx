/* eslint-disable react/prop-types */
// import React from 'react';

import { Link } from "react-router-dom";

// import { Link } from "react-router-dom";

const Product = ({ product }) => {
    const { description, image, price, title, rating } = product;
    return (
        <div className="border-2 border-orange-500 p-2 text-center rounded-md">
            <h1 className="text-2xl my-5">Title : {title}</h1>
            <img className="h-96 w-full" src={image} alt="" />
            <p className="font-bold font-serif mt-3
            mb-3 border-2 w-[150px] mx-auto px-3 py-3 
            bg-orange-400">Price : {price}</p>

            <h2 className="font-extralight leading-6 mb-4">Description : {description}</h2>

            <p className="font-bold mt-5 mb-5">Rating : {rating.rate}</p>


            <Link to={`/product/${product.id}`}>
                <button className="bg-orange-600 px-3 py-2 text-white font-bold ">More Info</button>
            </Link>
        </div>
    );
};

export default Product;