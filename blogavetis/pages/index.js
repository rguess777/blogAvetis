import Header from '../components/Header'
import styles from '../styles/Home.module.css'
import Signin from './signin'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div>
    <div className={styles.container}>
     <Header/>
    </div>
    <div className={styles.footer}>
      <Footer/>
    </div>
    </div>
  )
}
