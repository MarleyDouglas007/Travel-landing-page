import './globals.css'
import styles from './style.module.css'
/*import {Quicksand} from 'next/font/google'*/
export const metadata = {
  title: 'Travel landing page',
}
function Logo() {
  return (
    <p className={styles.logo}>Ready<span className={styles.comercial}>&</span>Go</p>
  )
}
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>

        <header>
          <Logo />
        </header>

        <main>
          {children}
        </main>

      </body>
    </html>
  )
}
