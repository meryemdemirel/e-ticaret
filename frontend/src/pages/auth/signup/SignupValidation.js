import * as yup from 'yup'
import { fetchUsers } from '../../../api';
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
// min 8 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

let sacmasapanbirarray = ["mert.akgucc@gmail.com", "sananebeslk"]

export const validations = yup.object().shape({
    name: yup
        .string()
        .required("Name is required"),
    phone: yup
        .string()
        .required("Phone is required"),
    email: yup
        .string()
        .email("Geçerli email gir")
        .required("Email is required")
        .test({
            name: 'emailAlreadyUse',
            message: 'Email is already in use.',
            test: (value) => {
                return sacmasapanbirarray.indexOf(value) ? true : false
            }
        }
        ),
    password: yup
        .string()
        .min(5, "Paraloniz en az 5 harfli olmali")
        .matches(passwordRules, "Minimum of 8 characters, with upper and lowercase and a number")
        .required('Password is required'),

    // phone: yup
    //     .number('itisntstring')
    //     .required('enter phone'),

    acceptedTos: yup
        .boolean()
        .oneOf([true], "Anlasmayi kabul ediniz...")
})
