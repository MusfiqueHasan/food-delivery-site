import React from 'react';
import Banner from './Banner/Banner';
import Category from './Category/Category';
import './Home.css'
import RestaurantInHome from './RestaurantInHome/RestaurantInHome';
const Home = () => {
    return (
        <div >

            <Banner />
            <Category />
            <RestaurantInHome />
        </div>
    );
};

export default Home;