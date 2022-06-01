import {axios} from "axios";
import {useState,useEffect} from "react";

const GithubUsers = (q) =>{
    // return axios("https://api.github.com/users",{
    method :"GET",
    params : {
        q:q 
    }
  });
}

function Github(){
    const [loading,setLoading]= useState(true);
    const [err,setErr] = useState(false);
    const [data,setData] = useState([]);

    useEffect (() => {
        // function fetching from api q:masi by default;
        GithubUsers("masai")
        .then((e) => {
            setData(e.data)
        })
        .catch((err) => {
            setErr(true);
        })
    },[])

    console.log(data);

}