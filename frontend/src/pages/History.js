import { MyContext } from "@/context/context";
import React, { useContext,useEffect } from "react";
import useTransactions  from "../hooks/useTransactions";
import { useCookies } from "react-cookie";


function History(){
    const {transaction,userData} = useContext(MyContext);
    const {loaded,getTransactions} = useTransactions();
    const [cookies,setCookies] = useCookies(['user'])

    useEffect(() => {
        getTransactions(cookies.user.id)
    },[loaded])
    return (
      <>
        <header>
          <h2>History</h2>
          <div><ion-icon name="close-circle-outline"></ion-icon></div>
        </header>
          <section>
            {!loaded && <p>Cargando</p>}
            {loaded && transaction.map(p => (
              <div>
                <p>{p.porpuse}</p>
                <p>{p.amount}</p>
                <p>{p.category}</p>
                <p>{p.date}</p>
              </div>
            ))}
          </section>
        </>
    )
}

export default History;
