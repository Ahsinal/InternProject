import React, { useState } from "react";
import "./Table.css";
const Table = ({cartItems, updateCardTotals}) => {
  const [cartTableData,setCartTableData]=useState(
    [
        {
          url: "https://img.freepik.com/premium-vector/tv-flat-screen-lcd-plasma-realistic-illustration-tv-mock-up_514344-58.jpg?size=626&ext=jpg",
          item: "LCD Monitor",
          price: "200",
          Quantity: "1"
        },
        {
            url: "https://img.freepik.com/free-photo/men-shirt-clothing_1203-8356.jpg?size=626&ext=jpg",
            item: "Shirt",
            price: "100",
            Quantity: "2"
          }
      ]
  );
  const handleQuantityChange=(index,newQuantity)=>{
    const updateCardTableData=[...cartTableData];
    updateCardTableData[index].Quantity=newQuantity;
    setCartTableData(updateCardTableData);
    updateCardTotals();
  };
  return (
    <div className="table__data">
      <div className="table__row">
        <tr className="table__td">
          <td>Product</td>
          <td>Price</td>
          <td>Quantity</td>
          <td>Subtotal</td>
        </tr>
      </div>
      {cartTableData.map((cardData, index) => (
        <div className="table__row" key={index}>
          <tr className="table__td">
            <td className="image__td">
              <div className="table__img">
                <img src={cardData.url} alt="" />
              </div>
              <span>{cardData.item}</span>
            </td>
            <td>{cardData.price}</td>
            <td>
              <input type="number" 
              defaultValue={cardData.Quantity} min='0'
              onChange={(e)=>handleQuantityChange(index,e.target.value)}/>
            </td>
            <td>
            {
              parseInt(cardData.price) * parseInt(cardData.Quantity)
            }
            </td>
          </tr>
        </div>
      ))}
    </div>
  );
};

export default Table;
