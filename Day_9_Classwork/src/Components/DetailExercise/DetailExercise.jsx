import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getexercisedetail } from "../../apis/apis";
function DetailExercise() {
  const { id } = useParams();
  const [exercise, setExercise] = useState([]);
  useEffect(() => {
    console.log(id);
    getexercisedetail(id).then((data) => {
      //   console.log(data);
      setExercise(data);
    });
  }, [id]);
  //   console.log(exercise);
  return (
    <div>
      <img src={exercise.gifUrl} alt="" width="100px" height="100px" />
    </div>
  );
}
export default DetailExercise;
