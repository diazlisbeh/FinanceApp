import { MyContext } from "@/context/context";
import React, { useContext } from "react";



function History(){
    const {transaction} = useContext(MyContext);
    const {loaded} = useTransactions();

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

export {History}
