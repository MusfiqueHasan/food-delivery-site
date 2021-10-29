import React from 'react';
import { NavLink } from 'react-router-dom';
import './Error.css'
const Error = () => {
    return (
        <div className="error">
            {/* Error UI */}
            <NavLink className=" no-underline font-bold cursor-pointer rounded-full py-3 px-5 bg-green-400 text-white uppercase my-5" to="/home">home page</NavLink>
        </div>
    );
};

export default Error;