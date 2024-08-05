import React from 'react'
import { AiOutlineDelete } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { removeFromCart } from 'redux/slices/cartSlice'

function CardComp({cart}) {
    const dispatch = useDispatch()
  return (
    <div className='my-10 flex items-center justify-between border-2 p-3 rounded-2xl' >
        <img className='w-[150px] h-[150px] object-contain' src={cart?.image} alt=''/>
        <div className='w-[400px] h-[150px]'>
            <div className='text-xl font-bold mt-3 '>{cart?.title}</div>
            <div>{cart?.description}</div>
        </div>
        <div>
            {cart?.price * cart?.quantity}TL <span className='font-bold'>({cart?.quantity})</span>
        </div>
        
        <div  className='text-red-700 mr-7 h-12 flex items-center justify-center  text-2xl rounded-md'>
            <AiOutlineDelete size={30} onClick={()=>dispatch(removeFromCart(cart?.id))}  className='cursor-pointer'/>
        </div>
    </div>
  )
}

export default CardComp