import React from "react";

const Item = ({item})=>{
    return(
        <div>
            <h3>{item.title}</h3>
            <h3>{item.price}</h3>
        </div>
    )
}

export default Item