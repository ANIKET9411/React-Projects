import "./Props2_card.css";
import "@fortawesome/fontawesome-free/css/all.css";

function Props2_card(Props) {
  console.log({ Props }, Props.value.img_url);
  return (
    <div className="movie">
      <div className="movie_left">
        <div className="moviecard_left_upper">
          <img
            src={Props.value.img_url}
            alt=""
            width={"100px"}
            height={"200px"}
          />
          <div className="moviecard_left_upper_inner">
            <h3>{Props.value.name}</h3>
            <p>{Props.value.director}</p>
            <p>
              <span
                style={{
                  display: "inline-block",
                  border: "1px solid white",
                  padding: "5px",
                  color: "white",
                  borderRadius: "10px",
                }}
              >
                {Props.value.runtime}
              </span>{" "}
              {Props.value.genre}
            </p>
          </div>
        </div>
        <div className="synopsis">{Props.value.synopsis}</div>
        <div className="movie_icons">
          <i className="fa-solid fa-share-nodes"></i>
          <i className="fa-solid fa-heart"></i>
          <i className="fa-solid fa-message"></i>
        </div>
      </div>
      <div className="movie_right">
        <img src={Props.value.img_url} alt="" />
      </div>
    </div>
  );
}
export default Props2_card;
