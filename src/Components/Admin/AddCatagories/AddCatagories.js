import axios from 'axios';
import React from 'react';

import { useForm } from "react-hook-form";
import useAuth from '../../../hooks/useAuth';
const AddCatagories = () => {


    const { isLoading } = useAuth()
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();


    const onSubmit = data => {
        axios.post('https://pure-citadel-76424.herokuapp.com/addCategories', data)
            .then(res => {
                reset()
            })

    };
    return (


        <div>
            <section className="flex flex-col justify-center items-center pt-24 md:mx-0 mx-4  ">
                <p className="text-yellow-400 text-2xl font-bold uppercase">ADD a new catagories</p>
            </section>

            <form onSubmit={handleSubmit(onSubmit)}
                className="my-8 md:mx-60 flex flex-col justify-center items-center">

                <input
                    {...register("image", { required: true })}
                    placeholder="catagories image"
                    className="py-2 px-3 mt-1 md:w-3/5 w-10/12  border-2"
                />

                <input
                    {...register("name", { required: true })}
                    placeholder="catagories name"
                    className="py-2 px-3 mt-1 md:w-3/5 w-10/12 border-2"
                />

                {errors.exampleRequired && <span>This field is required</span>}
                <button className="py-2 px-10 mt-5 bg-yellow-400 text-white font-semibold rounded-full"
                    type="submit">
                    Add Categories
                </button>


            </form>
        </div>

    );
};

export default AddCatagories;