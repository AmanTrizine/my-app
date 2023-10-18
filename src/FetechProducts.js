import axios from "axios";
import React, { useEffect, useState } from "react";


const Products =()=>{
       const [prdts,setPrdts]=useState([])

     
    const fetchproducts= async ()=>{
        const result = await axios.get("https://dummyjson.com/products")
        setPrdts(result.data.products)
    }

     useEffect(()=>{
        fetchproducts()
     })

    return(
        <div>
         <table>
  <tr>
    <th>Products</th>
    <th>Price</th>
  </tr>
  {prdts.map((item)=>{
    return (<tr>
    <td>{item.title}</td>
    <td>{item.price}</td>
  </tr>)
  })}
</table>
        </div>
    )
}


export default Products