import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { MdDelete } from 'react-icons/md';
import { useParams } from 'react-router';

const ManageOrders = () => {
    const { itemsId } = useParams()
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5000/myOrders')
            .then((res) => {
                setOrders(res.data)
            });
    }, [])

    const handleDeleteOrder = (id) => {
        axios.delete(`http://localhost:5000/myOrders/${id}`)
            .then(res => {
                if (res.data.deletedCount) {
                    const remaining = orders.filter(service => service._id !== id)
                    setOrders(remaining)
                    alert('successfully deleted')
                }
            })
    }
    const handleApproval = (id) => {
        axios.put(`http://localhost:5000/myOrdersAdmin/${id}`, { status: "Approved" })
            .then((res) => {
            });
    }
    return (
        <div>

            <section className="flex flex-col justify-center items-center pt-24 md:mx-0 mx-4 mb-10 ">
                {/* <p className="text-yellow-400 text-xl font-bold uppercase mb-2">SUPER DELICIOUS</p> */}
                <p className="font-extrabold text-gray-700 border-b-4 border-yellow-500 text-xl md:text-5xl">My Orders</p>
            </section>
            <section className="flex justify-center">
                <div className="w-8/12">

                    {
                        orders.map(order => {
                            const { _id, title, image, price, categories, userEmail, status } = order
                            return (
                                <div >
                                    <div className="  flex items-center justify-between mb-3 shadow-md border p-3">
                                        <div className="flex">
                                            <img src={image} alt="" className=" w-24 h-24 mr-10" />
                                            <div>
                                                <h1 className="text-xl font-mono font-bold">{title} <span className="font-normal font-mono"> ({categories})</span> </h1>
                                                <p className="text-yellow-600 font-bold mb-2">{price}</p>
                                                <p className="font-bold mb-1">user-email:<span className="font-normal font-mono"> {userEmail}</span></p>
                                            </div>
                                        </div>
                                        <div className="flex items-center">
                                            <button
                                                onClick={() => handleApproval(_id)}
                                                className={
                                                    status==="Approved"?
                                                    " text-sm no-underline text-green-600 uppercase font-extrabold   bg-yellow-200 px-6 py-2 tracking-widest mr-5":
                                                    " text-sm no-underline text-black uppercase font-extrabold   bg-yellow-400 px-6 py-2 tracking-widest mr-5"
                                                }>
                                                {status === "Approved" ? "Approved" : "Approval"}
                                            </button>
                                            <button onClick={() => handleDeleteOrder(_id)}><MdDelete className=" text-3xl text-red-500" /></button>
                                        </div>
                                    </div>


                                </div>

                            )
                        })
                    }

                </div>
            </section>

        </div>
    );
};

export default ManageOrders;