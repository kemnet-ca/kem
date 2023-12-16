
import type { Metadata } from 'next'
//import { Inter } from 'next/font/google'
import './globals.css'
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import { Space_Grotesk } from 'next/font/google'
const space_grotesk =  Space_Grotesk({ subsets: ['latin'] })

//const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Kemet Pharamceuticals - Custom Medicines For Everyone & Every Need',
  description: 'We take your personalized needs for customized medicines and connect you with the pharmacies that can make or provide them. Unique dosages, unique formulations, <br></br>out of stock medications and so on, we can handle it all. Currently servicing residents of Alberta.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
      <script
      async
      src="https://www.googletagmanager.com/gtag/js?id=G-BDG69VG5P2"
    ></script>
    <script
      dangerouslySetInnerHTML={{
        __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-BDG69VG5P2');
      `,
      }}
    ></script>
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
      <body className={space_grotesk.className}>
   
        
        {children}

    
        
        </body>
    </html>
  )
}
