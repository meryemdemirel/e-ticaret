import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
//import { CartIcon } from '../icons';
import { useDispatch, useSelector } from 'react-redux';
import { CgProfile } from 'react-icons/cg';

import { AiOutlineShoppingCart } from 'react-icons/ai';

import { MdOutlineLocalPizza } from 'react-icons/md';

import logo from 'assests/logo.png';
import { getCartTotal } from 'redux/slices/cartSlice';
import { logout } from 'redux/slices/authSlice'


// import { useAuth } from "../contexts/AuthContext";

function Navbar({ signin }) {
  // const { loggedIn, user } = useAuth();
  // const { amount } = useSelector((state) => state.cart);
  const dispatch = useDispatch()
  const { itemCount, totalAmount, carts } = useSelector(state => state.carts)
  const { userInfo } = useSelector(state => state.auth)


  let loggedIn = false
  let token = localStorage.getItem('tokennn')

  const [drop, setDrop] = useState(false)

  const dropDown = () => {
    setDrop(!drop)
  }



  useEffect(() => {
    console.log('itemcount', itemCount);
    console.log('totalAmountt', totalAmount);

    dispatch(getCartTotal())
  }, [carts])



  return (

    <div className=" bg-white mx-auto max-w-7xl shadow-[0_5px_3px_-1px_gray] ">
      <div className=" mx-10">
        <nav className="flex items-center justify-between  border-gray-100 py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1 text-6xl">
            <a href="/">
              {/* <img className="h-8 w-auto sm:h-10" src='' alt="Logo" /> */}
              <MdOutlineLocalPizza className='text-5xl text-primary-600' />


            </a>
          </div>

          <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0 mr-5 h-12">
            {!token && (
              <>


                <Link to='/signin' exact="true" className="ml-8 whitespace-nowrap text-base font-medium text-primary-500 hover:text-primary-900">Sign in</Link>

                <Link to="/signup" exact="true" className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-primary-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-primary-700">Sign up</Link>
              </>
            )}

            {/* <div className='flex '>
              <div>
                <img src={require("../../src/assests/apple.png")} className=' h-[20px] w-[20px] ' />
              </div>
              <Link to='/search' exact="true" className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">Search</Link>
            </div> */}

            {token && (
              <>

                {/* {user?.role === "admin" && (
                  <Link to="/admin">
                    <Button colorScheme="pink" variant="ghost">
                      Admin
                    </Button>
                  </Link>
                )} */}

                <Link to="/profile" className='items-center my-auto'>
                  <CgProfile className='text-4xl text-primary-600' />

                </Link>
                <Link to="/signin" exact="true" className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-primary-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-primary-700"
                  onClick={()=> dispatch(logout()) }
                >
                  Log out
                </Link>
              </>
            )}


            <button className='items-center mr-5 h-full flex'>
              <Link to="/cart" className='ml-4 my-auto flex items-center'>
                <AiOutlineShoppingCart className='text-4xl text-primary-600' />

              </Link>
              <div className='h-full '>
                <div className='relative items-center text-center justify-center flex text-xs m-0  -top-1 -left-4 z-10 bg-yellow-100 text-primary-800 font-bold rounded-full h-6 w-6 border border-2 border-primary-500'>
                  <div className='h-4 w-4 mx-0 my-0 text-sm'>
                    <p className='leading-4'>
                      {itemCount}
                    </p>
                  </div>
                </div>
              </div>
            </button>

          </div>


        </nav>

      </div >



    </div >
  )

};

export default Navbar;