import styles from "./center-section.module.scss";
import Category from "../Category";
import { useState } from "react";
import SubCategory from "../SubCategory";
import Products from "../Products";
import CenterHeader from "../CenterHeader";
import Summary from '../Summary';

const CenterSection = ({modalIsOpen, setIsOpen, categories, productList, SetProductList, subCategories, onCategorySelect, onSubCategorySelect, selectedCategory,fromEdit, setFromEdit}) => {
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
      {modalIsOpen && <Summary modalIsOpen = {modalIsOpen} setIsOpen={setIsOpen} product={selectedProduct} fromEdit={fromEdit} setFromEdit={setFromEdit}/>}
    </div>
  );
};

export default CenterSection;
