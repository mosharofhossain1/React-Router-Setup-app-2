// import React from 'react';

const Contact = () => {
    return (
        <div>
            <h1 className="text-2xl font-bold mb-5
            ">Conected Us </h1>
            <div className="flex flex-col bg-orange-500 p-5 space-y-3">
                <input className="px-2 py-1
                rounded-md  " type="text" placeholder="Enter Name" />
                <input className="px-2 py-1
                rounded-md" type="email" placeholder="Enter Email" />
                <input className="px-2 py-1
                rounded-md" type="password" placeholder="Enter Password " />
                <button className="bg-gray-300 px-3 py-2
                 text-black font-bold rounded-lg">Send Message </button>
            </div>
        </div>
    );
};

export default Contact;