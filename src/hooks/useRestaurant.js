import axios from 'axios';
import  { useEffect, useState } from 'react';

const useRestaurant = (options) => {
    const [restaurant, setRestaurant] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        setIsLoading(true)
        axios.get('https://pure-citadel-76424.herokuapp.com/addRestaurant')
            .then(res => {
                console.log(res);
                setRestaurant(res.data)
                setIsLoading(false)
            })
    }, [])

    return options? [restaurant.slice(0,3)]: [restaurant,isLoading]
};

export default useRestaurant;