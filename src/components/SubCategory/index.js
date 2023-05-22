import styles from './sub-category.module.scss'

const SubCategory =({subCategories, onSubCategorySelect, selectedSubCategory, cardSize}) => {
    return (
        <div className={styles.main}>
            {subCategories?.length ? subCategories.map((category) => {
                return <div className={`${cardSize === "medium" ? styles.medium : styles.large} ${styles.categoryCard} ${category.subCategoryId === selectedSubCategory?.subCategoryId ? styles.active : ''}`} key={category.subCategoryId} onClick={() => onSubCategorySelect(category)}>
                    {/* getting access denied for subCategory hence using random image  */}
                    <img src={category.subCategoryImageURL || "https://newpublicbucket.s3.us-east-2.amazonaws.com/productListing/subCategories/subcategory2.png"} alt="img"/>
                    <div className={`${cardSize === "medium" ? styles.categoryTxtColor : ''} ${styles.categoryName}`}>{category.subCategoryName}</div>
                </div>
            }) : <div className={styles.notFound}>
                No Sub-category/Product found
            </div>}
        </div>
    );
};

export default SubCategory;