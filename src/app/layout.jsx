import '../styles/global.scss'
import { Saira } from 'next/font/google'
import { Saira_Stencil_One } from "next/font/google"

const saira = Saira({
  weight: ["300", "400", "500", "600"],
  variable: "--font-saira",
  subsets: ["latin"],
});

const sairaStencil = Saira_Stencil_One({ 
  weight:['400'],
  variable: "--font-saira-stencil",
  subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" className={`${saira.variable} ${sairaStencil.variable}`}>
      <body>{children}</body>
    </html>
  )
}
