import axios from 'axios';
import React from 'react';
import { nanoid } from 'nanoid'
import useFirebase from '../../hooks/useFirebase';
// import { useHistory } from 'react-router';
import useFoodItems from '../../hooks/useFoodItems';
import CommonPage from '../CommonPage/CommonPage';
import AllFooditems from './AllFooditems';

const FoodItems = () => {
    const { user } = useFirebase()
    const [foodItems] = useFoodItems()
    
    // const history = useHistory()
    const handleOrders = (myItems) => {
        
        myItems.key = nanoid()
        myItems.userEmail = user?.email
        axios.post('http://localhost:5000/myOrders', myItems)
            .then(res => {
                if (res.data.insertedId) {
                    alert("added successfully")
                    
                }else{
                    alert('product already added into order list')
                }
            })
    }
    return (
        <div>
            <CommonPage>
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

            </CommonPage>
        </div>
    );
};

export default FoodItems;