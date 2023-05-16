import styles from "./category.module.scss";

const Category = ({categories, onCategorySelect, selectedCategory}) => {
    return (
        <div className={styles.main}>
            {categories.map((category) => {
                return <div className={`${styles.categoryCard} ${category.categoryId === selectedCategory?.categoryId ?styles.selectCategory : ''}`} key={category.categoryId} onClick={() => onCategorySelect(category)}>
                    <img src={category?.categoryImageURL || "https://i0.wp.com/truth-events.com/wp-content/uploads/2019/09/dummy.jpg?w=225&ssl=1"} alt="img"/>
                    <div className={styles.categoryName}>{category.categoryName}</div>
                </div>
            })}
        </div>
    
    );
};

export default Category;