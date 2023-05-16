import styles from "./color-desc.module.scss";

const ColorDesc = ({ heading, variants, selectedVariant, setSelectedVariant }) => { 
  return (
    <>
      <div className={styles.heading}>{heading}</div>
      <div className={styles.main}>
        {variants.map((variant) => {
          return (
            <div
              className={`${styles.colorCard} ${
                variant == selectedVariant ? styles.selectedColor : ""
              }`}
              key={variant}
              onClick={() => setSelectedVariant(variant)}
            >
              {variant}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ColorDesc;
