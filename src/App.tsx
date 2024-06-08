import styles from './App.module.sass';

import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';

const App = () => {

  return (
    <main className={styles.main}>
      <Navbar />
      <Home />
      <Footer />
    </main>
  )
}

export default App
