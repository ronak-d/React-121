import {axios} from "axios";
import {useState,useEffect} from "react";


// getting req from github and updating pagination.
const GithubUsers = (q,page) =>{
    // return axios("https://api.github.com/users",{
    method :"GET",
    params : {
        q:q,
        per_page:5,
        page, 
    }
  });
}

function Github(){
    const [loading,setLoading]= useState(false);
    const [err,setErr] = useState(false);
    const [users,setUsers] = useState([]);
    const [q,setq]  = useState("");

    useEffect (() => {
        // function fetching from api q:masi by default;
        setLoading(true);
        setErr(false);

        GithubUsers("masai")
        .then((e) => {
            setData(e.data)
            setLoading(false);
        })
        .catch((err) => {
            setErr(true);
            setLoading(false);
        })
    },[])

    console.log(data);

}