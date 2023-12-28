
import { Open_Sans } from 'next/font/google'
import FooterComponent from '../components/Footer'

const openSans = Open_Sans({ subsets: ['latin'] })

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
   
      <>
      <div className={openSans.className}>
        <main>{children}</main>
      <FooterComponent/>
        </div>
      </>

  )
}
