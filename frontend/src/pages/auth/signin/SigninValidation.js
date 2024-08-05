import * as yup from 'yup'

export const validations = yup.object().shape({
    email: yup
    .string()
    .email("Geçerli email gir")
    .required("*Zorunlu alan"),
    password: yup
    .string()
    .min(5, "Paraloniz en az 5 harfli olmali")
    .required(),
});
