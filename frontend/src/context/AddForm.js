import { useCategories } from "@/hooks/useCategories";
import React, { useEffect,useContext,useState } from "react";
import { MyContext } from "./context";
import useTransactions from "@/hooks/useTransactions";
import { uuid } from "@/utils/generateUUID";

function AddForm({handleModal}){
    const {categories} = useContext(MyContext);
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

    const post = () =>{
        transaction
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
            
        </form>
    )
}

export default AddForm;