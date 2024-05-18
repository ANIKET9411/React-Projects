import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getexercisedetail } from "../../apis/apis";
function DetailExercise() {
  const { id } = useParams();
  const [exercise, setExercise] = useState([]);
  useEffect(() => {
    console.log(id);
    getexercisedetail(id).then((data) => {
      console.log(data);
      setExercise(data);
    });
  }, [id]);
  return (
    <div
      style={{
        backgroundColor: "white",
        width: "50%",
        display: "flex",
        padding: "5%",
        justifyContent: "center",
        // margin: "5%",
        margin: "5% auto",
        boxShadow: "0 0 10px black",
      }}
    >
      <img src={exercise.gifUrl} alt="" width="250px" height="250px" />
      <div style={{ padding: "3%" }}>
        <h1>{exercise.name}</h1>
        {/* {exercise.instructions.map((feature) => {
          return <p key={feature}>{feature}</p>;
        })} */}
        <p>{exercise.instructions}</p>
        <p>{exercise.secondaryMuscles}</p>
        {/* {exercise.secondaryMuscles.map((part) => {
          return (
            <p
              style={{
                fontWeight: "bold",
                backgroundColor: "plum",
                padding: "10px 15px",
                display: "inline-block",
                margin: "10px",
                borderRadius: "50px",
              }}
              key={part}
            >
              {part}
            </p>
          );
        })} */}
      </div>
    </div>
  );
}
export default DetailExercise;
