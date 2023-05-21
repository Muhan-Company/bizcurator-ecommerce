import * as yup from 'yup';

export const loginFormSchema = yup.object({
  username: yup.string().required('이메일을 입력해주세요').email('아이디 형식(이메일)에 맞지 않습니다.'),
  password: yup.string().required('비밀번호를 입력해주세요.'),
});

export const signupFormSchema = yup.object({
  username: yup.string().required('아이디를 입력해주세요').email('이메일 형식이 아닙니다.'),
  password: yup
    .string()
    .required('영문, 숫자포함 8자리를 입력해주세요.')
    .min(8, '최소 8자 이상 가능합니다')
    .max(15, '최대 15자 까지만 가능합니다')
    .matches(
      /(?=.*\d{1,50})(?=.*[~`!@#$%\^&*()-+=]{1,50})(?=.*[a-zA-Z]{2,50}).{8,15}$/,
      '비밀번호 형식(영문, 숫자, 특수문자를 포함하여 8자 이상)에 맞지 않습니다.',
    ),
  password_confirm: yup
    .string()
    .required('비밀번호를 재입력해주세요.')
    .oneOf([yup.ref('password')], '비밀번호가 다릅니다.'),
  business_name: yup.string().required('상호명을 입력해주세요.'),
  representative: yup.string().required('대표자명을 입력해주세요.'),
  business_number: yup.string().required('사업자 번호를 입력해주세요.'),
  postalCode: yup.string().required(),
  address: yup.string().required(),
  detailAddress: yup.string(),
  business_registration_Image: yup.mixed().required('사업자 등록증을 첨부해주세요.'),
  manager: yup.string().required('담당자 이름을 입력해주세요.'),
  manager_email: yup.string().required('메일주소를 입력해주세요.').email('이메일 형식이 아닙니다.'),
  manager_phone_number: yup.string().required('전화번호를 입력해주세요.'),
});
