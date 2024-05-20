import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { getfoodbysearch } from "../../api";

function SearchArea() {
  const [searchvalue, setSearchvalue] = useState();
  const [searchResult, setSearchresult] = useState([]);
  const navigate = useNavigate();
  const v2 = useNavigate();
  function searchfood() {
    navigate("/");
    getfoodbysearch(searchvalue)
      .then((data) => {
        return <>{setSearchresult(data)}</>;
      })
      .catch(console.log);
  }
  function movetodetailspage(id) {
    v2(`/${id}`);
    setSearchvalue("");
    setSearchresult([]);
  }
  function renderResult() {
    if (searchResult.length === 0) {
      return;
    } else {
      return searchResult.map((item) => {
        return (
          <div
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
      });
    }
  }
  return (
    <>
      <div
        style={{
          backgroundImage:
            "url(" +
            "https://image.cnbcfm.com/api/v1/image/105989359-1561566296439gettyimages-492868234.jpg?v=1561566362" +
            ")",
          backgroundSize: "100% 600px",
          backgroundRepeat: "no-repeat",
          width: "80%",
          padding: "10%",
        }}
      >
        <div style={{ margin: "0 auto", textAlign: "center" }}>
          <input
            style={{
              height: "40px",
              backgroundColor: "white",
              borderRadius: "50px",
              width: "30%",
              fontSize: "20px",
              padding: "10px",
              color: "black",
            }}
            type="text"
            value={searchvalue}
            onChange={(e) => {
              setSearchvalue(e.target.value);
            }}
            placeholder="Search Any Food..."
          />
          <button
            style={{
              borderRadius: "50%",
              height: "60px",
              padding: "0 30px",
              backgroundColor: "brown",
              border: "2px solid white",
            }}
            onClick={searchfood}
          >
            S
          </button>
        </div>
      </div>
      {searchResult.length !== 0 && (
        <h1
          style={{
            margin: "0 10%",
            borderBottom: "10px solid #E16120",
            display: "inline-block",
          }}
        >
          Meals
        </h1>
      )}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          width: "80%",
          padding: "5% 10%",
        }}
      >
        {renderResult()}
      </div>
    </>
  );
}
export default SearchArea;
