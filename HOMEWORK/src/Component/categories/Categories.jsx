import "./Categories.css";
import { data1 } from "./data1";
import { data2 } from "./data2";
function Categories() {
  return (
    <>
      <h1>CATEGORIES</h1>
      <div className="categories_list">
        {data1.map((ele) => {
          return (
            <div key={ele.Number_of_products} className="category">
              <div className="category_image">
                <img src={ele.image_url} alt="" width="150px" height="100%" />
              </div>
              <div className="category_detail">
                <h4>{ele.category_name}</h4>
                <p>{ele.Number_of_products} Products</p>
              </div>
            </div>
          );
        })}
      </div>
      <h1>FEATURED PRODUCTS</h1>
      <div className="featued_list">
        {data2.map((ele) => {
          return (
            <div className="features" key={ele.name}>
              <div className="feature_image">
                <img key={ele.image_url} src={ele.image_url} alt="" />
                <div className="feature_options">
                  <i className="fa-solid fa-cart-shopping"></i>
                  <i className="fa-solid fa-heart"></i>
                  <i className="fa-solid fa-rotate"></i>
                  <i className="fa-solid fa-magnifying-glass"></i>
                </div>
              </div>
              <div className="feature_detail">
                <p>{ele.name}</p>
                <h2>{ele.price}</h2>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default Categories;
