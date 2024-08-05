import React from 'react'
import { FaCcVisa } from 'react-icons/fa'
import { FaCcMastercard } from 'react-icons/fa'
import { useDispatch } from 'react-redux';
import { addCard, addPaymentType } from 'redux/slices/orderSlice'


function Cards({ card, index }) {

    // card.postalCode
    // Replace("InputNumber",Substr("InputNumber",4,6),"******")
    let firstSix = card.postalCode.substring(0, 6);
    let lastTwo = card.postalCode.substring(14, 16);
    let masked = firstSix + '*'.repeat(16 - firstSix.length - lastTwo.length) + lastTwo;
    const dispatch = useDispatch()




    return (
        <div className=''>
            <label htmlFor={index + 'x'} key={index} className={'rounded-xl cursor-pointer'}>

                <input type='radio' name='kartlar' id={index + 'x'}

                    onClick={() => {
                        dispatch(addCard({ card: masked }))
                        dispatch(addPaymentType({ paymentType: 'Online' }))
                    }}
                    className={' peer font-bold border-2 rounded-md accent-primary-600 hidden'}

                />
                {/* <span className='ml-2 font-medium peer-checked:text-primary-600'>
                    {card.city}
                </span> */}

                <div className={'border rounded-xl mb-2 peer-checked:bg-primary-300 peer-checked:border-primary-600 peer-checked:border-2'} >
                    <div className='flex flex-row p-2'>

                        <div className='font-semibold mr-3 flex justify-center items-center' >
                            <FaCcMastercard size={20} />
                        </div>
                        <div className=''>
                            {masked}
                        </div>

                    </div>
                </div>
            </label>
        </div>
    )
}

export default Cards