import React from "react";

const PromoItems = (props) => {
  const {itemName, price, promotion, count, discount, total} = props.item;
  const {index} = props;
    return (
      <React.Fragment>
        <tr>
        <th scope="row">{index + 1}</th>
        <td>{itemName}</td>
        <td>{count}</td>
        <td>£{price}</td>
        <td>£{total}</td>
        <td>£{promotion.discount}</td>
        <td>£{total - discount}</td>
        </tr>
      </React.Fragment>
    );
  }
  
  export default PromoItems;