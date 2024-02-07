import type { Metadata } from 'next';
import GlobalHeader from '~/core/GlobalHeader';
import StyledComponentsRegistry from '~/libs/registry';
import './globals.css';

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
      <StyledComponentsRegistry>
        <body>
          <GlobalHeader />
          {children}
        </body>
      </StyledComponentsRegistry>
    </html>
  );
}
