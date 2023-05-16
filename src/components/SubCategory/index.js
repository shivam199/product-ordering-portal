import styles from './sub-category.module.scss'

const SubCategory =({subCategories, onSubCategorySelect, selectedSubCategory}) => {
    return (
        <div className={styles.main}>
            {subCategories?.length ? subCategories.map((category) => {
                return <div className={`${styles.categoryCard} ${category.subCategoryId === selectedSubCategory?.subCategoryId ? styles.active : ''}`} key={category.subCategoryId} onClick={() => onSubCategorySelect(category)}>
                    {/* getting access denied for subCategory hence using random image  */}
                    <img src={`https://picsum.photos/seed/${Math.floor((Math.random() * 1000) + 1)}}/${200}/${200}` || category.subCategoryImageURL} alt="img"/>
                    <div className={styles.categoryName}>{category.subCategoryName}</div>
                </div>
            }) : <div className={styles.notFound}>
                No Sub-category/Product found
            </div>}
        </div>
    );
};

export default SubCategory;