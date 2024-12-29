import type { Metadata } from 'next';
import './globals.css';
import SmoothScrolling from '@/components/common/lenis';

export const metadata: Metadata = {
  title: 'Servgenie',
  description:
    'Servgenie is your one-stop platform to find and hire freelancers for all your service needs. Whether you need a dog walker, pet sitter, caregiver, companion, errand worker, fitness trainer, or even sports coaching, we connect you with skilled service providers nearby. Servgenie makes it easy to get help fast. Hire freelancers for services like pet sitting, nanny care, or sports coaching. At Servgenie, we bring your wishes to life—any wish, anytime, anywhere!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/assets/favicon.svg" type="image/svg+xml" />
      </head>
      <body className="overflow-x-hidden">
        <SmoothScrolling>{children}</SmoothScrolling>
      </body>
    </html>
  );
}
