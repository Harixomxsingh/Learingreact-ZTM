import React from "react";
import CategoryItem from "../category-item/category-item-component";
import "../directory/directory.style.scss";
const DicectoryComponent = ({ categorys }) => {
  return (
    <div>
      <div className="categories-container">
        {categorys.map((category) => {
          return (
            <div className="category-container">
              <CategoryItem category={category} key={category.id} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DicectoryComponent;
