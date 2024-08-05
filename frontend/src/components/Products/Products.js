import Product from 'components/Product';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from 'redux/slices/productSlice';
import { PiPizza } from 'react-icons/pi'
import { BiDrink } from 'react-icons/bi'
import { FaCandyCane } from 'react-icons/fa'
import { CiFries } from 'react-icons/ci'



function Products() {
    //const { amount } = useSelector((state) => state.cart);

    const data = [
        {
            id: 1,
            label: "Pizzas",
            value: "html",
            desc: `It really matters and then like it really doesn't matter.
            What matters is the people who are sparked by it. And the people 
  who are like offended by it, it doesn't matter.`,

        },
        {
            id: 2,
            label: "Desserts",
            value: "react",
            desc: `Because it's about motivating the doers. Because I'm here
          to follow my dreams and inspire other people to follow their dreams, too.`,

        },
        {
            id: 3,
            label: "Drinks",
            value: "vue",
            desc: `We're not always in the position that we want to be at.
          We're constantly growing. We're constantly making mistakes. We're
          constantly trying to express ourselves and actualize our dreams.`,

        },
        {
            id: 4,
            label: "Sides",
            value: "angular",
            desc: `Because it's about motivating the doers. Because I'm here
          to follow my dreams and inspire other people to follow their dreams, too.`,

        },
    ];

    const [tab, setTab] = useState(1)
    const dispatch = useDispatch()

    const { products, productsStatus } = useSelector(state => state.products)

    console.log('proooooooooo',products.products);
    let pro = products.products

    useEffect(() => {
        console.log('hel');
        dispatch(getProducts())

    }, [dispatch])


    return (

        <div>
            {/* {console.log("data", data[tab])} */}
            {/* {console.log("sadasdadsfasdf")} */}


            <div>slider</div>
            {/* {amount} */}
            <div className="border-b border-gray-200 dark:border-gray-700">
                {/* <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
                    {data.map(({ label, value, svg, id }) => (

                        <li className="mr-2" key={value} value={value} id={id}>
                            <a href="#" className={"inline-flex items-center justify-center p-4 border-b-2  rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"+(tab == id ? "text-blue-600 border-blue-600":'border-transparent')} onClick={() => { setTab(id); console.log(data[1]) }}>
                                {svg}
                                {label}
                                {id}

                            </a>
                        </li>
                    ))}
                </ul> */}
                <div className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400" >
                    <div className="mr-2 cursor-pointer"  >
                        <div className={"inline-flex items-center justify-center p-4 border-b-2  rounded-t-lg group" + (tab == 1 ? " text-primary-600 border-primary-600" : 'border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 ')} onClick={() => { setTab(1); console.log(tab) }}>

                            <PiPizza className='text-xl mr-2' />
                            Pizzas
                        </div>
                    </div>
                    <div className="mr-2 cursor-pointer"  >
                        <div className={"inline-flex items-center justify-center p-4 border-b-2  rounded-t-lg group" + (tab == 2 ? " text-primary-600 border-primary-600" : 'border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 ')} onClick={() => { setTab(2); console.log(tab) }}>

                            <BiDrink className='text-xl mr-2' />
                            Drinks
                        </div>
                    </div>
                    <div className="mr-2 cursor-pointer"  >
                        <div className={"inline-flex items-center justify-center p-4 border-b-2  rounded-t-lg group" + (tab == 3 ? " text-primary-600 border-primary-600" : 'border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 ')} onClick={() => { setTab(3); console.log(tab) }}>

                            <FaCandyCane className='text-xl mr-2' />
                            Desserts
                        </div>
                    </div>
                    <div className="mr-2 cursor-pointer"  >
                        <div className={"inline-flex items-center justify-center p-4 border-b-2  rounded-t-lg group" + (tab == 4 ? " text-primary-600 border-primary-600" : 'border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 ')} onClick={() => { setTab(4); console.log(tab) }}>
                            <CiFries className='text-xl mr-2' />

                            Sides
                        </div>
                    </div>
                </div>
            </div>





            <div className='grid grid-cols-4 gap-5 mt-7'>
                {
                    pro?.map((product, i) => (
                        <Product key={i} product={product} />
                    ))
                }
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

                {/* <div className='flex flex-col justify-between p-3 '>
                        <div className='h-[150px]  bg-gray-500 '>
                            image
                        </div>
                        <div className='flex justify-between mt-3 items-center'>
                            <div className='text-xl'>250 TL</div>
                            <button onClick={()=>(console.log('asdfadsf'))}>
                                <div className='bg-red-700 rounded rounded-lg h-10 flex justify-center px-3 '>
                                    <div className=' m-auto text-red-50'>
                                        Sepete ekle
                                    </div>
                                </div>
                            </button>

                        </div>

                    </div> */}
                {/* item={data[tab]} */}


            </div>

        </div >
    )
}

export default Products