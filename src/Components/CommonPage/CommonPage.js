import React from 'react';
import './CommonPage.css'
const CommonPage = (props) => {
    return (
        <div>
            {/* common page for some section */}
            <div className="common-banner flex justify-center items-center">
               
            </div>
            <div>
                {props.children}
            </div>
        </div>
    );
};

export default CommonPage;