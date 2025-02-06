import './globals.css'
import type { Metadata } from 'next'
<<<<<<< HEAD
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

=======
import { Bebas_Neue, Inter,Poppins, Roboto } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { HeroSection } from '@/components/hero-section'

const inter = Inter({ subsets: ['latin'] })

const poppins =Poppins({subsets:['latin'],
  weight:['400','700']

})
const roboto =Roboto({subsets:['latin'],
  weight:['400','700']
})
const bebus =Bebas_Neue({subsets:['latin'],
  weight:"400"
})

>>>>>>> 0463540 (first commit)
export const metadata: Metadata = {
  title: 'Yamya software Solutions',
  description: 'Leading software development and technology solutions company',
}

<<<<<<< HEAD
=======

>>>>>>> 0463540 (first commit)
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
<<<<<<< HEAD
      <body className={inter.className}>
=======
      <body className={`${poppins.className} ${roboto.className} ${bebus.className} ${inter.className}`}>
>>>>>>> 0463540 (first commit)
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
<<<<<<< HEAD
=======
          
>>>>>>> 0463540 (first commit)
         <Navbar/>

          {children}
          <Footer/>
        </ThemeProvider>
<<<<<<< HEAD
=======
       
        

>>>>>>> 0463540 (first commit)
      </body>
    </html>
  )
}