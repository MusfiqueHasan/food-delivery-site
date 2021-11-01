import React, { useState } from 'react';

const FoodPageOnly = ({ elm, handleOrders }) => {
    const { _id, image, title, categories, price, description, status } = elm
    const myItems = { image, title, categories, price, description, status }
    

    return (
        <div >


            <div className=" md:w-3/4 flex items-center flex-col md:flex-row  justify-between mb-3 shadow-md border p-3">
                <div className="flex flex-col md:flex-row ">
                    <img src={image} alt="" className=" md:w-24 md:h-24 md:mr-10  " />
                    <div>
                        <h1 className="text-xl font-mono font-bold">{title} <span className="text-sm">({categories})</span></h1>
                        <p className=" mb-1">{description}</p>
                        <p className="text-yellow-600 font-bold">{price}</p>
                    </div>
                </div>
                <div className="flex items-center">

                    <button onClick={() => handleOrders(myItems, _id)} className=" px-4 py-2 bg-yellow-400 text-black text-sm uppercase tracking-widest font-extrabold ">order</button>
                </div>
            </div>



        </div >
    );
};

export default FoodPageOnly;