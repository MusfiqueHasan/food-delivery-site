import React from 'react';
import Banner from './Banner/Banner';
import Category from './Category/Category';
import FoodIteminHome from './FoodItemInHome/FoodIteminHome';
import './Home.css'
import RestaurantInHome from './RestaurantInHome/RestaurantInHome';
const Home = () => {
    return (
        <div >

            <Banner />
            <Category />
            <RestaurantInHome />
            <FoodIteminHome />
        </div>
    );
};

export default Home;