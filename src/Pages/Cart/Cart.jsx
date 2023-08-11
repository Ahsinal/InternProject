import React from 'react'
import { useState } from 'react'
import './Cart.css'
import CustomButton from '../../Components/Buttons/CustomButton'
import BreadcrumbComponent from '../../Components/BreadcrumbComponent'
import { Link } from 'react-router-dom'
import Table from './Table/Table'
import { CarouselItem } from 'react-bootstrap'
const Cart = () => {
    //Breadcrumb path defining
    const paths=[
        {name:'Cart',link:'/cart'}
    ]
     // Initialize cart items and cart totals
     const [cartItems, setCartItems] = useState([]);
    const[cartTotal,setCartTotal]=useState(0);

    const updateCardTotals=()=>{
        const newTotal=cartItems.reduce((total,item)=>{
            return total + item.price * item.Quantity;
         },0);
        setCartTotal(newTotal);
    };
  return (
    <section className="cart__section">
        <BreadcrumbComponent paths={paths}/>

        <section className="table__data__section">
            <Table  cartItems={cartItems} updateCardTotals={updateCardTotals} />
            <div className="table__footer__buttons wishlist__button">
                <Link to='/'><button >Return To Shop</button></Link>
                <button >Update Cart</button>
            </div>
        </section>

        <section className="cart__footer">
            <div className="cart__footer_division coupon__section">
                <input type="text" />
                <CustomButton label="Apply Coupon"/>
            </div>


            <div className="cart__footer_division cart__totals">
                <strong>Cart Total</strong>
                <div className="cart__total__rows border__buttom">
                    <td>Subtotal</td>
                    <td>${cartTotal}</td>
                </div>
                <div className="cart__total__rows border__buttom">
                    <td>Shipping</td>
                    <td>Free</td>
                </div>
                <div className="cart__total__rows">
                    <td>Total</td>
                    <td>$</td>
                </div>

                <CustomButton label="Proceed to checkout" />
            </div>
        </section>
    </section>
  )
}

export default Cart