import styles from "./center-section.module.scss";
import Category from "../Category";
import axios from "axios";
import { useEffect, useState } from "react";
import SubCategory from "../SubCategory";
import Products from "../Products";
import CenterHeader from "../CenterHeader";
import Summary from '../Summary';
import useCartData from "../../context/CartContext";

const CenterSection = ({modalIsOpen, setIsOpen, categories, productList, SetProductList, subCategories, onCategorySelect, onSubCategorySelect, selectedCategory, selectedSubCategory}) => {
  const [selectedProduct, setSelectedProduct] = useState();
  const onProductClick = (product) => {
    setSelectedProduct(product);
    setIsOpen(true);
  }


  return (
    <div className={styles.main}>
      <CenterHeader heading={productList.length ? "All Products" : "Print Heads" } backBtnclick={productList.length ? () => {
        SetProductList([]);
      } : ''}/>
      {!productList?.length ? (
        <>
          <Category
            categories={categories}
            onCategorySelect={onCategorySelect}
            selectedCategory={selectedCategory}
          />
          <SubCategory
            subCategories={subCategories}
            onSubCategorySelect={onSubCategorySelect}            
          />
        </>
      ) : (
        <Products productList={productList} onProductClick={onProductClick} />
      )}
      {modalIsOpen && <Summary modalIsOpen = {modalIsOpen} setIsOpen={setIsOpen} product={selectedProduct}/>}
    </div>
  );
};

export default CenterSection;
