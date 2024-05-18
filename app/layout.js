import { Inter } from 'next/font/google'
import '@splidejs/react-splide/css';
import './globals.css'

import Footer from '@/components/Footer/Footer'
import "react-big-calendar/lib/css/react-big-calendar.css";
import NavigationMenu from '@/components/Header/NavigationMenu'
import ResponsiveHeader from '@/components/Header/ResponsiveHeader'
import HeroBanner from '@/components/HeroBanner/HeroBanner';
import { fetchHeroSection } from '@/lib/fetchData';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Schooling',
  description: 'School Management Application',
}

export default async function RootLayout({ children }) {
  const heroSection = await fetchHeroSection()
  return (
    <html lang="en" className='scroll-smooth'>
      <body className={inter.className}>
        <NavigationMenu />
        <ResponsiveHeader />
        <HeroBanner heroSection={heroSection} />
        {children}
        <Footer />
      </body>
    </html>
  )
}
