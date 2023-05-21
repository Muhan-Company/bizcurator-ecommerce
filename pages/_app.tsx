import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RecoilRoot } from 'recoil';
import Notification from '@/components/Toasters/Notification';

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <ScrollToTop />
        <Component {...pageProps} />
        <Notification />
      </RecoilRoot>
    </QueryClientProvider>
  );
}
