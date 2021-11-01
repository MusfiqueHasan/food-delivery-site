import axios from 'axios';
import { useEffect, useState } from 'react';

const useFoodItems = (options) => {
    const [foodItems, setFoodItems] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        setIsLoading(true)
        axios.get('https://pure-citadel-76424.herokuapp.com/addFoodItems')
            .then(res => {
                setFoodItems(res.data)
                setIsLoading(false)
            })
    }, [])

    return options ? [foodItems.slice(0, 6)] : [foodItems, isLoading, setIsLoading]
};

export default useFoodItems;