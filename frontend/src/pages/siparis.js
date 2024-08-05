import React from 'react'
import { useFormik } from 'formik';
import { validations } from "./siparisValidation"
import { fetchSiparis } from 'api';

function Siparis() {

  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      price: 0
    },
    validationSchema: validations,
    onSubmit: async (values, bag) => {
      try {
        console.log('bekledimde gelmedin');
        const loginResponse = await fetchSiparis({
          name: values.name,
          description: values.description,
          price: values.price,

        });

        console.log('surprise surprise');


        console.log('bura nasil');

        //history.push("/profile");

        //history.push("/abc");
        //navigate("/profile")

      } catch (error) {
        console.log("hata hata hata");
      }
    }
  })


  return (
    <div>
      <form>
        <div className='flex flex-col justify-between  border border-primary-400 p-3 h-[150px] w-[300px]'>
          <div className='h-[150px]  bg-gray-500 '></div>
          <div className='flex justify-between mt-3'>
            <div>250tl</div>
            <button>
              <div className='bg-red-700 rounded rounded-lg h-10 flex justify-center px-3 '>
                <div className=' m-auto text-red-50'>
                  Sepete ekle
                </div>
              </div>
            </button>

          </div>

        </div>
        <input />
      </form>
    </div>
  )
}

export default Siparis