import { useEffect, useState } from 'react';
import logo from '../../../assests/logo.png';
import { MdOutlineLocalPizza } from 'react-icons/md'

import { useFormik } from 'formik';

import { validations } from './SigninValidation.js';

import { fetchLogin } from '../../../api';
// import { useAuth } from "../../../contexts/AuthContext.js";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from 'redux/slices/authSlice';

function Signin({ history }) {

  // const { login } = useAuth();

  const navigate = useNavigate();

  const { loading, error,userInfo } = useSelector((state) => state.auth)
  const dispatch = useDispatch()

  // const submitForm = (data) => {
  //   dispatch(login(data))
  // }

  useEffect(() => {
    if (Object.keys(userInfo).length !== 0) {
      navigate('/profile')
    }
    if(Object.keys(userInfo).length === 0){
      console.log('bebekim');
    }
    console.log('icerdeee',userInfo);
  }, [ userInfo])

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validations,
    onSubmit: async (values, bag) => {
      try {
        console.log('bekledimde gelmedin');

        console.log('userinfoooo',userInfo);

        
        // const loginResponse = await fetchLogin({
        //   email: values.email,
        //   password: values.password
        // });

        dispatch(login({
          email: values.email,
          password: values.password
        }))
        console.log('userinfoooo2',userInfo);
        console.log('surprise surprise');
        // login(loginResponse);

        console.log('bura nasil');

        //history.push("/profile");
        // console.log(loginResponse);
        // if(loading == false){
        //   navigate("/profile")
        // }
        //history.push("/abc");

      } catch (error) {
        console.log(bag);
      }
    }
  })

  return (
    <section className="bg-gray-50 dark:bg-gray-900 w-full">
      <div className="flex flex-col items-center justify-center py-8 mx-auto  md:h-screen lg:py-0 w-[512px]">

        <Link to="/">
          {/* <img className=" w-fit h-[50px] mr-2 flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white justify-center" src={logo} alt="logo" /> */}
          <MdOutlineLocalPizza className='text-7xl mb-6  text-primary-600' />
        </Link>

        <div className=" w-[512px] bg-white rounded-lg shadow dark:border  dark:bg-gray-800 dark:border-gray-700">
          <div className="w-[512px] p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign in to your account
            </h1>


            <form className="space-y-4 md:space-y-6" action="#" onSubmit={formik.handleSubmit}>
              <div>
                <label htmlFor='email' className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500
                "
                  //className={errors.email && touched.email ? "input error": ""}
                  placeholder="name@mail.com"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                //isInvalid={ formik.errors.email}
                />
                {formik.errors.email && formik.touched.email &&
                  <p className=" text-red-400 text-xs ml-3 mt-[1px]">
                    {formik.errors.email}
                  </p>

                }
              </div>
              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                <input name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  type="password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                //isInvalid={formik.touched.password && formik.error.password}
                />
                {formik.errors.password && formik.touched.password && (
                  <p className="text-red-400 text-xs ml-3 mt-[1px]">
                    {formik.errors.password}
                  </p>
                )}
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                  </div>
                </div>
                <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
              </div>

              <button type="submit" className="w-full text-white bg-gray-700 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don’t have an account yet?
                <Link to="/signup" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Signin