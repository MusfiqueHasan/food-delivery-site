import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
const AddItems = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = data => {
        data.status = ""
        axios.post('http://localhost:5000/addFoodItems', data)
            .then(res => {
                reset()
            })
    };
    return (
        <div>
            <section className="flex flex-col justify-center items-center pt-24 md:mx-0 mx-4  ">
                <p className="text-yellow-400 text-2xl font-bold uppercase">ADD a new Fooditems</p>
            </section>
            <form onSubmit={handleSubmit(onSubmit)}
                className="my-8 md:mx-60 flex flex-col justify-center items-center">

                <input
                    {...register("image", { required: true })}
                    placeholder="food image"
                    className="py-2 px-3 mt-1 md:w-9/12 w-10/12  border-2"
                />
                <input
                    {...register("title", { required: true })}
                    placeholder="food title"
                    className="py-2 px-3 mt-1 md:w-9/12 w-10/12  border-2"
                />
                <input
                    {...register("price", { required: true })}
                    placeholder="food price"
                    className="py-2 px-3 mt-1 md:w-9/12 w-10/12  border-2"
                />
                <select {...register("categories")} className="py-2 px-3 mt-1 md:w-9/12 w-10/12  border-2">
                    <option value="Pizza">Pizza</option>
                    <option value="Sandwiches">Sandwiches</option>
                    <option value="Burgers">Burgers</option>
                    <option value="Broast">Broast</option>
                    <option value="Desserts">Desserts</option>
                    <option value="Chicken">Chicken</option>
                    <option value="Shakes">Shakes</option>
                    <option value="Pasta">Pasta</option>
                </select>

                <textarea
                    {...register("description", { required: true })}
                    placeholder="food description"
                    className="py-2 px-3 mt-1 md:w-9/12 w-10/12  border-2"
                />

                {errors.exampleRequired && <span>This field is required</span>}
                <button className="py-2 px-10 mt-5 bg-yellow-400 text-white font-semibold rounded-full"
                    type="submit">
                    Add Menu
                </button>

            </form>
        </div>
    );
};

export default AddItems;