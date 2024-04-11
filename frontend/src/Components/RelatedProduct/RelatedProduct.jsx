import React, { useEffect, useState } from 'react'
import './RelatedProducts.css'
// import data_product from '../Assets/data'
import Item from '../Items/Item'


const RelatedProduct = () => {

    const [newCollection, setNewCollection] = useState([]);
  useEffect(()=>{
    fetch('http://localhost:4000/newcollection').then((res) => res.json()).then((data) => setNewCollection(data));
  },[])
  return (
    <div className='relatedproducts'>
        <h1>Related Products</h1>
        <hr />
        <div className="relatedproducts-item">
          {newCollection.map((item, i)=>{
            return <Item className="item" key ={i} id ={item.id} name={item.name} image={item.image} new_price = {item.new_price} old_price = {item.old_price} />
        })}
        </div>
              
    </div>
  )
}

export default RelatedProduct
