import styles from './App.module.sass';

import { Routes, Route, Link } from 'react-router-dom';

import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import { Form } from 'react-router-dom';

const App = () => {

  return (
    <main className={styles.main}>
      <Navbar />
      
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>

      <Footer />
    </main>
  )
}

export default App
