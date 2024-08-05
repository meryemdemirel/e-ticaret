import * as yup from 'yup'

export const validations = yup.object().shape({
    name: yup
    .string()
    .required("*Zorunlu alan"),
    description: yup
    .string()
    .required(),
    price: yup
    .number()
    .required()
});
