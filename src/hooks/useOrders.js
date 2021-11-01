import { useEffect, useState } from 'react';
import useFirebase from './useFirebase';
import axios from 'axios';
const useOrders = () => {

    const { user } = useFirebase();
    const [orders, setOrders] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        setIsLoading(true)
        axios.get(`https://pure-citadel-76424.herokuapp.com/myOrders/${user?.email}`)
            .then((res) => {
                setOrders(res.data)
                setIsLoading(false)
            });
    }, [user.email, setIsLoading])
    return [orders, setOrders, isLoading, setIsLoading]
};

export default useOrders;