import axios from 'axios';
import  { useEffect, useState } from 'react';

const useFoodItems = (options) => {
    const [foodItems, setFoodItems] = useState([])
    useEffect(() => {

        axios.get('http://localhost:5000/addFoodItems')
            .then(res => {
                setFoodItems(res.data)
            })
    }, [])

    return options? [foodItems.slice(0,6)]: [foodItems]
};

export default useFoodItems;