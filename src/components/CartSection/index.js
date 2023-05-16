import CartList from "../CartList";
import useCartData from "../../context/CartContext";
import styles from "./cart-section.module.scss";
import PriceDetail from "../PriceDetail";

const CartSection = ({setIsOpen}) => {
  const { state, removeCartData, clearCart } = useCartData();
  return (
    <div className={styles.main}>
      <CartList homePage={true} setIsOpen={setIsOpen}/>
      {!state.length && (
        <div className={styles.emptyCart}>
          <img
            src={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU4wROfQZBmNacyl9hsqgGINxrF4s46f6SV1xLKfQT1A&usqp=CAU&ec=48665701"
            }
            alt={"img"}
          />
          <div>items not added yet</div>
        </div>
      )}
      {state.length ? (
        <>
          <div className={styles.instctn}>
            <div>Other Instructions</div>
            <div className={styles.addTxt}>{`Add >`}</div>
          </div>
          <PriceDetail state={state} clearCart={clearCart} />
        </>
      ): ''}
    </div>
  );
};

export default CartSection;
