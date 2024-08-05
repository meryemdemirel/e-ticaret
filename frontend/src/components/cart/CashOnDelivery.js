import React from 'react'
import { BsCreditCard2FrontFill } from 'react-icons/bs'
import { BsCash } from 'react-icons/bs'
import { useDispatch } from 'react-redux';
import { addCard, addPaymentType } from 'redux/slices/orderSlice'

function CashOnDelivery() {
    const dispatch = useDispatch()

    return (<>
        <div className='mb-2 text-xl border-b-2'>Kapıda Ödeme</div>
        <div className=''>
            <label htmlFor='cash' className={'rounded-xl cursor-pointer'}>

                <input type='radio' name='kartlar' id='cash'
                    onClick={() => {
                        dispatch(addCard({ card: '' }))
                        dispatch(addPaymentType({ paymentType: false }))

                    }}
                    className={' peer font-bold border-2 rounded-md accent-primary-600 hidden'} />


                <div className={'border rounded-xl mb-2 peer-checked:bg-primary-300 peer-checked:border-primary-600 peer-checked:border-2'} >
                    <div className='flex flex-row p-2'>

                        <div className='font-semibold mr-3 flex justify-center items-center' >
                            <BsCash size={20} />
                        </div>
                        <div className=''>
                            Nakit Odeme
                        </div>

                    </div>
                </div>


            </label>
            <label htmlFor='creditCard' className={'rounded-xl cursor-pointer'}>

                <input type='radio' name='kartlar' id='creditCard'
                    onClick={() => {
                        dispatch(addCard({ card: '' }))
                        dispatch(addPaymentType({ paymentType: true }))

                    }}
                    className={' peer font-bold border-2 rounded-md accent-primary-600 hidden'} />

                <div className={'border rounded-xl mb-2 peer-checked:bg-primary-300 peer-checked:border-primary-600 peer-checked:border-2'} >
                    <div className='flex flex-row p-2'>

                        <div className='font-semibold mr-3 flex justify-center items-center' >
                            <BsCreditCard2FrontFill size={20} />
                        </div>
                        <div className=''>
                            Kredi Kartıyla Ödeme
                        </div>

                    </div>
                </div>
            </label>
        </div>
    </>
    )
}

export default CashOnDelivery