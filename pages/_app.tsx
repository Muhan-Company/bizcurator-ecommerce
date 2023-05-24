import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RecoilRoot } from 'recoil';
import ScrollToTop from '@/components/ScrollToTop';
import Notification from '@/components/toasters/Notification';

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
