import CartList from "../CartList";
import useCartData from "../../context/CartContext";
import styles from "./cart-section.module.scss";
import PriceDetail from "../PriceDetail";

const CartSection = ({setIsOpen, setFromEdit}) => {
  const { state, clearCart } = useCartData();
  return (
    <div className={styles.main}>
      <CartList homePage={true} setIsOpen={setIsOpen} setFromEdit={setFromEdit}/>
      {!state.length && (
        <div className={styles.emptyCart}>
          <div className={styles.imgContainer}>
            <img
              src={
                "https://png.pngtree.com/element_our/png/20181031/shopping-cart-png_224349.jpg"
              }
              alt={"img"}
            />
          </div>
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
