import * as yup from "yup";

export const formSchema = yup.object().shape({
  Test6: yup.string().required("Rollarni tanlang"),
});
