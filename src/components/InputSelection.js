import React, {useState} from "react";
import Receipt from "./Receipt";

const InputSelection = ()=>{
    const [items, setItems] = useState([])

    const changeHandle = (event)=>{
        getItems(event.target.value)

    }

    const getItems = async(value)=>{
        try{
            let result = await fetch("items.json")
            let data = await result.json()

            let items = data.items
            items = items.filter(item=>item.input===value)
            setItems(items)
        }catch(error){
            console.log(error)
        }
    }

    return(
        <>
            <div className="input-container">
                <h1 className="input-title p-5 text-success">Please select your input</h1>
                <select className="form-select px-5 text-success" size="1" defaultValue="none" name="input" id="input" onChange={changeHandle}>
                    <option value="none"  disabled hidden>Select your input</option>
                    <option value="inputOne">Input 1</option>
                    <option value="inputTwo">Input 2</option>
                    <option value="inputThree">Input 3</option>
                </select>
            </div>
            <Receipt items={items}/>


        </>
    )
}

export default InputSelection