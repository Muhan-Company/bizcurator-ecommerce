import Cookies from 'js-cookie';

interface Tokens {
  accessToken: string;
  refreshToken: string;
}

// Set the tokens as a cookie
export const setTokensCookie = ({ accessToken, refreshToken }: Tokens) => {
  Cookies.set('accessToken', accessToken, {
    expires: 1 / 24, // Set the expiration time for the cookie
    secure: true, // Set to true if using HTTPS
    sameSite: 'strict', // Adjust as per your requirement
  });

  Cookies.set('refreshToken', refreshToken, {
    expires: 30,
    secure: true,
    sameSite: 'strict',
  });
};

// Get the access token from the cookie
export const getAccessTokenCookie = () => {
  return Cookies.get('accessToken');
};

export const getRefreshTokenCookie = () => {
  return Cookies.get('refreshToken');
};

// Remove the tokens cookie
export const removeTokensCookie = () => {
  Cookies.remove('accessToken');
  Cookies.remove('refreshToken');
};
