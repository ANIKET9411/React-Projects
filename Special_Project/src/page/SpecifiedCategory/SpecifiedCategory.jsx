import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getlistbasedonSpecifiedcategory } from "../../api";
import { useNavigate } from "react-router-dom";

function SpecifiedCategory() {
  const { category } = useParams();
  const navigate = useNavigate();
  const [newlist, setNewlist] = useState([]);
  useEffect(() => {
    getlistbasedonSpecifiedcategory(category).then(setNewlist);
  }, [category]);
  function gotoreceipepage(id) {
    navigate(`/${id}`);
  }
  return (
    <>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          width: "80%",
          padding: "5% 10%",
        }}
      >
        {newlist.map((item) => {
          return (
            <div
              onClick={() => {
                gotoreceipepage(item.idMeal);
              }}
              style={{ width: "18%", textAlign: "center", margin: "1%" }}
              key={item.idMeal}
            >
              <div style={{ width: "100%" }}>
                <img src={item.strMealThumb} alt="" width="100%" />
                <p>{item.strArea}</p>
                <h4>{item.strMeal}</h4>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default SpecifiedCategory;
