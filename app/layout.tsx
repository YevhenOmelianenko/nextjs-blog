import type { Metadata } from 'next';
import Script from 'next/script';
import { Syne, Source_Serif_4, JetBrains_Mono, DM_Sans } from 'next/font/google';
import './globals.css';
import { HeaderMenu } from '@/components/header-menu';
import { FooterMenu } from '@/components/footer-menu';

const syne = Syne({
  variable: '--font-syne',
  subsets: ['latin'],
  weight: ['600', '700', '800'],
});

const sourceSerif = Source_Serif_4({
  variable: '--font-source-serif',
  subsets: ['latin'],
  weight: ['400', '600'],
  style: ['normal', 'italic'],
});

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains',
  subsets: ['latin'],
  weight: ['400', '500'],
});

const dmSans = DM_Sans({
  variable: '--font-dm-sans',
  subsets: ['latin'],
  weight: ['400', '500', '600'],
});

const themeInitScript = `
(function() {
  try {
    var t = localStorage.getItem('theme');
    if (t === 'light' || t === 'dark') {
      document.documentElement.setAttribute('data-theme', t);
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  } catch (e) {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
})();
`;

export const metadata: Metadata = {
  metadataBase: new URL(process.env.PUBLIC_SITE_URL ?? 'http://localhost:3000'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const fontVars = `${syne.variable} ${sourceSerif.variable} ${jetbrainsMono.variable} ${dmSans.variable}`;

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${fontVars} antialiased flex min-h-screen flex-col`}>
        <Script id="devlog-theme-init" strategy="beforeInteractive">
          {themeInitScript}
        </Script>
        <HeaderMenu />
        {children}
        <FooterMenu />
      </body>
    </html>
  );
}
