import { useEffect, useState } from "react";
import { getallcategory } from "../../api";
import { useNavigate } from "react-router-dom";
function Categorylist() {
  const navigate = useNavigate();
  const [categorylist, setCategorylist] = useState([]);
  useEffect(() => {
    getallcategory()
      .then((data) => {
        // console.log(data);
        setCategorylist(data.categories);
      })
      .catch(console.log);
  }, []);
  function gotospecifiedcategory(category) {
    navigate(`/meal/${category}`);
  }
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        padding: "5%",
        width: "90%",
      }}
    >
      {categorylist.map((category) => {
        return (
          <div
            key={category.idCategory}
            style={{
              position: "relative",
              padding: "1%",
              width: "16%",
              textAlign: "center",
              backgroundColor: "white",
              margin: "20px",
            }}
            onClick={() => {
              gotospecifiedcategory(category.strCategory);
            }}
          >
            <p
              style={{
                position: "absolute",
                top: "5px",
                right: "10px",
                padding: "0px 5px",
                backgroundColor: "orange",
                margin: "10px",
              }}
            >
              {category.strCategory}
            </p>
            <img
              src={category.strCategoryThumb}
              alt=""
              width="100%"
              height="150px"
            />
          </div>
        );
      })}
    </div>
  );
}
export default Categorylist;
