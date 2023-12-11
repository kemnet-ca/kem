
import type { Metadata } from 'next'
//import { Inter } from 'next/font/google'
import './globals.css'
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

//const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Kemet Pharamceuticals - Custom Medicines For Everyone & Every Need',
  description: 'Kemet Pharmaceuticals - Custom Medicines For Everyone & Every Need',
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
      <body className="font-space-grotesk">
   
        
        {children}

    
        
        </body>
    </html>
  )
}
