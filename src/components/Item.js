import React, {useState} from "react";

const Item = ({item})=>{
    const [price, setPrice] = useState("")
    const renderPrice =()=>{
        if(item.salesTax && item.importTax){
            let price = item.price +(Math.round(((item.price*15)/100)/0.05)*0.05)
            return price
        } else if(item.salesTax){
            let price = item.price + (Math.round(((item.price*10)/100)/0.05)*0.05)
            return price
        }else if(item.importTax){
            let price = item.price + (Math.round(((item.price*5)/100)/0.05)*0.05)
            return price
        }else{
            return item.price
        }
    }
    return(
        <div>
            <h3>{item.title}</h3>
            <h3>{renderPrice()}</h3>
        </div>
    )
}

export default Item