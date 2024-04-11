import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'

const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ShopContext);
  return (
    <div className='productdisplay'>
      <div className="produxtdisplay-left">
        <div className="productdisplay-img-list">
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-img">
            <img className='productdisplay-main-img'src={product.image} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-star">
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_dull_icon} alt="" />
            <p>(100)</p>
        </div>
        <div className="productdisplay-right-prices">
            <div className="productdisplay-right-price-new">${product.new_price}</div>
            <div className="ProductDisplay-right-price-old">${product.old_price}</div>
        </div>
        <div className="productdisplay-right-description">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat, assumenda modi! Accusamus, autem quibusdam. Sapiente nobis quisquam, veniam, quas fuga modi vero tempora magnam id, amet dolorum ad autem officiis.
        </div>
        <div className="productdisplay-right-size">
            <h1>Select Size</h1>
            <div className="productdisplay-right-sizes">
                <div>S</div>
                <div>M</div >
                <div>L</div>
                <div>XL</div>
                <div>XXL</div>
            </div>
        </div>
        <button onClick={()=>{addToCart(product.id)}}>Add To Cart</button>
        <p className='produxtdisplay-right-category'><span>Category :</span> Women, T-shirt, Trop Top</p>
        <p className='produxtdisplay-right-category'><span>Tags :</span> Modern, Latest</p>
      </div>
    </div>
  )
}

export default ProductDisplay
