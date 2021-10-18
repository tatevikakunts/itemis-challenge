import React, {useState} from "react";
import Item from "./Item";

const Receipt = ({items})=>{
    const [total, setTotal] = useState("")
    const [taxes, setTaxes] = useState("")

    const renderItems = ()=>{
        return items.map((item)=><Item key={item.id} item={item}/>)
    }
    // const totalCount = ()=>{
    //     let total = 0
    //
    //     items.forEach((item)=>
    //     total += item.price
    //     )
    //     return(<h1>{total}</h1>)
    // }

    return(
        <section>
            {renderItems()}
            {/*{totalCount()}*/}


        </section>
    )
}

export default Receipt