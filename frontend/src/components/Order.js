import Product from 'components/Product';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from 'redux/slices/productSlice';
import { PiPizza } from 'react-icons/pi'
import { BiDrink } from 'react-icons/bi'
import { FaCandyCane } from 'react-icons/fa'
import { CiFries } from 'react-icons/ci'
import { getOrder } from 'redux/slices/orderSlice';



function Order() {
    //const { amount } = useSelector((state) => state.cart);



    const [tab, setTab] = useState(1)
    const dispatch = useDispatch()

    const { orders } = useSelector(state => state.order)
    console.log('ordersssssssssss', orders);

    // console.log(products);

    useEffect(() => {
        dispatch(getOrder())
        console.log('dispeccc', dispatch(getOrder()));
    }, [dispatch])


    return (

        <div>
            {/* {console.log("data", data[tab])} */}
            {/* {console.log("sadasdadsfasdf")} */}


            

                {/* {data.map(({ label, value, svg, id, desc }) => (
                    id == tab
                        ?
                        <li li className="mr-2" key={value} value={value} id={id} desc={desc} >
                            <a href="#" className="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group" onClick={(id) => setTab(id)}>
                                {desc}


                            </a>
                        </li>
                        :
                        ''

                ))} */}

                <div>
                    PAST ORDERS
                </div>

                {orders.data?.map((item) => (


                    <div className='my-10 flex items-center justify-between border-2 p-3 rounded-2xl' >
                        <img className='w-[150px] h-[150px] object-contain' src={item?.image} alt='' />
                        <div className='w-[400px] h-[150px]'>
                            {/* <div className='text-xl font-bold mt-3 '>{JSON.stringify(item?.adress.neighbourhood)}</div> */}
                        </div>
                        <div>
                            {item.isCredit} <span className='font-bold'>{item.TotalPrice}</span>
                        </div>

                        <div className='text-red-700 mr-7 h-12 flex items-center justify-center  text-2xl rounded-md'>
                            {item.date}
                        </div>
                    </div>

                ))
                }

            </div>

        
    )
}

export default Order