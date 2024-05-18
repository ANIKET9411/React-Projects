import { useEffect, useState } from "react";
import { getSpecifiedTypeExercise } from "../../apis/apis";
import { useNavigate } from "react-router-dom";
import { getAllexercise } from "../../apis/apis";
import "./Section1.css";
let exerciseOptions = [
  "back",
  "cardio",
  "chest",
  "lower arms",
  "lower legs",
  "neck",
  "shoulders",
  "upper arms",
  "upper legs",
  "waist",
];
function Section1() {
  const navigate = useNavigate();
  const [searchvalue, setSearchvalue] = useState();
  const [exerciselist, setExerciselist] = useState([]);
  const [currentpage, setCurrentpage] = useState(1);

  async function getExercise(val) {
    getSpecifiedTypeExercise(val).then((data) => {
      setExerciselist(data);
    });
  }
  function getselectedexercise(id) {
    navigate(`/exercise/${id}`);
  }
  useEffect(() => {
    getAllexercise(currentpage).then((data) => {
      setExerciselist(data);
    });
  }, [currentpage]);
  return (
    <>
      <div style={{ position: "relative" }}>
        <img
          src="https://th.bing.com/th/id/OIP.4PGQXLmuAJwTa81MALENWQAAAA?rs=1&pid=ImgDetMain"
          alt=""
          width="100%"
          height="750px"
        />
        <div
          style={{
            position: "absolute",
            textAlign: "center",
            width: "40%",
            top: "30%",
            fontWeight: "bold",
            margin: "0 30%",
          }}
        >
          <h1 style={{ fontSize: "65px" }}>
            FASTER, STRONGER FIGHT TO THE END
          </h1>
          <button
            style={{
              padding: "20px 25px",
              backgroundColor: "red",
              fontSize: "24px",
              borderRadius: "50px",
              color: "white",
            }}
          >
            Get All Exercises
          </button>
        </div>
      </div>
      <div className="section1">
        <h2>Awesome Exercises You Should Know</h2>

        <input
          type="text"
          value={searchvalue}
          placeholder="Search Exercise"
          onChange={(e) => {
            setSearchvalue(e.target.value);
          }}
        />
        <button
          onClick={() => {
            getExercise(searchvalue);
          }}
        >
          Search
        </button>
        <br />
        <div className="EXERCISETYPES">
          {exerciseOptions.map((exerType) => {
            return (
              <div
                className="EXERCISETYPE"
                key={exerType}
                onClick={() => {
                  getExercise(exerType);
                }}
              >
                <i className="fa-solid fa-dumbbell"></i>
                <p>{exerType}</p>
              </div>
            );
          })}
        </div>
        <h1>Showing Results</h1>
        <div className="EXERCISES">
          {exerciselist.map((exercise) => {
            let feature = exercise.secondaryMuscles;
            return (
              <div
                className="EXERCISE"
                key={exercise.id}
                onClick={() => {
                  getselectedexercise(exercise.id);
                }}
              >
                <img
                  src={exercise.gifUrl}
                  alt=""
                  width="200px"
                  height="200px"
                />
                <div className="FEATURES">
                  {feature.map((ele) => {
                    return <p key={ele}>{ele}</p>;
                  })}
                </div>

                <h2>{exercise.name}</h2>
              </div>
            );
          })}
        </div>
      </div>
      <div className="pagination">
        <button
          disabled={currentpage <= 1 ? true : false}
          // style={{ color: currentpage <= 1 ? "grey" : "black" }}
          onClick={() => {
            currentpage > 1 && setCurrentpage(currentpage - 1);
          }}
        >
          left
        </button>
        {currentpage}
        <button
          onClick={() => {
            setCurrentpage(currentpage + 1);
          }}
        >
          right
        </button>
      </div>
    </>
  );
}
export default Section1;
