import React from "react";

const PromoItems = (props) => {
  const { itemName, price, discount, total, count} = props.item;
  const {index, calculatePromo} = props;
    return (
      <React.Fragment>
        <tr>
        <th scope="row">{index + 1}</th>
        <td>{itemName}</td>
        <td className="d-flex">
        <div className="col-auto my-1 me-2">
          <button
            id="decrement"
            className="btn btn-primary"
            onClick={() =>
              calculatePromo(itemName, count - 1)
            }
          >
            -
          </button>
        </div>
        <input
          type="text"
          className="form-control select-width me-2"
          value={count}
          onChange={(e) => calculatePromo(itemName, e.target.value)}
        />
        <div className="my-1">
          <button
            id="increment"
            className="btn btn-primary"
            onClick={() => calculatePromo(itemName, count + 1)}
          >
            +
          </button>
        </div>
      </td>
        <td>£{price}</td>
        <td>£{total}</td>
        <td>£{discount}</td>
        <td>£{total - discount}</td>
        </tr>
      </React.Fragment>
    );
  }
  
  export default PromoItems;