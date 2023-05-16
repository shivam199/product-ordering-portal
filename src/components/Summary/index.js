import Modal from "react-modal";
import ProductDetail from "../ProductDetail";
import OrderList from "../OrderList";
import styles from "./summary.module.scss";
import { useState } from "react";

const Summary = ({ modalIsOpen, setIsOpen, product }) => {
  const [orderSelectedProduct, setOrderSelectedProduct] = useState();
  const customStyles = {
    content: {
      top: "0%",
      left: "35%",
      right: "0%",
      bottom: "0%",
      // marginRight: '-50%',
      // transform: 'translate(-50%, -50%)',
    },
  };
  return (
    <Modal
      isOpen={modalIsOpen}
      // onAfterOpen={afterOpenModal}
      onRequestClose={() => setIsOpen(false)}
      style={customStyles}
      aiaHideApp={false}
    >
      <div className={styles.main}>
        <div className={styles.item1}>
          {" "}
          <ProductDetail product={orderSelectedProduct || product} />
        </div>
        <div className={styles.item2}>
          {" "}
          <OrderList setIsOpen={setIsOpen} setOrderSelectedProduct={setOrderSelectedProduct}/>
        </div>
      </div>
    </Modal>
  );
};

export default Summary;
