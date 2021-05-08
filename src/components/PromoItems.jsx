import React from "react";

const PromoItems = (props) => {
  const {firstName, lastName, age} = props.item;
  const {index} = props;
    return (
      <React.Fragment>
        <tr>
        <th scope="row">{index + 1}</th>
        <td>{firstName}</td>
        <td>{lastName}</td>
        <td>{age}</td>
        </tr>
      </React.Fragment>
    );
  }
  
  export default PromoItems;