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
    const [q,setq]  = useState("masai");
    const [page,setPage] = useState(1);


    // useffect run when any query or page updates
    useEffect (() => {
        // function fetching from api q:masi by default;
        setLoading(true);
        setErr(false);

        GithubUsers("")
        .then((e) => {
            console.log(e.data.items);
            setUsers(e.data.items)
            setLoading(false);
        })
        .catch((err) => {
            setErr(true);
            setLoading(false);
        })
    },[q,page]);

    // 
    const handleseach = (q)=>{
        setLoading(true);
        setErr(falseJ);

        GithubUsers(q)
        .then((e) => {
            setUsers(e.data.items)
            setLoading(false);
        })
        .catch((err) => {
            setErr(true);
        });
    };
        console.log(users)

    return (
        <>
        <div id="search">
            <h1>Github Users</h1>
        </div>
        <div>
            <input value={q} onChange={(e) => setq(e.target.value)} />

            <button disabled={loading} onClick={handleseach}>
                {loading ? "loading" : "Search data"}
            </button>
        </div>

        {err ? "PLease give some input": null}

        <div>
            {users?.map((item) =>(
                <div key={item.id}>{item.login}</div>
            ))}
        </div>

        <div>
            <button disabled = {page==1} onClick={()=>{setPage(page-1)}}> Prev</button>
            <button onClick={()=>{setPage(page+1)}}> Next</button>
        </div>
        </>
    )    
}
export default Github;