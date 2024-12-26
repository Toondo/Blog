import type { Metadata } from 'next';

import Header from '~/core/Header/';
import StyledComponentsRegistry from '~/libs/registry';
import ReactQueryProvider from '~/providers/reactQueryProvider';

import './globals.css';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Daliy',
  description: '天気情報',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ReactQueryProvider>
          <StyledComponentsRegistry>
            <Header />
            {children}
          </StyledComponentsRegistry>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
