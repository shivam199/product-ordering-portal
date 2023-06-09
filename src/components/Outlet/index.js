import styles from "./outlet.module.scss";
import LeftSection from "../LeftSection";
import CenterSection from "../CenterSection";
import CartSection from "../CartSection";
import { useState, useEffect } from "react";
import axios from "axios";
import SubCategory from "../SubCategory";
import toast from "react-hot-toast";
import { useWindowSize } from "../../hooks/useWindowSize";
import FloatedLeftSection from "../FloatedLeftSection";
import { AiFillHome } from "react-icons/ai";

const Outlet = ({onHamburgerClick, setOnHamburgerClick}) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [productList, SetProductList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState();
  const [selectedSubCategory, setSubSelectedCategory] = useState();
  const [fromEdit, setFromEdit] = useState(false);
  const {width: deviceWidth} = useWindowSize();
  useEffect(() => {
    axios
      .get(
        "https://elredtest.s3.amazonaws.com/reactAssignment/getCategories.json"
      )
      .then((res) => {
        if (res.data.success) {
          const { result } = res.data;
          setCategories(result);
          if (result?.length) {
            setSelectedCategory(result[0]);
            axios
              .get(
                `https://elredtest.s3.amazonaws.com/reactAssignment/getSubCategory_${result[0]?.categoryId}.json`
              )
              .then((response) => {
                if (response.data.success) {
                  setSubCategories(response.data.result);
                }
              });
          }
        }
      });
  }, []);

  const onCategorySelect = (category) => {
    setSelectedCategory(category);
    axios
      .get(
        `https://elredtest.s3.amazonaws.com/reactAssignment/getSubCategory_${category.categoryId}.json`
      )
      .then((res) => {
        if (res.data.success) {
          setSubCategories(res.data.result);
        }
      });
  };

  const onSubCategorySelect = (subCategory) => {
    setSubSelectedCategory(subCategory);
    axios
      .get(
        `https://elredtest.s3.amazonaws.com/reactAssignment/getProduct_${subCategory?.subCategoryId}.json`
      )
      .then((res) => {
        if (res.data.success) {
          SetProductList(res.data.result);
          if(!res.data?.result?.length) {
            toast.error("no product available for this sub category.")
          }
        }
      });
  };

  return (
    <div className={styles.main}>
      <div className={styles.col1}>
        <div className={styles.upperSection}>
         {deviceWidth > 1024 ? <div className={styles.item1}>
            {" "}
            <LeftSection />
          </div> : onHamburgerClick ? <FloatedLeftSection setIsOpen={() => setOnHamburgerClick(false)} modalIsOpen={onHamburgerClick}/> : ''}
          <div className={styles.item2}>
            {" "}
            <CenterSection
              modalIsOpen={modalIsOpen}
              setIsOpen={setIsOpen}
              categories={categories}
              productList={productList}
              SetProductList={SetProductList}
              subCategories={subCategories}
              onCategorySelect={onCategorySelect}
              onSubCategorySelect={onSubCategorySelect}
              selectedCategory={selectedCategory}
              selectedSubCategory={selectedSubCategory}
              fromEdit={fromEdit}
              setFromEdit={setFromEdit}
            />
          </div>
        </div>
        {productList.length ? (
          <div className={styles.lowerSection}> 
            <div className={styles.homeBtn} onClick={() => SetProductList([])}>
                <AiFillHome size={40}/>
            </div>
            <SubCategory subCategories={subCategories}
            onSubCategorySelect={onSubCategorySelect} selectedSubCategory={selectedSubCategory} cardSize={"medium"}/>
          </div>
        ) : (
          ""
        )}{" "}
      </div>
      <div className={styles.col2}>
        {" "}
        <CartSection setIsOpen={setIsOpen} setFromEdit={setFromEdit}/>
      </div>
    </div>
  );
};

export default Outlet;
