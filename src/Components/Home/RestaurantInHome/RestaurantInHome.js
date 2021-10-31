import React from 'react';
import useRestaurant from '../../../hooks/useRestaurant';
import AllRestaurant from '../../Restaurent/AllRestaurant';

const RestaurantInHome = () => {

    const [restaurant] = useRestaurant(true)
    return (
        <div>
            <section className="flex flex-col justify-center items-center md:mx-0 mx-4 mb-10 ">
                <p className="text-yellow-400 text-xl font-bold uppercase mb-2">TOP RESTAURANTS</p>
                <p className="font-bold text-gray-700 font-mono text-xl md:text-5xl">Papular Restaurant</p>
            </section>
            <section className="grid md:grid-cols-3 my-10 md:px-40 px-6 gap-x-8 gap-y-10 ">
                {
                    restaurant.map(elm => <AllRestaurant key={elm._id} elm={elm} />)
                }

            </section>
        </div>
    );
};

export default RestaurantInHome;