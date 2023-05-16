import styles from "./cart-list.module.scss";
import { MdModeEditOutline } from "react-icons/md";
import useCartData from "../../context/CartContext";

const CartList = ({ homePage = false, setIsOpen, setOrderSelectedProduct }) => {
  const {state, removeCartData} = useCartData();
  return (
    <>
      <table className={styles.main}>
        <tr
          className={`${styles.tableHeading} ${
            homePage ? styles.headerBorder : ""
          }`}
        >
          <td>Products</td>
          <td>Quantity</td>
          <td>Price</td>
          {homePage && state.length ? <td className={styles.edit} onClick={() =>setIsOpen(true)}><MdModeEditOutline /> Edit</td> : <td> </td>}{" "}
        </tr>
        {state.map((ele, i) => {
          if (i > 3 && homePage) {
            return;
          }
          return (
            <tr>
              <td
                className={`${styles.outer} ${
                  homePage ? styles.itemPadding : ""
                }`}
                onClick={homePage ? () => {} : () => setOrderSelectedProduct(ele.product)}
              >
                <div className={styles.imgContainer}>
                  <img
                    src={
                      "https://i0.wp.com/truth-events.com/wp-content/uploads/2019/09/dummy.jpg?w=225&ssl=1" ||
                      ele.variant.img
                    }
                    alt="img"
                  />
                </div>
                <div className={styles.productInfo}>
                  <div className={styles.itemDescription}>
                    {ele.variant?.itemDescription}
                  </div>
                  <div className={styles.saleDescription}>
                    {ele.variant?.saleDescription}
                  </div>
                </div>
              </td>
              <td>{ele.quantity}</td>
              <td>{Number(ele.quantity) * Number(ele.variant.grossPrice)}</td>
              {!homePage && (
                <td
                  className={`${styles.crossIcon} ${styles.handPointer}`}
                  onClick={() => removeCartData(ele.variant?._id)}
                >
                  x
                </td>
              )}
            </tr>
          );
        })}
      </table>
      {!state.length && !homePage ? <div className={styles.emptyCart}><p>your cart is empty</p></div> : ''}
      {homePage && state.length > 4 ? <div className={styles.seeAll}>{`See all >`}</div> : ''}
    </>
  );
};

export default CartList;
