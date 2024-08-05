import CardComp from 'components/cart/CardComp'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getCartTotal } from 'redux/slices/cartSlice'
import adresler from '../../components/address.json'
import karlar from '../../components/karlar.json'
import Address from 'components/cart/Address'
import Cards from 'components/cart/Cards'
import CashOnDelivery from 'components/cart/CashOnDelivery'
import AddNewAddress from 'components/cart/AddNewAddressButton'
import { addAddress, getAddress, order } from 'redux/slices/orderSlice';
import jwtDecode from 'jwt-decode'


function Cart() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { carts, totalAmount, itemCount } = useSelector(state => state.carts)
    const { loading, error, userInfo, address, paymentType, card, addresses } = useSelector((state) => state.order)

    // const { userToken } = useSelector(state => state.auth)

    const userToken = localStorage.getItem('tokennn')
    console.log('usertokennnn', userToken);

    const decodedId = JSON.stringify({ userId: userToken ? jwtDecode(userToken).userId : '' })
    console.log('decodedid', decodedId);

    // console.log(carts, totalAmount, itemCount, "carts");
    let y = adresler.address.map(address => (
        { name: address.text }
    ))

    useEffect(() => {
        dispatch(getCartTotal())
        if (userToken) {
            console.log('girdikmi be bura');
            console.log('ificinde decoded', decodedId);

            dispatch(getAddress(decodedId ? decodedId : ''))
            console.log('dispec', dispatch(getAddress(decodedId ? decodedId : '')));
        }
    }, [dispatch])
    return (
        <div className='flex  flex-row  mt-7 '>
            {
                carts.length > 0
                    ?
                    <>
                        <div className='flex flex-col p-3 mr-3 grow  '>
                            <div className='mb-5'>
                                {localStorage.getItem('tokennn') ?
                                    <>
                                        <div className='p-3 font-bold'>Adreslerim </div>
                                        <div className='p-4 border-2 rounded-3xl grid grid-cols-2 row  gap-3'>
                                            {
                                                addresses?.map((adres, key) => (
                                                    <Address adres={adres} key={key} />

                                                ))

                                            }

                                            <AddNewAddress />

                                        </div>
                                    </>
                                    : ""

                                }
                            </div>



                            <div className='mb-5'>
                                <div className='p-3 font-bold '>Ödeme Yöntemleri</div>
                                <div className='border-2 p-4 rounded-3xl'>
                                    {/* <div className='mb-2 text-xl border-b-2'>Kartlarım</div>
                                    <div className='grid grid-cols-2 gap-3'> */}

                                        {/* {
                                            karlar.address?.map((card, index) => (

                                                <Cards card={card} index={index} />

                                            ))
                                        } */}

                                    {/* </div> */}
                                    <CashOnDelivery />
                                </div>
                            </div>

                            <div>
                                <div className='p-3 font-bold'>Ödeme Seçenekleri</div>
                                <div className='px-4 border-2'>
                                    {
                                        carts?.map((cart, i) => (
                                            <CardComp key={i} cart={cart} />

                                        ))
                                    }
                                </div>
                            </div>
                        </div>

                        <div className='flex flex-col basis-52 sticky ml-3 top-3 h-fit'>

                            <div className='flex flex-col h-fit p-4 border-2 border-primary-600 my-10 rounded-2xl  text-lg'>

                                <div className='font-normal'>TOPLAM TUTAR:</div>

                                <div className=' mr-0 font-bold text-xl '>{parseFloat(totalAmount).toFixed(2)}TL</div>
                            </div>

                            <div className='flex flex-col justify-center items-center h-14  bg-primary-600 my-2 rounded-xl  text-lg text-white cursor-pointer'
                                onClick={
                                    () => {
                                        let token = localStorage.getItem('tokennn')

                                        let decoded = token ? jwtDecode(token) : ''
                                        console.log('decoded.', decoded)                                        
                                        let cartss = JSON.stringify({ carts: carts,totalAmount:totalAmount, user: decoded.userId, address: address.addressId, paymentType, card })
                                        console.log('cartss', cartss)
                                        let x = {}
                                        dispatch(order(cartss))
                                        console.log('selamkee', dispatch(order(cartss)))
                                    }
                                }>
                                {
                                    loading == true ?

                                        'yuvvarrlak'
                                        :
                                        "Sepeti Onayla"
                                }
                            </div>
                        </div>

                    </>

                    :
                    <div>
                        Sepetiniz boş
                    </div>
            }
        </div >
    )
}

export default Cart