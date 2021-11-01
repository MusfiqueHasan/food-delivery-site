import React, { useState } from 'react';
import ReactTagInput from "@pathofdev/react-tag-input";
import "@pathofdev/react-tag-input/build/index.css";
import { useForm } from "react-hook-form";
import axios from 'axios';
const AddRestaurant = () => {
    const [tags, setTags] = useState([])
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();
    const onSubmit = data => {
        data.categories= tags
        axios.post('https://pure-citadel-76424.herokuapp.com/addRestaurant', data)
        .then(res => {
            reset()
        })
    };
    return (
        <div>
            <section className="flex flex-col justify-center items-center pt-24 md:mx-0 mx-4  ">
                <p className="text-yellow-400 text-2xl font-bold uppercase">ADD a new Restaurant</p>

            </section>
            <form onSubmit={handleSubmit(onSubmit)}
                className="my-8 md:mx-60 flex flex-col justify-center items-center">

                <input
                    {...register("image", { required: true })}
                    placeholder="restaurant image"
                    className="py-2 px-3 mt-1 md:w-9/12 w-10/12  border-2"
                />
                <input
                    {...register("logo", { required: true })}
                    placeholder="restaurant logo"
                    className="py-2 px-3 mt-1 md:w-9/12 w-10/12  border-2"
                />
                <input
                    {...register("name", { required: true })}
                    placeholder="restaurant name"
                    className="py-2 px-3 mt-1 md:w-9/12 w-10/12  border-2"
                />
                <input
                    {...register("time", { required: true })}
                    placeholder="restaurant opening time"
                    className="py-2 px-3 mt-1 md:w-9/12 w-10/12  border-2"
                />
                <input
                    {...register("address", { required: true })}
                    placeholder="restaurant address"
                    className="py-2 px-3 mt-1 md:w-9/12 w-10/12  border-2"
                />
               
                <div className="py-2 px-3 mt-1 md:w-4/5 w-10/12 ">
                    <ReactTagInput
                        className="outline-none"
                        tags={tags}
                        removeOnBackspace={true}
                        placeholder="categories name"
                        editable={true}
                        readOnly={false}
                        maxTags={10}
                        onChange={(newTags) => setTags(newTags)}
                    />
                </div>
                {errors.exampleRequired && <span>This field is required</span>}
                <button className="py-2 px-10 mt-5 bg-yellow-400 text-white font-semibold rounded-full"
                    type="submit">
                    Add Restaurant
                </button>

            </form>
        </div>
    );
};

export default AddRestaurant;