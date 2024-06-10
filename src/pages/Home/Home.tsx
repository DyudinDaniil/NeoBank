import './Home.sass';

import Choose from '../../components/HomePage/Choose/Choose';
import Features from '../../components/HomePage/Features/Features';
import World from '../../components/HomePage/World/World';
import Currency from '../../components/HomePage/Currency/Currency';
import Support from '../../components/HomePage/Support/Support';

const Home = () => {

  return (
    <>
      <Choose />

      <Features />

      <Currency />

      <World />

      <Support />
    </>
  )
}

export default Home;
