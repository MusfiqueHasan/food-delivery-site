import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import useRestaurant from '../../../hooks/useRestaurant';

const Category = () => {
    const [restaurant] = useRestaurant()
    const [categories, setCategories] = useState([])
    var settings = {
        // dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
    };
    useEffect(() => {

        axios.get('http://localhost:5000/addCategories')
            .then(res => {
                console.log(res);
                setCategories(res.data)
            })
    }, [])

    return (
        <div className=" md:h-screen md:px-24 ">
            <div>
                <section className="flex flex-col justify-center items-center pt-24 md:mx-0 mx-4 mb-10 ">
                    <p className="text-yellow-400 text-xl font-bold uppercase mb-2">top foods</p>
                    <p className="font-bold text-gray-700 font-mono text-xl md:text-5xl">Our Categories</p>
                </section>
                <Slider {...settings} className=" z-0 ">

                    {
                        categories.map(elem => {
                           
                            return (
                                <div className=" outline-none">
                                    <img src={elem.image} alt="" className="mx-auto my-6 md:w-72 md:h-48" />
                                    <h4 className=" text-2xl text-center font-bold font-mono">{elem.name}</h4>
                                    <p className="text-center">14 restaurant</p>
                                </div>

                            )
                        })
                    }

                </Slider>
            </div>
        </div>
    );
};

export default Category;