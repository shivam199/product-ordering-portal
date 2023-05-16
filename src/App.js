import Header  from "./components/Header";
import styles from './app.module.scss';
import Outlet from "./components/Outlet";
import { CartProvider } from "./context/CartContext";
import {Toaster} from 'react-hot-toast';
import './global.css';

function App() {
  return (
    <div className={styles.main}>
      <Header />
      <CartProvider>
        <Outlet />
      </CartProvider>
      <Toaster />
    </div>
  );
}

export default App;
