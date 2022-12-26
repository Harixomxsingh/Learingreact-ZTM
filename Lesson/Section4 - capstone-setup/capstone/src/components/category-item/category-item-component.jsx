import "./category-item-component.scss";

const CategoryItem = ({ category }) => {
  let img = category.imageUrl;
  return (
    <>
      {/* img  */}
      <div
        className="background-img"
        // style={{
        //   backgroundImage: `url(${img})`,
        // }}
      >
        <img src={img} alt={category.title} />
      </div>
      <div className="category-body-container">
        <h2>{category.title}</h2>
        <p>shop-now</p>
      </div>
    </>
  );
};

export default CategoryItem;
