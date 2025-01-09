// import React from 'react';

import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <div className="bg-orange-500 p-5 text-white text-2xl">
            <Link className="ml-4 font-bold font-mono " to={'/home'}> Home</Link>
            <Link className="ml-4 font-bold font-mono " to={'/about'}> About</Link>
            <Link className="ml-4 font-bold font-mono " to={'/products'}> Products</Link>
            <Link className="ml-4 font-bold font-mono " to={'/bloge'}> Bloges</Link>
            <Link className="ml-4 font-bold font-mono " to={'/contact'}> Contact </Link>
        </div>
    );
};

export default Nav;