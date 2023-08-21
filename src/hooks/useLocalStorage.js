import { useEffect, useState } from "react";

const getItems = ({key, defaulState}) => {
    return JSON.parse(localStorage.getItem(key)) || defaulState;
}

export const useLocalStorage = ({key, defaultState} ) => {
    const [items, setItems] = useState(defaultState);
    const [isLoading, setIsloading] = useState(true);
    const [err, setErr] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            try{
                setItems(getItems({ key, defaultState }));
                setIsloading(false);  
            }catch(err){
                setErr(true);
            }
        },3000);
    }, []);

    const saveItems = (newItems) => {
        setItems(newItems);
        localStorage.setItem(key, JSON.stringify(newItems));
    }

    return {
        items,
        saveItems,
        isLoading, 
        err
    }
}
