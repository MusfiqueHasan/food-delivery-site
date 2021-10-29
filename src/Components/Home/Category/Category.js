import React from 'react';
import Slider from "react-slick";
import pizza from '../../../images/categories-img/pizza.png'
const Category = () => {


    var settings = {
        // dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
      };
    return (
        <div className=" md:h-screen px-24 ">
            <div>
                <h2> Single Item</h2>
                <Slider {...settings}>
                    <div className=" outline-none">
                        <img src={pizza} alt="" className="mx-auto my-6" />
                        <h4 className=" text-2xl text-center font-bold font-mono">Pizza</h4>
                        <p className="text-center">14 restaurant</p>
                    </div>
                    <div className=" outline-none">
                        <img src={pizza} alt="" className="mx-auto my-6" />
                        <h4 className=" text-2xl text-center font-bold font-mono">Pizza</h4>
                        <p className="text-center">14 restaurant</p>
                    </div>
                    <div className=" outline-none">
                        <img src={pizza} alt="" className="mx-auto my-6" />
                        <h4 className=" text-2xl text-center font-bold font-mono">Pizza</h4>
                        <p className="text-center">14 restaurant</p>
                    </div>
                    <div className=" outline-none">
                        <img src={pizza} alt="" className="mx-auto my-6" />
                        <h4 className=" text-2xl text-center font-bold font-mono">Pizza</h4>
                        <p className="text-center">14 restaurant</p>
                    </div>
                    <div className=" outline-none">
                        <img src={pizza} alt="" className="mx-auto my-6" />
                        <h4 className=" text-2xl text-center font-bold font-mono">Pizza</h4>
                        <p className="text-center">14 restaurant</p>
                    </div>
                    <div className=" outline-none">
                        <img src={pizza} alt="" className="mx-auto my-6" />
                        <h4 className=" text-2xl text-center font-bold font-mono">Pizza</h4>
                        <p className="text-center">14 restaurant</p>
                    </div>
                   
                    
                    
                    
                    
                </Slider>
            </div>
        </div>
    );
};

export default Category;