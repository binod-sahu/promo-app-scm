import React from "react";
import PromoItems from './PromoItems'
import config from '../appConfig'

const PromoTable = () => {
    return (
      <div className="container">
        <table className="table caption-top">
            <caption className="text-center"><h1>Promo Table</h1></caption>
            <thead className="table-dark">
                <tr>
                <th scope="col">No.</th>
                <th scope="col">SKU ID</th>
                <th scope="col">Quantity</th>
                <th scope="col">Base Price</th>
                <th scope="col">Total Price</th>
                <th scope="col">Discount</th>
                <th scope="col">Payable Amount</th>
                </tr>
            </thead>
            <tbody>
              { config.map((item, index) =>
              <PromoItems 
                item= {item}
                index={index}
                key={index}
              />)
              }  
              
            </tbody>
            </table>  
      </div>
    );
  }
  
  export default PromoTable;