import styles from "./products.module.scss";
import {AiOutlineHeart } from "react-icons/ai";

const Products = ({ productList, onProductClick }) => {
  return (
    <div className={styles.main}>
      {productList.map((product) => {
        return (
          <div
            className={styles.categoryCard}
            key={product.productId}
            onClick={() => onProductClick(product)}
          >
            <AiOutlineHeart color="red" className={styles.heart} size={24}/>
            <div className={styles.productImage}>
              {" "}
              {/* getting access denied for subCategory hence using random image  */}
              <img
                src={
                `https://picsum.photos/seed/${Math.floor((Math.random() * 1000) + 1)}}/${200}/${200}` ||
                 product?.productImages[0]
                }
                alt="img"
              />
            </div>
            <div className={styles.itemDescription}>{product?.itemDescription}</div>
            <div className={styles.description}>some random descript about the product</div>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
