import styles from "./product-detail.module.scss";
import { AiOutlineHeart } from "react-icons/ai";
import ColorCard from "../ColorDesc";
import { useEffect, useState } from "react";
import useCartData from "../../context/CartContext";
import { toast } from "react-hot-toast";

const ProductDetail = ({ product, orderSelectedVariant, fromEdit }) => {
  const [selectedVariant, setSelectedVariant] = useState(
    orderSelectedVariant || ""
  );
  const [selectedVariantPackage, setSelectedVariantPackage] = useState("");
  const [selectedVariantColor, setSelectedVariantColor] = useState("");
  const [uniqueColorSet, setUniqueColorSet] = useState([]);
  const [packageSet, setPackageSet] = useState([]);
  const { updateCartData } = useCartData();
  const [quantity, setQuantity] = useState();
  useEffect(() => {
    let uniqueColor = [];
    product?.variants.forEach((element) => {
      if (!uniqueColor?.some((color) => color == element?.colorDescription)) {
        uniqueColor.push(element?.colorDescription);
      }
    });
    setUniqueColorSet(uniqueColor);
    uniqueColor[0] && setSelectedVariantColor(uniqueColor[0]);
  }, [product]);
  useEffect(() => {
    const packageDetails = [];
    product.variants.forEach((element) => {
      if (element.colorDescription == selectedVariantColor) {
        packageDetails.push(element.packingDescription);
      }
    });
    setPackageSet(packageDetails);
    if (
      !selectedVariantPackage ||
      !packageDetails.includes(selectedVariantPackage)
    ) {
      setSelectedVariantPackage(packageDetails[0]);
    }
  }, [selectedVariantColor]);

  useEffect(() => {
    product?.variants.forEach((ele) => {
      if (
        ele.colorDescription == selectedVariantColor &&
        ele.packingDescription == selectedVariantPackage
      ) {
        setSelectedVariant(ele);
        return;
      }
    });
  }, [selectedVariantColor, selectedVariantPackage, orderSelectedVariant]);

  const addVariant = () => {
    if (quantity < 12 || quantity > 100 || !quantity) {
      toast.error(
        quantity < 12
          ? "please order quantity more than 12"
          : "please order quantity less than 100"
      );
      return;
    }
    let variant;
    product.variants.forEach((ele) => {
      if (
        ele.colorDescription === selectedVariantColor &&
        ele.packingDescription === selectedVariantPackage
      ) {
        variant = ele;
        return;
      }
    });
    updateCartData(
      {
        product: product,
        quantity: Number(quantity),
        variant: {
          ...variant,
          itemDescription: product.itemDescription,
          img: product?.productImages[0],
        },
      },
      fromEdit
    );
  };

  return (
    <div className={styles.main}>
      <div className={styles.heading}>{product.itemDescription}</div>
      <div className={styles.productContainer}>
        <AiOutlineHeart color="red" className={styles.heart} size={24} />
        <div className={styles.imageContainer}>
          <img
            src={
              `https://picsum.photos/seed/${Math.floor(
                Math.random() * 1000 + 1
              )}}/${200}/${200}` || product?.productImages[0]
            }
            alt="img"
          />
        </div>
      </div>
      <div className={styles.colorCode}>{selectedVariant?.bpCatalogNumber}</div>
      <div className={styles.itemDescription}>
        <div>{product?.itemDescription}</div>
        <div>
          {product.currency?.symbol} {selectedVariant?.grossPrice}
        </div>
      </div>
      <div className={styles.variantDesc}>
        {selectedVariant?.saleDescription}
      </div>
      <ColorCard
        heading={"Please Select Color Description"}
        variants={uniqueColorSet}
        selectedVariant={selectedVariantColor}
        setSelectedVariant={setSelectedVariantColor}
      />
      {selectedVariantColor && (
        <ColorCard
          heading={"Please Select Package Description"}
          variants={packageSet}
          selectedVariant={selectedVariantPackage}
          setSelectedVariant={setSelectedVariantPackage}
        />
      )}
      <div className={styles.quantityTxt}>Enter Quantity</div>
      <input
        type="number"
        name="quantity"
        value={quantity}
        className={styles.quantityInput}
        onChange={(e) => {
          setQuantity(e.target.value);
        }}
      />
      <div className={styles.minimumOrder}>minimum orders 12*</div>
      <div style={{ marginTop: "20px" }}>
        <input
          type="checkbox"
          id="urgent"
          name="urgent"
          value="urgent"
          className={styles.urgentInut}
        />
        <label htmlFor="urgent" className={styles.urgentTxt}>
          {" "}
          Need Urgent Order
        </label>
      </div>
      <button className={styles.addBtn} onClick={addVariant}>
        {" "}
        Add{" "}
      </button>
    </div>
  );
};

export default ProductDetail;
