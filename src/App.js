import Header  from "./components/Header";
import styles from './app.module.scss';
import Outlet from "./components/Outlet";
import { CartProvider } from "./context/CartContext";
import {Toaster} from 'react-hot-toast';
import './global.css';
import {useState} from 'react';

function App() {
  const [onHamburgerClick, setOnHamburgerClick] = useState(false);

  return (
    <div className={styles.main}>
      <Header onHamburgerClick={onHamburgerClick} setOnHamburgerClick={setOnHamburgerClick}/>
      <CartProvider>
        <Outlet onHamburgerClick={onHamburgerClick} setOnHamburgerClick={setOnHamburgerClick}/>
      </CartProvider>
      <Toaster />
    </div>
  );
}

export default App;
