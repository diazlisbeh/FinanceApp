import { useCategories } from "@/hooks/useCategories";
import React, { useEffect,useContext,useState } from "react";
import { MyContext } from "../context/context";
import useTransactions from "@/hooks/useTransactions";
import { uuid } from "@/utils/generateUUID";
import { crearFecha } from "@/utils/generateDate";

function AddForm({handleModal}){
    const {categories,userData} = useContext(MyContext);
    const {getCategories,load} = useCategories();
    
    const [transactionID, setTransactioID] = useState();
    const [amount, setAmount] = useState();
    const [categoryId, setCategoryId] = useState();
    const [userID, setUserID] = useState();
    const [date, setDate] = useState();
    const [porpuse, setPorpuse] = useState();
    const [Type, setType] = useState();
    const {postTransaction} = useTransactions();
    
    useEffect(()=>{
        getCategories()

        setTransactioID(uuid())
        setUserID(userData.id)
        setDate(crearFecha())

        
    },[load])

    const post =async () =>{
   
        if(typeof userData.id != 'number'){
            alert("The user value is indefinido")
            return;
        }

        setTransactioID(uuid())
        setUserID(userData.id)
        setDate(Date.now())
        
        await postTransaction(transactionID,amount,categoryId,userID,date,porpuse,Type)
        handleModal();
    }

    return(
        <form>
            <label>Porpuse</label>
            <input type="text" placeholder="Add text" onChange={(e)=> setPorpuse(e.target.value)}></input>
            <label>Amount</label>
            <input type="number" placeholder="Add amount" onChange={(e)=> setAmount(parseInt(e.target.value))}></input>
            <label>Category</label>
            <select name="Category" onChange={(e)=> setCategoryId(parseInt( e.target.value))}>
               {load && categories.map(c => (
                <option key={c.id} value={c.id}>{c.name}</option>
               ))}
            </select>
            <button type="button" onClick={() => setType(0)}>Income</button>
            <button type="button" onClick={() => setType(1)}>Spend</button>
            <button type="button" onClick={handleModal} className="">Cancel</button>
            <button type="button" onClick={()=>post()} className="">Save</button>
            
        </form>
    )
}

export default AddForm;