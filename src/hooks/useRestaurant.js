import axios from 'axios';
import  { useEffect, useState } from 'react';

const useRestaurant = (options) => {
    const [restaurant, setRestaurant] = useState([])
    useEffect(() => {

        axios.get('http://localhost:5000/addRestaurant')
            .then(res => {
                console.log(res);
                setRestaurant(res.data)
            })
    }, [])

    return options? [restaurant.slice(0,3)]: [restaurant]
};

export default useRestaurant;