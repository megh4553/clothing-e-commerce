import React, { useContext,useState } from "react";
import "./CartItem.css";
import { ShopContext } from "../../Context/ShopContext.jsx";
import remove_icon from "../Assets/cart_cross_icon.png";
import StripeCheckout from "react-stripe-checkout"

const CartItem = () => {
  const {getTotalCartAmount,all_product,cartItems,removeFromCart} = useContext(ShopContext);

  const [product,setProduct] = useState({price : getTotalCartAmount()})
  
  const makePayment = token =>{
    const body = {
      token,
      product,
      getTotalCartAmount
    }
    const headers = {
      "Content-Type" : "application/json"
    }
    return fetch("http://localhost:4000/payment",{
      method:"POST",
      headers,
      body:JSON.stringify(body)
    }).then(response=>{
      console.log("RESPONSE ",response)
      const {status} = response;
      console.log("STATUS",status)
    })
    .catch(err =>console.log(err))
    
  }
  return (
    <div className="cartitems">
      <div className="cartitems-format-main">
        <p>Product</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e, i) => {
        if (cartItems[e.id] > 0) {
          return (
            <div key={i}>
              <div className="cartitems-format cartitems-format-main">
                <img src={e.image} alt="" className="cartitems-product-item" />
                <p>{e.name}</p>
                <p>₹{e.new_price}</p>
                <button className="cartitems-quantity">
                  {cartItems[e.id]}
                </button>
                <p>₹{e.new_price * cartItems[e.id]}</p>
                <img
                  className="cartitems-remove-icon"
                  src={remove_icon}
                  onClick={() => {
                    removeFromCart(e.id);
                  }}
                  alt=""
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Cart Total</h1>
          <div>
            <div className="cartitems-total-item">
              <p>SubTotal</p>
              <p>₹{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Shiping Fees</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <h3>Total</h3>
              <h3>₹{getTotalCartAmount()}</h3>
            </div>
          </div>
          <StripeCheckout stripeKey="pk_test_51OxBZmSFeumIZ8UQ6OSOC1OtXRWHUhHEYfOC7yC31e96OJU4mWVeXCnfyJBrd8kwqsDSiA5FeTzDYRhDJNiMUANH00QcsReIGC" token={makePayment} amount={product.price * 100} label={product.price}>
            <button className="submit-but" >Proceed To Checkout</button>
          </StripeCheckout>
        </div>
        <div className="cartitems-promocode">
          <p>If you have a promo code, Enter it Here</p>
          <div className="cartitems-promobox">
            <input type="text" placeholder="promo code" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;