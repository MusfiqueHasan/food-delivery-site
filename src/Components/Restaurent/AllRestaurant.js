import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';

const AllRestaurant = ({ elm, handleRestaurantItem }) => {

    const {_id, image, name, categories, logo, address, time } = elm

    return (
        <div>
            <Card style={{ height: '500px' }} className="shadow-md md:w-96 w-80 cursor-pointer" onClick={()=>handleRestaurantItem(_id)}>
                <div className="h-3/6">
                    <img src={image} alt="" className="h-full w-full" />
                </div>
                <Card.Body>
                    <Card.Title className=" text-2xl font-mono font-bold">{name}</Card.Title>
                    <Card.Text className=""> 
                        {
                            categories.map(cate => {
                                return (
                                    <p className=" px-3 py-1 bg-gray-200 m-2 float-left">{cate}</p>
                                )
                            })
                        }
            
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem className="flex">
                        <div className="w-3/12">
                            <img src={logo} alt="" className=" w-12 " />
                        </div>
                        <div className="flex flex-col w-9/12">
                            <p className=" text-red-600 font-semibold">{time}</p>
                            <p>{address}</p>
                        </div>
                    </ListGroupItem>

                </ListGroup>
            </Card>
        </div>
    );
};

export default AllRestaurant;