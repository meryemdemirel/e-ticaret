// import { decode } from 'jsonwebtoken';
import jwtDecode from 'jwt-decode'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addAddress, chooseAddress } from 'redux/slices/orderSlice'

function Address({ adres, i }) {

    const dispatch = useDispatch()
    // const {userToken} = useSelector(state=> state.auth)
    const {address} = useSelector(state=> state.order)

    // const decodedId = jwtDecode(userToken)


    return (
        <div className=''>
            <label htmlFor={i} key={i} className={'rounded-xl cursor-pointer'}>

                <input type='radio' name='adres' id={i}

                    onClick={() => {
                                    console.log();
                                    dispatch(chooseAddress({address:adres}))
                                }
                            }

                className={'rounded-full peer font-bold border-2 rounded-md accent-primary-600'} />
                <span className='ml-2 font-medium peer-checked:text-primary-600'>
                    {adres.addressTitle}
                </span>

                <div className={'border rounded-xl my-2 peer-checked:bg-primary-300 peer-checked:border-primary-600 peer-checked:border-2'} >
                    <div className='flex flex-col p-2'>

                        <div className='font-semibold' >
                            {adres.city}
                        </div>
                        <div className=''>
                            {adres.text}
                        </div>
                        <div className=''>
                            {adres.county}/{adres.city}
                        </div>
                    </div>
                </div>
            </label>
        </div>
    )
}

export default Address