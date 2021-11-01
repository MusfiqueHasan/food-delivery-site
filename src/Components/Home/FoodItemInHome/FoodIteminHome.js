import axios from 'axios';
import React from 'react';
import { useHistory } from 'react-router';
import useFirebase from '../../../hooks/useFirebase';
import useFoodItems from '../../../hooks/useFoodItems';
import AllFooditems from '../../FoodItems/AllFooditems';

const FoodIteminHome = () => {
    const { user } = useFirebase()
    const [foodItems] = useFoodItems(true)

    const history = useHistory()
    const handleOrders = (myItems, itemsId) => {
        myItems.userEmail = user?.email
        axios.post('https://pure-citadel-76424.herokuapp.com/myOrders', myItems)
            .then(res => {
                if (res.data.insertedId) {
                    // alert("added successfully")
                    history.push(`/checkout/${itemsId}`)

                } else {
                    alert('product already added ,, go to "MY ORDERS" page')
                }
            })
    }
    return (
        <div>
             <div className="">
                    <section className="flex flex-col justify-center items-center pt-24 md:mx-0 mx-4 mb-10 ">
                        <p className="text-yellow-400 text-xl font-bold uppercase mb-2">SUPER DELICIOUS</p>
                        <p className="font-bold text-gray-700 font-mono text-xl md:text-5xl">Super Delicious Deal</p>
                    </section>

                    <section className="grid md:grid-cols-3 my-10 md:px-40 px-6 gap-x-8 gap-y-10 ">
                        {
                            foodItems.map(elm => <AllFooditems key={elm._id} elm={elm} handleOrders={handleOrders} />)
                        }

                    </section>
                </div>
        </div>
    );
};

export default FoodIteminHome;