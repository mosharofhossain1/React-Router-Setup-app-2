/* eslint-disable react/prop-types */
// import React from 'react';

const Product = ({ product }) => {
    const { category, description, image, price, title, rating } = product;
    return (
        <div className="border-2 border-orange-500 p-2 text-center rounded-md">
            <h1 className="text-2xl font-bold mb-3
            ">Cateory : {category}</h1>
            <h2 className="font-extralight leading-6 mb-4">Description : {description}</h2>
            <img src={image} alt="" />
            <p className="font-bold font-serif mt-3
            mb-3 border-2 w-[150px] mx-auto px-3 py-3 bg-orange-400">Price : {price}</p>
            <h1 className="text-2xl ">Title : {title}</h1>
            <p className="font-bold mt-5 mb-5">Rating : {rating.rate}</p>
        </div>
    );
};

export default Product;