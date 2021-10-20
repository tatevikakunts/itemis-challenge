import React, {useEffect, useState} from "react";
import Item from "./Item";
import Total from "./Total";

const Receipt = ({items})=>{
    const [newItems, setNewItems] = useState([])

    useEffect(()=>{
        getNewItems()
    },[items])

    //cloning the items array and mapping. spreading the each item and changing the taxedPrice property according to the salesTax and importTax calculation

    const getNewItems = ()=>{
        let newItems = [...items]
        newItems = newItems.map(item=>{
            if(item.salesTax && item.importTax){
                let taxedPrice = parseFloat(item.price +(Math.round(((item.price*15)/100)/0.05)*0.05)).toFixed(2)
                item = {...item, taxedPrice:taxedPrice}
                return item
            } else if(item.salesTax){
                let taxedPrice = parseFloat(item.price +(Math.round(((item.price*10)/100)/0.05)*0.05)).toFixed(2)
                item = {...item, taxedPrice:taxedPrice}
                return item
            }else if(item.importTax){
                let taxedPrice = parseFloat(item.price +(Math.round(((item.price*5)/100)/0.05)*0.05)).toFixed(2)
                item = {...item, taxedPrice:taxedPrice}
                return item
            }else{
                item = {...item, taxedPrice:item.price}
                return item
            }
        })
      setNewItems(newItems)
    }

//rendering of the items list
    const renderItems = ()=>{

        return newItems.map((item)=> <Item key={item.id} item={item}/>)

    }



    return(
        <section className="receipt-container py-5 px-2">
            {renderItems()}
            <Total newItems ={newItems}/>

        </section>
    )
}

export default Receipt