import { useCookies } from "react-cookie";

const { MyContext } = require("@/context/context");
const { useContext, useState } = require("react");


export default function useTransactions(){
 
    const [cookies, setCookies,removeCookies] = useCookies(['transaction'])
    const {transaction,setTransaction} = useContext(MyContext);
    const [loaded, setLoaded] = useState(false);
    const [error,setError] = useState();
   
    const getTransactions = async (id) =>{
      if(typeof id != 'number'){
        console.log(`no paso nah ${id}`)
        return {Error: "The Id is undefied"}
      }else{

      try{
        const response = await fetch(`https://localhost:7091/Transaction/${id}`,{

          method: "GET",
          headers: {
            "Content-Type": "application/json",
          }
        })
        if(!response.ok){
          throw new Error(`Error: ${response.status}`)
        }
        const data = await response.json()
          setTransaction(data)
          setLoaded(true)
          console.log(data)
          
      } catch(err){
        setError(err)
        console.log(err)
      }
    }
    }   
  return {getTransactions,loaded,error}
}

