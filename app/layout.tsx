
import type { Metadata } from 'next'
//import { Inter } from 'next/font/google'
import './globals.css'
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

//const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Kemet Pharamceuticals',
  description: 'Kemet Pharmaceuticals',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Add the Google Fonts link for Space Grotesque */}
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-space-grotesk">
   
        
        {children}

    
        
        </body>
    </html>
  )
}
