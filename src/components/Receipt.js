import React from "react";
import Item from "./Item";

const Receipt = ({items})=>{
    const renderItems = ()=>{
        return items.map((item)=><Item key={item.id} item={item}/>)
    }

    return(
        <section>
            {renderItems()}


        </section>
    )
}

export default Receipt