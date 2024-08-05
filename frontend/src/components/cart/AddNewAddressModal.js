import jwtDecode from 'jwt-decode';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { addAddress } from 'redux/slices/orderSlice';
import { validations } from './AddressValidation';
import { useFormik } from 'formik';

function AddNewAddressModal() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    // const {userToken} = useSelector(state=> state.auth)
    const userToken = localStorage.getItem('tokennn')
    const userId = userToken ? jwtDecode(userToken).userId : ''

    const formik = useFormik({
        initialValues: {
            city: "",
            county: "",
            neighbourhood: "",
            addressTitle: "",
            // phone: '',
            address: "",
            user: ""
        },
        validationSchema: validations,


        // validateOnChange:false,
        onSubmit: async (values) => {
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

                dispatch(addAddress({
                    city: values.city,
                    county: values.county,
                    neighbourhood: values.neighbourhood,
                    addressTitle: values.addressTitle,
                    text: values.address,
                    user: userId ? userId : ''
                }))

                //alert(JSON.stringify(values, null, 2));
                console.log('bura giriyooooooooo');

                // console.log("register response: ", registerResponse);

                // login(registerResponse);

                console.log('burami gelemedin');

                //history.push("/profile");
                //console.log(registerResponse);

                navigate("/cart");
            } catch (e) {
                console.log('bura girmiyooooooo');

            }
        },

        validator: () => ({})
    });

    return (
        <div>
            {/* <!-- Main modal --> */}
            {/* <div id="authentication-modal" tabindex="-1" aria-hidden="true" className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"> */}
            <div className="relative w-full max-h-full">
                {/* <!-- Modal content --> */}
                <div className="bg-white shadow dark:bg-gray-700">


                    <form onSubmit={formik.handleSubmit} >
                        <div className="py-4 mx-auto w-96">
                            <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">Adres Ekle</h3>

                            <div>
                                <label htmlFor="city" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">City</label>
                                <input type="text" name="city" id="city" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Antalya" required
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.city} />
                            </div>
                            {
                                formik.errors.city && formik.touched.city &&
                                <p className=" text-red-400 text-xs ml-3 mt-[1px]">
                                    {formik.errors.city}
                                </p>
                            }
                            <div>
                                <label htmlFor="county" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">County</label>
                                <input type="text" name="county" id="county" placeholder="Konyaaltı" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.county}
                                />
                            </div>
                            {
                                formik.errors.county && formik.touched.county &&
                                <p className=" text-red-400 text-xs ml-3 mt-[1px]">
                                    {formik.errors.county}
                                </p>
                            }
                            <div>
                                <label htmlFor="neighbourhood" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Neighbourhood</label>
                                <input type="text" name="neighbourhood" id="neighbourhood" placeholder="Pınarbaşı" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.neighbourhood}
                                />
                            </div>
                            {
                                formik.errors.neighbourhood && formik.touched.neighbourhood &&
                                <p className=" text-red-400 text-xs ml-3 mt-[1px]">
                                    {formik.errors.neighbourhood}
                                </p>
                            }

                            <div>
                                <label htmlFor="addressTitle" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Address Title</label>
                                <input type="text" name="addressTitle" id="addressTitle" placeholder="Pınarbaşı" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.addressTitle}
                                />
                            </div>
                            {
                                formik.errors.addressTitle && formik.touched.addressTitle &&
                                <p className=" text-red-400 text-xs ml-3 mt-[1px]">
                                    {formik.errors.addressTitle}
                                </p>
                            }


                            {/* <div>
                                    <label for="neighbourhood" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Neighbourhood</label>
                                    <input type="neighbourhood" name="neighbourhood" id="neighbourhood" placeholder="Neighbourhood" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required/>
                                </div> */}

                            <div>
                                <label htmlFor="neighbourhood" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Address</label>
                                {/* <input type="neighbourhood" name="neighbourhood" id="neighbourhood" placeholder="Neighbourhood" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required/> */}
                                <textarea className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                    name='address'
                                    id='address'
                                    placeholder="Address"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.address}>

                                </textarea>
                            </div>
                            {
                                formik.errors.address && formik.touched.address &&
                                <p className=" text-red-400 text-xs ml-3 mt-[1px]">
                                    {formik.errors.address}
                                </p>
                            }


                            {/* <Link to='/cart'> */}
                            <button type="submit" className="w-full text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                            // onClick={() => {
                            //     console.log();
                            //     dispatch(addAddress({ address: {
                            //         city: 
                            //     }, user: decodedId }))


                            // }
                            // }
                            >
                                Kaydet
                            </button>
                            {/* </Link> */}

                        </div>
                    </form>

                </div>
            </div>
        </div>
        // </div>
    )
}

export default AddNewAddressModal