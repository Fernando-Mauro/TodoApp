import { useState } from "react";

const getItems = ({key, defaulState}) => {
    return JSON.parse(localStorage.getItem(key)) || defaulState;
}

export const useLocalStorage = ({key, defaulState} ) => {
    const [items, setItems] = useState(() => getItems({ key, defaulState }));
    
    const saveItems = (newItems) => {
        setItems(newItems);
        localStorage.setItem(key, JSON.stringify(newItems));
    }

    return [
        items,
        saveItems
    ]
}
