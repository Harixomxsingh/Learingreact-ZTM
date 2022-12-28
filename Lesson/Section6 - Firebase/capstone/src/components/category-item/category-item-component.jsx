import "./category-item-component.scss";

const CategoryItem = ({ category }) => {
  let img = category.imageUrl;
  let key = crypto.randomUUID();
  return (
    <div key={key} className="category-container">
      <div
        className="bg-img"
        style={{
          backgroundImage: `url(${img})`,
          // width: "100%",
          // height: "100%",
        }}
      />
      <div className="category-body-container">
        <h2>{category.title}</h2>
        <p>shop-now</p>
      </div>
    </div>
  );
};

export default CategoryItem;
