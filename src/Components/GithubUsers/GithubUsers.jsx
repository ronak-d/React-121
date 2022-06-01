import {axios} from "axios";
import {useState,useEffect} from "react";


// getting req from github and updating pagination.
const GithubUsers = (q,page) =>{
    return axios("https://api.github.com/users",{
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
    const [page,setPage] = useState(1);


    // useffect run when any query or page updates
    useEffect (() => {
        // function fetching from api q:masi by default;
        setLoading(true);
        setErr(false);

        GithubUsers("")
        .then((e) => {
            console.log(e.data);
            setData(e.data)
            setLoading(false);
        })
        .catch((err) => {
            setErr(true);
            setLoading(false);
        })
    },[q,page]);

    // 
    const handleseach = ()=>{
        setLoading(true);
        setErr(false);

        GithubUsers(q)
        .then((e) => {
            setUsers(e.data)
            setLoading(false);
        })
        .catch((err) => {
            setErr(true);
        });
    };

    return (
        <div id="search">
            <h1>Github Users</h1>
        </div>


    )



}