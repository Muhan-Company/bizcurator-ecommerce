import { Toaster } from 'react-hot-toast';

export default function Notification() {
  return (
    <Toaster
      containerStyle={{
        top: 500,
      }}
      toastOptions={{
        duration: 3000,
        style: {
          width: '351px',
          height: '68px',
          backgroundColor: '#FFFFFF',
          borderRadius: '8px 8px 0px 0px',
          boxShadow: '0px 0px 40px rgba(0, 0, 0, 0.08)',
          color: '#1C1C1C',
          fontWeight: '400',
          fontSize: '16px',
        },
      }}
    />
  );
}
