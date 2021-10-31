import React, { useEffect, useState } from 'react';
import useFirebase from '../../hooks/useFirebase';
import axios from 'axios';
const MyOrders = () => {

    const { user } = useFirebase();
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:5000/myOrders/${user?.email}`)
            .then((res) =>{
                setOrders(res.data)
            });
    }, [user.email])
    return (
        <div>
            <h1>my orders:{orders.length}</h1>
        </div>
    );
};

export default MyOrders;