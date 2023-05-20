export const REFRESH_URL = `${process.env.NEXT_PUBLIC_API_URL}/api/users/refresh`;

export const REG_EXP = {
  SIGN_UP: {
    EMAIL: new RegExp('^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
    PW: new RegExp('^[a-zA-Z0-9]{8,16}$'),
  },
};

export const ERROR_MESSAGES = {
  SIGN_UP: {
    ID: '아이디(e-mail)형식에 맞지 않습니다.',
  },
};
