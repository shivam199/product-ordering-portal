import useCartData from "../../context/CartContext";
import styles from "./order-list.module.scss";
import CartList from "../CartList";

const OrderList = ({ setIsOpen, showCartBtn = true , setOrderSelectedProduct, setOrderSelectedVariant, fromEdit, setFromEdit}) => {
    const { state } = useCartData();

  return (
    <div>
      <div className={styles.heading}>
        <div>Order List</div>
        <div onClick={() => setIsOpen(false)} className={styles.handPointer}>
          x
        </div>
      </div>
      <CartList setOrderSelectedProduct={setOrderSelectedProduct} setOrderSelectedVariant={setOrderSelectedVariant} fromEdit={fromEdit}/>
      {showCartBtn && (
        <div className={styles.btnWrapper}>
          <button
            className={`${styles.cartBtn} ${state?.length ? '' :styles.disableBtn}`}
            disabled={state?.length ? false : true}
            onClick={() => {
              setIsOpen(false)
              if(setFromEdit) {
                setFromEdit(false);
              }
            }}
          >
            Add to cart
          </button>{" "}
        </div>
      )}
    </div>
  );
};

export default OrderList;
