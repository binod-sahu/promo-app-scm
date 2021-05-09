import React from "react";

const PromoItems = (props) => {
  console.log(props)
  const { itemName, price, discount, total, count} = props.item;
  console.log(props.item.count, 'props')
  const {index, calculatePromo} = props;
    return (
      <React.Fragment>
        <tr>
        <th scope="row">{index + 1}</th>
        <td>{itemName}</td>
        <td className="d-flex">
        <div className="col-auto my-1 me-2">
          <button
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