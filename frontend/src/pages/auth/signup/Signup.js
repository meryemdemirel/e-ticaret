import { useState, useEffect } from "react";
import logo from '../../../assests/logo.png';
import eye from '../../../assests/eye.svg'
import eyewithline from '../../../assests/eyewithline.svg'
import {MdOutlineLocalPizza} from 'react-icons/md'


import PropTypes from 'prop-types';
import { getIn } from 'formik';

import { useFormik } from "formik";
import { validations } from "./SignupValidation.js";

import { fetchRegister } from "../../../api.js";

// import { useAuth } from "../../../contexts/AuthContext.js";
import { Link, redirect, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register } from "redux/slices/authSlice";

function Signup() {
  // const {
  //   login
  // } = useAuth();

  const navigate = useNavigate();
  //for phone
  const [value, setValue] = useState('')

  //to accept terms and conditions
  const [acceptTerm, setAcceptTerm] = useState("");


  const [showButton, setShowButton] = useState(false);

  let handleOnChange = () => {
    const checkBox = document.getElementById('password');
    console.log(checkBox.value);
    if (checkBox.value === '') {
      setPasswordShown(false)
      return setShowButton(false);
    } else {
      return setShowButton(true);
    }
  }

  const handleChange = event => {
    if (event.target.checked) {
      console.log('✅ Checkbox is checked');
    } else {
      console.log('⛔️ Checkbox is NOT checked');
    }
    setAcceptTerm(current => !current);
  };

  const { loading, userInfo, error, success } = useSelector(
    (state) => state.auth
  )

  const dispatch = useDispatch()

  // useEffect(() => {
  //   // redirect user to login page if registration was successful
  //   if (success) navigate('/signin')
    
  //   // redirect authenticated user to profile screen
  //   if (userInfo) navigate('/profile')
  // }, [navigate, userInfo, success])


  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      phone:"",
      // phone: '',
      acceptedTos: false,
    },
    validationSchema: validations,


    // validateOnChange:false,
    onSubmit: async(values) => {
      //console.log('asdfasdfasdfasdfsdf');
      //alert(JSON.stringify(values, null, 2))
      try {
        console.log('selamke');

        //onceki post
        // const registerResponse = await fetchRegister({
        //   email: values.email,
        //   password: values.password,
        //   name: values.name,
        //   lastname: values.lastname,
        //   acceptedTos: values.acceptedTos
        // });

        dispatch(register({
          email: values.email,
          password: values.password,
          name: values.name,
          phone: values.phone
        }))

        

        //alert(JSON.stringify(values, null, 2));
        console.log('bura giriyooooooooo');

        // console.log("register response: ", registerResponse);

        // login(registerResponse);

        console.log('burami gelemedin');

        //history.push("/profile");
        //console.log(registerResponse);

        navigate("/signin");
      } catch (e) {
        console.log('bura girmiyooooooo');

      }
    },

    validator: () => ({})
  });

  function func() {
    alert(JSON.stringify(formik.values, null, 2))
  }

  const [passwordShown, setPasswordShown] = useState(false);

  // const haveAnyPassword = () => {
  //   var password = document.getElementById("password");
  //   return password.value ? true : false
  // };



  const togglePassword = (e) => {
    // When the handler is invoked
    // inverse the boolean state of passwordShown
    setPasswordShown(!passwordShown);
  };


  return (
    <section className="bg-gray-50 dark:bg-gray-900 w-full top-[100px]">
      <div className="flex flex-col items-center justify-center py-8 mx-auto  lg:py-0 w-[512px] mt-[20px]">

        <Link to="/" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          {/* <img className=" w-fit h-[50px] mr-2" src={logo} alt="logo" /> */}
          <MdOutlineLocalPizza className='text-7xl mb-6  text-primary-600' />

        </Link>

        <div className="w-[512px] bg-white rounded-lg shadow dark:border md:mt-0  dark:bg-gray-800 dark:border-gray-700  ">
          <div className="w-[512px] p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Create an account
            </h1>

              

            <form className="space-y-4 md:space-y-6" onSubmit={formik.handleSubmit}>
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Name" required=""
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                />
                {
                  formik.errors.name && formik.touched.name &&
                  <p className=" text-red-400 text-xs ml-3 mt-[1px]">
                    {formik.errors.name}
                  </p>
                }
              </div>

              <div>
                <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Phone
                </label>
                <input type="text" name="phone" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Lastname" required=""
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.phone}
                />
                {
                  formik.errors.lastname && formik.touched.lastname &&
                  <p className=" text-red-400 text-xs ml-3 mt-[1px]">
                    {formik.errors.lastname}
                  </p>
                }
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Email
                </label>
                <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@mail.com" required=""
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}

                />
                {
                  formik.errors.email && formik.touched.email &&
                  <p className=" text-red-400 text-xs ml-3 mt-[1px]">
                    {formik.errors.email}
                  </p>
                }
              </div>


              <div className="relative">

                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white ">
                  Password
                </label>
                <div className="flex h-[41.6px]">
                  <input type={passwordShown ? "text" : "password"} name="password" id="password" placeholder="••••••••" className="bg-gray-50
                  border-t border-l border-b border-r border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-[448px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    onInput={handleOnChange}
                  />
                  {showButton &&
                    <div className="z-10 absolute right-1 pt-[2px]">

                      <button type="button" onClick={togglePassword} className="border-gray-300 right-0 bg-gray-50  text-gray-900 sm:text-sm  rounded-r-lg w-[48px] h-[37.6px] my-auto">

                        <img src={(passwordShown ? eyewithline : eye)} id="eye"
                          className="mx-auto h-[18px]"
                        />
                      </button>
                    </div>
                  }

                </div>
                {
                  formik.errors.password && formik.touched.password &&
                  <p className="text-red-400 text-xs ml-3 mt-[1px]">
                    {formik.errors.password}
                  </p>
                }
              </div>


              {/* <div className="">
                <PhoneInput
                  placeholder="Enter phone number"
                  value={formik.values.phone}
                  name="phone"
                  // onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  onInput={setValue}
                />
              </div>
              {
                  <div>{formik.values.phone}</div>
              } */}

              {/* <PhoneInputField
                field={"phone"+ ''}
                form={formik.errors.phone + formik.handleBlur + ('phone' ,setValue) + formik.touched.phone}
              /> */}




              <div className="flex items-start w-fit" >
                <div className="flex items-center h-5">
                  <input id="terms" value={acceptTerm} name="acceptedTos"
                    onClick={() => {
                      console.log(acceptTerm)
                      setAcceptTerm(!acceptTerm)
                      formik.values.acceptedTos = true
                    }}
                    aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                </div>
                <div className="ml-3 text-sm" >
                  <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300">I accept the
                    {' '}  {/* to seperate label and a tags */}
                    <a className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">
                      Terms and Conditions
                    </a>
                  </label>
                </div>

                {/* {formik.errors.acceptedTos && !formik.touched.acceptedTos &&
                <div className="error">{formik.errors.acceptedTos}</div>} */}
              </div>
              {
                acceptTerm == undefined ? '' :
                  (acceptTerm == true ?  ''  : <p className="text-red-400 text-xs ml-7 !mt-[1px]">
                    Anlasmayi kabul et
                  </p>)
              }

              <button type="submit"  className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              //onClick={func}
              >
                Create an account
              </button>

            </form>


            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Already have an account?
                {' '}  {/* to seperate link and p tags */}
                <Link to="/signin" className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                  Login here</Link>
              </p>


          </div>

        </div>
      </div>
    </section>

  );
}

export default Signup;