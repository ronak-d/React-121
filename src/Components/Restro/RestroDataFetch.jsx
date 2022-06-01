import axios from "axios";
import { useEffect, useState } from "react";
import RestaurantDetails from "./RestaurantDetails";

export const Restro = () => {
    
  const[loading,setLoading] = useState(true);
  const[error,setError] = useState(false);
  const[data,setData] = useState([]);

  useEffect(() => {
    setLoading(true);

    axios({
      method:'GET',
      url:"http://localhost:3000/food",
    })

    .then(res =>{
      setData(res.data);
      setLoading(false);
    })
    .catch(err =>{
      setError(true);
      setLoading(false);
    })

  },[])

  console.log(data);
  return (
    <>
      <h1>Restaurant Details</h1>
      <div>
        {
          data.map(e => <RestaurantDetails keys={e.id} data={e} {...e} />)
          
        }      
      </div>
    </>
  )
}