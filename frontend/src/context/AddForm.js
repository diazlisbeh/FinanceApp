import React from "react";


function AddForm({handleModal}){

    return(
        <form>
            <label>Porpuse</label>
            <input type="text" placeholder="Add text"></input>
            <label>Amount</label>
            <input type="number" placeholder="Add amount"></input>
            <label>Category</label>
            <select name="Category">
                <option value={1}> Principal</option>
                <option value={2}> Obligations</option>
                <option value={3}> Transport</option>
                <option value={4}> Educations</option>
                <option value={5}> Saving</option>
                <option value={6}> Other</option>
            </select>
            <button onClick={handleModal} className="bg-black">Cancel</button>
            
        </form>
    )
}

export default AddForm;