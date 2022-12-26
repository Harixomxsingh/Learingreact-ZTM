function App() {
  const categorys = [
    { id: 1, title: "Hats" },
    { id: 2, title: "Jacket" },
    { id: 3, title: "Sneakers" },
    { id: 4, title: "Mens" },
    { id: 5, title: "Womens" },
  ];
  return (
    <div className="">
      <div className="categories-container">
        {categorys.map((category) => {
          return (
            <div className="category-container" key={category.id}>
              {/* img  */}
              <div className="background-img"></div>
              <div className="category-body-container">
                <h2>{category.title}</h2>
                <p>shop-now</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
