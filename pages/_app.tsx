import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RecoilRoot } from 'recoil';
import ScrollToTop from '@/components/ScrollToTop';
import dynamic from 'next/dynamic';

const queryClient = new QueryClient();
const DynamicNotification = dynamic(() => import('@/components/Notification'), { ssr: false });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <ScrollToTop />
        <Component {...pageProps} />
        <DynamicNotification />
      </RecoilRoot>
    </QueryClientProvider>
  );
}
