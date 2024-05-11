import "./Restaurant_list.css";
function Restaurant_list(props) {
  //   console.log(props);
  let rating_value = props.values.rating;
  console.log(rating_value);
  let rating_star = [];
  for (let i = 0; i < rating_value; i++) {
    rating_star.push(<i class="fa-solid fa-star"></i>);
  }
  return (
    <div className="restaursnt_list">
      <div className="restaurant_list_upper">
        <h2>
          {props.values.name}
          <span>{rating_star}</span>
        </h2>
        <p>
          <i className="fa-solid fa-location-dot"> </i>
          {props.values.address},{props.values["address line 2"]}
        </p>
        <p>
          {props.values.outcode} {props.values.postcode}
        </p>
      </div>

      <div className="restaurant_list_lower">
        <p>
          <i className="fa-solid fa-utensils"></i>
          {props.values.type_of_food}
        </p>
        <a href={props.values.URL}>Visit Menu</a>
      </div>
    </div>
  );
}
export default Restaurant_list;
