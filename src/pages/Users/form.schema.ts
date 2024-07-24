import * as yup from "yup";

export const formSchema = yup.object().shape({
  Test1: yup.string().required("F.I.Shni yozing"),
  Test2: yup.string().required("Tashkilot nomini yozing"),
  Test3: yup.string().required("Lavozimini yozing"),
  Test4: yup.string().required("Loginni yozing"),
  Test5: yup.number().required("Parolni yozing"),
  Test6: yup.string().required("Rollni tanlang"),
});
