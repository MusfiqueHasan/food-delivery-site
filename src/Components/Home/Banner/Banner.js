import React from 'react';


const Banner = () => {
    return (
        <div className="banner  ">
            
            <div className=" grid grid-cols-2">
                <div className=" h-screen pl-24  flex flex-col items-center justify-center">
                    <h1 className=" text-6xl text-white font-bold mb-6 font-serif ">Order Healthy And Fresh Food Any Time</h1>
                    <p className="text-white text-xl text-justify">Italian food makes people think of big family dinners. So you may want to position your restaurant as a place to bring the whole family.</p>
                </div>
                
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 180"><path fill="#ffff" fill-opacity="1" d="M0,128L40,133.3C80,139,160,149,240,160C320,171,400,181,480,176C560,171,640,149,720,149.3C800,149,880,171,960,165.3C1040,160,1120,128,1200,117.3C1280,107,1360,117,1400,122.7L1440,128L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
        </div>
    );
};

export default Banner;