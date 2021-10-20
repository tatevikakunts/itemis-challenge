import React from "react";

const Total = ({newItems})=>{

    const totalSales = ()=>{
        let sum = 0

        newItems.forEach(item=>

            sum += +item.taxedPrice)
        return sum
    }
    const totalTaxes = ()=>{
        let sum = 0
        let price = 0

        newItems.forEach(item=>
            sum += +item.taxedPrice
            )
        newItems.forEach(item=>
            price += +item.price
        )
        return parseFloat(sum - price).toFixed(2)
    }

    return(
        <div className="container d-flex flex-wrap justify-content-evenly">
            <div className="bg-primary bg-opacity-75 rounded-2 my-1 text-white px-3 py-3 fs-2">total: {totalSales()}  </div>
            <div className="bg-danger bg-opacity-75 rounded-2 my-1 text-white px-3 py-3 fs-2">total taxes: {totalTaxes()}  </div>
        </div>
    )
}

export default Total