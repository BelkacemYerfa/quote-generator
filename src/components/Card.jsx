import { useQuery } from "@tanstack/react-query";
import axios from 'axios'
import icon from '../images/icon-dice.svg'
import './style.css'

export const Card = ()=>{

 const { data , isLoading , isError , refetch } = useQuery(['quote'] , async ()=>{
    return axios
  .get('https://api.adviceslip.com/advice')
  .then (response =>response.data ) 
}) ;  
 if(isError){
  return (
   <h1>
    Sorry , failed to fetch the data
   </h1>
  );
 } 

 if(isLoading) {
 return (
  <h1>
  Loading ...
 </h1>
 );
 }

 return (
   <div className="Card">
     <p>
      Advice #{data?.slip?.id}
     </p>
    <h1>
     "{data?.slip?.advice}"
    </h1>
    <button onClick={refetch}>
     <img src = {icon} alt='btn-generator' />
    </button>
   </div>
 );
}