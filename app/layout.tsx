import './globals.css';
import type { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
    title: '잠시 멈춤, Chillax Day',
    description: '오늘 하루는 편하게 쉬어보아요',
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="ko">
        <body>{children}</body>
        </html>
    );
}