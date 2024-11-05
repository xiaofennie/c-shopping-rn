import * as Yup from 'yup'

export const logInSchema = Yup.object().shape({
  email: Yup.string().required('Account email is required').email('Please enter a valid email'),
  password: Yup.string()
    .required('Please enter login password')
    .min(6, 'Password must be at least 6 characters'),
})

export const registerSchema = Yup.object().shape({
  name: Yup.string()
    .required('Please enter account name')
    .min(3, 'Name must be at least three characters'),
  email: Yup.string().required('Account email is required').email('Please enter a valid email'),
  password: Yup.string()
    .required('Please enter login password')
    .min(6, 'Password must be at least 6 characters'),
  confirmPassword: Yup.string()
    .required('Please re-enter confirmation password')
    .oneOf([Yup.ref('password'), null], 'Confirmation password does not match'),
})

export const categorySchema = Yup.object().shape({
  name: Yup.string().required('Category name cannot be empty'),
  slug: Yup.string().required('Path name cannot be empty'),
  image: Yup.string()
    .required('Enter image address')
    .url('Invalid image address')
    .matches(/\.(gif|jpe?g|png|webp)$/i, 'Image address must be a valid image URL'),
})

export const bannerSchema = Yup.object().shape({
  title: Yup.string().required('Title cannot be empty'),
  image: Yup.object().shape({
    url: Yup.string()
      .required('Please enter image address')
      .url('Invalid address')
      .matches(/\.(gif|jpe?g|png|webp)$/i, 'Image address must be a valid image URL'),
  }),
})

export const sliderSchema = Yup.object().shape({
  title: Yup.string().required('Title cannot be empty'),
  image: Yup.object().shape({
    url: Yup.string()
      .required('Please enter image address')
      .url('Invalid address')
      .matches(/\.(gif|jpe?g|png|webp)$/i, 'Image address must be a valid image URL'),
  }),
})

export const reviewSchema = Yup.object().shape({
  title: Yup.string()
    .required('Review title cannot be empty')
    .min(4, 'Review title must be at least 4 characters'),
  comment: Yup.string()
    .required('Review text cannot be empty')
    .min(4, 'Review text must be at least 4 characters'),
})

export const addressSchema = Yup.object().shape({
  province: Yup.object().shape({
    name: Yup.string().required('Please select your province'),
  }),
  city: Yup.string().required('Please enter your city'),
  area: Yup.string().required('Please enter your street'),
  postalCode: Yup.string().required('Please enter your postal code'),
})

export const nameSchema = Yup.object().shape({
  name: Yup.string()
    .required('Name must be provided')
    .min(3, 'Name must be more than 3 characters'),
})

export const mobileSchema = Yup.object().shape({
  mobile: Yup.string()
    .required('Mobile number must be registered')
    .min(11, 'Mobile number must be 11 digits')
    .max(11, 'Mobile number must be 11 digits'),
})
