import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useFirebase from '../../hooks/useFirebase';
import { useHistory } from 'react-router';
import useFoodItems from '../../hooks/useFoodItems';
import CommonPage from '../CommonPage/CommonPage';
import FoodPageOnly from './FoodPageOnly';
import { Spinner } from 'react-bootstrap';


const FoodItems = () => {
    const { user } = useFirebase()
    const [foodItems,  isLoading, setIsLoading] = useFoodItems()

    const history = useHistory()
    const handleOrders = (myItems, itemsId) => {
        setIsLoading(true)
        myItems.userEmail = user?.email
        axios.post('https://pure-citadel-76424.herokuapp.com/myOrders', myItems)
            .then(res => {
                setIsLoading(false)
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
        

    }, [foodItems, setIsLoading])

    const filterMenu = (category) => {


        const updatedItems = foodItems.filter(elem => {
            return elem.categories === category
        });
        setItems(updatedItems)
    }
    return (
        <CommonPage>
            {
                isLoading ? (
                    <div className="flex justify-center my-7">
                        <Spinner animation="border" variant="warning" />
                    </div>
                ) : (

                    <div className="">
                        <section className="flex flex-col justify-center items-center pt-24 md:mx-0 mx-4 mb-10 ">
                            <p className="text-yellow-400 text-xl font-bold uppercase mb-2">SUPER DELICIOUS</p>
                            <p className="font-bold text-gray-700 font-mono text-xl md:text-5xl">Super Delicious Deal</p>
                        </section>

                        <section className="grid md:grid-cols-3">
                            <div className=" ">
                                <div className="md:w-80 md:ml-48 py-10 flex flex-col shadow-md border">
                                    <div className="flex md:flex-col flex-wrap justify-center">
                                        <button className=" text-yellow-500  uppercase font-bold mb-2"

                                            onClick={() => setItems(foodItems)}>

                                            all categories
                                            <i className="fas fa-chevron-right ml-2"></i>
                                        </button>
                                        <button className=" text-yellow-500 uppercase font-bold mb-2"

                                            onClick={() => filterMenu("Pizza")}>
                                            Pizza
                                            <i className="fas fa-chevron-right ml-2"></i>
                                        </button>
                                        <button className=" text-yellow-500  uppercase font-bold mb-2"

                                            onClick={() => filterMenu("Pasta")}>
                                            Pasta
                                            <i className="fas fa-chevron-right ml-2"></i>
                                        </button>
                                        <button className=" text-yellow-500  uppercase font-bold mb-2"

                                            onClick={() => filterMenu("Burgers")}>
                                            Burgers
                                            <i className="fas fa-chevron-right ml-2"></i>
                                        </button>
                                        <button className=" text-yellow-500  uppercase font-bold mb-2"

                                            onClick={() => filterMenu("Chicken")}>
                                            Chicken
                                            <i className="fas fa-chevron-right ml-2"></i>
                                        </button>
                                        <button className=" text-yellow-500  uppercase font-bold mb-2"

                                            onClick={() => filterMenu("Sandwiches")}>
                                            Sandwiches
                                            <i className="fas fa-chevron-right ml-2"></i>
                                        </button>
                                        <button className=" text-yellow-500  uppercase font-bold mb-2"

                                            onClick={() => filterMenu("Desserts")}>
                                            Desserts
                                            <i className="fas fa-chevron-right ml-2"></i>
                                        </button>
                                        <button className=" text-yellow-500  uppercase font-bold mb-2"

                                            onClick={() => filterMenu("Shakes")}>
                                            Shakes
                                            <i className="fas fa-chevron-right ml-2"></i>
                                        </button>
                                        <button className=" text-yellow-500  uppercase font-bold mb-2"

                                            onClick={() => filterMenu("Broast")}>
                                            Broast
                                            <i className="fas fa-chevron-right ml-2"></i>
                                        </button>

                                    </div>
                                </div>
                            </div>
                            <div className=" md:col-span-2 md:ml-20 md:mx-0 mx-8 md:mt-0 mt-8">
                                {
                                    items.map(elm => <FoodPageOnly key={elm._id} elm={elm} handleOrders={handleOrders} />)
                                }

                            </div>
                        </section>
                    </div>


                )
            }
        </CommonPage>
    );
};

export default FoodItems;