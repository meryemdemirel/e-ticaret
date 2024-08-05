const { useContext, createContext, useState, useEffect } = require("react");


const BasketContext = createContext()

const defaultBasket = JSON.parse(localStorage.getItem('basket')) || []

const BasketProvider = ({children}) => {
    
    const [items, setItems] = useState(defaultBasket)
    
    useEffect(() => {
      localStorage.setItem('basket',JSON.stringify(items))
      
    }, [items])
    
    const addToBasket = (data) =>{
        setItems((items) => [data, ...items])
    }
    
    const removeFromBasket = (item_id) => {
        const filtered = items.filter((item) => item._id !== item_id)
        setItems(filtered)
        
    }

    const emptyBasket = ()=>  setItems([])

    const values={
        items,
        setItems,
        addToBasket,
        removeFromBasket,
        emptyBasket
    }


    return <BasketContext.Provider value={values}>{children}</BasketContext.Provider>
}

const useBasket =() => useContext(BasketContext)

export {BasketProvider, useBasket}