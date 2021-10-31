import React from 'react';
import { FaFacebookF, FaYoutube, FaLinkedinIn, AiOutlineGooglePlus, GoLocation, BiEnvelope, FiClock, BsTelephoneFill } from 'react-icons/all';
import { NavLink } from 'react-router-dom';
import './Footer.css'
const Footer = () => {
    return (
        <div className=" footer md:px-36 px-8 py-24 mt-60">
            <div className=" grid md:grid-cols-3 grid-cols-1 md:gap-x-8 gap-x-2">
                {/* social info */}
                <div className=" md:pb-0 pb-8">
                    <p className=" text-white text-3xl font-bold mb-4 font-serif">foodHut</p>
                    <p className=" text-gray-400 text-justify mb-3">Regular health exams and tests can help find problems before they start. They also can help find problems early, when your chances for treatment and cure are better.</p>
                    <div className="flex items-center ">
                        <span className=" bg-yellow-400 rounded-full w-8 h-8 p-2 mr-3 cursor-pointer"><FaFacebookF className="text-sm text-white " /></span>
                        <span className=" bg-yellow-400 rounded-full w-8 h-8 p-2 mr-3 cursor-pointer"><FaYoutube className="text-sm text-white " /></span>
                        <span className=" bg-yellow-400 rounded-full w-8 h-8 p-2 mr-3 cursor-pointer"><FaLinkedinIn className="text-sm text-white " /></span>
                        <span className=" bg-yellow-400 rounded-full w-8 h-8 p-2 mr-10 cursor-pointer"><AiOutlineGooglePlus className="text-sm text-white " /></span>


                    </div>
                </div>
                {/* address */}
                <div className=" flex flex-col md:ml-10 md:pb-0 pb-8">
                    <p className=" text-white text-xl font-bold mb-3">Contact Details</p>
                    <div className=" flex items-center mb-2">
                        <GoLocation className=" text-yellow-400 mr-3 " />
                        <p className=" text-white">Box Ali Road, Bandartila, Chittagong. </p>
                    </div>
                    <div className=" flex items-center mb-2">
                        <BiEnvelope className=" text-yellow-400 mr-3 " />
                        <p className=" text-white">musfiquehasan08@gmail.com </p>
                    </div>
                    <div className=" flex items-center mb-2">
                        <FiClock className=" text-yellow-400 mr-3 " />
                        <p className=" text-white">8 AM - 5 PM , Monday - Saturday </p>
                    </div>
                    <div className=" flex items-center mb-2">
                        <BsTelephoneFill className=" text-yellow-400 mr-3 " />
                        <p className=" text-white">(+088)01647581789 </p>
                    </div>

                </div>
                {/* all pages link */}
                <div>
                    <p className=" text-white text-xl font-bold mb-3">Others Pages</p>
                    <div className=" flex items-center md:mb-2">
                        <i className="fas fa-chevron-right text-green-400 mr-3"></i>
                        <NavLink to="/home" className="uppercase mr-6 no-underline group text-white  ">Home</NavLink>
                    </div>
                    <div className=" flex items-center md:mb-2">
                        <i className="fas fa-chevron-right text-green-400 mr-3"></i>
                        <NavLink to="/restaurant" className="uppercase mr-6 no-underline group text-white  ">Restaurants</NavLink>
                    </div>
                    <div className=" flex items-center md:mb-2">
                        <i className="fas fa-chevron-right text-green-400 mr-3"></i>
                        <NavLink to="/foods" className="uppercase mr-6 no-underline group text-white  ">All foods</NavLink>
                    </div>
                    <div className=" flex items-center md:mb-2">
                        <i className="fas fa-chevron-right text-green-400 mr-3"></i>
                        <NavLink to="/orders" className="uppercase mr-6 no-underline group text-white  ">my orders</NavLink>
                    </div>
                    <div className=" flex items-center mb-2">
                        <i className="fas fa-chevron-right text-green-400 mr-3"></i>
                        <NavLink to="/admin" className="uppercase mr-6 no-underline group text-white  ">admin</NavLink>
                    </div>
                </div>
            </div>
            {/* copy right */}
            <p className=" text-gray-400 text-center md:mt-20 mt-10">Copyright © 2021 All rights reserved.</p>
        </div>


    );
};

export default Footer;