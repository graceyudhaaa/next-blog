import clsx from 'clsx'
import '../globals.css'
import { Inter, Montserrat } from 'next/font/google'
import localFont from 'next/font/local'
import Providers from '@/components/Providers'
import { ServerThemeProvider } from 'next-themes'
import Navbar from '@/components/Navbar'
import PageWrapper from '@/components/PageWrapper'
import { Metadata } from 'next'

// const montserrat = Montserrat({
//   subsets: ['latin'],
//   variable: '--font-montserrat',
// })

// const inter = Inter({
//   subsets: ['latin'],
//   variable: '--font-inter',
// })


const montserrat = localFont({
  src: [{
    path: '../../public/fonts/Montserrat/Montserrat-VariableFont_wght.ttf',
    style: "normal",
  },
  {
    path: '../../public/fonts/Montserrat/Montserrat-Italic-VariableFont_wght.ttf',
    style: "italic",
  },],
  variable: '--font-montserrat'
});

const inter = localFont({
  src: '../../public/fonts/Montserrat/Montserrat-VariableFont_wght.ttf',
  variable: '--font-inter'
})

export const metadata = {
  title: 'Grace Yudha Satriawan',
  description: 'Grace Yudha Satriawan Sites',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ServerThemeProvider enableSystem attribute="class" disableTransitionOnChange={true}>
      <html suppressHydrationWarning lang="en" className={clsx(montserrat.variable, montserrat.className, inter.variable, inter.className,)}>
        <body className='dark:bg-chambray-950'>
          <Providers>
            <Navbar />
            <div className="max-w-5xl mx-auto">
              {children}
            <p className="text-xs flex items-center justify-center dark:text-chambray-50 my-1">
              2023 Grace Yudha Satriawan
            </p>
            </div>
          </Providers>
        </body>
      </html>
    </ServerThemeProvider>
  )
}
