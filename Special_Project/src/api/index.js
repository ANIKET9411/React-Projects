import axios from "axios"

let api=axios.create({
    baseURL:"https://www.themealdb.com/api/json/v1/1"
});

async function getallcategory(){
try{
    let response=await api.get("/categories.php");
    // console.log(response.data);
    return response.data;
}
catch{
    throw new Error("Something went wrong");
}
}

async function getlistbasedonSpecifiedcategory(category){
    try{
        let response=await api.get(`/filter.php?c=${category}`);
        console.log(response.data);
        return response.data.meals;
    }
    catch{
        throw new Error("Something went wrong");
    }
    }


    async function getdetailsthroughid(id){
        try{
            let response=await api.get(`/lookup.php?i=${id}`);
            console.log(response.data);
            return response.data.meals;
        }
        catch{
            throw new Error("Something went wrong");
        }
        }


        async function getfoodbysearch(search){
            console.log(search);
            try{
                let response=await api.get(`/search.php?s=${search}`);
                console.log(response.data);
                return response.data.meals;
            }
            catch{
                throw new Error("Something went wrong");
            }
            }
export {
    getallcategory,getlistbasedonSpecifiedcategory,getdetailsthroughid,getfoodbysearch
}