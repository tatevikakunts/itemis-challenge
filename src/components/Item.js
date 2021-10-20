import React from "react";

const Item = ({item})=>{

    return(
        <div className="container bg-success bg-opacity-75 rounded-2 my-1 text-white p-2">
            <h3>{item.title}</h3>
            <h3 className="price">{item.taxedPrice}</h3>
        </div>

    )
}

export default Item