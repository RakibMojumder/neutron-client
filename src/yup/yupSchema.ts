import * as Yup from "yup";

export const addContactValidationSchema = Yup.object({
  name: Yup.string().required("Name is required field"),
  email: Yup.string().email().optional(),
  phone: Yup.string().required("Phone is required field"),
  address: Yup.string().required("Address is required field"),
});
