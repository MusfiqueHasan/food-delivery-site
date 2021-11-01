import { useEffect, useState } from 'react';
import useFirebase from './useFirebase';
import axios from 'axios';
const useOrders = () => {

    const { user } = useFirebase();
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:5000/myOrders/${user?.email}`)
            .then((res) => {
                setOrders(res.data)
            });
    }, [user.email])
    return [orders,setOrders]
};

export default useOrders;