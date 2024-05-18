import axios from "axios"
const axiosInstance=axios.create({
    baseURL:"https://exercisedb.p.rapidapi.com/exercises"
    
})
export async function getSpecifiedTypeExercise(searchvalue){
    const options = {
        method: "GET",
        url: `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${searchvalue}`,
        params: { limit: "10" },
        headers: {
          "X-RapidAPI-Key": "8179e9b7f4msh26459e568c8c34dp16ba99jsnfd23b1104681",
          "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
        },
      };
  
      try {
        const response = await axios.request(options);
        console.log(response.data);
        return response.data;
      } catch (error) {
        console.error(error);
        return error;
      }
}
 export async function getexercisedetail(id)
{
    console.log(id+"@");
    const options = {
        method: 'GET',
        url: `https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`,
        headers: {
          'X-RapidAPI-Key': '8179e9b7f4msh26459e568c8c34dp16ba99jsnfd23b1104681',
          'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
      };
      console.log(options.url);
      try {
          const response = await axios.request(options);
          console.log(response.data);
          return response.data;
      } catch (error) {
          console.error(error);
          return error;
      }
}
 export async function getAllexercise(page){
  console.log(page);
    const options = {
        method: 'GET',
        url: ``,
        params: {limit: '10',
        },
        headers: {
          'X-RapidAPI-Key': '8179e9b7f4msh26459e568c8c34dp16ba99jsnfd23b1104681',
          'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
      };
      
      try {
          const response = await axiosInstance.request(options);
          console.log(response.data);
          
          return response.data;
      } catch (error) {
          console.error(error);
          return error;
      }
 }
//  export default {
//     getAllexercise,
//     getSpecifiedTypeExercise,
//     getexercisedetail
//  }