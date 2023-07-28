
import './styles/index.css';
import './styles/features.css';
import { NavBar } from './components/NavBar';
import { BannerAction } from './components/BannerAction';
import { News } from './components/News';

const App = () => {
 

  return (
    <>
      <NavBar />
      <BannerAction />
      <News />
    </>
  );
}

export default App
