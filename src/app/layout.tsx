import type { Metadata } from 'next';

import GlobalHeader from '~/core/GlobalHeader';
import StyledComponentsRegistry from '~/libs/registry';
import ReactQueryProvider from '~/providers/reactQueryProvider';

import './globals.css';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'MyBlog',
  description: 'Mindae Blog',
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
            <GlobalHeader />
            {children}
          </StyledComponentsRegistry>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
