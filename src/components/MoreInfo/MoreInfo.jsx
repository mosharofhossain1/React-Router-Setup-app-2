// import React from 'react';

import { useLoaderData } from "react-router-dom";

const MoreInfo = () => {
    const moreInfo = useLoaderData();
    // console.log(moreInfo);
    const { title, image, price } = moreInfo;

    return (
        <div className="border-2 border-red-500 p-3 text-2xl
        ">
            <h1 className="mt-5 mb-5">Title : {title}</h1>
            <img className="w-96 h-96 mx-auto border-gray-200 border-2 bg-orange-600 p-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" src={image} alt="" />
            <p className="mt-5 mb-5">Price : {price}$</p>
        </div>
    );
};

export default MoreInfo;