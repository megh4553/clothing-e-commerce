import React, { useContext } from 'react'
import { useState } from 'react'
import './Navbar.css'
import  logo from '../Assets/logo.png'
import  cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
import Search from '../Search/Search'
// import SearchResultList from '../Search/SearchResultList'
const Navbar = () => {
  const [menu,setmenu] = useState("shop");
  const {getTotalCartItems} = useContext(ShopContext);
  // const[results,setResults] = useState([]);

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>SHOPPER</p>
      </div>
      <ul className='nav-menu'>
          <li onClick={() => {setmenu("shop")}}><Link style={{textDecoration : 'none', color : 'black'}} to='/'>Shop</Link> {menu === "shop" ? <hr /> : <></>}</li>
          <li onClick={() => {setmenu("men")}}><Link style={{textDecoration: 'none', color : 'black'}} to='/men'>Men</Link>{menu === "men"? <hr /> : <></>}</li>
          <li onClick={() => {setmenu("women")}}><Link style={{textDecoration: 'none', color : 'black'}} to='/women'>Women</Link> {menu === "women" ? <hr /> : <></>}</li>
          <li onClick={() => {setmenu("kids")}}><Link style={{textDecoration: 'none', color : 'black'}} to ='/kids'>Kids</Link> {menu === "kids" ? <hr /> : <></>}</li>
      </ul>
      <Search /> 
      <div className="nav-login-cart">
        {localStorage.getItem("auth-token")?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>LogOut</button>
        :<Link to='/login'><button>LogIn</button></Link>}
       
       <Link to='/cart'><img src={cart_icon} alt="" /></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>

    </div>
  )
}

export default Navbar
