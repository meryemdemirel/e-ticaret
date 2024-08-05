import React, { useState } from 'react'
import { useBasket } from 'contexts/BasketContext'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from 'redux/slices/cartSlice'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
function Product({ product }) {

    const { addToBasket, items } = useBasket()
    const dispatch = useDispatch()

    const [quantity, setQuantity] = useState(0)

    // const quantity = 1;

    const increment = () => {
        // if (quantity < product?.rating?.count) 
        console.log('increment on kuantity', quantity);
        setQuantity(quantity + 1)
        console.log('increment son kuantity', quantity);

    }

    const decrement = () => {
        if (quantity > 0) setQuantity(quantity - 1)
    }

    // const cart = JSON.parse(localStorage.getItem('cart'))

    // console.log(cart, 'asdfadsf');
    // function theItem(myItem) {
    //     return myItem.quantity > 0
    // }
    const { carts } = useSelector(state => state.carts)


    // console.log(theItem(),'theitemmm');
    // const item = carts?.find(theItem)
    // console.log(item,'itemmm');
    //console.log(carts?.some(item => item.id != product.id), 'varmiiii');


    const addBasket = () => {
        console.log(product?.productId,product?.name,product?.image,product?.price, quantity);
        dispatch(addToCart({ id: product?.productId, title: product?.name, image: product?.image, price: product?.price, quantity: quantity }))
    }

    return (
        <div className='flex flex-col justify-between p-3 border border-[#eee]  rounded-xl transform transition hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(0,0,0,0.25)]'>
            <div className=' '>
                <img className='object- h-[150px] object-scale-down object-center m-auto	' src={product.image} />
            </div>
            <div className='font-bold pt-5'>
                {product.name}
            </div>
            <div className='pt-5'>
                {product.description.slice(0, 70)}
            </div>
            <div className='flex justify-between mt-3 items-center'>
                <div className='text-lg'>{product.price} TL</div>

                {
                    carts?.some(item => item.id == product.productId) == false

                        ?
                        <div className='text-white' >
                            <div className='bg-red-700 rounded-lg h-10 flex justify-center px-3 '
                                >

                                <button className='' onClick={() => {increment(); addBasket()}} >
                                    Sepete ekle
                                </button>

                            </div>
                        </div>
                        :
                        <div className='flex justify-between bg-primary-600 rounded-full text-white h-8 '>
                            <div className='rounded-full h-7 w-7 ml-1 text-primary-600 bg-white my-auto'>
                                <button className=' flex justify-center items-center h-full w-full' onClick={() => { decrement(); addBasket() }}>
                                    <AiOutlineMinus />
                                </button>
                            </div>

                            <div className='mx-2 items-center text-center m-auto'>
                                {carts?.find(item => item.id == product.productId).quantity}
                            </div>

                            <div
                                className='rounded-full  h-7 w-7 mr-1 text-primary-600 bg-white my-auto'
                                onClick={() => {increment(); addBasket() }}
                            >

                                <button className=' flex flex-row items-center justify-center h-full w-full'>
                                    <AiOutlinePlus />
                                </button>

                            </div>
                        </div>


                }
            </div>

        </div>
    )
}

export default Product