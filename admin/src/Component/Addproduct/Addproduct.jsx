import React, { useState } from 'react'
import './Addproduct.css'
import upload_area from '../../assets/upload_area.svg'

const Addproduct = () => {
  const [image,setImage] = useState(false);
  const [productDetails, setProductDetails] = useState({
    name:"", 
    image:"",
    category:"women",
    new_price:"",
    old_price:""
  })
  const changeHandler=(e)=>{
    setProductDetails({...productDetails,[e.target.name]:e.target.value})
  }
  const imgHandler = (e)=>{
    setImage(e.target.files[0]);
  }

  const Add_product = async ()=>{
    console.log(productDetails);
    let responseData;
    let product = productDetails;

    let formData = new FormData();
    formData.append('product',image);

    await fetch('http://localhost:4000/upload',{
      method:'POST',
      headers:{
        Accept:'application/json', 
      },
      body:formData,
    }).then((res)=>res.json()).then((data)=>{responseData=data})

    if(responseData.success){
      product.image = responseData.image_url;
      console.log(product);
      await fetch('http://localhost:4000/addproduct',{
        method:'POST',
        headers:{
          Accept:'application/json',
          'Content-Type':'application/json',
        },
        body:JSON.stringify(product),
      }).then((res)=>res.json()).then((data)=>{
        data.success?alert("product added"):alert("Failed")
      })
    }
  } 

  return (
    <div className='addproduct'>
        <div className="addproduct-itemfield">
            <p>product title</p>
            <input value={productDetails.name} onChange={changeHandler} type="text" name='name' placeholder='Type here' />
        </div>
        <div className="addproduct-price">
          <div className="addproduct-itemfield">
            <p>price</p>
            <input value={productDetails.old_price} onChange={changeHandler} type="text" name='old_price' placeholder='Type here'/>
          </div>
          <div className="addproduct-itemfield">
            <p>offer price</p>
            <input value={productDetails.new_price} onChange={changeHandler} type="text" name='new_price' placeholder='Type here'/>
          </div>
        </div>
        <div className='addproduct-itemfield'>
          <p>product category</p>
          <select value={productDetails.category} onChange={changeHandler} name="category" className='addproduct-selector'>
            <option value="women">women</option>
            <option value="men">men</option>
            <option value="kid">kid</option>
          </select>
        </div>
        <div className="addproduct-itemfield">
          <label htmlFor="file-input">
            <img src={image ? URL.createObjectURL(image):upload_area} className="addproduct-thumbnail-img" alt="" />
          </label>
          <input onChange={imgHandler} type="file" name='image' id='file-input' hidden/>
        </div>
          <button onClick={()=>{Add_product()}} className='addproduct-btn'>ADD</button>
    </div>
  )
}

export default Addproduct
