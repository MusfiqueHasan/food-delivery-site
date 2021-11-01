
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import CommonPage from '../CommonPage/CommonPage';
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';

const Checkout = () => {
    const { user } = useAuth()
    const { itemsId } = useParams()
    const [orderItems, setOrderItems] = useState([]);
    const history = useHistory()
    const {
        register,
        formState: { errors },
    } = useForm();
    useEffect(() => {
        axios.get(`https://pure-citadel-76424.herokuapp.com/addFoodItems/${itemsId}`)
            .then((res) => {
                setOrderItems(res.data)
            });
    }, [])

    const handlePlaceOrder = (e) => {
        axios.put(`https://pure-citadel-76424.herokuapp.com/myOrders/${itemsId}`, { status: "Processing.." })
            .then((res) => {
                alert("order placed successfully")
                history.push('/myOrders')
            });
        e.preventDefault()
    }

    const { title, image, description, price, categories } = orderItems
    return (
        <CommonPage>
            <section className="flex flex-col justify-center items-center pt-24 md:mx-0 mx-4 mb-20 ">
                <p className="font-bold text-gray-700 font-mono text-xl md:text-5xl border-b-4 border-yellow-400">Checkout</p>
            </section>
            <section className="grid md:grid-cols-2">
                <div className="flex flex-col items-end">
                    <div className="w-3/5 mx-auto">
                        <img src={image} alt="" className="w-full" />
                    </div>
                    <div className="md:w-3/4  mx-10 md:mx-0">
                        <p className=" text-2xl font-extrabold text-center my-4">{title}</p>

                        <p className="mb-2 font-mono"> <span className="font-bold text-black ">Categories: </span> {categories}</p>
                        <p className="mb-2 font-mono"> <span className="font-bold text-black ">Description: </span> {description}</p>
                        <p className="text-yellow-600 font-bold font-mono"> <span className="font-bold text-black ">Price: </span>{price}</p>
                    </div>
                </div>
                <div>
                    <div>
                        <form 
                            className="my-8 md:mx-24 flex flex-col justify-center items-center">
                            <h1 className=" text-center md:w-9/12 border-b-4 border-yellow-400 mb-4 text-2xl font-bold  ">Edit delivery details</h1>

                            <input
                                {...register("userName", { required: true })}
                                defaultValue={user?.displayName}
                                placeholder="user name"
                                className="py-2 px-3 mt-1 md:w-9/12 w-10/12 mb-3 font-bold font-mono border-2"
                            />
                            <input
                                {...register("userEmail", { required: true })}
                                defaultValue={user?.email}
                                placeholder="user email"
                                className="py-2 px-3 mt-1 md:w-9/12 w-10/12 mb-3 font-bold font-mono border-2"
                            />
                            <input
                                {...register("address", { required: true })}
                                placeholder="user address"
                                className="py-2 px-3 mt-1 md:w-9/12 w-10/12 mb-3 font-bold font-mono border-2"
                            />
                            <input
                                {...register("address", { required: true })}
                                placeholder="user phone number"
                                className="py-2 px-3 mt-1 md:w-9/12 w-10/12 mb-3 font-bold font-mono border-2"
                            />
                            <input
                                {...register("itemsName", { required: true })}
                                placeholder="items name"
                                defaultValue={title}
                                className="py-2 px-3 mt-1 md:w-9/12 w-10/12 mb-3 font-bold font-mono border-2"
                            />


                            {errors.exampleRequired && <span>This field is required</span>}
                            <button type="submit" className="py-2 px-10 mt-5 bg-yellow-400 text-white font-semibold rounded-full" onClick={handlePlaceOrder}>place order</button>
                        </form>
                    </div>
                </div>
            </section>
        </CommonPage>
    );
};

export default Checkout;