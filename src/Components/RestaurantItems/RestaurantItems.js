import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { BiFoodMenu, BiTable, BiTimeFive } from 'react-icons/bi';
import { MdLocationOn } from 'react-icons/md';
import { useHistory, useParams } from 'react-router';
import useFirebase from '../../hooks/useFirebase';
import useRestaurant from '../../hooks/useRestaurant';
import CommonPage from '../CommonPage/CommonPage';
import FoodPageOnly from '../FoodItems/FoodPageOnly';
import Booking from './Booking';


const RestaurantItems = () => {
    const { id } = useParams()
    const { user } = useFirebase()
    const [restaurant] = useRestaurant()
    const [findCategories, setFindCategories] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [control, setControl] = useState("menus");
    useEffect(() => {
        setIsLoading(true)
        axios.get(`https://pure-citadel-76424.herokuapp.com/getRestaurantItems/${id}`)
            .then(res => {
                setFindCategories(res.data)
                setIsLoading(false)
            })
    }, [id])

    const history = useHistory()
    const handleOrders = (myItems, itemsId) => {
        setIsLoading(true)
        myItems.userEmail = user?.email
        axios.post('https://pure-citadel-76424.herokuapp.com/myOrders', myItems)
            .then(res => {
                if (res.data.insertedId) {
                    history.push(`/checkout/${itemsId}`)
                    setIsLoading(false)

                } else {
                    alert('product already added ,, go to "MY ORDERS" page')
                }
            })
    }

    const getSelectedRestaurantInfo = restaurant.filter(rest => rest._id == id)
    console.log(getSelectedRestaurantInfo);

    return (
        <div>
            {
                isLoading ? (
                    <div className="flex justify-center my-7">
                        <Spinner animation="border" variant="warning" />
                    </div>
                ) : (
                    <CommonPage>
                        <section className=" h-40 flex justify-center items-center mb-20 border-b-2  bg-gray-50">
                            <div className="md:w-28 w-20 md:mr-10">
                                <img src={getSelectedRestaurantInfo[0]?.logo} alt="" className="w-full rounded-t-full" />
                            </div>
                            <div className="md:ml-0 ml-4 ">
                                <div className="font-bold text-black text-xl md:text-4xl my-3">
                                    {getSelectedRestaurantInfo[0]?.name}
                                </div>
                                <div className="flex items-center flex-col md:flex-row ">
                                    <span className="flex items-center justify-between">
                                    <MdLocationOn className=" text-yellow-400 font-extrabold" />
                                    {getSelectedRestaurantInfo[0]?.address}
                                    </span>
                                    <span className="md:ml-4 flex items-center justify-between">
                                        <BiTimeFive className=" text-yellow-400 font-extrabold" />
                                        {getSelectedRestaurantInfo[0]?.time} </span>
                                </div>
                            </div>


                        </section>

                        <section className="grid md:grid-cols-3 ">
                            <div>
                                <div className="md:w-80 w-72 md:ml-48 ml-10  md:py-10 py-4 flex flex-col justify-center items-center shadow-md border">
                                    <div >
                                        <h1 className="text-2xl font-bold mb-3 uppercase">All details</h1>
                                    </div>
                                    <div className="flex md:flex-col  ">
                                        <button className=" text-yellow-500 flex items-center mr-4 md:mr-0 uppercase font-bold mb-2" onClick={() => setControl("menus")}>
                                            <BiFoodMenu className="mr-2" />
                                            Menus
                                        </button>
                                        <button className=" text-yellow-500 flex items-center uppercase font-bold mb-2" onClick={() => setControl("booking")}>
                                            <BiTable className="mr-2" />
                                            Book a table
                                        </button>

                                    </div>
                                </div>

                            </div>
                            <div className=" md:col-span-2 md:ml-20 mx-8">
                                {
                                    control === "menus" && <div>
                                        {
                                            findCategories.map(elm => <FoodPageOnly elm={elm} handleOrders={handleOrders} />)
                                        }
                                    </div>
                                }
                                {control === "booking" && <Booking />}
                            </div>
                        </section>

                    </CommonPage>
                )
            }
        </div>
    );
};

export default RestaurantItems;