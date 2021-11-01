import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useFirebase from '../../hooks/useFirebase';
import { useHistory } from 'react-router';
import useFoodItems from '../../hooks/useFoodItems';
import CommonPage from '../CommonPage/CommonPage';
import FoodPageOnly from './FoodPageOnly';


const FoodItems = () => {
    const { user } = useFirebase()
    const [foodItems] = useFoodItems()

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


    const [items, setItems] = useState(foodItems)
    useEffect(() => {
        setItems(foodItems)
    }, [foodItems])

    const filterMenu = (category) => {


        const updatedItems = foodItems.filter(elem => {
            return elem.categories === category
        });
        setItems(updatedItems)
    }
    return (
        <div>
            <CommonPage>
                <div className="">
                    <section className="flex flex-col justify-center items-center pt-24 md:mx-0 mx-4 mb-10 ">
                        <p className="text-yellow-400 text-xl font-bold uppercase mb-2">SUPER DELICIOUS</p>
                        <p className="font-bold text-gray-700 font-mono text-xl md:text-5xl">Super Delicious Deal</p>
                    </section>

                    <section className="grid grid-cols-3">
                        <div className=" ">
                            <div className=" bg-gray-700 h-screen pt-20 flex justify-center">
                                <div className="flex flex-col ">
                                    <button className=" text-yellow-500  uppercase font-bold mb-2"

                                        onClick={() => setItems(foodItems)}>all</button>
                                    <button className=" text-yellow-500 uppercase font-bold mb-2"

                                        onClick={() => filterMenu("Pizza")}>Pizza</button>
                                    <button className=" text-yellow-500  uppercase font-bold mb-2"

                                        onClick={() => filterMenu("Pasta")}>Pasta</button>
                                    <button className=" text-yellow-500  uppercase font-bold mb-2"

                                        onClick={() => filterMenu("Burgers")}>Burgers</button>
                                    <button className=" text-yellow-500  uppercase font-bold mb-2"

                                        onClick={() => filterMenu("Chicken")}>Chicken</button>

                                </div>
                            </div>
                        </div>
                        <div className=" col-span-2 ml-20">
                            {
                                items.map(elm => <FoodPageOnly key={elm._id} elm={elm} handleOrders={handleOrders} />)
                            }

                        </div>
                    </section>
                </div>

            </CommonPage>
        </div>
    );
};

export default FoodItems;