
import React, { useState } from "react";

function Home(){
    const [capital, setCapital] = useState(100000);
    return(
        <>
        <header>
            <nav>
                <p>FinanceApp</p>
                <ion-icon name="person-circle-outline"></ion-icon>
            </nav>

            <p>{capital}$</p>
        </header>
        </>
    )
}
export {Home}