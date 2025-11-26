import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/ThemeProvider';
import { ThemeToggle } from '@/components/ThemeToggle';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title:
    'Bunny | Full-Stack Developer and Competitve Programmer',
  description:
    'Bunny777 — a full-stack developer and AI engineer. View modern web apps, React/Next.js projects, UI/UX experiments, and open-source work.',
  keywords: [
    'Bunny777',
    'Bunny portfolio',
    'Bunny777 leetcode',
    'Bunny777 codeforces',
    'Bunny777 github',
    'Bunny777 codechef',
    'full-stack developer',
    'frontend developer',
    'nextjs developer',
    'react developer',
    'UI UX engineer',
    'creative technologist',
    'software engineer',
    'developer portfolio',
    'web developer portfolio',
  ],

  authors: [{ name: 'Bunny Bunny777', url: 'https://bunny777.dev' }],
  creator: 'Bunny Bunny777',
  publisher: 'Bunny Bunny777',

  metadataBase: new URL('https://bunny777.dev'),
  alternates: {
    canonical: 'https://bunny777.dev',
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,

    },
  },

  openGraph: {
    type: 'website',
    url: 'https://bunny777.dev',
    title:
      'Bunny Bunny777 | Full-Stack Developer, UI/UX Engineer & Creative Technologist',
    siteName: 'Bunny777 Portfolio',
    locale: 'en_US',
    description:
      'Discover apps, websites, UI/UX experiments, and development projects created by full-stack developer Bunny Bunny777.',
    images: [
      {
        url: 'https://www.bunny777.dev/me_in_black.jpg',
        width: 1200,
        height: 630,
        alt: 'Bunny777 Portfolio Preview',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title:
      'Bunny Bunny777 | Full-Stack Developer & UI/UX Engineer Portfolio',
    description:
      'Explore powerful web apps, React/Next.js projects, and UI/UX work by developer Bunny Bunny777.',
    creator: '@bunny__777',
    images: ['https://www.bunny777.dev/me_in_black.jpg'],
  },

  icons: {
    icon: [
      { url: '/logo.png' },
      { url: '/logo.png', sizes: '16x16', type: 'image/png' },
      { url: '/logo.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png' }],
  },

  category: 'portfolio',
  referrer: 'origin-when-cross-origin',

  // Social profiles
  other: {
    instagram: 'https://instagram.com/bunnny.777',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.className}>
      <body className="min-h-screen bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          <ThemeToggle />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
