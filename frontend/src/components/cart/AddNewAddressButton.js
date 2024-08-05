import React from 'react'
import jwtDecode from 'jwt-decode';
import { GoPlusCircle } from 'react-icons/go'
import Modal from 'react-modal';
import AddNewAddressModal from './AddNewAddressModal';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { validations } from './AddressValidation';
import { Link, useNavigate } from 'react-router-dom';
import { addAddress } from 'redux/slices/orderSlice'


const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
// Modal.setAppElement('#yourAppElement');

function AddNewAddress() {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    // const {userToken} = useSelector(state=> state.auth)
    const userToken = localStorage.getItem('tokennn')
    const userId = userToken ? jwtDecode(userToken).userId : ''


    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        //subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
    }

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

                // navigate("/signin");
            } catch (e) {
                console.log('bura girmiyooooooo');

            }
        },

        validator: () => ({})
    });


    return (
        <div className=' flex flex-col justify-end'>
            <label htmlFor='new_address' className={'rounded-xl cursor-pointer'}>
                <div className={' h-[90px] border rounded-xl my-2 peer-checked:bg-primary-300 peer-checked:border-primary-600 peer-checked:border-2'} id='new_address'>
                    <div className='flex flex-col p-2 items-center justify-center h-full'>
                        <GoPlusCircle size={30} />
                        <button >
                            <Link to='/addAddress' exact='true'>
                                Yeni Adres Ekle

                            </Link>
                        </button>

                        {/* <Modal
                            isOpen={modalIsOpen}
                            onAfterOpen={afterOpenModal}
                            onRequestClose={closeModal}
                            style={customStyles}
                            contentLabel="Example Modal"
                            ariaHideApp={false}
                        > */}
                        {/* <AddNewAddressModal/> */}



                        {/* </Modal> */}
                    </div>
                </div >
            </label >
        </div >
    )
}

export default AddNewAddress