import React from 'react';
import { NavLink } from 'react-router-dom';
import './CommonPage.css'
const CommonPage = (props) => {
    return (
        <div>
            {/* common page for some section */}
            <div className="common-banner flex justify-center items-center">
                <div>
                    <p className="text-white text-4xl font-semibold">{props.title}</p>
                    <div className="flex justify-evenly items-center">
                        <NavLink to="/home" className=" text-white"><i className="fas fa-home"></i></NavLink>
                        <i className="fas fa-chevron-right text-green-400"></i>
                        {
                            props.prevTitle && (<div><span className="text-white">{props.prevTitle} </span>
                             <i className="fas fa-chevron-right text-green-400"></i></div>)
                        }
                        <span className="text-white">{props.title}</span>
                    </div>
                </div>
            </div>
            <div>
                {props.children}
            </div>
        </div>
    );
};

export default CommonPage;