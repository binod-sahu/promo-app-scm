import React from "react";
import "../css/App.css";

const PromoItems = (props) => {
  const {itemName, price, promotion, count, discount, total, calculatePromo} = props.item;
  const {index} = props;
    return (
      <React.Fragment>
        <tr>
        <th scope="row">{index + 1}</th>
        <td>{itemName}</td>
        <td className="d-flex">
        <div className="col-auto my-1 me-2">
          <button
            className="btn btn-primary"
            onClick={() => calculatePromo()}
          >
            -
          </button>
        </div>
        <input
          type="text"
          className="form-control select-width me-2"
          value="3"
          onChange={(e) => calculatePromo()}
        />
        <div className="col-auto my-1">
          <button
            className="btn btn-primary"
            onClick={() => calculatePromo()}
          >
            +
          </button>
        </div>
       </td>
        <td>£{price}</td>
        <td>£{total}</td>
        <td>£{promotion.discount}</td>
        <td>£{total - discount}</td>
        </tr>
      </React.Fragment>
    );
  }
  
  export default PromoItems;