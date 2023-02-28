import { useCookies } from "react-cookie";

const { MyContext } = require("@/context/context");
const { useContext } = require("react");


export default function useTrasaction(){
 
    const {transaction,setTransaction} = useContext(MyContext);
    const [cookieTra, setCookiesTra] = useCookies(['transaction'])
    const GetTransactions = (id) =>{
    fetch(`https://localhost:7091/Transaction/${id}`,{

      method: "GET",
      headers: {
        "Content-Type": "application/json",
      }
    })
    .then(res => res.json())
    .then(data => setCookiesTra('transaction',data))
    .finally(setTransaction(cookieTra.transaction))

   
    }   
   
   
   
    return {GetTransactions}
}

