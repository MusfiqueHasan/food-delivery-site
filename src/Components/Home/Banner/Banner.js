import React from 'react';
import img1 from '../../../images/restaurant-logo/1.jpg'
import img2 from '../../../images/restaurant-logo/2.jpg'
import img3 from '../../../images/restaurant-logo/3.jpg'
import img4 from '../../../images/restaurant-logo/4.jpg'
import img5 from '../../../images/restaurant-logo/5.jpg'
import img6 from '../../../images/restaurant-logo/6.jpg'

const Banner = () => {
    return (
        <div className="banner">
            <div className=" md:h-screen h-full grid md:grid-cols-3 grid-cols-1 md:px-28">
                <div className=" md:h-screen  px-5 flex flex-col justify-center md:break-normal break-all col-span-2">
                    <h1 className=" md:text-6xl text-xl text-white font-bold md:mb-6 mb-2  font-serif w-72 md:w-full">Order Healthy And Fresh Food Any Time</h1>
                    <p className="text-white md:text-xl text-xs text-justify w-60 md:w-5/6 ">Italian food makes people think of big family dinners. So you may want to position your restaurant as a place to bring the whole family.</p>
                    <h4 className="text-white md:text-2xl md:my-6 my-2 border-b-2 md:w-56 w-60 font-mono font-bold ">Popular Restaurant</h4>
                    <div className=" md:w-4/6 w-1/5 flex justify-between">
                        <img src={img1} alt="" className="md:w-20 w-10" />
                        <img src={img2} alt="" className="md:w-20 w-10" />
                        <img src={img3} alt="" className="md:w-20 w-10" />
                        <img src={img4} alt="" className="md:w-20 w-10" />
                        <img src={img5} alt="" className="md:w-20 w-10" />
                        <img src={img6} alt="" className="md:w-20 w-10" />
                    </div>
                </div>
            </div>
            <svg className="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 180"><path fill="#ffff" fill-opacity="1" d="M0,128L40,133.3C80,139,160,149,240,160C320,171,400,181,480,176C560,171,640,149,720,149.3C800,149,880,171,960,165.3C1040,160,1120,128,1200,117.3C1280,107,1360,117,1400,122.7L1440,128L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
        </div>
    );
};
export default Banner;