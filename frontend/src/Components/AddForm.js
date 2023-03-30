import { useCategories } from "@/hooks/useCategories";
import React, { useEffect,useContext,useState } from "react";
import { MyContext } from "../context/context";
import useTransactions from "@/hooks/useTransactions";
import { uuid } from "@/utils/generateUUID";
import { crearFecha } from "@/utils/generateDate";

function AddForm({handleModal}){
    const {categories,userData} = useContext(MyContext);
    const {getCategories,load} = useCategories();
    const {postTransaction} = useTransactions();
    
    let transaction = {
        transactionID,
        amount,
        categoryId,
        userID,
        date,
        porpuse,
        type
      };

    useEffect(()=>{
        getCategories()
    },[load,categories])

    const post =async () =>{
       // const fecha = Date.now().toString();
        if(typeof userData.id != 'number'){
            alert("The user value is indefinido")
            return;
        }
        transaction={...transaction,transactionID:uuid()}
        transaction={...transaction,userID:userData.id}
        transaction={...transaction,date: Date.now().toString()}

        await postTransaction(transaction)
        handleModal();
    }

    return(
        <form>
            <label>Porpuse</label>
            <input type="text" placeholder="Add text" onChange={(e)=> transaction={...transaction,porpuse:e.target.value}}></input>
            <label>Amount</label>
            <input type="number" placeholder="Add amount" onChange={(e)=> transaction={...transaction,amount:e.target.value}}></input>
            <label>Category</label>
            <select name="Category" onChange={(e)=> transaction={...transaction,categoryId:e.target.value}}>
               {load && categories.map(c => (
                <option key={c.id} value={c.id}>{c.name}</option>
               ))}
            </select>
            <button onClick={() => transaction={...transaction,type:0}}>Income</button>
            <button onClick={() => transaction={...transaction,type:1}}>Spend</button>
            <button onClick={handleModal} className="bg-black">Cancel</button>
            <button onClick={post} className="bg-black">Save</button>
            
        </form>
    )
}

export default AddForm;