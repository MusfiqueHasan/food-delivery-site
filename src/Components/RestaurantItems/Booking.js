import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';
const Booking = () => {
    const { user } = useAuth()
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();
    const onSubmit = data => {
        alert("Restaurant booked successfully")
        reset()
    };
    return (
        <div className=" w-3/4 shadow-md border p-10">
            <h1 className="text-2xl font-bold mb-2">Book This Restaurant</h1>
            <p>All kinds of dining experiences are waiting to be discovered. Check out the best restaurants and Book Using following Form.</p>

            <form onSubmit={handleSubmit(onSubmit)}
                className="my-8 flex flex-col justify-center items-center">

                <input
                    {...register("name", { required: true })}
                    placeholder="name"
                    defaultValue={user?.displayName}
                    className="py-2 px-3 mt-1 md:w-9/12 w-10/12 font-mono font-bold  border-2"
                />
                <input
                    {...register("email", { required: true })}
                    placeholder="email"
                    defaultValue={user?.email}
                    className="py-2 px-3 mt-1 md:w-9/12 w-10/12 font-mono font-bold border-2"
                />
                <input
                    {...register("phoneNumber", { required: true })}
                    placeholder="phone number"
                    className="py-2 px-3 mt-1 md:w-9/12 w-10/12 font-mono font-bold border-2"
                />

                <input
                    type="datetime-local"
                    {...register("date", { required: true })}
                    placeholder="booking date"
                    className="py-2 px-3 mt-1 md:w-9/12 w-10/12 font-mono font-bold border-2"
                />
                <select {...register("guests")} className="py-2 px-3 mt-1 md:w-9/12 w-10/12 font-mono font-bold border-2">
                    <option value="">Guests</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>

                </select>


                <textarea
                    {...register("instructions", { required: true })}
                    placeholder="your instructions"
                    className="py-2 px-3 mt-1 md:w-9/12 w-10/12 font-mono font-bold border-2"
                />

                {errors.exampleRequired && <span>This field is required</span>}
                <button className="py-2 px-10 mt-5 bg-yellow-400 text-white font-semibold rounded-full"
                    type="submit">
                    Booked
                </button>

            </form>
        </div>
    );
};

export default Booking;
