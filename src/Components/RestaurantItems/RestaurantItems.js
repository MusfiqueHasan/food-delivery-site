import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BiTimeFive } from 'react-icons/bi';
import { MdLocationOn } from 'react-icons/md';
import { useHistory, useParams } from 'react-router';
import useFirebase from '../../hooks/useFirebase';
import useRestaurant from '../../hooks/useRestaurant';
import CommonPage from '../CommonPage/CommonPage';
import FoodPageOnly from '../FoodItems/FoodPageOnly';


const RestaurantItems = () => {
    const { id } = useParams()
    const { user } = useFirebase()
    const [restaurant] = useRestaurant()
    const [findCategories, setFindCategories] = useState([])
    useEffect(() => {

        axios.get(`http://localhost:5000/getRestaurantItems/${id}`)
            .then(res => {
                setFindCategories(res.data)
            })
    }, [id])

    const history = useHistory()
    const handleOrders = (myItems, itemsId) => {
        myItems.userEmail = user?.email
        axios.post('http://localhost:5000/myOrders', myItems)
            .then(res => {
                if (res.data.insertedId) {
                    history.push(`/checkout/${itemsId}`)

                } else {
                    alert('product already added ,, go to "MY ORDERS" page')
                }
            })
    }

    const getSelectedRestaurantInfo = restaurant.filter(rest => rest._id == id)
    console.log(getSelectedRestaurantInfo);

    return (
        <div>
            <CommonPage>
                <section className=" h-40 flex justify-center items-center mb-28 border-b-2  bg-gray-50">
                    <div className="md:w-28 w-10 mr-10">
                        <img src={getSelectedRestaurantInfo[0]?.logo} alt="" className="w-full rounded-t-full"/>
                    </div>
                    <div >
                        <div className="font-bold text-black text-xl md:text-4xl my-3">
                            {getSelectedRestaurantInfo[0]?.name}
                        </div>
                        <div className="flex items-center ">
                            <MdLocationOn className=" text-yellow-400 font-extrabold"/>
                            {getSelectedRestaurantInfo[0]?.address}
                            <span className="ml-4 flex items-center justify-between"> 
                            <BiTimeFive className=" text-yellow-400 font-extrabold"/>
                             {getSelectedRestaurantInfo[0]?.time} </span>
                        </div>
                    </div>


                </section>

                <section className="grid grid-cols-3 ">
                    <div>

                    </div>

                    <div className=" col-span-2 ml-20">
                        {
                            findCategories.map(elm => <FoodPageOnly elm={elm} handleOrders={handleOrders} />)
                        }
                    </div>
                </section>

            </CommonPage>
        </div>
    );
};

export default RestaurantItems;