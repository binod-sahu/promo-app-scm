import React from "react";

const PromoItems = (props) => {
  const {itemName, price, promotion} = props.item;
  const {index} = props;
    return (
      <React.Fragment>
        <tr>
        <th scope="row">{index + 1}</th>
        <td>{itemName}</td>
        <td></td>
        <td>£{price}</td>
        <td></td>
        <td>£{promotion.discount}</td>
        <td></td>
        </tr>
      </React.Fragment>
    );
  }
  
  export default PromoItems;