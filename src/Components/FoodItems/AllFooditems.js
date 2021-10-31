import React from 'react';
import { Card } from 'react-bootstrap';

const AllFooditems = ({ elm, handleOrders }) => {

    const {  image, title, categories, price, description } = elm
    const myItems ={ image, title, categories, price, description}
    // const myItemsAsArray = Object.entries(elm)
    // const myItems = myItemsAsArray.filter(elem => elem._id !== _id)
    return (
        <div>
            <Card style={{ height: '500px' }} className="hover:shadow-md md:w-96 w-80">
                <div className="h-3/5">
                    <img src={image} alt="" className="h-full w-full" />
                </div>
                <Card.Body>
                    <Card.Title className=" text-2xl font-mono font-bold">{title}
                        <span className="text-yellow-600">({categories})</span>
                    </Card.Title>
                    <Card.Text className=" text-justify">
                        {description}
                    </Card.Text>
                    <div className="flex items-center justify-between mt-3">
                        <p className="text-yellow-600 text-2xl font-bold ">{price}</p>
                        <button onClick={() => handleOrders(myItems)} className=" px-4 py-2 bg-yellow-300 text-white font-bold uppercase rounded-lg">order</button>
                    </div>

                </Card.Body>

            </Card>
        </div>
    );
};

export default AllFooditems;