import * as yup from 'yup'
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
// min 8 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

let sacmasapanbirarray = ["mert.akgucc@gmail.com", "sananebeslk"]

export const validations = yup.object().shape({
    city: yup
        .string()
        .required("City is required"),
    county: yup
        .string()
        .required("County is required"),
    neighbourhood: yup
        .string()
        .required("Neighbourhood is required"),
    addressTitle: yup
        .string()
        .required('addressTitle is required'),

    // phone: yup
    //     .number('itisntstring')
    //     .required('enter phone'),

    address: yup
        .string()
        .required('Address is required'),
})
