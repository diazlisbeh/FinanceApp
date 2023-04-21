const { MyContext } = require("@/context/context");
const { useContext, useState } = require("react");


export default function useTransactions(){
 
   
    const {transaction,setTransaction} = useContext(MyContext);
    const [loaded, setLoaded] = useState(false);
    const [error,setError] = useState();
   
    const getTransactions = async (id) =>{
      if(typeof id != 'number'){
        console.log(`no paso nah ${id}`)
        return {Error: "The Id is undefied"}
      }else{
       
      try{
        const response = await fetch(`https://icy-stone-5611da74feb14c1c9f66a71dc39c3d26.azurewebsites.net/Transaction/${id}`,{

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
          
        } 
        catch(err){
          setError(err)
          console.log(err)
        }
      }
    }
    
    const postTransaction= async (transactionID,amount,categoryId,userID,date,porpuse,type) =>{
 
      try{
        const responseCode = await fetch('https://icy-stone-5611da74feb14c1c9f66a71dc39c3d26.azurewebsites.net/Transaction/create',{
          method: 'POST',
          headers: {
            "Content-Type": "application/json",
          },
          
          body:JSON.stringify({
            transactionID,
            amount,
            categoryId,
            userID,
            date,
            porpuse,
            type
          })
        })

        if(!responseCode.ok){
          alert(`Ha ocurrido un error ${responseCode.status}`)
          console.log(responseCode.body.getReader)
          throw new Error `Ha ocurrido un error: ${responseCode.status}`
        }else{
          alert("La transaction ha sido creada")
        }
        
      }catch(err){
        console.log(err)
      }

    }


  return {getTransactions,loaded,error,postTransaction}
}

